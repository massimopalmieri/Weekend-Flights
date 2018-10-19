import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="footer">  
                    &copy; 2018 Copyright  <a href="http://frontend.london" target="_blank" rel="noopener noreferrer">Piotr Kołodziejczyk</a>
                </div>        
            </div>
        )
    }
}

export default Footer;