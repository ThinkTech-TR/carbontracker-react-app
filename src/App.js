import './App.css';
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Landing from './Components/Landing/Landing'
import Questionaire from './Components/Questionaire/Questionaire'

import Footer from './Components/Footer/Footer'

function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [userData, setUserData] = useState({
        entityType: '',
        diet: '',
        transportType: ''
    })

    const updateUserData = e => {
        setUserData({
          ...userData,
          [e.target.name]: e.target.value
        });
      };
    
    return (
        <div className="App">
            <Router className="main-page">
                <Header></Header>
                <Switch>
                    <Route path="/login"><Login /></Route>
                    <Route path="/signup"><Signup /></Route>
                    <Route path="/questionaire">< Questionaire 
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        userData={userData}
                        updateUserData={updateUserData} />
                    </Route>
                    <Route path="/"><Landing /></Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;