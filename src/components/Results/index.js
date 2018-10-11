import React, { Component } from 'react';
import ResultsGroup from './group'

class Results extends Component {
    
    render() {
      const { groups, handleShowDetails, handleResultVisible, handleGroupToggle } = this.props
  
      return (
        <div className="flight-results">
            { groups.map( group => <ResultsGroup 
                group={group} 
                key={group.name} 
                handleShowDetails={handleShowDetails} 
                handleResultVisible={handleResultVisible} 
                handleGroupToggle={handleGroupToggle}
              />)
            }
        </div>
      )
    }
}

export default Results