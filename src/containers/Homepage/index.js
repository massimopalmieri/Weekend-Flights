import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm'
import Results from '../../components/Results'
import Loader from '../../components/Loader'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FlightDetails from '../../components/FlightDetails'
import { weekendParts, weekendDefault, fromDefault} from '../../data';
import * as flightsApi from '../../helpers/flightsApi'
import * as common from '../../helpers/common'
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

    this.abortController = new window.AbortController();
  }

  static defaultProps = {
    title: 'Weekend Flights'
  }

  state = {
    groups: [],
    from: fromDefault,
    weekend: weekendDefault,
    flight: null,
    hasOpenGroup: false,
    loadingFlights: false,
    maxPrice: 100
  }

  handleShowDetails(e) {
    e.preventDefault();
    let flightId = e.currentTarget.dataset.flight,
      groupId = parseInt(e.currentTarget.dataset.group);
    this.setState((state) => stateHlp.flightSet(state, flightId, groupId));
  }

  handleCloseDetails() {
    this.setState({ flight: null });
  }

  handleMaxPriceChange(e) {
    this.setState({ maxPrice: e.target.value });
  }  

  fetchFlights = async (params, groupId, config)  => {
    let group = await flightsApi.getGroup(params, config, flightsApi.handleFetchFlightsError, groupId);
    this.setState((state) => stateHlp.groupFetched(state, group));
  }

  handleSearchFlights = (e) => {
    e.preventDefault();
    this.setState({ loadingFlights: true, groups: [], hasOpenGroup: false });
    this.abortController = common.resetAbortController(this.abortController);
    let config = common.getAbortControllerConfig(this.abortController),
      params = {
      week: this.state.weekend.value,
      dep: this.state.from.ports,
      text: this.state.from.value,
      key: this.state.from.name,
      max_price: this.state.maxPrice
    };
    for (var i=0; i < weekendParts; i++) {
        this.fetchFlights(params, i, config);
    }
  }

  handleFromChange = (selectedOption) => {
    this.setState({ from: selectedOption });
  }

  handleWeekendChange = (selectedOption) => {
    this.setState({ weekend: selectedOption, flight: null });
  }

  handleFlightUpdateError = (err, config, params) => {
    if (err.name === 'AbortError') {
      this.setState((state) => stateHlp.updatingAborted(state, params.flight.id, params.groupId));
    } else {
      console.log('Fetch price reloaded', err, params.groupId, params.flight);
      this.fetchFlightUpdate(params.flight, params.groupId, config);
    }
  }

  fetchFlightUpdate = async (flight, groupId, config) => {
    this.setState((state) => stateHlp.priceUpdating(state, flight.id, groupId)); 
    let price = await flightsApi.get(flight, groupId, config, this.handleFlightUpdateError);
    this.setState((state) => stateHlp.flightUpdated(state, price, flight, groupId));
    if (!common.isPriceValid(price, this.state.maxPrice)) {
      setTimeout(() => { // animation of hiding, 1 sec later real remove
        this.setState((state) => stateHlp.flightRemove(state, flight.id, groupId)); 
      }, 1000);
    }
  }

  handleGroupToggle = (e) => {
    let groupId = parseInt(e.currentTarget.dataset.group);
    this.setState((state) => stateHlp.groupOpen(state, groupId));
  }

  handlePageChange = (pageNumber, groupId) => {
    this.setState((state) => stateHlp.groupPageChange(state, pageNumber, groupId));
  }

  render() {
    const { loadingFlights, groups, flight, maxPrice } = this.state;

    return (  
      <div className="container-main">        
        <Header />
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
        <Footer />
      </div>
      );
    }
  }
  
  export default Homepage;
  