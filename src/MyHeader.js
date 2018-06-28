import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import logo from './logo.svg';

class MyHeader extends Component {
    render() {
        return (
            
            <header className="App-header">
                <Navbar>
                    <Navbar.Header>
                        <img src={logo} className="App-logo" alt="logo" />
                        <Navbar.Brand>
                            <Link to="/">React Rubbish</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Link
    </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
    </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>

                    
                    <h1 className="App-title">Welcome to React Rubbish</h1>
                </header>
                
        );
    }
}

export default MyHeader;
