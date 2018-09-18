import React, { Component } from 'react';

class SearchForm extends Component {
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
  