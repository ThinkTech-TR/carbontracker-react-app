import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";

import './Header.css';
import Landing from '../Landing/Landing'
import Login from '../Login/Login'

function Header() {
    return (
        <Router>
        <div className="header">
            <header>
                <nav className="navbar navbar-expand-lg green-border navigation"> 
                    <a className="navbar-brand green" href="index.html">
                        <h3 className="font-lg"><i class="fas fa-tree"></i><span class="pl-4">Carby</span></h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <a className="nav-item nav-link active disabled" href="#">Track</a>
                        <a className="nav-item nav-link disabled" href="#">Analyze<span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link disabled" href="#">Learn</a>
                        <a className="nav-item nav-link disabled" href="#">Teams</a>
                        <a className="nav-item nav-link disabled" href="#">Feed</a>
                        </div>
                    </div>  
                    <Link to="/login"><button type="button" className="btn btn-outline-success d-none d-md-block">Sign in</button></Link> 
                        <button type="button" className="btn">
                        <i className="fas fa-user fa-2x"></i>
                        {/* <img src="/img/logOut.png" alt="Avatar" className="user-actions"/> */}
                        </button>
                </nav>
            </header>
        </div>
        <Switch>
            <Route path="/login"><Login /></Route>
            <Route path="/"><Landing /></Route>
            
        </Switch>
        </Router>
        );
    }
    
    export default Header;
    