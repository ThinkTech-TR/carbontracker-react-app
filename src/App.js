import './App.css';
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Logout from './Components/Logout/Logout'
import Results from './Components/Results/Results'
import Tracking from "./Components/Tracking/Tracking";
import Landing from './Components/Landing/Landing'
import Questionaire from './Components/Questionaire/Questionaire'
import Footer from './Components/Footer/Footer'
import Analyze from "./Components/Analyze/Analyze";
import axios from 'axios'

function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const { user, isAuthenticated } = useAuth0();

    const [isUserSaved, setIsUserSaved] = useState(false);

    const getQuestComplete = () => {
        const data = sessionStorage.getItem("questComplete");
        console.log("getQuestComplete: " + data);
        if (data) {
            return data;
        };
        return false;
    }

    const [questComplete, setQuestComplete] = useState(() => {
        const initialQuestComplete = getQuestComplete();
        return initialQuestComplete;
    });

    const getQuestData = () => {
        const data = sessionStorage.getItem("questData");
        console.log("getSessionState: " + data);
        if (data) {
            return JSON.parse(data);
        };
        return {
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
        const questDataAsString = JSON.stringify(questData)
        sessionStorage.setItem("questData", questDataAsString);
        console.log("saveSessionState: " + questDataAsString);

        sessionStorage.setItem("questComplete", questComplete);
        

        // Handle save of user and questionnaire
        if (isAuthenticated && !isUserSaved) {
            const userId = user.sub.slice(6);
            console.log("userId: " + userId);
            console.log("questComplete " + questComplete);
            if (questComplete) {
                axios
                    .post(`https://aeyr60hdff.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/addupdateuser`, questData)
                    .then(() => {
                        setIsUserSaved(true);
                    })
                    .catch(error => console.log(error))
            }
            else {
                axios
                    .get(`https://aeyr60hdff.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/checkuser`)
                    .then((response) => {
                        setIsUserSaved(response.data);
                        console.log("checkUser: " + response.data);
                    })
                    .catch(error => console.log(error))
            }
        }

    }, [user, questData, isAuthenticated, questComplete, isUserSaved]);

    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/login"><Login /></Route>
                    <Route path="/logout"><Logout /></Route>
                    <Route path="/analyze"><Analyze /></Route>
                    <Route path="/tracking"><Tracking
                        isUserSaved={isUserSaved}
                    /></Route>
                    <Route path="/results"><Results
                        questionnaire={questData} />
                    </Route>
                    <Route path="/questionaire">< Questionaire
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        questData={questData}
                        updateQuestData={updateQuestData}
                        setQuestionaireComplete={setQuestComplete} />
                    </Route>
                    <Route exact path="/"><Landing /></Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );

}

export default App;

