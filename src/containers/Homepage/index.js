import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm'
import Results from '../../components/Results'
import Loader from '../../components/Loader'
import FlightDetails from '../../components/FlightDetails'
import { weekendParts, weekendDefault, fromDefault, apiLocation, fetchConfig, flightsPerPage } from '../../data';
import _ from 'lodash';

class Homepage extends Component {
  constructor(props) {
    super(props)

    this.handleShowDetails = this.handleShowDetails.bind(this)
    this.handleCloseDetails = this.handleCloseDetails.bind(this)
    this.handleSearchFlights = this.handleSearchFlights.bind(this)
    this.handleFromChange = this.handleFromChange.bind(this)
    this.handleWeekendChange = this.handleWeekendChange.bind(this)
    this.handleMaxPriceChange = this.handleMaxPriceChange.bind(this)
  }

  static defaultProps = {
    title: 'Weekend Flights',
    groups: []
  }

  state = {
    groups: this.props.groups,
    from: fromDefault,
    weekend: weekendDefault,
    flight: null,
    maxPrice: 100
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

  handleMaxPriceChange(e) {
    this.setState({
      maxPrice: e.target.value
    });
  }

  findFlightById(flights, flightId) {
    return _.find(flights, (el) => el && (el.id == flightId));
  }

  setStatePriceUpdating(state, flightId, groupId) {
    let group, flights;
    if (
      (group = state.groups[groupId]) && 
      (flights = this.findFlightById(group.flights, flightId))
    ) {
      flights.updating = true;
    }
    return state;
  }

  setStatePriceError(state, flightId, groupId, error_message, flight_id) {
    let group, flights, flight;
    if (
      (group = state.groups[groupId]) && 
      (flights = this.findFlightById(group.flights, flightId)) &&
      (flight = (flights.from.id == flight_id) ? flights.from : flights.to)
    ) {
      flights.updating = false; 
      Object.assign(flight, {
        error: true,
        error_message: 'Ticket not available'
      });
    }
    return state;
  }

  setStatePriceLimitError(state, flightId, groupId, priceFrom, priceTo) {
    let group, flights, 
      changedFrom = false, 
      changedTo = false,
      errorProps = {
        error: true,
        error_message: 'Ticket too expensive'
      };
    if (
      (group = state.groups[groupId]) && 
      (flights = this.findFlightById(group.flights, flightId))
    ) {
      Object.assign(flights, {
        updating: false,
      });
      if (changedFrom = (priceFrom != parseFloat(flights.from.price))) {
        Object.assign(flights.from, errorProps, {
          price: priceFrom.toFixed(2),
        });
      }
      if (changedTo = (priceTo != parseFloat(flights.to.price))) {
        Object.assign(flights.to, errorProps, {
          price: priceTo.toFixed(2),
        });
      }
      if (changedFrom || changedTo) {
        flights.price = (parseFloat(priceFrom) + parseFloat(priceTo)).toFixed(0);    
      }
    }
    return state;
  }

  setVisibleGroupPage(group, page) {
    group.activePage = page;3
    let c = 0;
    _.each(group.flights, (el) => {
      el.visible = ( 
        (c >= (flightsPerPage * (page - 1))) &&
        (c < (flightsPerPage * page))
      );
      c++;
    });
    return group;
  }

  setStateFlightRemove(state, flightId, groupId) { 
    let group, flights, lastPage;
    if (
      (group = state.groups[groupId]) && 
      (flights = this.findFlightById(group.flights, flightId))
    ) {
      if (flights.visible) {
        group.flights.every((flight) => { // returns first next flight that wasn't visible
          if (flight && flight.id > flightId && !flight.visible) {
            flight.visible = true;
            return false;
          }
          return true;
        });
      }

      group.flights = group.flights.filter((el) => {
        return (el && (el.id !== flightId));
      }); // remove flight - returns group without current flight

      state.groups[groupId].size -= 1;
      lastPage = Math.ceil(group.size / flightsPerPage);
      if (group.activePage > lastPage) {
        group = this.setVisibleGroupPage(group, lastPage);
      }
      if (!state.groups[groupId].size) {
        state.groups[groupId].empty = true;
      }
    }
    return state;
  }

  setStatePriceUpdated(state, flightId, groupId, priceFrom, priceTo) {
    let group, flights, 
      changedFrom = false, 
      changedTo = false;
    if (
      (group = state.groups[groupId]) && 
      (flights = this.findFlightById(group.flights, flightId))
    ) {
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
      if (changedFrom || changedTo) { // if any price changed
        flights.price = (parseFloat(priceFrom) + parseFloat(priceTo)).toFixed(0);    
        group.flights = _.sortBy(group.flights, (el) => { // sorting flights by price
          return parseInt(el.price);
        });
        group = this.setVisibleGroupPage(group, group.activePage); // makes sure that sorted flights are visible
      }
    }
    return state;
  }

  setStateGroupOpen(state, groupId) {
    state.groups[groupId].open = !state.groups[groupId].open;
    return state;
  }

  setStateGroupPageChange(state, page, groupId) {
    let group;
    if (
      (group = this.state.groups[groupId]) && 
      (page <= Math.ceil(group.size / flightsPerPage))
    ) {
      group = this.setVisibleGroupPage(group, page);
    }
    return state;
  }

  setStateUpdatingAborted(state, flightId, groupId) {
    let group, flights;
    if (
      (group = this.state.groups[groupId]) && 
      (flights = this.findFlightById(group.flights, flightId))
    ) {
      flights.updating = false;
    }
    return state;  
  }

  handleSearchFlights = (e) => {
    e.preventDefault();
    
    if (this.abortController) {
      this.abortController.abort(); // when clicked on search again, previous query will be aborted
    }
    this.setState({ loadingFlights: true });
    this.abortController = new window.AbortController();
    let groups = [], 
      open = true,
      config = Object.assign({}, { signal: this.abortController.signal }, fetchConfig);

    for (var i=0; i < weekendParts; i++) {
        fetch( apiLocation + '?action=flights&week=' + this.state.weekend.value + '&dep=' + this.state.from.ports + 
            '&text=' + this.state.from.value + '&key=' + this.state.from.name + '&max_price=' + this.state.maxPrice + 
            '&part=' + i, config)
        .then(response => response.json())
        .then(json => {
          json.id = parseInt(json.id);  
          json.size = json.flights.length;
          json.empty = !json.flights.length;
          json.activePage = 1;
          json.open = open;
          if (!json.error) {
            open = false; // only first loaded group is open  
          }
          groups[json.id] = json;
          this.setState({ loadingFlights: false, groups: groups});
        }).catch(err => {
          if (err.name === 'AbortError') { // after this.stopFetch()
            console.log('HandleSearchFlights aborted', this.state.weekend.value, this.state.from.ports, this.state.from.value, this.state.from.name, i);
          } else {
            console.error('HandleSearchFlights error', err);
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

  fetchFlightUpdate = (flight, groupId, config) => {
    let json,
      remove = false;
    this.setState((state) => this.setStatePriceUpdating(state, flight.id, groupId)); 

    fetch( apiLocation + '?action=refresh&id=' + flight.from.id + ',' + flight.to.id, config)
    .then(response => response.text()).then(text => {
      if (text == '') { // if empty response - fetch again
        console.info('Fetch price reloaded', groupId, flight);
        this.fetchFlightUpdate(flight, groupId, config);
      } else if (remove = ((json = JSON.parse(text)) && json.error)) {
        this.setState((state) => this.setStatePriceError(state, flight.id, groupId, json.error, json.flight_id));
      } else if (remove = ((json[0].priceLocal + json[1].priceLocal) > this.state.maxPrice)) {
        this.setState((state) => this.setStatePriceLimitError(state, flight.id, groupId, json[0].priceLocal, json[1].priceLocal));
      } else {
          this.setState((state) => this.setStatePriceUpdated(state, flight.id, groupId, json[0].priceLocal, json[1].priceLocal));
      }

      if (remove) {
        setTimeout( () => { // animation of hiding, 1 sec later real remove
          this.setState((state) => this.setStateFlightRemove(state, flight.id, groupId)); 
        }, 1000);
      }
    }).catch(err => {
      if (err.name === 'AbortError') { // after this.stopFetch()
        console.log('FetchFlightUpdate aborted', groupId, flight);
        this.setState((state) => this.setStateUpdatingAborted(state, flight.id, groupId));
      } else {
        console.info('FetchFlightUpdate error, price reloader', err, groupId, flight);
        this.fetchFlightUpdate(flight, groupId, config);
      }
    });  
  }

  handleGroupToggle = (e) => {
    let groupId = parseInt(e.currentTarget.dataset.group);
    this.setState((state) => this.setStateGroupOpen(state, groupId));
  }

  handlePageChange = (pageNumber, groupId) => {
    this.setState((state) => this.setStateGroupPageChange(state, pageNumber, groupId));
  }

  render() {
    const { loadingFlights, groups, flight, maxPrice } = this.state;

    return (  
      <div className="container-main">
        <div className="container-fluid">
          <header className="header">
            <h1>Weekend Flights</h1>
            <h2>Find the best flights for your city break!</h2>
          </header>
        </div>

        <div className="container">
          <SearchForm 
            maxPrice={maxPrice}
            handleSearchFlights={this.handleSearchFlights} 
            handleFromChange={this.handleFromChange} 
            handleWeekendChange={this.handleWeekendChange} 
            handleMaxPriceChange={this.handleMaxPriceChange}  
          />
          { 
            loadingFlights ? 
              <Loader /> 
            : 
              <Results 
                groups={groups} 
                handleShowDetails={this.handleShowDetails} 
                handleGroupToggle={this.handleGroupToggle} 
                fetchFlightUpdate={this.fetchFlightUpdate}
                handlePageChange={this.handlePageChange}
              />
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
  