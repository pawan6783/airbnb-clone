import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import Home from './Home';

const BASE_API_URL = "http://localhost:8080/user/sign-up";

function SignUp() {

    const history = useHistory();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        password: ""
    });

    const onChangeHandler = event => {
        const target = event.target;
        const name = event.target.name;

        setUser({
            ...user,
            [name]: target.value
        });
    }

    const onSubmitHandler = event => {
        const tempUser = { ...user };
        console.log(tempUser);

        Axios.post(BASE_API_URL, tempUser)
            .then(res => {
                console.log(JSON.stringify(res));
               
            })
            .catch(error => console.log(error));
            history.push("/");
       
    }

    // const googleSignUpHandler= event => {
    //     var provider = new firebase.auth.GoogleAuthProvider();

    //     firebase.auth().signInWithPopup(provider).then(function(result) {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         var token = result.credential.accessToken;
    //         // The signed-in user info.
    //         var user = result.user;
    //         // ...
    //       }).catch(function(error) {
    //         // Handle Errors here.
    //         console.log(error);
    //       });

    //       firebase.auth().onAuthStateChanged(function(user) {
    //         if (user) {
    //             history.push("/login-home");
    //           // User is signed in.
    //         } else {
    //           // No user is signed in.
    //           history.push("/");
    //         }
    //       });
    // }
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
