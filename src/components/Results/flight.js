import React, { Component } from 'react';
import Img from 'react-image';
import OnVisible from 'react-on-visible';

const imgLoader = () =>
  <Img src="images/placeholder.gif" alt="" />

const imgFailed = () =>
  <Img src="images/placeholder-failed.gif" alt="" />

const Flight = (params) => 
    <OnVisible className="flight-row" key={10} percent={10}  onChange={params.handleResultVisible.bind(this, params.flightId, params.isFrom, params.groupId, params.flight.id)}>
        {params.flight.time} <span className="float-right">{params.flight.airport}</span>
    </OnVisible>

class ResultFlight extends Component {

    render() {
        const { flight, group, handleShowDetails, handleResultVisible } = this.props
        
        return (
            <div className="col col-12 col-md-6 col-lg-4">
                <div className="card" onClick={handleShowDetails} data-group={group.id}  data-flight={flight.id}>
                    <div className="card-img-top flight-image">
                        <Img src={flight.image} alt={flight.city} loader={imgLoader()} unloader={imgFailed()} alt={flight.city} />
                    </div>
                    <Img className="flight-flag" src={flight.flag} alt={flight.country} />
                    <div className="card-body">
                        <h5 className="card-title">
                            {flight.city} 
                            
                            <span className="float-right">
                                {( flight.from.error || flight.to.error ) ? (
                                    ( flight.from.error || flight.to.error ) &&
                                    <span className="price-error">
                                        <img src="images/error.png" className="flight-price-icon error" alt="" />
                                    </span>
                                ) : ( flight.from.updating || flight.to.updating ) ? (
                                    <img src="images/loader-small.gif" className="flight-price-icon loader-small" alt="" />
                                ) : ( // ( flight.from.updated && flight.to.updated )
                                    <span>
                                        <img src="images/success.png" className="flight-price-icon" alt="" />
                                    </span> 
                                )}
                                {flight.price_currency}{flight.price}
                            </span>
                        </h5>
                        <Flight flight={flight.from} flightId={flight.id} isFrom={true} groupId={group.id} handleResultVisible={handleResultVisible} />
                        <Flight flight={flight.to} flightId={flight.id} isFrom={false} groupId={group.id} handleResultVisible={handleResultVisible} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultFlight;