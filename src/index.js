import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'; // import Auth0Provider for authentification
import reportWebVitals from './reportWebVitals';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faCheese } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);
library.add(faUsers);
library.add(faBuilding);
library.add(faHamburger);
library.add(faDrumstickBite);
library.add(faFish);
library.add(faCheese);
library.add(faCarrot);

ReactDOM.render(
  <Auth0Provider
    domain ='dev-3pypm-6h.eu.auth0.com'
    clientId='rS0dsu533kPe14Df9v0SVx1RnlfBDKeK'
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
     <App />
    </React.StrictMode>,
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
