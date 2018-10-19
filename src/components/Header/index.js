import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <header className="header">
                    <h1>Weekend Flights</h1>
                    <h2>Find the best flights for your city break!</h2>
                </header>
            </div>
        )
    }
}

export default Header;