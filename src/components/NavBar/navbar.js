import React from "react";
import { Link} from 'react-router-dom';
import './index.css';
import {Navbar, Nav, NavLink} from 'react-bootstrap'

const NavigationSidebar = () => {
    return(
        <div className="navbar-custom">
            <Navbar collapseOnSelect expand="sm" >
                <Nav>
                    <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink eventKey="3" as={Link} to="/about">About Us</NavLink>
                    <NavLink eventKey="4" as={Link} to="/contact">Contact Us</NavLink>
                </Nav>
            </Navbar>
        </div>

    );
}

export default NavigationSidebar;