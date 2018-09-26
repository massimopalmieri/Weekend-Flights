import React, { Component } from 'react';
import ResultsFlight from '../../components/ResultsFlight'

class ResultsGroup extends Component {
    static defaultProps = {
        group: {
            name: '',
            flights: []
        }
    }
  
    showResults() {
        return (this.props.group.flights.length) ? '' : 'd-none';
    }    
  
    render() {
      const { group } = this.props
  
      return (
        <div className={this.showResults()}>
            <h2>{group.name}:</h2>
            <div className="row">
                {group.flights.map(flight => <ResultsFlight flight={flight} key={flight.id} />)}
            </div>
        </div>
      )
    }
}

export default ResultsGroup