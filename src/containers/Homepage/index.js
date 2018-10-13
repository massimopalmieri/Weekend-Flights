import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm'
import Results from '../../components/Results'
import FlightDetails from '../../components/FlightDetails'
import { weekendParts, weekendDefault, fromDefault, apiLocation, fetchConfig } from '../../data';
import _ from 'lodash';

class Homepage extends Component {
  constructor(props) {
    super(props)

    this.handleShowDetails = this.handleShowDetails.bind(this)
    this.handleCloseDetails = this.handleCloseDetails.bind(this)
    this.handleSearchFlights = this.handleSearchFlights.bind(this)
    this.handleFromChange = this.handleFromChange.bind(this)
    this.handleWeekendChange = this.handleWeekendChange.bind(this)
  }

  static defaultProps = {
    title: 'Weekend Flights',
    groups: []
  }

  state = {
    groups: this.props.groups,
    from: fromDefault,
    weekend: weekendDefault,
    flight: null
  }

  handleShowDetails(e) {
    e.preventDefault();
    let flightId = e.currentTarget.dataset.flight,
      groupId = parseInt(e.currentTarget.dataset.group),
      group, flight;
    if (
      (group = this.state.groups[groupId]) &&
      (flight = group.flights.find((el) => { 
        return el ? el.id == flightId : false;
      }))
    ) {
      this.setState({
        flight: flight
      });
    }
  }

  handleCloseDetails() {
    this.setState({
      flight: null
    });
  }

  setStatePriceUpdating(state, flightId, groupId) {
    let group, flights;
    if ((group = state.groups[groupId]) && (flights = group.flights[flightId])) {
      flights.updating = true;
    }
    return state;
  }

  setStatePriceError(state, flightId, groupId, error_message, flight_id) {
    let group, flights, flight;
    if (
      (group = state.groups[groupId]) && 
      (flights = state.groups[groupId].flights[flightId]) &&
      (flight = (flights.from.id == flight_id) ? flights.from : flights.to)
    ) {
      flights.updating = false; 
      Object.assign(flight, {
        error: true,
        error_message: error_message
      });
    }
    return state;
  }

  isEmptyArray(array) {
    var reduce = _(array).reduce((a,v,k) => { 
      if(v){ a[k]=v; } 
      return a; 
    },{});
    return _.isEmpty(reduce);
  }

  setStateFlightRemove(state, flightId, groupId) {
    if (state.groups[groupId] && state.groups[groupId].flights[flightId]) {
      delete state.groups[groupId].flights[flightId];
      if (this.isEmptyArray(state.groups[groupId].flights)) {
        state.groups[groupId].empty = true;
      }
    }
    return state;
  }

  setStatePriceUpdated(state, flightId, groupId, priceFrom, priceTo) {
    let group, flights, 
      changedFrom = false, 
      changedTo = false;
    if ((group = state.groups[groupId]) && (flights = state.groups[groupId].flights[flightId])) {
      Object.assign(flights, {
        updating: false,
        updated: true
      });
      if (changedFrom = (priceFrom != parseFloat(flights.from.price))) {
        flights.from.price = priceFrom.toFixed(2);
      }
      if (changedTo = (priceTo != parseFloat(flights.to.price))) {
        flights.to.price = priceTo.toFixed(2);
      }
      if (changedFrom || changedTo) {
        flights.price = (parseFloat(priceFrom) + parseFloat(priceTo)).toFixed(0);    
      }
    }
    return state;
  }

  setStateGroupToggle(state, groupId) {
    state.groups[groupId].open = !state.groups[groupId].open;    
    return state;
  }

  setStateUpdatingAborted(state, flightId, groupId) {
    let group, flights;
    if ((group = this.state.groups[groupId]) && (flights = group.flights[flightId])) {
      flights.updating = false;
    }
    return state;
  }

