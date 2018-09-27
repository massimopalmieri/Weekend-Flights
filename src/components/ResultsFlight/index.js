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
                        <img src="http://localhost/www/flights/image.php?f=wide&q=Goteborg%2C+Sweden" alt="" />
                        <img className="flight-flag" src={flight.flag} alt={flight.country} />
                    </ModalHeader>
                    <ModalBody>
                        <h3>
                            London 
                            <span class="arrow-both"></span>
                            Warsaw, Poland
                            <span className="float-right">£81.97</span>
                        </h3>
                        <div className="card">
                            <div className="card-body">
                                <div className="airlines-logo">
                                    <img src="images/airlines/FR.png" alt="" />
                                    <div>
                                        Ryanair <br />
                                        FR 8729
                                    </div>
                                </div>
                                <h5 className="card-title">Departing flight: <span className="text-nowrap">Mon 21 Jan</span></h5>
                                <div className="flight-time">
                                    <p className="card-text">09:00 London Stansted Airport STN</p>
                                    <p className="card-text flight-time-duration">1 h 55 m</p>
                                    <p className="card-text">11:55 Milan–Malpensa Airport MXP</p>
                                </div>
                                
                                <p className="card-text flight-price">
                                    <a href="#" className="btn btn-success float-right btn-book">Book flight</a>
                                    £41.99
                                </p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="airlines-logo">
                                        <img src="images/airlines/FR.png" alt="" />
                                        <div>
                                            Ryanair <br />
                                            FR 8728
                                        </div>
                                </div>
                                <h5 className="card-title">Returning flight: <span className="text-nowrap">Tue 29 Jan</span></h5>
                                <div className="flight-time">
                                    <p className="card-text">07:10 Milan–Malpensa Airport MXP</p>
                                    <p className="card-text flight-time-duration">2 h 10 m</p>
                                    <p className="card-text">08:20 London Stansted Airport STN</p>
                                </div>
                                <p className="card-text flight-price">
                                    <a href="#" className="btn btn-success float-right btn-book">Book flight</a>
                                    £41.99
                                </p>
                            </div>
                        </div>
                          {/* <br /> */}
                          {/* Total price: £81.97<br /> */}
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default ResultFlight;