import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import '../stylesheets/Banner.css';
import Search from './Search';

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search/>}
                <Button 
                className="banner_searchButton"
                onClick={() => setShowSearch(!showSearch)} 
                variant="outlined">
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
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
