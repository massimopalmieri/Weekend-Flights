import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>Weekend Flights</h1>
          <h2>Find the best flights for your city break</h2>
        </header>

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

        <div className="footer">  
          &copy; 2018 Copyright 
          <a href="http://frontend.london" target="_blank">Piotr Kołodziejczyk</a>
        </div>
      </div>
    );
  }
}

export default App;
