import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './index.css';
import {Navbar, Nav} from 'react-bootstrap'

const NavigationSidebar = () => {
    const {pathname} = useLocation();

    return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">React-Bootstrap</a>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>

    );
}

export default NavigationSidebar;