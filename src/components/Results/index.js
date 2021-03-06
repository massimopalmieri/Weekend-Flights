import React, { Component } from 'react';
import ResultsGroup from './group'

class Results extends Component {
    
    render() {
      const { groups, handleShowDetails, handleGroupToggle, fetchFlightUpdate, handlePageChange } = this.props
  
      return (
        <div className="flight-results">
            { groups.map( group => <ResultsGroup 
                group={group} 
                key={group.id} 
                handleShowDetails={handleShowDetails} 
                handleGroupToggle={handleGroupToggle}
                fetchFlightUpdate={fetchFlightUpdate}
                handlePageChange={handlePageChange}
              />)
            }
        </div>
      )
    }
}

export default Results