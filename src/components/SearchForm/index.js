import React, { Component } from 'react';
import _ from 'lodash'
import Select from 'react-select'
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
    searchFlights = (e) => {
        e.preventDefault();

        this.setState({ loading: true });

        // fetch('http://localhost:3000/results/week-40_London_06.10-08.10.json')
        //     .then(response => response.json())
        //     .then(json => { 
        //         this.setState({ loading: false });
        //         var maxAllowedPrice = 100;
        //         var flights = _.filter(json, (flight) => {  // todo: move to backend
        //             return flight.total_price < maxAllowedPrice
        //         });

        //         // debugger;
        //     })

    }

    showLoader() {
        return (this.state && this.state.loading) ? 'loader' : '';
    }

    render() {
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

            <div className="flight-results">
                <h2>From Friday 21.09.18 to Monday 24.09.18:</h2>
                <div class="card-columns">
                    <div class="card">
                        <img class="card-img-top" src="images/demo/warsaw.jpg" alt="Warsaw (Poland)" />
                        <img class="flight-flag" src="images/flags/poland.png" alt="Poland" />
                        <div class="card-body">
                            <h5 class="card-title">
                                Warsaw, Poland
                                <span className="float-right">£69</span>
                            </h5>
                            <p class="card-text">
                                Fri 18:20 - 20:30 (2h 15m)  
                                <span className="float-right">STN-WMI</span>
                                <br />
                                Mon 05:00 - 08:00 (2h 15m)  
                                <span className="float-right">WMI-STN</span>
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="images/demo/nice.jpg" alt="Nice (France)" />
                        <img class="flight-flag" src="images/flags/france.png" alt="France" />
                        <div class="card-body">
                            <h5 class="card-title">
                                Nice , France
                                <span className="float-right">£78</span>
                            </h5>
                            <p class="card-text">
                                Fri 19:10 - 21:20 (1h 45m)  
                                <span className="float-right">LTN-NCE</span>
                                <br />
                                Mon 07:00 - 08:20 (1h 45m)  
                                <span className="float-right">NCE-LTN</span>
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="images/demo/palma.jpg" alt="Palma Mall (Spain)" />
                        <img class="flight-flag" src="images/flags/spain.png" alt="Spain" />
                        <div class="card-body">
                            <h5 class="card-title">
                                Palma Mall, Spain
                                <span className="float-right">£83</span>
                            </h5>
                            <p class="card-text">
                                Fri 18:40 - 20:50 (2h 10m) 
                                <span className="float-right">STN-PMI</span> <br />
                                Mon 05:40 - 08:10 (2h 10m) 
                                <span className="float-right">PMI-STN</span>
                            </p>
                        </div>
                    </div>


                    <div class="card">
                        <img class="card-img-top" src="images/demo/warsaw.jpg" alt="Warsaw (Poland)" />
                        <img class="flight-flag" src="images/flags/poland.png" alt="Poland" />
                        <div class="card-body">
                            <h5 class="card-title">
                                Warsaw, Poland
                                <span className="float-right">£69</span>
                            </h5>
                            <p class="card-text">
                                Fri 18:20 - 20:30 (2h 15m)  
                                <span className="float-right">STN-WMI</span>
                                <br />
                                Mon 05:00 - 08:00 (2h 15m)  
                                <span className="float-right">WMI-STN</span>
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="images/demo/nice.jpg" alt="Nice (France)" />
                        <img class="flight-flag" src="images/flags/france.png" alt="France" />
                        <div class="card-body">
                            <h5 class="card-title">
                                Nice , France
                                <span className="float-right">£78</span>
                            </h5>
                            <p class="card-text">
                                Fri 19:10 - 21:20 (1h 45m)  
                                <span className="float-right">LTN-NCE</span>
                                <br />
                                Mon 07:00 - 08:20 (1h 45m)  
                                <span className="float-right">NCE-LTN</span>
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="images/demo/palma.jpg" alt="Palma Mall (Spain)" />
                        <img class="flight-flag" src="images/flags/spain.png" alt="Spain" />
                        <div class="card-body">
                            <h5 class="card-title">
                                Palma Mall, Spain
                                <span className="float-right">£83</span>
                            </h5>
                            <p class="card-text">
                                Fri 18:40 - 20:50 (2h 10m) 
                                <span className="float-right">STN-PMI</span> <br />
                                Mon 05:40 - 08:10 (2h 10m) 
                                <span className="float-right">PMI-STN</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
          </div>
      );
    }
  }
  
  export default SearchForm;
  