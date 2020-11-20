import React from 'react';
import '../stylesheets/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/icons/AccountCircle';
import { ExpandMore } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header_icon" src="https://encrypted-tbn0.gstatic.com/
                images?q=tbn:ANd9GcSiYVmeN6lZ44qmTEkbp0_XFKvmu-70o4FiNg&usqp=CAU"></img>
            </Link>
            <div className="header_center">
                <input type="text"></input>
                <SearchIcon></SearchIcon>
            </div>

            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon></LanguageIcon>
                <ExpandMore></ExpandMore>
                <Avatar></Avatar>
            </div>
        </div>
    )
}

export default Header;
