import React, { Component } from 'react';
import Img from 'react-image';

const imgLoader = () =>
  <Img src="images/placeholder.gif" alt="" />

const Flight = (params) => 
    <div>
        {params.data.time} <span className="float-right">{params.data.airport}</span>
    </div>

class ResultFlight extends Component {

    render() {
        const { flight, group, handleShowDetails } = this.props
        
        return (
            <div className="col col-12 col-md-6 col-lg-4">
                <div className="card" onClick={handleShowDetails} data-group={group.id}  data-flight={flight.id}>
                    <div className="card-img-top flight-image">
                        <Img src={flight.image} alt={flight.city} loader={imgLoader()} unloader={imgLoader()} alt={flight.city} />
                    </div>
                    <Img className="flight-flag" src={flight.flag} alt={flight.country} />
                    <div className="card-body">
                        <h5 className="card-title">
                            {flight.city} <span className="float-right">{flight.price}</span>
                        </h5>
                        <Flight data={flight.from} />
                        <Flight data={flight.to} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultFlight;