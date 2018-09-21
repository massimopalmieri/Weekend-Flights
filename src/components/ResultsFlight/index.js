import React, { Component } from 'react';

const ResultFlight = ({flight}) => (

    <div class="col col-12 col-md-6  col-lg-4">
        <div class="card">
            <div class="card-img-top flight-image">
                <img src={flight.image} alt={flight.city} />
            </div>
            <img class="flight-flag" src={flight.flag} alt={flight.country} />
            <div class="card-body">
                <h5 class="card-title">
                    {flight.city}
                    <span className="float-right">{flight.price}</span>
                </h5>
                <p class="card-text">
                    {flight.from_time}
                    <span className="float-right">{flight.from_airport}</span>
                    <br />
                    {flight.to_time}
                    <span className="float-right">{flight.to_airport}</span>
                </p>
            </div>
        </div>
    </div>
)

export default ResultFlight