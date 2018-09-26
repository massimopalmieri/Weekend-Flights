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
    "label": "London (all airports)",
    "name": "LON_ALL",
    "ports": "LGW_STN_LTN_LCY_LHR_SEN_BQH",
    "country": "GB"
};

const SelectAirports = () => (
    <Select
        className="my-select my-1 mr-sm-2" 
        name="airports"
        // defaultInputValue="London"
        defaultValue={defaultFrom}
        // defaultValue={this.state.from}
        // value={selectedOption}
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
        name="weekend"
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
        groups: this.props.groups,
        selectedOption: null,
        from: defaultFrom,
        weekend: weekendsDefault 
        // weekend: 
        // ,
        // draft: ''
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        debugger;
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
        // console.info('this.state', this.state);
        // console.info('ports', this.state.from.ports);
        // console.info('text', this.state.from.value);
        // console.info('weekend', this.state.weekend.value);
        // debugger;

        // this.setState({ action: 'loading' });
        this.setState({ action: 'ready' });

        // setTimeout(() => { 
        //     this.setState({ action: 'ready' });
        // }, 3000);

        var groups = this.getGroups();

        this.setState({ groups: groups});

        

        for (var i=1;i<=4;i++) {
            console.info(this.state.from);
            // debugger;
            fetch('http://weekendflights.eu/api/api.php?'+
                'action=flights&week=' + this.state.weekend.value + '&dep=' + this.state.from.ports + 
                '&text=' + this.state.from.value + '&key=' + this.state.from.name + '&max_price=100&part=' + i)
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

    handleFromChange = (selectedOption) => {
        this.setState({from: selectedOption });
    }

    handleWeekendChange = (selectedOption) => {
        this.setState({weekend: selectedOption });
    }

    render() {
      const { selectedOption } = this.state;

      const { title } = this.props
      const { groups } = this.state
      return (  
          <div>
            <div className="searchForm">
                <form className="form-inline justify-content-center" onSubmit={this.searchFlights}>
                    <div className="form-group">
                        <label className="sr-only">From</label>
                        {/* <SelectAirports /> */}

                        <Select
                            className="my-select my-1 mr-sm-2" 
                            name="airports"
                            defaultValue={this.state.from}
                            options={airports}
                            onChange={this.handleFromChange}
                            formatGroupLabel={formatGroupLabel}
                            defaultOptions="false"
                            placeholder= "From"
                            allowClear="true"
                        />
                    </div>
                    <div className="form-group">
                        <label className="sr-only">Weekend</label>

                        <Select
                                className="my-select my-1 mr-sm-2" 
                                name="weekend"
                                defaultValue={this.state.weekend}
                                options={weekends}
                                formatGroupLabel={formatGroupLabel}
                                placeholder= "When"
                                onChange={this.handleWeekendChange}
                            />

                        {/* <SelectWeekends onChange={this.handleWeekendChange} /> */}
                    </div>
                    <button type="submit" className="btn btn-success">Find	&raquo;</button>
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
  