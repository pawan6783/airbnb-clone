import { Button } from '@material-ui/core';
import React from 'react';
import '../stylesheets/Banner.css';

function Banner() {
    return (
        <div className="banner">
            <div className="banner_search">
                <Button className="banner_searchButton" 
                 variant="outlined">Search Dates</Button>
            </div>
            <div className="banner_info">
                <h1>Stretch out your imagination</h1>
                <h5>
                    Plan a different kind of gateway to uncover the hidden gateway.
                </h5>
                <Button  variant="outlined">Explore Nearby</Button>
            </div>
            I am banner
        </div>
    )
}

export default Banner;
