import React, { Component } from 'react';

class FlightDetailsFlight extends Component {

    render() {
        const { flight } = this.props
        
        return (
            <div className="card">
                <div className="card-body">
                    <div className="airlines-logo">
                        <img src={flight.airlines_image} alt={flight.airlines} />
                        <div>
                            {flight.airlines} <br />
                            {flight.flight_number}
                        </div>
                    </div>
                    <h5 className="card-title">Departing flight: <span className="text-nowrap">{flight.date}</span></h5>
                    <div className="flight-time">
                        <p className="card-text">{flight.start_time_airport}</p>
                        <p className="card-text flight-time-duration">{flight.duration}</p>
                        <p className="card-text">{flight.stop_time_airport}</p>
                    </div>
                    <p className="card-text flight-price">
                        <a href={flight.url} target="_blank" className="btn btn-success float-right btn-book">Book flight</a>
                        {flight.price}
                    </p>
                </div>
            </div>
        )
    }
}

export default FlightDetailsFlight;