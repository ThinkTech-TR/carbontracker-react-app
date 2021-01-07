import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
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
                <nav className="navbar navbar-expand-lg green-border navigation">
                    <a className="navbar-brand green" href="index.html">
                        <h3 className="font-lg"><img src="/images/carbon-footprint-logo-mini.jpg" alt="BeGreen logo" /><span className="pl-4">BeGreen</span></h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            {isAuthenticated &&
                                <div className="navbar-nav">
                                    <Link to="/" className="nav-item nav-link active">Track</Link>
                                    <Link to="/" className="nav-item nav-link active">Analyze</Link>
                                    <Link to="/" className="nav-item nav-link active">Learn</Link>
                                    <Link to="/" className="nav-item nav-link active">Teams</Link>
                                    <Link to="/" className="nav-item nav-link active">Feed</Link>
                                </div>
                            }
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
