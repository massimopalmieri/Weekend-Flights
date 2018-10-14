import React, { Component } from 'react';
import ResultsSelect from '../../components/Results/select'

class SearchForm extends Component {
    render() {      
      const {maxPrice, handleSearchFlights, handleFromChange, handleWeekendChange, handleMaxPriceChange} = this.props

      return (  
        <div className="searchForm">
            <form className="justify-content-center" onSubmit={handleSearchFlights}>
                <div className="form-group">
                    <label>From</label>
                    <ResultsSelect name="airports" onChange={handleFromChange} />
                </div>
                <div className="form-group">
                    <label>When</label>
                    <ResultsSelect name="weekend" onChange={handleWeekendChange} />
                </div>
                <div className="form-group mr-2 group-price">
                    <label>Max price</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">£</span>
                        </div>
                        <input type="number" className="form-control" value={maxPrice} placeholder="100" min="10" max="10000" onChange={handleMaxPriceChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Find	&raquo;</button>
            </form>
        </div>
      );
    }
  }
  
  export default SearchForm;
  