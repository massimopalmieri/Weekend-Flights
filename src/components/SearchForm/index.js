import React, { Component } from 'react';
import _ from 'lodash'


// render() { 
//     let _ = require('underscore')
//     let buttonStyle = _.clone(button);
//   }

class SearchForm extends Component {

    componentDidMount = () => {
        // var _ = require('lodash');
        console.log('component (SearchForm) mounted')
        // debugger;
        fetch('http://localhost:3000/airports.json')
        .then(response => response.json())
        .then(json => {
            // var airports = Object.values(json);

            var europeCountries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];
            var europeanAirports = [];

            _.each(europeCountries, (country) => {
                var selected = _.filter(json, {
                    country: country
                });
                
                if (selected.length) {
                    europeanAirports = europeanAirports.concat(selected)
                } else {
                    // debugger;
                    console.info('missing airports from: ', country);
                }
                
            })

            

            console.info('ALL');
            
            debugger;
        })
    }


    render() {
      return (  
          <div className="searchForm">
              <form action="" className="form-inline justify-content-center">
                  <div className="form-group">
                      <label className="sr-only">From</label>
                      <input type="text" className="form-control" placeholder="From" />
                  </div>
                  <div className="form-group">
                      <label className="sr-only">Email</label>
                      {/* <input type="text" className="form-control" placeholder="jane.doe@example.com" /> */}
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
  