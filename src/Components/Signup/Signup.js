import "./Signup.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button} from "react-bootstrap";
import { FiFacebook } from "react-icons/fi";
import { FcGoogle} from "react-icons/fc"


function Signup() {
  return (
            <Container className="loginContainer">
                <Row className="row">
                    <div>
                        <p>Sign up in to Carbon Tracker App. Calculating your carbon footprint can help you to prioritise the steps
                            you can take to shrink it, by identifying what the biggest opportunities for reductions are.</p>
                    </div>
                    <Col xs={12} md={6}>
                        <h3 className="visuallyhidden">Sign up with Email</h3>
                        <label htmlFor="email_input" className="visuallyhidden">Email</label>
                        <input id="email_input"></input>
                        <br></br>
                        <label htmlFor="password_input" className="visuallyhidden">Password</label>
                        <input id="password_input"></input>
                        <br></br>
                        <Button variant="outline-success" className="loginButton">Sign up</Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <p>OR</p>
                        <div className="d-md-none">
                            <Button variant="outline-success" className="btn btn-outline-secondary">< FiFacebook /></Button>
                            <Button variant="outline-success" className="btn btn-outline-secondary">< FcGoogle /></Button>
                        </div>
                        <div className="d-none d-md-block">
                            <Button variant="outline-success" className="btn btn-outline-secondary">< FiFacebook /> Sign up with Facebook</Button>
                            <Button variant="outline-success" className="btn btn-outline-secondary">< FcGoogle />Sign up with Google</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
}
export default Signup;
