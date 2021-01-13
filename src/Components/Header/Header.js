import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar, Nav } from 'react-bootstrap'
import './Header.css';
import { Avatar } from './Avatar';
import {
    Link
} from "react-router-dom";



function Header() {

    const [showAvatar, setShowAvatar] = useState(false);
    const { isAuthenticated } = useAuth0();

    return (
        <header className="header">
            <div className="header-container">
                <Navbar bg="green" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="green-border" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <nav className="green-border navigation"> */}
                        <Nav className="mr-auto navbar-nav">
                            <a className="navbar-brand green" href="index.html">
                                <h3 className="font-lg"><img src="/images/carbon-footprint-logo-mini.jpg" alt="BeGreen logo" /><span className="pl-4">BeGreen</span></h3>
                            </a>
                            <Nav.Link className="nav-item nav-link active" href="/">Home</Nav.Link>
                            {isAuthenticated && <div className="navbar-nav">
                                <Nav.Link className="nav-item nav-link active" href="/tracking">Track</Nav.Link>
                                <Nav.Link className="nav-item nav-link active" href="/">Analyze</Nav.Link>
                                <Nav.Link className="nav-item nav-link active" href="/">Learn</Nav.Link>
                                <Nav.Link className="nav-item nav-link active" href="/">Teams</Nav.Link>
                                <Nav.Link className="nav-item nav-link active" href="/">Feed</Nav.Link>
                            </div>
                            }
                            {!isAuthenticated && <Link to="/login"><button type="button" className="btn btn-outline-success d-none d-md-block">Sign up</button></Link>}
                            {!isAuthenticated
                                ? <Link to="/login"><button type="button" onClick={() => setShowAvatar(!showAvatar)} className="btn btn-outline-success d-none d-md-block">Log in</button></Link>
                                : <Link to="/logout"><button type="button" onClick={() => setShowAvatar(!showAvatar)} className="btn btn-outline-success d-none d-md-block">Log out</button></Link>
                            }
                            {!isAuthenticated
                                ? <button type="button" className="btn"><i className="fas fa-user fa-2x"></i></button>
                                : <Avatar />
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header >
    );
}

export default Header;
