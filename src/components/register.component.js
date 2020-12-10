import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

     return (

        <form >
            <table>
                <tr>
                    <td>
                        <label>First Name </label>
                    </td>
                    <td>
                        <input type="text"
                            name="firstName"
                            onChange={onChangeHandler}></input>

                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Last Name </label>
                    </td>
                    <td>
                        <input type="text"
                            name="lastName"
                            onChange={onChangeHandler}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Email </label>
                    </td>
                    <td>
                        <input type="email"
                            name="email"
                            onChange={onChangeHandler}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Date of Birth </label>
                    </td>
                    <td>
                        <input type="date"
                            name="dob"
                            onChange={onChangeHandler}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Password </label>
                    </td>
                    <td>
                        <input type="Password"
                            name="password"
                            onChange={onChangeHandler}></input>
                    </td>
                </tr>
            </table>
            <Button className="btn" type="submit" onClick={onSubmitHandler}>Save</Button>
            <div className="google">
            <Button className="btn-google" >Sign up with Google</Button>
            </div>
        </form>

    )
}

export default SignUp;
