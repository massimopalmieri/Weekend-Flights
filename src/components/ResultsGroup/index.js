import React, { Component } from 'react';
import ResultsFlight from '../../components/ResultsFlight'

const ResultsGroup = ({group}) => (
 
    <div>
        <h2>Flights from Friday 21.09.18 to Monday 24.09.18:</h2>
        <div class="row">
            {group.flights.map(flight => <ResultsFlight flight={flight} />)}
        </div>
    </div>
)

export default ResultsGroup