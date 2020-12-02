import { Button } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import Axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../stylesheets/LogIn.css';

const BASE_API_URL = "http://localhost:8080/user/login";

function LogIn() {
    const history = useHistory();
    const [user,setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        password: ""
    });

    let flag = false;
    const onChangeHandler = event => {
        const target = event.target;
        const name = event.target.name;

        setUser({
            ...user,
            [name]: target.value
        });
    }

    const onSubmitHandler = (event) => {
        let theUser = null;
        event.preventDefault();
        let tempUser = {...user};
        console.log(tempUser);
        Axios.get(BASE_API_URL,{
            params:{
                email:tempUser.email,
                password: tempUser.password
            }
        })
        .then(res => {
            theUser = res.data;
            console.log(JSON.stringify(theUser));  
            if(theUser.email == tempUser.email && theUser.password == tempUser.password){
                history.push("/login-home");
            }    
        } )
        .catch(error => console.log(error));
        
        flag = true;
    }
 
    return (
        <div className="login">
            {/* <header></header> */}
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
                    { flag && <h4 style={{color:"red"}}>Invalid email or password</h4>  }
                </form>
            </div>
        </div>
    )
}

export default LogIn;
