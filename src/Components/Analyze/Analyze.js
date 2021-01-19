import './Analyze.css';

function Analyze() {
    return (
        <div className="analyze-container d-flex flex-row">
            <div className="profile-container d-none d-lg-block navbar-brand font-lg text-center">
                <div className="avatar"> <img className="avatar-img" src="/images/profile-large.jpg" alt="Avatar" /></div>
                <p className="text-center"><strong>Mark Carby</strong></p>
                <div className="d-flex flex-row justify-content-center">
                    <div className="stats">
                        <h6>Stat 1</h6>
                        <h6><strong>45%</strong></h6>
                    </div>
                    <div className="stats">
                        <h6>Stat 2</h6>
                        <h6><strong>50%</strong></h6>
                    </div>
                    <div className="stats">
                        <h6>Stat 3</h6>
                        <h6><strong>10%</strong></h6>
                    </div>
                </div>
                <div className="text-center text-wrap"><h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</h6></div>
            </div>
            <div className="graphs-container">
                <p className="text-center green">graphs</p>
            </div>
            <div className="leaders-container d-none d-lg-block navbar-brand font-lg">
                <p className="text-center green"> Leaderboard</p>
            </div>
        </div>
    );
}

export default Analyze;
