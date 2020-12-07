import Axios from 'axios';
import React, { Component } from 'react';
import StarIcon from '@material-ui/icons/Star';
import '../stylesheets/Details.css';

const BASE_API_URL = "http://localhost:8080/house";


export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            house: {}
        }
    }

    componentDidMount(props) {
        let id = this.props.match.params.id;
        console.log(`id=${id}`);
        this.getHouse(id);
    }


    getHouse = async (props) => {
        console.log(`BASE_API_URL/${props}`);

        const result = await Axios.get(`${BASE_API_URL}/${props}`);

        // const tempData = result.data;
        // const data = tempData.map(e => e.location == this.location.state.location
        //     && e.guests <= this.location.state.guests);

        //     this.setState({
        //         housese: data
        //     });

        this.setState({
            house: result.data
        });
        console.log(result.data);
    }

    render() {
        return (
            <div className="detail_card">
                <h1>{this.state.house.name}</h1>
                <p>
                    <StarIcon className="searchResult_star"></StarIcon>
                    {this.state.house.city} {this.state.house.country}
                </p>
                <img src={this.state.house.img} alt="" />
                <div className="detail_card_info">
                    <h2>{this.state.house.description}</h2>
                    <p>{this.state.house.guests} guests . {this.state.house.bedrooms} bedrooms . {this.state.house.bathrooms} bathrooms</p>
                </div>
                <div className="detail_card_info">
                    <div>
                        <h4>Entire home</h4>
                        <p>You’ll have the farm stay to yourself.</p>
                    </div>

                    <div>
                        <h4>Enhanced Clean</h4>
                        <p>This host committed to Airbnb's 5-step enhanced cleaning process.</p>
                    </div>

                    <div>
                        <h4>Self check-in</h4>
                        <p>You can check in with the doorman.</p>
                    </div>

                    <div>
                        <h4>Cancellation policy</h4>
                        <p>Add your trip dates to get the cancellation details for this stay.</p>
                    </div>

                    <div>
                        <h4>House rules</h4>
                        <p>This host doesn’t allow smoking. </p>
                    </div>
                </div>
            </div>
        )
    }
}
