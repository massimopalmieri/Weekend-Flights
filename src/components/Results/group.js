import React, { Component } from 'react';
import ResultsFlight from './flight'

class ResultsGroup extends Component {
  
    render() {
      const { group, handleShowDetails, handleGroupToggle, fetchFlightUpdate } = this.props
  
      return (
        <div className={ group.open ? 'group' : 'group closed' }>
            <h2 className="group-name" data-group={group.id} onClick={handleGroupToggle}>{group.name} ({group.size} flights)</h2>
            {( group.open ) && (
                <div className="group-flights row">
                    {group.flights.map(flight =>
                        flight.visible &&
                        <ResultsFlight 
                            flight={flight} 
                            group={group} 
                            key={flight.id} 
                            handleShowDetails={handleShowDetails} 
                            fetchFlightUpdate={fetchFlightUpdate} 
                        />
                    )}
                    {( group.empty ) && (
                        <div className="no-results">No flights available</div>
                    )}
                </div>
            )}
        </div>
      )
    }
}

export default ResultsGroup