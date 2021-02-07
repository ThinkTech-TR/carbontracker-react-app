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
import Landing from './Components/Landing/Landing'
import Tracking from "./Components/Tracking/Tracking";
import Questionaire from './Components/Questionaire/Questionaire'
import Footer from './Components/Footer/Footer'
import Analyze from "./Components/Analyze/Analyze";
import axios from 'axios'

function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const { user, isAuthenticated} = useAuth0();
    const [userIdAuth0, setUserIdAuth0] = useState();
    const [ userData, setUser] = useState();
    const [isUserSaved, setIsUserSaved] = useState(false);

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
        if (user) {
            setUserIdAuth0(user.sub.slice(6));
            setUser(user);
        }
        
        // Save questionnarie data to session storage
        const questDataAsString = JSON.stringify(questData)
        sessionStorage.setItem("questData", questDataAsString);
        console.log("saveSessionState: " + questDataAsString);

        // Handle save of authenticated user and questionnaire to database
        if (isAuthenticated && !isUserSaved) {
            
            const userId = user.sub.slice(6);
            console.log("userId: " + userId);

            axios
            .get(`https://aeyr60hdff.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/checkuser`)
            .then((response) => {
                console.log("checkuser response.data: " + response.data);
                setIsUserSaved(response.data);
                if (response.data === false)                {
                    console.log("Calling addupdateuser")
                    axios
                    .post(`https://aeyr60hdff.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/addupdateuser`, questData)
                    .then((response) => {
                        console.log("addupdateuser response.data: " + response.data);
                        setIsUserSaved(response.data);
                    })
                    .catch(error => console.log(error))
                }
            })
            .catch(error => console.log(error))
        }

    }, [user, questData, isAuthenticated, isUserSaved]);

    const getInitalPage = () => {
      if (isAuthenticated){
          return <Route exact path="/"><Tracking
                        isUserSaved={isUserSaved}
                        userIdAuth0={userIdAuth0} />
                </Route>
      } else
      {
        return <Route exact path="/"><Landing /></Route>
      }
    }

    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/login"><Login /></Route>
                    <Route path="/logout"><Logout /></Route>
                    <Route path="/analyze"><Analyze 
                        userData={userData}
                        isUserSaved={isUserSaved}
                        userIdAuth0={userIdAuth0}
                    /></Route>
                    <Route path="/tracking"><Tracking
                        isUserSaved={isUserSaved}
                        userIdAuth0={userIdAuth0}
                    /></Route>
                    <Route path="/results"><Results
                        questionnaire={questData}
                        userIdAuth0={userIdAuth0} />
                    </Route>
                    <Route path="/questionaire">< Questionaire
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        questData={questData}
                        updateQuestData={updateQuestData} />
                    </Route>
                    {getInitalPage()}
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;

