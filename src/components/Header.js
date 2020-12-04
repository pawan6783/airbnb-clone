import React, { useEffect, useState, Component } from 'react';
import '../stylesheets/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from 'react-router-dom';
import { Collapse, Button, CardBody, Card, Label } from 'reactstrap';
import Banner from './Banner';
import Popup from 'reactjs-popup';
import SignUp from './SignUp';
import LogIn from './LogIn';
import SearchPage from './SearchPage';


class Header extends Component{
    
    // const [open, setOpen] = useState(false);
    // const closeModal = () => setOpen(false);

    // const [openLogin, setOpenLogin] = useState(false);
    // const closeModalLogin = () => setOpenLogin(false);

    const [value, setValue] = useState(false);
    // const closeModelvalue = () => setValue(false);

    // const [flag, setFlag] = useState(false);

    constructor(props){
        this.state = {
            info: {
                location: "",
            checkIn: "",
            checkOut: "",
            guests: ""
            },
            open: false,
            openLogin: false,
        }
    }
    // const [info, setInfo] = useState({
    //     location: "",
    //     checkIn: "",
    //     checkOut: "",
    //     guests: ""
    // });

     onChangeHandler = event => {

        this.setState(({info}) => {
            info.[event.target.name] = event.target.value
        });

    }
     onClickHandler = () =>{
        console.log("inside searchIcon handler");
        this.context.router.push({
            pathname: '/confirmation',
            state: {email: this.state.email}  
        })
    }

    render(){
        return (
            <div>
                <div className="header">
                    <Link to="/">
                        <img className="header_icon" src="data:image/png;base64,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
                    t6U4xHbTdzvTiIfbr/FYTrenyb2u3PQ/0H6HyGoJ513IwhKAAAAAElFTkSuQmCC" alt=""></img>
                    </Link>
    
                    <div className="header_center">
                        <input type="text" name="location" placeholder="Location" onChange={this.onChangeHandler}></input>
                        <input type="date" name="checkIn" placeholder="Check in" onChange={this.onChangeHandler}></input>
                        <input type="date" name="checkOut" placeholder="Check out" onChange={this.onChangeHandler}></input>
                        <input type="text" name="guests" placeholder="Guests" onChange={this.onChangeHandler}></input>
    
                        <SearchIcon onClick={this.onClickHandler}></SearchIcon>
                    </div>
    
                    <div className="header_right">
                        <p>Become a host</p>
                        <LanguageIcon></LanguageIcon>
                        <ExpandMoreIcon></ExpandMoreIcon>
                        <Popup trigger={<Avatar></Avatar>} position="bottom center">
                            <div className="popup-content">
                                <Link className="link" onClick={() => setOpen(o => !o)}>Sign up</Link>
                                <Link className="link" onClick={() => setOpenLogin(o => !o)}>Log in</Link>
                            </div>
                        </Popup>
    
                        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
    
                            <div className="signup">
                                <SignUp ></SignUp>
                            </div>
    
                        </Popup>
                        <Popup open={openLogin} closeOnDocumentClick onClose={closeModalLogin}>
    
                            <div className="signup">
                                <LogIn ></LogIn>
                            </div>
    
                        </Popup>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Header;
