import { Button } from '@material-ui/core';
import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const BASE_API_URL = "http://localhost:8080/user/sign-up";

function SignUp() {

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
        history.push("/logIn");
        
    }
    return (
        <div>
            <form>
            <div>
                <label>First Name :</label>
                <input type="text" 
                name="firstName"
                onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>Last Name :</label>
                <input type="text" 
                name="lastName"
                onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>Email :</label>
                <input type="email" 
                name="email"
                onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>Date of Birth :</label>
                <input type="date" 
                name="dob"
                onChange={onChangeHandler}></input>
            </div>
            <div>
                <label>Password :</label>
                <input type="Password" 
                name="password"
                onChange={onChangeHandler}></input>
            </div>
            <Button type="submit" onClick={onSubmitHandler}>Save</Button>
            </form>
        </div>
    )
}

export default SignUp;
