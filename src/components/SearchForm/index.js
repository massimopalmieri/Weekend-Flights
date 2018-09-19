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

    componentDidMount = () => {
        

    //     // fetch('http://localhost:3000/airports.json')
    //     fetch('http://localhost:3000/cities.json')
    //     .then(response => response.json())
    //     .then(json => {
    //     })
    }

    render() {
      return (  
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
                  <button type="submit" className="btn btn-success ">Find	&raquo;</button>
              </form>
          </div>
      );
    }
  }
  
  export default SearchForm;
  