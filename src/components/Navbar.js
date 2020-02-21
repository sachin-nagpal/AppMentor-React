import React, { useState, useContext } from 'react';
import axios from 'axios';
import useToggleState from '../hooks/useToggleState';
import Notification from '../images/notification.png';
import NavbarProfile from './Navbar/NavbarProfile';

import { Button } from 'reactstrap';

import { useAuth } from "../context/auth";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import navLogo from '../images/nav-logo.png';
import search from '../images/search.png';

//user context
import {UserLoginState} from '../context/UserLoginState';



//Cookies
import {Redirect} from 'react-router-dom';
const NavbarComponent = (props) => {
    function userLogout(){
        axios.get(`${process.env.REACT_APP_API_HOST_URL}/userlogout`, {
            params: {
              ID: 12345
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });  
    }
     const [isOpen, setIsOpen] = useState(false);
     const {isUserLogin} = useContext(UserLoginState);
     const [isLogout,setIsLogout] = useState(false);
     const toggle = () => setIsOpen(!isOpen);
     

     const { authTokens, setAuthTokens,setUserName,userImg } = useAuth();

     function handleUserLogout(){
        //  setIsLogout(isLogout);
        setUserName(null);
         setAuthTokens(null);
         localStorage.clear();
     }
        return (
            <div>
                <Navbar className="navbar-inner" color="" light expand="md" style={{boxShadow:"-2px 2px 5px rgba(211, 210, 210, 0.75)",zIndex:'1000'}}>
                    <NavbarBrand to="/" tag={Link} className="brand-logo"> <img src={navLogo} alt="hh" height="25px" width="25px"></img> myApplicationMentor</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar style={{justifyContent: "flex-end"}}>
                        <Nav className="d-flex align-items-center" navbar style={{justifyContent: "flex-end"}}>
                            <NavItem>

                            </NavItem>
                            <NavItem className="search-bg mr-5">
                                <img src={search} alt="search" height="20px" width="20px"></img>
                            </NavItem>
                            <NavItem className="mr-5">
                                <NavLink href="#" className="nav-links"><strong>Explore</strong></NavLink>
                            </NavItem>
                            <NavItem className="mr-5">
                                <NavLink to="/allquestions" tag={Link} className="nav-links"><strong>Answers</strong></NavLink>
                            </NavItem>
                            <NavItem className="mr-5">
                                <NavLink to="/blogs" tag={Link} className="nav-links"><strong>Blogs</strong></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavItem className="mr-5">
                                <NavLink to="/signup-login" tag={Link} className="nav-links"><img src={`${Notification}`}/></NavLink>
                            </NavItem>
                            </NavItem>
                            <NavItem>
                            {!authTokens ? 
                               <Link to="/signup-login" className="login-btn nav-links mr-5">
                                Login
                               </Link>      
                            : <NavbarProfile handleUserLogout={handleUserLogout} userImg={userImg}/>}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )   
}

export default NavbarComponent;  