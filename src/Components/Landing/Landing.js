import './Landing.css';
import 'animate.css';
import {
    Link
} from "react-router-dom";

function Landing() {
    return (
        <div className="landing-container">
            <div>
                <h1 className="font-xl">One step at a time towards a better world</h1>
            </div>
            <div className="actions-container actions-container-sm">
                <div className="action-container action-container-sm animate__animated animate__fadeInRight animate__slow">
                    <div className="font-lg action red min-width-110">Estimate</div>
                    <div className="font-md">Your carbon footprint</div>
                </div>
                <div
                    className="action-container action-container-sm animate__animated animate__fadeInRight animate__slow animate__delay-1s">
                    <div className="font-lg action orange min-width-110">Track</div>
                    <div className="font-md">Your ongoing carbon usage</div>
                </div>
                <div
                    className="action-container action-container-sm animate__animated animate__fadeInRight animate__slow animate__delay-2s">
                    <div className="font-lg action purple min-width-110">Join</div>
                    <div className="font-md">Your organisation or friends</div>
                </div>
                <div
                    className="action-container action-container-sm animate__animated animate__fadeInRight animate__slow animate__delay-3s">
                    <div className="font-lg action green min-width-110 font-md">Reduce</div>
                    <div className="font-md"> Your impact on the planet</div>
                </div>
            </div>
            <p className="font-sm">Our tracker allows you to measure, understand and track your carbon footprint as an
            individual or an organisation. Join together with friends or your team at work to reduce your
            impact on the planet.
            </p>

            <div className="carbon-button-container">
                <Link to="/questionaire">
                    <button type="button" className="button-landing">
                        <div className="font-md padding-sm">Estimate Your Carbon Footprint</div>
                        <div className="font-sm padding-sm">Start tracking today</div>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Landing;
