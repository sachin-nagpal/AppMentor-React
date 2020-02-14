import React, { useState, useContext } from 'react';
import axios from 'axios';
import useToggleState from '../hooks/useToggleState';

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
import { useCookies } from 'react-cookie';
import {Redirect} from 'react-router-dom';
const NavbarComponent = (props) => {
    function userLogout(){
        axios.get('/http://localhost/MyApplicationMentor/userlogout', {
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
     

     const { authTokens, setAuthTokens,setUserName } = useAuth();

     function handleUserLogout(){
        //  setIsLogout(isLogout);
        setUserName(null);
         setAuthTokens(null);
         localStorage.clear();
     }
        return (
            <div>
                <Navbar className="navbar-inner" color="" light expand="md" style={{boxShadow:"-2px 2px 5px rgba(211, 210, 210, 0.75)"}}>
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
                                <NavLink href="https://github.com/reactstrap/reactstrap" className="nav-links"><strong>Explore</strong></NavLink>
                            </NavItem>
                            <NavItem className="mr-5">
                                <NavLink to="/answers" tag={Link} className="nav-links"><strong>Answers</strong></NavLink>
                            </NavItem>
                            <NavItem className="mr-5">
                                {!isUserLogin ? <NavLink to="/signup-login" tag={Link} className="nav-links"><strong>Blogs</strong></NavLink> : <button>Log out</button>}
                            </NavItem>
                            <NavItem>
                               <Link to="/signup-login" className="login-btn mr-5">
                                Login
                               </Link>       
                            </NavItem>
                        {/* <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink to="/allquestions" tag={Link}>Questions</NavLink>
                        </NavItem>
                        <NavItem>
                            {!authTokens ? <NavLink to="/signup-login" tag={Link}>Signup/Login</NavLink> : <Button onClick={handleUserLogout}>Log out</Button>}
                        </NavItem>
                   
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )   
}

export default NavbarComponent;  