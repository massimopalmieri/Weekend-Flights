import React, { Component } from 'react';
import ResultsSelect from '../../components/Results/select'

class SearchForm extends Component {
    render() {      
      const {handleSearchFlights, handleFromChange, handleWeekendChange} = this.props

      return (  
        <div className="searchForm">
            <form className="form-inline justify-content-center" onSubmit={handleSearchFlights}>
                <div className="form-group">
                    <label className="sr-only">From</label>
                    <ResultsSelect name="airports" onChange={handleFromChange} />
                </div>
                <div className="form-group">
                    <label className="sr-only">Weekend</label>
                    <ResultsSelect name="weekend" onChange={handleWeekendChange} />
                </div>
                <button type="submit" className="btn btn-success">Find	&raquo;</button>
            </form>
        </div>
      );
    }
  }
  
  export default SearchForm;
  