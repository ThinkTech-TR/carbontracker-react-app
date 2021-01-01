import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { FiFacebook } from "react-icons/fi";
import { FcGoogle} from "react-icons/fc"
import { Divider } from "@material-ui/core";


function Login() {
  return (
        <div class="loginForm">
            <div>
                <label for="emailInput" className="visuallyhidden">Email</label>
                <input id="emailInput" placeholder="Enter an email"></input>
            </div>
            <div>
                <label for="passwordInput" className="visuallyhidden">Password</label>
                <input id="passwordInput" placeholder="Enter a password" type="password"></input>
            </div>
            <div>
                <button type="submit" calss="centerButton">Log in</button>
            </div>
            
                
        </div>
        /*
        <Container className="loginContainer" class="center">
            <Row className="row">
                <p>Log in to Carbon Tracker App. Calculating your carbon footprint can help you to prioritise the steps
                            you can take to shrink it, by identifying what the biggest opportunities for reductions are.</p>
                <Col xs={12} md={6} >
                    <div class="center" >
                        <div class="form-group">
                            <label for="email_input" className="visuallyhidden">Email</label>
                            <input id="email_input" placeholder="Enter an email"></input>
                        </div>
                        <div class="form-group">
                            <label for="password_input" className="visuallyhidden">Password</label>
                            <input id="password_input" placeholder="Enter a password"></input>
                        </div>
                        <div class="form-group">
                            <Button variant="outline-success" className="loginButton">Log In</Button>    
                        </div>
                    </div>
                </Col>    
            </Row>
        </Container>
        */
          /*  
            <Container className="loginContainer">
                <Row className="row">
                    <div>
                        <p>Log in to Carbon Tracker App. Calculating your carbon footprint can help you to prioritise the steps
                            you can take to shrink it, by identifying what the biggest opportunities for reductions are.</p>
                    </div>
                    <Col xs={12} md={6}>
                        <h3 className="visuallyhidden">Log in with Email</h3>
                        <label for="email_input" className="visuallyhidden">Email</label>
                        <input id="email_input"></input>
                        <br></br>
                        <label for="password_input" className="visuallyhidden">Password</label>
                        <input id="password_input"></input>
                        <br></br>
                        <Button variant="outline-success" className="loginButton">Log In</Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <p>OR</p>
                        <div className="d-md-none">
                            <Button variant="outline-success" className="btn btn-outline-secondary">< FiFacebook /></Button>
                            <Button variant="outline-success" className="btn btn-outline-secondary">< FcGoogle /></Button>
                        </div>
                        <div className="d-none d-md-block">
                            <Button variant="outline-success" className="btn btn-outline-secondary">< FiFacebook /> Sign in with Facebook</Button>
                            <Button variant="outline-success" className="btn btn-outline-secondary">< FcGoogle />Sign in with Google</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            */
        );
}
export default Login;
