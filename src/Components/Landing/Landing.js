import './Landing.css';

function Landing() {
    return (
        <div className="page-container">
            <div>
                <h1 className="font-xl">One step at a time towards a better world</h1>
            </div>
            <div className="actions-container actions-container-sm">
                <div className="action-container action-container-sm animate__animated animate__fadeInRight animate__slow">
                    <div className="action red min-width-110">Estimate</div>
                    <div>Your carbon footprint</div>
                </div>
                <div
                    className="action-container action-container-sm animate__animated animate__fadeInRight animate__slow animate__delay-1s">
                    <div className="action orange min-width-110">Track</div>
                    <div>Your ongoing carbon usage</div>
                </div>
                <div
                    className="action-container action-container-sm animate__animated animate__fadeInRight animate__slow animate__delay-2s">
                    <div className="action purple min-width-110">Join</div>
                    <div>Your organisation or friends</div>
                </div>
                <div
                    className="action-container action-container-sm animate__animated animate__fadeInRight animate__slow animate__delay-3s">
                    <div className="action green min-width-110">Reduce</div>
                    <div>Your impact on the planet</div>
                </div>
            </div>
            <p>Our tracker allows you to measure, understand and track your carbon footprint as an
            individual or an organisation. Join together with friends or your team at work to reduce your
            impact on the planet.
            </p>
            <div className="carbon-button">
                <button type="button" className="btn btn-success">
                    <div className="font-md">Estimate Your Carbon Footprint</div>
                    <div className="font-sm">Start tracking today</div>
                </button>
            </div>
        </div>
    );
}

export default Landing;
