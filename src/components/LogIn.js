import { Button } from '@material-ui/core';
import Axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../stylesheets/LogIn.css';

const BASE_API_URL = "http://localhost:8080/user/sign-up";

function LogIn() {
    const history = useHistory();
    const [user,setUser] = useState({
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
        event.preventDefault();
        const tempUser = {...user};
        console.log(tempUser);
        Axios.post(BASE_API_URL,tempUser)
        .then(res => {
            console.log(JSON.stringify(res));      
        } )
        .catch(error => console.log(error));
        
    }
 
    return (
        <div className="login">
            <header></header>
            <div className="login-card">
                <h5>Log in</h5>
                <form>
                    <input type="email" 
                    name="email"
                    placeholder="Email"
                    onChange={onChangeHandler}></input>
                    <input type="password" 
                    name="password"
                    placeholder="Password"
                    onChange={onChangeHandler}></input>
                    <Button type="submit" onClick={onSubmitHandler}>Continue</Button>
                </form>
                
                <Link to="/signUp">Create account</Link>
            </div>
        </div>
    )
}

export default LogIn;
