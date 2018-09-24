import React, { Component } from 'react';
import _ from 'lodash'
import Select from 'react-select'
import ResultsGroup from '../../components/ResultsGroup'
// import ResultsFlight from '../../components/ResultsFlight'
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
        groups: [],
        title: 'Weekend Flights'
    }

    state = {
        // flights: this.props.flights
        groups: this.props.groups
        // ,
        // draft: ''
    }

    getGroups = () => {
        return [
            {
                name: "From Friday Evening to Sunday Evening",
                flights: []
            }, 
            {
                name: "From Friday Evening to Monday Morning",
                flights: []
            }, 
            {
                name: "From Saturday Morning to Sunday Evening",
                flights: []
            }, 
            {
                name: "From Saturday Morning to Monday Morning",
                flights: []
            }
        ]
    }

    searchFlights = (e) => {
        e.preventDefault();

        // this.setState({ action: 'loading' });
        this.setState({ action: 'ready' });

        // setTimeout(() => { 
        //     this.setState({ action: 'ready' });
        // }, 3000);

        var groups = this.getGroups();

        this.setState({ groups: groups});

        for (var i=1;i<=4;i++) {
            fetch('http://weekendflights.eu/api/api.php?action=flights&week=42&dep=London&max_price=100&part=' + i)
            // fetch('http://localhost/www/flights/api.php?action=flights&week=40&dep=London&max_price=100&part='+i)
                .then(response => response.json())
                .then(json => {
                    json.id = parseInt(json.id);
                    groups[parseInt(json.id) -1] = json;
                    this.setState({ groups: groups});
                    
                });
        }
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
      const { groups } = this.state
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
                {groups.map(group => <ResultsGroup group={group} key={group.name} />)}
            </div>
        </div>
      );
    }
  }
  
  export default SearchForm;
  