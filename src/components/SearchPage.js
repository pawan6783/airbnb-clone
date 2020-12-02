import React, { useEffect, Component } from 'react';
import '../stylesheets/SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import Axios from 'axios';

const BASE_API_URL = "http://localhost:8080/house";

class SearchPage extends Component {
    constructor(props){
        super();
        this.state = {
            houses: []
        }

    }
    
    componentDidMount(){
        this.getAllHouses();
        console.log(this.state.houses);
    }


    getAllHouses = async () => {
        const result = await Axios.get(BASE_API_URL);
        this.setState({
            houses: result.data
        });
        console.log(result.data);
    }

    render(){

        let list = this.state.houses.map(data => {
            return <SearchResult
                img={data.img}
                location={data.area}
                title={data.name}
                description={data.description}
                star={4.73}
                price={`INR ${data.price} /Day`} />

            });

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

export default SearchPage;