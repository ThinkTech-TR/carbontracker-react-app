import React,{ useReducer, useState} from 'react';
import "./Login.css";
/*
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button} from "react-bootstrap";
import { FiFacebook } from "react-icons/fi";
import { FcGoogle} from "react-icons/fc"
*/

const fromReducer = (state, event) => {
    return {...state,
            [event.name]: event.value
            };
}

function Login() {
    const [formData, setFormData] = useReducer(fromReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = async e => {
                                    e.preventDefault();
                                    setSubmitting(true);

                                    setTimeout(() => {
                                        setSubmitting(false);
                                    }, 3000)
                                    }
    
    const handleChange = event => {
        setFormData({name: event.target.name,
            value: event.target.value});
    }   

  return (
            <div className="loginForm">
                {submitting && 
                    <div>
                        You are submitting  the following:
                        <ul>
                            {Object.entries(formData).map(([name, value]) => (
                                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                            ))}
                        </ul>
                    </div>
                }
                <form onSubmit={handleSubmit}>
                    <div>
                        <label for='emailInput' className='visuallyhidden'>Email</label>
                        <input name='email' placeholder="Enter an email" size = '30' type='email' onChange={handleChange}></input>
                    </div>
                    <div>
                        <label for='passwordInput' className='visuallyhidden'>Password</label>
                        <input name='password' placeholder='Enter a password' type='password' onChange={handleChange}></input>
                    </div>
                    <div>
                        <button type="submit" calss="centerButton">Log in</button>
                    </div>
                </form>
                    
            </div>

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
