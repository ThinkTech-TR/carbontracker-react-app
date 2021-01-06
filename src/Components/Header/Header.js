import React, {useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Header.css';
import { Avatar } from './Avatar';
import {
    Link
} from "react-router-dom";

function Header() {

    const [showAvatar, setShowAvatar] = useState(false);

    const {userinfo, isAuthenticated} = useAuth0();

    
    return (
        <header className="header">
            <div className="header-container">
                <nav className="navbar navbar-expand-lg green-border navigation">
                    <a className="navbar-brand green" href="index.html">
                        <h3 className="font-lg"><i className="fas fa-tree"></i><span className="pl-4">Carby</span></h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <a className="nav-item nav-link active disabled" href="#">Track</a>
                            <a className="nav-item nav-link disabled" href="#">Analyze<span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link disabled" href="#">Learn</a>
                            <a className="nav-item nav-link disabled" href="#">Teams</a>
                            <a className="nav-item nav-link disabled" href="#">Feed</a>
                        </div>
                    </div>
                    {!isAuthenticated && <Link to="/login"><button type="button" className="btn btn-outline-success d-none d-md-block">Sign up</button></Link>}
                    {!isAuthenticated
                        ? <Link to="/login"><button type="button" onClick={() => setShowAvatar(!showAvatar)} className="btn btn-outline-success d-none d-md-block">Log in</button></Link>
                        : <Link to="/logout"><button type="button" onClick={() => setShowAvatar(!showAvatar)} className="btn btn-outline-success d-none d-md-block">Log out</button></Link>
                    }
                    {/*<Link to="/login"><button type="button" onClick={() => setShowAvatar(!showAvatar)} className="btn btn-outline-success d-none d-md-block">Log in</button></Link> 
                    <Link to="/logout"><button type="button" onClick={() => setShowAvatar(!showAvatar)} className="btn btn-outline-success d-none d-md-block">Log out</button></Link> */}
                    {!isAuthenticated
                        ? <button type="button" className="btn"><i className="fas fa-user fa-2x"></i></button>
                        : <Avatar />
                    }


                </nav>
            </div>
        </header>
    );
}

export default Header;
