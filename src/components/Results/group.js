import React, { Component } from 'react';
import ResultsFlight from './flight'

class ResultsGroup extends Component {
  
    render() {
      const { group, handleShowDetails } = this.props
  
      return (
        <div>
            <h2>{group.name}:</h2>
            <div className="row">
                {group.flights.map(flight => <ResultsFlight flight={flight} group={group} key={flight.id} handleShowDetails={handleShowDetails} />)}
            </div>
        </div>
      )
    }
}

export default ResultsGroup