import React, { Component } from 'react';
import ResultsFlight from './flight'

class ResultsGroup extends Component {
  
    render() {
      const { group, handleShowDetails, handleResultVisible, handleGroupToggle } = this.props
  
      return (
        <div>
            <h2 className={ group.open ? 'group-name' : 'group-name closed' } data-group={group.id} onClick={handleGroupToggle}>{group.name}:</h2>
            <div className="row">
                {group.flights.map(flight => <ResultsFlight flight={flight} group={group} key={flight.id} handleShowDetails={handleShowDetails} handleResultVisible={handleResultVisible} />)}
            </div>
        </div>
      )
    }
}

export default ResultsGroup