import React, { Component } from 'react';
import { imagesLocation } from '../../data';

class FlightDetailsFlight extends Component {

    render() {
        const { flight, details } = this.props
        
        return (
            <div className="card">
                <div className="card-body">
                    <div className="airlines-logo">
                        <img src={details.airlines_image} alt={details.airlines} />
                        <div>
                            {details.airlines} <br />
                            {details.flight_number}
                        </div>
                    </div>
                    <h5 className="card-title">Departing flight: <span className="text-nowrap">{details.date}</span></h5>
                    <div className="flight-time">
                        <p className="card-text">{details.start_time_airport}</p>
                        <p className="card-text flight-time-duration">{details.duration}</p>
                        <p className="card-text">{details.stop_time_airport}</p>
                    </div>
                    <p className="card-text flight-price">
                        <a href={details.url} target="_blank" className="btn btn-success float-right btn-book">Book flight</a>
                        {details.price_currency}{details.price}

                        {( details.error ) ? (
                            <span className="price-error">
                                <img src={`${imagesLocation}error.png`} className="icon-error" alt="" />
                                {details.error_message}
                            </span>
                        ) : ( flight.updating ) ? (
                            <img src={`${imagesLocation}loader-small.gif`} className="loader-small" alt="" />
                        ) : ( flight.updated ) && (
                            <img src={`${imagesLocation}success.png`} className="icon-success" alt="" />
                        )}                      
                    </p>
                </div>
            </div>
        )
    }
}

export default FlightDetailsFlight;