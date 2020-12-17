import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Login from './Components/Login/Login'


function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/login"><Login /></Route>
                    <Route path="/"><Landing /></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;