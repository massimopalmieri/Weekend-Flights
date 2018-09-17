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
            <input type="text" />
          </label>
          <label>
            Weekend: 
            <input type="text" />
          </label>
          <button>Find</button>
        </div>
      </div>
    );
  }
}

export default App;
