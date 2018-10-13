import React, { Component } from 'react';
import ResultsFlight from './flight'

class ResultsGroup extends Component {
  
    render() {
      const { group, handleShowDetails, handleGroupToggle } = this.props
  
      return (
        <div className={ group.open ? 'group' : 'group closed' }>
            <h2 className="group-name" data-group={group.id} onClick={handleGroupToggle}>{group.name}</h2>
            <div className="group-flights row">
                {group.flights.map(flight => <ResultsFlight flight={flight} group={group} key={flight.id} handleShowDetails={handleShowDetails} />)}
            </div>
        </div>
      )
    }
}

export default ResultsGroup