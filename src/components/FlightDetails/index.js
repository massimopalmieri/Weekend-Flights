import React, { Component } from 'react';
import Img from 'react-image';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import FlightDetailsFlight from './flight';

class FlightDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true
        };
    }
    
    render() {
        const { open } = this.state
        const { flight, handleCloseDetails } = this.props

        return (
            <Modal isOpen={open} toggle={handleCloseDetails} className="modal-lg flight-details">
                <ModalHeader toggle={handleCloseDetails}>
                    <Img src={flight.image_wide} alt={flight.city} />
                    <Img className="flight-flag" src={flight.flag} alt={flight.country} />
                </ModalHeader>
                <ModalBody>
                    <h3>
                        <span className="float-right ml-2">{flight.price_currency}{flight.price}</span>
                        {flight.from.city}
                        <span className="arrow-both"></span>
                        {flight.city}
                    </h3>
                    <FlightDetailsFlight flight={flight} details={flight.from} />
                    <FlightDetailsFlight flight={flight} details={flight.to} />
                </ModalBody>
            </Modal>
        )
    }
}

export default FlightDetails;