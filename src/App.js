import './App.css';
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Logout from './Components/Logout/Logout'
import Results from './Components/Results/Results'
import Signup from './Components/Signup/Signup'
import Landing from './Components/Landing/Landing'
import Questionaire from './Components/Questionaire/Questionaire'

import Footer from './Components/Footer/Footer'

function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [questData, setQuestData] = useState({
        entityType: "individual",
        diet: "frequentMeatEater",
        carUsage: "noCar",
        carMileage: "lessThan1000",
        numberInHousehold: "1",
        houseType:  "detached",
        houseAge: "pre1919"
    });

     const updateQuestData = e => {
        setQuestData({
          ...questData,
          [e.target.name]: e.target.value
        });
      };
    
    return (
        <div className="App">
            <Router className="main-page">
                <Header></Header>
                <Switch>
                    <Route path="/login"><Login /></Route>
                    <Route path="/logout"><Logout /></Route>
                    <Route path="/signup"><Signup /></Route>
                    <Route path="/results"><Results /></Route>
                    <Route path="/questionaire">< Questionaire 
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        questData={questData}
                        updateQuestData={updateQuestData} />
                    </Route>
                    <Route path="/"><Landing /></Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;