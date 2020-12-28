import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import Landing from './Components/Landing/Landing'
import Footer from './Components/Footer/Footer'

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/login"><Login /></Route>
                    <Route path="/"><Landing /></Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;