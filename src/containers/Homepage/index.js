import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm'
import Results from '../../components/Results'
import FlightDetails from '../../components/FlightDetails'
import { weekendParts, weekendDefault, fromDefault } from '../../data';


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
      group = e.currentTarget.dataset.group,
      flight = this.state.groups[parseInt(group)-1].flights.find(function(el) { return el.id == flightId });

    this.setState({
      flight: flight
    });
  }

  handleCloseDetails() {
    this.setState({
      flight: null
    });
  }

  setStatePriceUpdating(state, isFrom, groupId, flightId) {
    let flightGroup = state.groups[groupId - 1].flights[flightId];
    let flight = isFrom ? flightGroup.from : flightGroup.to;
    Object.assign(flight, {
      updating: true
    });
    return state;
  }

  setStatePriceError(state, isFrom, groupId, flightId, error_message) {
    let flightGroup = state.groups[groupId - 1].flights[flightId];
    let flight = isFrom ? flightGroup.from : flightGroup.to;
    Object.assign(flight, {
      updating: false,
      error: true,
      error_message: error_message
    });
    return state;
  }

  setStatePriceHide(state, isFrom, groupId, flightId, error_message) {
    let flightGroup = state.groups[groupId - 1].flights[flightId];
    let flight = isFrom ? flightGroup.from : flightGroup.to;
    Object.assign(flight, {
      hidden: true
    });
    return state;
  }

  setStatePriceUpdated(state, isFrom, groupId, flightId, price) {
    let flightGroup = state.groups[groupId - 1].flights[flightId];
    let flight = isFrom ? flightGroup.from : flightGroup.to;
    Object.assign(flight, {
      updating: false,
      updated: true
    });

    if (price != parseFloat(flight.price)) {
      flight.price = price; // todo: add condition on max price to hide if higher
      flightGroup.price = (parseFloat(flightGroup.from.price) + parseFloat(flightGroup.to.price)).toFixed(0);
    }    
    return state;
  }

  handleResultVisible(flightId, isFrom, groupId, flightKey) {
    this.setState((state, props) => this.setStatePriceUpdating(state, isFrom, groupId, flightId));

    fetch('http://localhost/www/flights/api.php?'+ // fetch('http://weekendflights.eu/api/api.php?'+ 
      'action=refresh&id=' + flightKey)
    .then(response => response.json())
    .then(json => {    
        if (json.error) {
            this.setState((state, props) => this.setStatePriceError(state, isFrom, groupId, flightId, json.error));
            setTimeout( () => { 
              this.setState((state, props) => this.setStatePriceHide(state, isFrom, groupId, flightId, json.error));
            }, 1000);
        } else {
            this.setState((state, props) => this.setStatePriceUpdated(state, isFrom, groupId, flightId, json.fly.priceLocal));
        }
    });
  }

  handleSearchFlights = (e) => {
    e.preventDefault();
    
    this.setState({ fetchInProgress: true });
    let groups = [];

    for (var i=1; i<=weekendParts; i++) {
        fetch('http://localhost/www/flights/api.php?'+ // fetch('http://weekendflights.eu/api/api.php?'+
            'action=flights&week=' + this.state.weekend.value + '&dep=' + this.state.from.ports + 
            '&text=' + this.state.from.value + '&key=' + this.state.from.name + '&max_price=100&part=' + i)
            .then(response => response.json())
            .then(json => {
                json.id = parseInt(json.id);
                groups[json.id - 1] = json;
                this.setState({ fetchInProgress: false, groups: groups});
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
            fetchInProgress
              ? <div className="loader"></div>
              : <Results groups={groups} handleShowDetails={this.handleShowDetails} handleResultVisible={this.handleResultVisible} />
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
  