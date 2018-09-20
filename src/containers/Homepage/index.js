import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm'

class Homepage extends Component {
    render() {
      return (  
        <div className="container-main">
          <div className="container-fluid">
            <header className="header">
              <h1>Weekend Flights</h1>
              <h2>Find the best flights for your city break!</h2>
            </header>
          </div>

          <div className="container">
            <SearchForm />
          </div>
        
          <div className="container-fluid">
            <div className="footer">  
              &copy; 2018 Copyright 
              <a href="http://frontend.london" target="_blank" rel="noopener noreferrer">Piotr Kołodziejczyk</a>
            </div>        
            </div>        
        </div>
      );
    }
  }
  
  export default Homepage;
  