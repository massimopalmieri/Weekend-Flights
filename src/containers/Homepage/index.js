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
    this.handleResultVisible = this.handleResultVisible.bind(this)
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
      groupId = parseInt(e.currentTarget.dataset.group) ;

    if (this.state.groups[groupId]) {
      let flight = this.state.groups[groupId].flights.find((el) => { 
        return el ? el.id == flightId : false;
      });

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
    if (state.groups[groupId]) {
      let flightGroup = state.groups[groupId].flights[flightId];
      if (flightGroup) {
        flightGroup.updating = true;
      }
    }
    return state;
  }

  setStatePriceError(state, flightId, groupId, error_message, flight_id) {
    if (state.groups[groupId]) {
      let flightGroup = state.groups[groupId].flights[flightId];
      if (flightGroup) {
        Object.assign(flightGroup, { updating: false });
        let flight = (flightGroup.from.id == flight_id) ? flightGroup.from : flightGroup.to;
        if (flight) {
          Object.assign(flight, {
            error: true,
            error_message: error_message
          });
        }
      }
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
          delete state.groups[groupId];
          if (this.isEmptyArray(state.groups)) {
            state.groups = [];
            state.noResults = true;
          }
      }
    }
    return state;
  }

  setStatePriceUpdated(state, flightId, groupId, priceFrom, priceTo) {
    if (state.groups[groupId]) {
      let flightGroup = state.groups[groupId].flights[flightId],
        changed = false;
      if (flightGroup) {
        Object.assign(flightGroup, {
          updating: false,
          updated: true
        });

        if (priceFrom != parseFloat(flightGroup.from.price)) {
          flightGroup.from.price = priceFrom.toFixed(2);
          changed = true;
        }
        if (priceTo != parseFloat(flightGroup.to.price)) {
          flightGroup.to.price = priceTo.toFixed(2);
          changed = true;
        }

        if (changed) {
          flightGroup.price = (parseFloat(priceFrom) + parseFloat(priceTo)).toFixed(0);    
        }
      }
    }
    return state;
  }

  setStateGroupToggle(state, groupId) {
    state.groups[groupId].open = !state.groups[groupId].open;
    return state;
  }

  handleResultVisible( flightId, groupId, flightFromId, flightToId ) {
    this.setState((state, props) => this.setStatePriceUpdating(state, flightId, groupId));
    let self = this;

    fetch( apiLocation + '?action=refresh&id=' + flightFromId + ',' + flightToId, this.fetchConfig).then(response => response.text()) 
    .then(text => {
      if (text == '') {
        console.info('Fetch price reloaded: '.flightFromId);
        self.handleResultVisible( flightId, groupId, flightFromId, flightToId );  
      } else {
        let json = JSON.parse(text);
        if (json.error) {
          this.setState((state, props) => this.setStatePriceError(state, flightId, groupId, json.error, json.flight_id));
          setTimeout( () => { // animation of hiding, 1 sec later real remove
            this.setState((state, props) => this.setStateFlightRemove(state, flightId, groupId));
          }, 1000);
        } else {
            this.setState((state, props) => this.setStatePriceUpdated(state, flightId, groupId, json[0].priceLocal, json[1].priceLocal));
        }
      }
    });
  }

  handleSearchFlights = (e) => {
    e.preventDefault();
    
    this.setState({ fetchInProgress: true });
    let groups = [], 
      c = 0;    
    for (var i=0; i<weekendParts; i++) {
        fetch( apiLocation + '?action=flights&week=' + this.state.weekend.value + '&dep=' + this.state.from.ports + 
            '&text=' + this.state.from.value + '&key=' + this.state.from.name + '&max_price=100&page=0&part=' + i, this.fetchConfig)
        .then(response => response.json())
        .then(json => {
          c++;
          if (json.flights.length) {
            json.id = parseInt(json.id);
            json.open = true;
            groups[json.id] = json;
            this.setState({ fetchInProgress: false, groups: groups, noResults: false});
          } else if (c == weekendParts) { // all parts empty
            this.setState({ fetchInProgress: false, groups: [], noResults: true});
          }
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

  handleGroupToggle = (e) => {
    let groupId = parseInt(e.currentTarget.dataset.group);
    this.setState((state, props) => this.setStateGroupToggle(state, groupId));
  }

  render() {
    const { fetchInProgress, groups, flight, noResults } = this.state;

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
            : noResults ? 
            <div className="no-results">No Flights available for current search critieria :/</div>
            : 
            <Results groups={groups} handleShowDetails={this.handleShowDetails} handleResultVisible={this.handleResultVisible} handleGroupToggle={this.handleGroupToggle} />
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
  