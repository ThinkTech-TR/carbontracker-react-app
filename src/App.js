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
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Questionaire from './Components/Questionaire/Questionaire'
import Tracking from "./Components/Tracking/Tracking";
import Analyze from "./Components/Analyze/Analyze";
import Footer from './Components/Footer/Footer'

function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const { user } = useAuth0();

    const getQuestData = () => {
        const data =  sessionStorage.getItem("questData");
        console.log("getSessionState: " + data);
        if (data){
            return JSON.parse(data);
        };
        return  {
            userCategory: "individual",
            diet: "frequentMeatEater",
            carUsage: "noCar",
            carMileage: "lessThan1000",
            numberInHousehold: "1",
            houseType: "detached",
            houseAge: "pre1919"
        };
    }

    const [questData, setQuestData] = useState(() => {
        const initialQuestData = getQuestData();
        return initialQuestData;
    });

    const updateQuestData = e => {
        setQuestData({
            ...questData,
            [e.target.name]: e.target.value
        });   
    };

    useEffect(() => {
        console.log(user === undefined ? "unknown" : user.sub);
        const questDataAsString =  JSON.stringify(questData)
        sessionStorage.setItem("questData", questDataAsString);
        console.log("saveSessionState: " + questDataAsString);
    }, [user, questData]);

    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/login"><Login /></Route>
                    <Route path="/logout"><Logout /></Route>
                    <Route path="/signup"><Signup /></Route>
                    <Route path="/results"><Results /></Route>
                    <Route path="/tracking"><Tracking /></Route>
                    <Route path="/analyze"><Analyze /></Route>
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