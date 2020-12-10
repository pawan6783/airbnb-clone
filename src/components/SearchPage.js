import React, { useEffect, Component } from 'react';
import '../stylesheets/SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import Axios from 'axios';
import Header from './Header';

const BASE_API_URL = "http://localhost:8080/house";

class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            houses: [],
            location: "",
            guests: ""
        }

    }

    
    
    componentDidMount(props){

        console.log(props);
        this.getAllHouses(props);
        console.log(this.state.houses);
    }


    getAllHouses = async (props) => {
        console.log("inside getAllHouses");
        const result = await Axios.get(BASE_API_URL);
       
        // const tempData = result.data;
        // const data = tempData.map(e => e.location == this.location.state.location
        //     && e.guests <= this.location.state.guests);
        
        //     this.setState({
        //         housese: data
        //     });

        this.setState({
            houses: result.data
        });

    }

    render(){

        let list = this.state.houses.map(data => {
            return <SearchResult

                id={data.id}
                img={data.img}
                location={data.area}
                title={data.name}
                description={data.description}
                star={4.73}
                price={`₹ ${data.price} /Day`} />

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