import { Button } from '@material-ui/core';
import Axios from 'axios';
import React, { Component } from 'react'
import Header from './Header';
import SearchResult from './SearchResult';

const BASE_API_URL = "http://localhost:8080/house";

export default class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            houseInfo: {
                location: "",
                guests: 1
            },
            houses: []
        }
    }

    componentDidMount = () => {

        const currentInfo = this.props.location.state;

        this.setState({
            houseInfo: currentInfo
        });
        this.getHouses();
    }


    getHouses = async () => {
        console.log("inside getHouses");
        const result = await Axios.get(BASE_API_URL);

        const tempData = result.data;
        console.log(tempData);
        
        this.setState({
            houses: tempData
        });

    }

    render() {
        
        let list = this.state.houses
                    .filter((e) => e.city === this.state.houseInfo.location
                        && e.guests >= this.state.houseInfo.guests)
                    .map(data => {
            return <SearchResult

                id={data.id}
                img={data.img}
                location={data.area}
                title={data.name}
                description={data.description}
                star={4.73}
                price={`₹ ${data.price} /Day`} />

        });
        console.log(list);
        return (
            <div className='searchPage'>
                <div className='searchPage__info'>
                    <p>62 stays · 26 august to 30 august · 2 guest</p>
                    <h1>Stays nearby</h1>
                    <Button variant="outlined">Cancellation Flexibility</Button>
                    <Button variant="outlined">Type of place</Button>
                    <Button variant="outlined">Price</Button>
                    <Button variant="outlined">Rooms and beds</Button>
                    <Button variant="outlined">More filters</Button>
                </div>

                {list}
            </div>
        );
    }
}
