import React, { Component } from 'react';
import Img from 'react-image';
import { imagesLocation, fetchConfig } from '../../data';

const imgLoader = () =>
  <Img src={`${imagesLocation}placeholder.gif`} alt="" />

const imgFailed = () =>
  <Img src={`${imagesLocation}placeholder-failed.gif`} alt="" />

const Flight = (params) => 
    <div className="flight-row">
        <span className="flight-row-right">{params.flight.airport} </span>
        <span>{params.flight.time} </span>
        <span className="flight-row-last">({params.flight.time_length})</span>
    </div>

class ResultFlight extends Component {
    componentDidMount() {
        if (!this.props.flight.updated) { // fetch update only once
            this.abortController = new window.AbortController();
            let config = Object.assign({}, { signal: this.abortController.signal }, fetchConfig);
            return this.props.fetchFlightUpdate(this.props.flight, this.props.group.id, config);
        }
     }

     componentWillUnmount() {
        if (this.abortController) {
            this.abortController.abort();
        }
     }

    getClassName() {
        let classes = 'col col-12 col-md-6 col-lg-4 colFlight';
        if ( this.props.flight.from.error || this.props.flight.to.error) {
            classes += ' fadeOut';
        }
        return classes;
    }

    render() {
        const { flight, group, handleShowDetails } = this.props
        
        return (
            <div className={this.getClassName()}>
                <div className="card" onClick={handleShowDetails} data-group={group.id}  data-flight={flight.id}>
                    <div className="card-img-top flight-image">
                        <Img src={flight.image} alt={flight.city} loader={imgLoader()} unloader={imgFailed()} alt={flight.city} />
                    </div>
                    <Img className="flight-flag" src={flight.flag} alt={flight.country} />
                    <div className="card-body">
                        <h5 className="card-title">
                            <span className="float-right">
                                {( flight.from.error || flight.to.error ) ? (
                                    <span className="price-error">
                                        <img src={`${imagesLocation}error.png`} className="flight-price-icon error" alt="" />
                                    </span>
                                ) : ( flight.updating ) ? (
                                    <img src={`${imagesLocation}loader-small.gif`} className="flight-price-icon loader-small" alt="" />
                                ) : ( flight.updated ) && (
                                    <span>
                                        <img src={`${imagesLocation}success.png`} className="flight-price-icon" alt="" />
                                    </span> 
                                )}
                                {flight.price_currency}{flight.price}
                            </span>

                            {flight.city} 
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