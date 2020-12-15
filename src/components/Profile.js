import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "./AuthService";

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