import React, { Component } from 'react';
import ResultsGroup from './group'

class Results extends Component {
    
    render() {
      const { groups, handleShowDetails, handleGroupToggle, fetchFlightUpdate } = this.props
  
      return (
        <div className="flight-results">
            { groups.map( group => <ResultsGroup 
                group={group} 
                key={group.name} 
                handleShowDetails={handleShowDetails} 
                handleGroupToggle={handleGroupToggle}
                fetchFlightUpdate={fetchFlightUpdate}
              />)
            }
        </div>
      )
    }
}

export default Results