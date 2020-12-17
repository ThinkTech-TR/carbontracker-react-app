import './Header.css';


function Header() {
    return (
        <div className="header">
            <header>
                <nav className="navbar navbar-expand-lg green-border navigation"> 
                    <a className="navbar-brand green" href="index.html">
                        <h3 className="font-lg"><i class="fas fa-tree"></i><span class="pl-4">Carby</span></h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                        <a className="nav-item nav-link active disabled" href="#">Track</a>
                        <a className="nav-item nav-link disabled" href="#">Analyze<span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link disabled" href="#">Learn</a>
                        <a className="nav-item nav-link disabled" href="#">Teams</a>
                        <a className="nav-item nav-link disabled" href="#">Feed</a>
                        </div>
                    </div>  
                        <button type="button" className="btn btn-outline-success d-none d-md-block">Sign in</button>
                        <button type="button" className="btn">
                        <i class="fas fa-user fa-2x"></i>
                        {/* <img src="/img/logOut.png" alt="Avatar" className="user-actions"/> */}
                        </button>
                </nav>
            </header>
        </div>
        );
    }
    
    export default Header;
    