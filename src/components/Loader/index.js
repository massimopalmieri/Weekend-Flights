import React, { Component } from 'react';
import { countries } from '../../data';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            counter: -1,
            interval: 1000
        };
    }

    changeCountry() {
        let counter = ((this.state.counter + 1) === countries.length) ? 0 : this.state.counter + 1;
        this.setState({
            country: countries[counter],
            counter: counter
        })
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.changeCountry(), this.state.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    render() {
        return (
            <div className="loader">
                {
                    this.state.country &&
                    <span>Checking flights to {this.state.country}...</span> 
                }
                <br />
                Loading your results, please don't refresh.<br />
            </div>
        )
    }
}

export default Loader;