  handleSearchFlights = (e) => {
    e.preventDefault();
    
    this.setState({ fetchInProgress: true });
    let groups = [], 
      open = true;
    for (var i=0; i < weekendParts; i++) {
        fetch( apiLocation + '?action=flights&week=' + this.state.weekend.value + '&dep=' + this.state.from.ports + 
            '&text=' + this.state.from.value + '&key=' + this.state.from.name + '&max_price=100&page=0&part=' + i, fetchConfig)
        .then(response => response.json())
        .then(json => {
          json.id = parseInt(json.id);
          json.open = open;
          open = false; // only first loaded group is open
          json.empty = !json.flights.length;
          groups[json.id] = json;
          this.setState({ fetchInProgress: false, groups: groups}, () => {
            if (json.open) {
              this.fetchGroupFlights(json.id);
            }
          });
        });
    }
  }

  handleFromChange = (selectedOption) => {
    this.setState({
      from: selectedOption 
    });
  }

  handleWeekendChange = (selectedOption) => {
    this.setState({
      weekend: selectedOption,
      flight: null
    });
  }

  fetchFlightUpdate = (flight, groupId, config) => {
    let json;
    this.setState((state, props) => this.setStatePriceUpdating(state, flight.id, groupId)); 

    fetch( apiLocation + '?action=refresh&id=' + flight.from.id + ',' + flight.to.id, config)
    .then(response => response.text()).then(text => {
      if (text == '') { // if empty response - fetch again
        console.info('Fetch price reloaded', groupId, flight);
        this.fetchFlightUpdate(flight, groupId, config);
      } else if ((json = JSON.parse(text)) && json.error) {
        this.setState((state, props) => this.setStatePriceError(state, flight.id, groupId, json.error, json.flight_id));
        setTimeout( () => { // animation of hiding, 1 sec later real remove
          this.setState((state, props) => this.setStateFlightRemove(state, flight.id, groupId)); 
        }, 1000);
      } else {
          this.setState((state, props) => this.setStatePriceUpdated(state, flight.id, groupId, json[0].priceLocal, json[1].priceLocal));
      }
    }).catch(err => {
      if (err.name === 'AbortError') { // after this.stopFetch()
        console.log('Fetch aborted', groupId, flight);
        this.setState((state, props) => this.setStateUpdatingAborted(state, flight.id, groupId));
      } else {
        console.error('Uh oh, an error!', err);
      }
    });  
  }

  fetchGroupFlights = (groupId) => {
    this.abortControllers[groupId] = new window.AbortController();
    let config = Object.assign({}, { signal: this.abortControllers[groupId].signal }, fetchConfig);

    _.each(this.state.groups[groupId].flights, (flight) => {
      if (flight && !flight.updated) {
        this.fetchFlightUpdate(flight, groupId, config);
      }
    })    
  }

  abortControllers = []

  stopFetch = (groupId) => {
    this.abortControllers[groupId].abort();
  }

  handleGroupToggle = (e) => {
    let groupId = parseInt(e.currentTarget.dataset.group);
    if (e.currentTarget.parentElement.classList.contains('closed')) {
      setTimeout( () => { // triggers fetch group after toggle animation finish
        this.fetchGroupFlights(groupId);
      }, 500);
    } else {
      this.stopFetch(groupId);
    }

    this.setState((state, props) => this.setStateGroupToggle(state, groupId));
  }

  render() {
    const { fetchInProgress, groups, flight } = this.state;

    return (  
      <div className="container-main">
        <div className="container-fluid">
          <header className="header">
            <h1>Weekend Flights</h1>
            <h2>Find the best flights for your city break!</h2>
          </header>
        </div>

        <div className="container">
          <SearchForm handleSearchFlights={this.handleSearchFlights} handleFromChange={this.handleFromChange} handleWeekendChange={this.handleWeekendChange}  />
          { 
            fetchInProgress ? 
            <div className="loader"></div>
            : 
            <Results groups={groups} handleShowDetails={this.handleShowDetails} handleGroupToggle={this.handleGroupToggle} />
          } {
            flight &&
            <FlightDetails flight={flight} handleCloseDetails={this.handleCloseDetails} />
          }
        </div>

        <div className="container-fluid">
          <div className="footer">  
            &copy; 2018 Copyright  <a href="http://frontend.london" target="_blank" rel="noopener noreferrer">Piotr Kołodziejczyk</a>
          </div>        
        </div>        
      </div>
      );
    }
  }
  
  export default Homepage;
  