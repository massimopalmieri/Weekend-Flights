import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm'

class Homepage extends Component {
    render() {
      return (  
        <div className="container">
          <header className="header">
            <h1>Weekend Flights</h1>
            <h2>Find the best flights for your city break!</h2>
          </header>

          <SearchForm />

          <div className="footer">  
            &copy; 2018 Copyright 
            <a href="http://frontend.london" target="_blank" rel="noopener noreferrer">Piotr Kołodziejczyk</a>
          </div>
        </div>
      );
    }
  }
  
  export default Homepage;
  