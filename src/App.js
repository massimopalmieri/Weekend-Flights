import React, { Component } from 'react';
import './css/reset.css';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Weekend Flights</h1>
          <h2>Find the best flights for your city break</h2>
        </header>
        <div className="searchForm">
          <label>
            From: 
            <input type="text" defaultValue="London" />
          </label>
          <label>
            Weekend: 

            <select>
              <option>38 - 21.09 - 24.09</option>
              <option>39 - 27.09 - 01.10</option>
            </select>
          </label>
          <button>Find 	&raquo;</button>
        </div>
      </div>
    );
  }
}

export default App;
