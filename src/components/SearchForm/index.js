import React, { Component } from 'react';
import _ from 'lodash'
import Select from 'react-select'
import ResultsFlight from '../../components/ResultsFlight'
import { airports, weekends, weekendsDefault } from '../../data';

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

const defaultFrom = {
    "value": "London",
    "label": "London (all airports)"
};

const SelectAirports = () => (
    <Select
        className="my-select my-1 mr-sm-2" 
        // defaultInputValue="London"
        defaultValue={defaultFrom}
        options={airports}
        formatGroupLabel={formatGroupLabel}
        // isMulti="true" - @todo in future
        defaultOptions="false"
        placeholder= "From"
        allowClear="true"

    />
)

const SelectWeekends = () => (
    <Select
        className="my-select my-1 mr-sm-2" 
        defaultValue={weekendsDefault}
        options={weekends}
        formatGroupLabel={formatGroupLabel}
        placeholder= "When"
    />
)

class SearchForm extends Component {
    static defaultProps = {
        flights: [],
        title: 'Weekend Flights'
    }

    state = {
        flights: this.props.flights
        // ,
        // draft: ''
    }

    searchFlights = (e) => {
        e.preventDefault();

        // this.setState({ action: 'loading' });
        this.setState({ action: 'ready' });

        // setTimeout(() => { 
        //     this.setState({ action: 'ready' });
        // }, 3000);


        // fetch('http://localhost:3000/results/week-40_London_06.10-08.10.json')
        fetch('http://localhost:3000/flights.json')
            .then(response => response.json())
            .then(json => this.setState({flights: json.flights}))
            // .then(json => { 
        //         this.setState({ loading: false });
        //         var maxAllowedPrice = 100;
        //         var flights = _.filter(json, (flight) => {  // todo: move to backend
        //             return flight.total_price < maxAllowedPrice
        //         });

            //     debugger;
            // })

    }

    showLoader() {
        return (this.state && this.state.action === 'loading') ? 'loader' : '';
    }

    showResults() {
        return (this.state && this.state.action === 'ready') ? 'flight-results' : 'flight-results d-none';
    }    

    // getInitialState(){
    //     // className={this.showLoader()}
    //     // className={styleCondition ? "btn-menu show-on-small" : ""
    //     // className={this.props.showLoader}
    //     debugger;
    //     return {"showHideSidenav":"hidden"};
    //   }

    render() {
      const { title } = this.props
      const { flights } = this.state
      return (  
          <div>
            <div className="searchForm">
                <form action="" className="form-inline justify-content-center">
                    <div className="form-group">
                        <label className="sr-only">From</label>
                        <SelectAirports />
                    </div>
                    <div className="form-group">
                        <label className="sr-only">Weekend</label>
                        <SelectWeekends />
                    </div>
                    <button type="submit" className="btn btn-success" onClick={this.searchFlights} >Find	&raquo;</button>
                </form>
            </div>
            <div className={this.showLoader()}></div>

            <div className= {this.showResults()}>
                <h2>Flights from Friday 21.09.18 to Monday 24.09.18:</h2>

                <div class="row ">
                    {flights.map(flight => <ResultsFlight flight={flight} />)}
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default SearchForm;
  