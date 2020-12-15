import '../stylesheets/Home.css';
import Banner from './Banner';
import Card from './Card';
import Header from './Header';

// ES7 snippets to do 'rfce'
import React, { Component } from 'react'

class Home extends Component {

    constructor(props){
        super(props);
        this.state = { 
            houseInfo: {
                location: "",
                guests: ""
            }
        }

    }

    handleCallBack = data => {
        this.setState({
            houseInfo: data
        });
    }
    
    render() {
        return (
            <div className='home'>
                <Header searchCallBack = {this.handleCallBack}/>
                <Banner houseInfo = {this.state.houseInfo}/>

                <div className='home__section'>
                    <Card
                        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                        title="Online Experiences"
                        description="Unique activities we can do together, led by a world of hosts."
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                        title="Unique stays"
                        description="Spaces that are more than just a place to sleep."
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                        title="Entire homes"
                        description="Comfortable private places, with room for friends or family."
                    />
                </div>
                <div className='home__section'>
                    <Card
                        src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                        title="3 Bedroom Flat in Bournemouth"
                        description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                        price="£130/night"
                    />
                    <Card
                        src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                        title="Penthouse in London"
                        description="Enjoy the amazing sights of London with this stunning penthouse"
                        price="£350/night"
                    />
                    <Card
                        src="https://media.nomadicmatt.com/2018/apartment.jpg"
                        title="1 Bedroom apartment"
                        description="Superhost with great amenities and a fabolous shopping complex nearby"
                        price="£70/night"
                    />
                </div>
            </div>
        )
    }
}

export default Home;

// import React, { Component } from "react";

// import UserService from "./UserService";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       content: ""
//     };
//   }

//   componentDidMount() {
//     UserService.getPublicContent().then(
//       response => {
//         this.setState({
//           content: response.data
//         });
//       },
//       error => {
//         this.setState({
//           content:
//             (error.response && error.response.data) ||
//             error.message ||
//             error.toString()
//         });
//       }
//     );
//   }

//   render() {
//     return (
//       <div className="container">
//         <header className="jumbotron">
//           <h3>{this.state.content}</h3>
//         </header>
//       </div>
//     );
//   }
// }