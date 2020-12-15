import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "./AuthService";
import Banner from "./Banner";
import Card from "./Card";
import Header from "./Header";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
    console.log(this.state.currentUser);
  }

  
  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser } = this.state;
    console.log(currentUser);

    return (
      <div>
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

        <li>
                <a href="/" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            
        <header>
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>

        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    );
  }
}