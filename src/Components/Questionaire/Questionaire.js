import './Questionaire.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            return <button>Complete</button>
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
                    <div className="quest-radio-item">
                        <input type="radio" id="individual" name="estimateType" value="individual" defaultChecked></input>
                        <label htmlFor="individual"><FontAwesomeIcon icon="user" />Individual</label>
                    </div>
                    <div className="quest-radio-item">
                        <input type="radio" id="company" name="estimateType" value="company"></input>
                        <label htmlFor="company"><FontAwesomeIcon icon="building" />Company</label>
                    </div>
                    <div className="quest-radio-item">
                        <input type="radio" id="communityGroup" name="estimateType" value="communityGroup"></input>
                        <label htmlFor="commnuityGroup"><FontAwesomeIcon icon="users" />Community Group</label>
                    </div>                    
                </div>
                <div className="quest-btn-container quest-font-sm">
                    <button className="quest-btn" onClick={() => previousQuestion()}>Back</button>
                    {renderNextButton()}
                </div>
            </div>
            <div className="quest-info-container quest-info-container-sm">Test 2</div>

        </div>
    );
}

export default Questionaire;