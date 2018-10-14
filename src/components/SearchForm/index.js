import React, { Component } from 'react';
import ResultsSelect from '../../components/Results/select'

class SearchForm extends Component {
    render() {      
      const {handleSearchFlights, handleFromChange, handleWeekendChange} = this.props

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
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">£</span>
                        </div>
                        <input type="number" class="form-control" placeholder="100" min="10" max="10000" />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Find	&raquo;</button>
            </form>
        </div>
      );
    }
  }
  
  export default SearchForm;
  