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
    const navBrandMobile = {
        margin: 'auto',
        display: 'block'
      };

    const getHomePage = () => {
        if ( isAuthenticated ){
            return "/tracking";
        }
        return "/";
    }

    return (
        <header className="header">
            <div className="header-container">
                <Navbar bg="green" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="green-border" />
                    <Navbar.Brand href={getHomePage()} style={navBrandMobile} className="d-md-block d-lg-none d-md-none d-xl-none font-lg green" >
                                <img
                                    alt="BeGreen logo"
                                    src="/images/carbon-footprint-logo-mini.jpg"
                                    className="d-inline-block align-center"  
                                />{' '}  BeGreen
                        </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto navbar-nav">
                            <Navbar.Brand href={getHomePage()} className="d-none d-lg-block navbar-brand green font-lg">
                                <img
                                    alt="BeGreen logo"
                                    src="/images/carbon-footprint-logo-mini.jpg"
                                    className="d-inline-block align-center"
                                />{' '}  BeGreen
                        </Navbar.Brand>                            
                            {isAuthenticated && <div className="navbar-nav">
                                <Nav.Link className="nav-item nav-link active green" href="/tracking">Track</Nav.Link>
                                <Nav.Link className="nav-item nav-link active green" href="/analyze">Analyze</Nav.Link>
                                <Nav.Link className="nav-item nav-link disabled" href="/">Learn</Nav.Link>
                                <Nav.Link className="nav-item nav-link disabled" href="/">Teams</Nav.Link>
                                <Nav.Link className="nav-item nav-link disabled" href="/">Feed</Nav.Link>
                            </div>
                            }
                        </Nav>
                        <Nav className="justify-content-end" activeKey="/home">
                            {!isAuthenticated && <Link to="/login"><button type="button" className="btn btn-outline-success d-none d-lg-block">Sign up</button></Link>}
                            {!isAuthenticated && <Nav.Link className="d-md-block d-lg-none d-md-none d-xl-none nav-item nav-link active" href="/login">Sign up</Nav.Link>}
                            {!isAuthenticated && <Nav.Link className="d-md-block d-lg-none d-md-none d-xl-none nav-item nav-link active" href="/login">Log in</Nav.Link>}
                            {isAuthenticated && <Nav.Link className="d-md-block d-lg-none d-md-none d-xl-none nav-item nav-link active" onClick={() => setShowAvatar(!showAvatar)} href="/logout">Log out</Nav.Link>}
                            {!isAuthenticated
                                ? <Link to="/login"><button type="button" onClick={() => setShowAvatar(!showAvatar)} className="btn btn-outline-success d-none d-lg-block">Log in</button></Link>
                                : <Link to="/logout"><button type="button" onClick={() => setShowAvatar(!showAvatar)} className="btn btn-outline-success d-none d-lg-block">Log out</button></Link>
                            }
                            {!isAuthenticated
                                ? <Link to="/login"><button type="button" className="btn d-none d-lg-block"><i className="fas fa-user fa-2x"></i></button></Link>
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
