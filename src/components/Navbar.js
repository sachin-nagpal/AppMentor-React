import React, { useState, useContext } from 'react';
import axios from 'axios';
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

//user context
import {UserLoginState} from '../context/UserLoginState';

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
     const toggle = () => setIsOpen(!isOpen);
        return (
            <div>
                <Navbar color="" light expand="md">
                    <NavbarBrand to="/" tag={Link}>MyApplicationMentor</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/profile" tag={Link}>Profile</NavLink>
                            </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/allquestions" tag={Link}>Questions</NavLink>
                        </NavItem>
                        <NavItem>
                            {!isUserLogin ? <NavLink to="/signup-login" tag={Link}>Signup/Login</NavLink> : <button onClick={userLogout}>Log out</button>}
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )   
}

export default NavbarComponent;  