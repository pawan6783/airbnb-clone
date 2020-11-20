import { Button } from '@material-ui/core';
import React from 'react';
import '../stylesheets/SearchPage.css';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
            <div
            className="searchPage_info">
                <p>62 stays . 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Types of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/
                images?q=tbn:ANd9GcR8f9yKxJTmkfnhJb66hNu-zYZE2YqaaA_pUg&usqp=CAU"
                location="private room in center of london"
                title="welcom home"
                description="1 guest . 1 bedroom . 1 bed . shared bathroom . wifi . kitchen . free parking . washing machine"
                star="(4.73)"
                price="rs. 500/day"
                total="rs. 2000 total" 
            ></SearchResult>

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/
                images?q=tbn:ANd9GcR8f9yKxJTmkfnhJb66hNu-zYZE2YqaaA_pUg&usqp=CAU"
                location="private room in center of london"
                title="welcom home"
                description="1 guest . 1 bedroom . 1 bed . shared bathroom . wifi . kitchen . free parking . washing machine"
                star="(4.73)"
                price="rs. 500/day"
                total="rs. 2000 total" 
            ></SearchResult>

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/
                images?q=tbn:ANd9GcR8f9yKxJTmkfnhJb66hNu-zYZE2YqaaA_pUg&usqp=CAU"
                location="private room in center of london"
                title="welcom home"
                description="1 guest . 1 bedroom . 1 bed . shared bathroom . wifi . kitchen . free parking . washing machine"
                star="(4.73)"
                price="rs. 500/day"
                total="rs. 2000 total" 
            ></SearchResult>

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/
                images?q=tbn:ANd9GcR8f9yKxJTmkfnhJb66hNu-zYZE2YqaaA_pUg&usqp=CAU"
                location="private room in center of london"
                title="welcom home"
                description="1 guest . 1 bedroom . 1 bed . shared bathroom . wifi . kitchen . free parking . washing machine"
                star="(4.73)"
                price="rs. 500/day"
                total="rs. 2000 total" 
            ></SearchResult>
        </div>
    )
}

export default SearchPage;
