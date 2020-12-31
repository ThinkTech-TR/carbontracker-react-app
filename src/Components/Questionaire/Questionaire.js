//import './Questionaire.css';
import React from 'react';

function Questionaire({ currentQuestion,
    setCurrentQuestion,
    userData,
    updateUserData
}) {

    const totalQuestions = 5;

    const renderNextButton = () => {
        if (currentQuestion < totalQuestions) {
            return <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>
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
        <div>
            <h1>For whom do you wish to estimate carbon?</h1>
            <div className="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                <label class="form-check-label" for="exampleRadios1">
                   individual
                    </label>
            </div>
            <button onClick={() => previousQuestion()}>Back</button>
            {renderNextButton()}
        </div>
    );
}

export default Questionaire;