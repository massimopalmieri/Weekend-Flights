import React, { Component } from 'react';
import Img from 'react-image';
import OnVisible from 'react-on-visible';

const imgLoader = () =>
  <Img src="images/placeholder.gif" alt="" />

const imgFailed = () =>
  <Img src="images/placeholder-failed.gif" alt="" />

const Flight = (params) => 
    <div className="flight-row">
        {params.flight.time} <span className="float-right">{params.flight.airport}</span>
    </div>

class ResultFlight extends Component {

    getClassName() {
        let classes = 'col col-12 col-md-6 col-lg-4 colFlight';
        if ( this.props.flight.from.error || this.props.flight.to.error) {
            classes += ' fadeOut';
        }
        return classes;
    }

    render() {
        const { flight, group, handleShowDetails, handleResultVisible } = this.props
        
        return (
            <div className={this.getClassName()}>
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
                                    <span className="price-error">
                                        <img src="images/error.png" className="flight-price-icon error" alt="" />
                                    </span>
                                ) : ( flight.updating ) ? (
                                    <img src="images/loader-small.gif" className="flight-price-icon loader-small" alt="" />
                                ) : ( flight.updated ) && (
                                    <span>
                                        <img src="images/success.png" className="flight-price-icon" alt="" />
                                    </span> 
                                )}
                                {flight.price_currency}{flight.price}
                                <OnVisible percent={10} onChange={handleResultVisible.bind(this, flight.id, group.id, flight.from.id, flight.to.id)}></OnVisible>
                            </span>
                        </h5>
                        <Flight flight={flight.from} />
                        <Flight flight={flight.to} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultFlight;