import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm'
import Results from '../../components/Results'
import Loader from '../../components/Loader'
import FlightDetails from '../../components/FlightDetails'
import { weekendParts, weekendDefault, fromDefault, fetchConfig, flightsPerPage } from '../../data';
import * as flightsApi from '../../helpers/flightsApi'
import * as stateHlp from '../../helpers/stateHlp'
import _ from 'lodash';

class Homepage extends Component {
  constructor(props) {
    super(props)

    this.handleShowDetails = this.handleShowDetails.bind(this)
    this.handleCloseDetails = this.handleCloseDetails.bind(this)
    this.handleMaxPriceChange = this.handleMaxPriceChange.bind(this)
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
    flight: null,
    hasOpenGroup: false,
    maxPrice: 100
  }

  handleShowDetails(e) {
    e.preventDefault(); // todo: rewrite to a setState method?
    let flightId = e.currentTarget.dataset.flight,
      groupId = parseInt(e.currentTarget.dataset.group),
      group, flight;
    if (
      (group = this.state.groups[groupId]) &&
      (flight = group.flights.find((el) => { 
        return el ? el.id == flightId : false;
      }))
    ) this.setState({  flight: flight });
  }

  handleCloseDetails() {
    this.setState({ flight: null });
  }

  handleMaxPriceChange(e) {
    this.setState({ maxPrice: e.target.value });
  }  

  fetchFlights = async (groupId, config)  => {
    let params = {
      week: this.state.weekend.value,
      dep: this.state.from.ports,
      text: this.state.from.value,
      key: this.state.from.name,
      max_price: this.state.maxPrice,
      part: groupId
    };

    let group = await flightsApi.getAll(params, config, flightsApi.handleFetchFlightsError, groupId);
    group.id = parseInt(group.id);  // todo: check all if needed, now it's json not text..
    group.size = group.flights.length;
    group.empty = !group.flights.length;
    group.activePage = 1;
    group.open = !this.state.hasOpenGroup;
    let fetchedGroup = [];
    fetchedGroup[group.id] = group;
    let newState = { 
      loadingFlights: false, 
      groups: Object.assign(this.state.groups, fetchedGroup)
    };
    if (!this.state.hasOpenGroup && !group.error) {
      newState.hasOpenGroup = true;
    }
    this.setState(newState);
  }

  handleSearchFlights = (e) => {
    e.preventDefault();
    if (this.abortController) {
      this.abortController.abort(); // when clicked on search again, previous query will be aborted
    }
    this.setState({ loadingFlights: true, groups: [], hasOpenGroup: false });
    this.abortController = new window.AbortController();
    let config = Object.assign({}, { signal: this.abortController.signal }, fetchConfig);
    for (var i=0; i < weekendParts; i++) {
        this.fetchFlights(i, config);
    }
  }

  handleFromChange = (selectedOption) => {
    this.setState({ from: selectedOption });
  }

  handleWeekendChange = (selectedOption) => {
    this.setState({ weekend: selectedOption, flight: null });
  }

  handleFlightUpdateError = (err, config, params) => {
    if (err.name === 'AbortError') { // after this.stopFetch()
      console.log('FetchFlightUpdate aborted', params.groupId, params.flight);
      this.setState((state) => stateHlp.setStateUpdatingAborted(state, params.flight.id, params.groupId));
    } else {
      console.info('Fetch price reloaded', err, params.groupId, params.flight);
      this.fetchFlightUpdate(params.flight, params.groupId, config);
    }
  }

  fetchFlightUpdate = async (flight, groupId, config) => {
    let remove = false;
    this.setState((state) => stateHlp.setStatePriceUpdating(state, flight.id, groupId)); 

    let params = {
      id: flight.from.id + ',' + flight.to.id,
      flight_number_from: flight.from.flight_number,
      day_out_from: flight.from.date_full,
      dest_from: flight.from.airport.substr(-3),
      origin_from: flight.from.airport.substr(0, 3), 
      price_from: flight.from.price,
      priceCurency_from: flight.from.price_curr_code,
      flight_number_to: flight.to.flight_number,
      day_out_to: flight.to.date_full,
      dest_to: flight.to.airport.substr(-3),
      origin_to: flight.to.airport.substr(0, 3), 
      price_to: flight.to.price,
      priceCurency_to: flight.to.price_curr_code
    };
    let price = await flightsApi.get(params, config, this.handleFlightUpdateError, groupId, flight);

    if (remove = price.error) {
      this.setState((state) => stateHlp.setStatePriceError(state, flight.id, groupId, remove, price.flight_id));
    } else if (remove = ((price[0].priceLocal + price[1].priceLocal) > this.state.maxPrice)) {
      this.setState((state) => stateHlp.setStatePriceLimitError(state, flight.id, groupId, price[0].priceLocal, price[1].priceLocal));
    } else {
        this.setState((state) => stateHlp.setStatePriceUpdated(state, flight.id, groupId, price[0].priceLocal, price[1].priceLocal));
    }

    if (remove) {
      setTimeout( () => { // animation of hiding, 1 sec later real remove
        this.setState((state) => stateHlp.setStateFlightRemove(state, flight.id, groupId)); 
      }, 1000);
    }
  }

  handleGroupToggle = (e) => {
    let groupId = parseInt(e.currentTarget.dataset.group);
    this.setState((state) => stateHlp.setStateGroupOpen(state, groupId));
  }

  handlePageChange = (pageNumber, groupId) => {
    this.setState((state) => stateHlp.setStateGroupPageChange(state, pageNumber, groupId));
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
  