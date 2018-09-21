import React, { Component } from 'react';
import ResultsFlight from '../../components/ResultsFlight'

const ResultsGroup = ({group}) => (
 
    <div>
        <h2>{group.name}:</h2>
        <div class="row">
            {group.flights.map(flight => <ResultsFlight flight={flight} />)}
        </div>
    </div>
)

export default ResultsGroup