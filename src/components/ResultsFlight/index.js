import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ResultFlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const { flight } = this.props
        
        return (
            <div className="col col-12 col-md-6  col-lg-4">
                <div className="card" onClick={this.toggleDetails}>
                    <div className="card-img-top flight-image">
                        <img src={flight.image} alt={flight.city} />
                    </div>
                    <img className="flight-flag" src={flight.flag} alt={flight.country} />
                    <div className="card-body">
                        <h5 className="card-title">
                            {flight.city}
                            <span className="float-right">{flight.price}</span>
                        </h5>
                        <p className="card-text">
                            {flight.from_time}
                            <span className="float-right">{flight.from_airport}</span>
                            <br />
                            {flight.to_time}
                            <span className="float-right">{flight.to_airport}</span>
                        </p>
                    </div>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggleDetails} className="modal-lg flight-details" show="false">
                    <ModalHeader toggle={this.toggleDetails}>
                        <img src={flight.image_wide} alt={flight.city} />
                        <img className="flight-flag" src={flight.flag} alt={flight.country} />
                    </ModalHeader>
                    <ModalBody>
                        <h3>
                            {flight.from_city}
                            <span class="arrow-both"></span>
                            {flight.city}
                            <span className="float-right">{flight.price}</span>
                        </h3>
                        <div className="card">
                            <div className="card-body">
                                <div className="airlines-logo">
                                    <img src={flight.from_airlines_image} alt={flight.from_airlines} />
                                    <div>
                                        {flight.from_airlines} <br />
                                        {flight.from_flight_number}
                                    </div>
                                </div>
                                <h5 className="card-title">Departing flight: <span className="text-nowrap">{flight.from_date}</span></h5>
                                <div className="flight-time">
                                    <p className="card-text">{flight.from_start_time_airport}</p>
                                    <p className="card-text flight-time-duration">{flight.from_duration}</p>
                                    <p className="card-text">{flight.from_stop_time_airport}</p>
                                </div>
                                
                                <p className="card-text flight-price">
                                    <a href={flight.from_url} target="_blank" className="btn btn-success float-right btn-book">Book flight</a>
                                    {flight.from_price}
                                </p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="airlines-logo">
                                    <img src={flight.to_airlines_image} alt={flight.to_airlines} />
                                    <div>
                                        {flight.to_airlines} <br />
                                        {flight.to_flight_number}
                                    </div>
                                </div>
                                <h5 className="card-title">Returning flight: <span className="text-nowrap">{flight.to_date}</span></h5>
                                <div className="flight-time">
                                    <p className="card-text">{flight.to_start_time_airport}</p>
                                    <p className="card-text flight-time-duration">{flight.to_duration}</p>
                                    <p className="card-text">{flight.to_stop_time_airport}</p>
                                </div>
                                <p className="card-text flight-price">
                                    <a href={flight.to_url} target="_blank" className="btn btn-success float-right btn-book">Book flight</a>
                                    {flight.to_price}
                                </p>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ResultFlight;