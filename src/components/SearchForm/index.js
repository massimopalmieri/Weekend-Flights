import React, { Component } from 'react';
import _ from 'lodash'
import Select from 'react-select'
import { groupedOptions } from '../../data';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const MySelect = () => (
    <Select options={options} className="my-select my-1 mr-sm-2"  />
)

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


const MySelect2 = () => (
    <Select
        className="my-select my-1 mr-sm-2" 
        defaultInputValue="London (all airports)"
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        // isMulti="true"
        defaultOptions="false"
        placeholder= "From"

    />
)




class SearchForm extends Component {

    componentDidMount = () => {
        console.log('component (SearchForm) mounted')
        // fetch('http://localhost:3000/airports.json')
        fetch('http://localhost:3000/cities.json')
        .then(response => response.json())
        .then(json => {
            // let airports = json.airports;
            let stats = {};
            let repeated = [];
            var airports2countries = json.airports2countries;
            // debugger;
            // console.info('airports: ', airports);

            // var selected = _.filter(airports, {
            //     country: 'Poland'
            // });

            // let options = [],
            //     options2 = []
            // // debugger;

            // _.each(json.cities, (props, code) => {
            //     options.push({ 
            //         value: props.name, 
            //         label: 'All ' + props.name + ' airports', 
            //         name: code, 
            //         ports: props.ports,
            //         country: airports2countries[props.ports.substr(0,3)]
            //     });
            // });

            // $.each(json.airports, (code, name) => {
            //     // debugger;
            //     options2.push({ 
            //         value: name, 
            //         label: name,
            //         name: code, 
            //         ports: code,
            //         country: airports2countries[code]
            //     });
            // });

            // debugger;

            // $.each(json.data, (val, entry) => {
            //     debugger;
            // });

            // var countries = {};

            // var filteredData = [];

            // var allowedCountries = ["AL", "AD", "AM", "AT", "BY", "BE", "BA", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FO", "FI", "FR", "GB", "GE", "GI", "GR", "HU", "HR", "IE", "IS", "IT", "LT", "LU", "LV", "MC", "MK", "MT", "NO", "NL", "PL", "PT", "RO", "RU", "SE", "SI", "SK", "SM", "TR", "UA", "VA"];

            // var parsedData = [];
            // var usedCountries = {};
            // var options = {};

            // var result = _.each(json.data, (obj) => {
            //     if (!countries[obj.country]) {


            //         if (Object.keys(options).length !== 0) {
            //             // debugger;
            //             parsedData.push(options);
            //         }

            //         countries[obj.country] = {};
            //         let countryName = json.countries[obj.country];

            //         // debugger;

            //         options = {
            //             label: countryName,
            //             options: [{ 
            //                 label: 'All ' + countryName + ' airports', 
            //                 value: countryName
            //             }]
            //         };
            //     }

            //     options.options.push(obj);
            //     // debugger;

            //     if (countries[obj.country]) {
            //         // parsedData.push(obj);
            //         // options.options.push(obj);
            //         countries[obj.country] = options;
            //     } else {
            //         countries[obj.country] = {};
            //         // debugger;
            //     }
                
                
            //     // if (allowedCountries.indexOf(obj.country) != -1) {
            //     //     filteredData.push(obj);
            //     //     // debugger;
            //     //     usedCountries[obj.country] = {};
            //     // }
            // });
            

            debugger;

            // _.each(airports, (airport) => {
            //     // debugger;
            //     if (typeof stats[airport.country] === 'undefined') {
            //         stats[airport.country] = { amount: 1, cities: {}};
            //     } else {
            //         stats[airport.country].amount++;
            //     }

            //     if (typeof stats[airport.country].cities[airport.city] === 'undefined') {
            //         stats[airport.country].cities[airport.city] = 1;
            //     } else {
            //         stats[airport.country].cities[airport.city]++;
            //     }
                
            // });

            // _.each(stats, (country) => {
                
            //     _.each(country.cities, (amount, city) => {
            //         // debugger;
            //         if (amount > 1) {
            //             repeated.push({
            //                 "city": city,
            //                 "amount": amount
            //             });
            //         }
            //     });
            // });
            // debugger;
        })
    }

    // MySelect2
    render() {
      return (  
          <div className="searchForm">
              <form action="" className="form-inline justify-content-center">
                  <div className="form-group">
                      <label className="sr-only">From</label>
                      <MySelect2 />
                      {/* <input type="text" className="form-control" placeholder="From" /> */}
                  </div>
                  <div className="form-group">
                      <label className="sr-only">Weekend</label>
                      {/* <MySelect /> */}
                      
                      <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                          <option>Weekend 38 - 21.09 - 24.09</option>
                          <option>Weekend 39 - 27.09 - 01.10</option>
                      </select>
                  </div>
                  <button type="submit" className="btn btn-success ">Find	&raquo;</button>

                  
              </form>
          </div>
      );
    }
  }
  
  export default SearchForm;
  