import './Questionaire.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import people from './people.png'

function Questionaire({ currentQuestion,
    setCurrentQuestion,
    userData,
    updateUserData
}) {

    const totalQuestions = 5;

    const renderNextButton = () => {
        if (currentQuestion < totalQuestions) {
            return <button className="quest-btn" onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>
        } else {
            return <button className="quest-btn">Finish</button>
        }
    }
    const previousQuestion = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    return (
        <div className="questionaire-container">
            <div className="quest-main-container">
                <h3 className="quest-font-md">For whom do you wish to estimate carbon?</h3>
                <div className="quest-radio-group">
                    <label className="quest-radio-item" htmlFor="individual">
                        <input type="radio" id="individual" name="estimateType" value="individual" defaultChecked></input>
                        <div className="checkmark"></div>
                        <div className="margin-left-sm" ><FontAwesomeIcon icon="user" /></div>
                        <div className="margin-left-xsm">Individual</div>                        
                    </label>
                    <label className="quest-radio-item" htmlFor="company">
                        <input type="radio" id="company" name="estimateType" value="company"></input>
                        <span className="checkmark"></span>
                        <span className="margin-left-sm" ><FontAwesomeIcon icon="building" /></span>
                        <span className="margin-left-xsm">Company</span>                        
                    </label>
                    <label className="quest-radio-item" htmlFor="communityGroup">
                        <input type="radio" id="communityGroup" name="estimateType" value="communityGroup"></input>
                        <span className="checkmark"></span>
                        <span className="margin-left-sm" ><FontAwesomeIcon icon="users" /></span>
                        <span className="margin-left-xsm">Community Group</span>                        
                    </label>
                </div>
                <div className="quest-btn-container quest-font-sm">
                    <button className="quest-btn" onClick={() => previousQuestion()}>Back</button>
                    {renderNextButton()}
                </div>
            </div>
            <div className="quest-info-container quest-info-container-sm">
            <img src={people} className="quest-img" alt="People"></img>
            </div>

        </div>
    );
}

export default Questionaire;