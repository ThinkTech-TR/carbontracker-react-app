import './Questionaire.css';
import Radio from "./Radio";
import people from './people.png'
import car from './car.png'
import food from './food.png'
import house from './house.png'
import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import {
    Link
} from "react-router-dom";

function Questionaire({ currentQuestion,
    setCurrentQuestion,
    userData,
    updateUserData
}) {

    const questions = [
        {
            question: "For whom do you wish to estimate carbon?",
            radioButtons: [
                { option: "Individual", icon: "user" },
                { option: "Company", icon: "building" },
                { option: "Community Group", icon: "users" }],
            picture: people,
            color: "quest-green"
        },
        {
            question: "How would you describe your diet?",
            radioButtons: [
                { option: "Eat meat at most meals", icon: "hamburger" },
                { option: "Occasionally eat meat", icon: "drumstick-bite" },
                { option: "Pescatarian", icon: "fish" },
                { option: "Vegetarian", icon: "cheese" },
                { option: "Vegan", icon: "carrot" },
            ],
            picture: food
        },
        {
            question: "What type of car do you own or use?",
            radioButtons: [
                { option: "Only use public transport" },
                { option: "Electric car" },
                { option: "Plug-in Hybrid car" },
                { option: "Hybrid car" },
                { option: "Small petrol or diesel car" },
                { option: "Medium petrol or diesel car" },
                { option: "Large petrol or diesel car" }
            ],
            picture: car
        },
        {
            question: "How many miles do you travel by car each year?", radioButtons: [
                { option: "1000 or less" },
                { option: "1001 to 5000" },
                { option: "5001 to 10,000" },
                { option: "Over 10,000" }
            ],
            picture: car
        },
        {
            question: "How many people live in your household?", radioButtons: [
                { option: "1" },
                { option: "2" },
                { option: "3" },
                { option: "4" },
                { option: "5" },
                { option: "6" },
                { option: "Over 6" }
            ],
            picture: house
        },
        {
            question: "What type of accomodation do you live in?", radioButtons: [
                { option: "Detached house" },
                { option: "Semi detached house" },
                { option: "End terrace" },
                { option: "Mid terrace" },
                { option: "Bungalow" },
                { option: "Converted flat" },
                { option: "Purpose built flat" }
            ],
            picture: house
        },
        {
            question: "When was your accomodation built?", radioButtons: [
                { option: "Pre 1919" },
                { option: "1919-44" },
                { option: "1945-64" },
                { option: "1965-83" },
                { option: "1983-92" },
                { option: "1993-99" },
                { option: "Pose 1999" }
            ],
            picture: house
        },
    ];

    let history = useHistory();
   
    useEffect(() => {

        const handleKeyPress = (e) => {
            if (e.code === "Enter") {
                if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1)
                } else {
                    history.push("/signup")
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [currentQuestion, history, questions.length, setCurrentQuestion])

    const optionToCamelCase = (option) => {
        return option.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    };

    const renderNextButton = () => {
        if (currentQuestion < questions.length - 1) {
            return <button className="quest-btn" onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>
        } else {
            return <Link to="/signup">
                <button className="quest-btn">Finish</button>
            </Link>
        }
    }

    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    return (
        <div className="questionaire-container">
            <div className="quest-main-container">
                <div className="quest-radio-group">
                    <h3 className="quest-font-md">{questions[currentQuestion].question}</h3>
                    {questions[currentQuestion].radioButtons.map((r, i) => <Radio key={optionToCamelCase(r.option)}
                        identifier={optionToCamelCase(r.option)}
                        option={r.option}
                        icon={r.icon}
                        checkedDefault={i === 0} />)}
                    <div className="quest-btn-container quest-font-sm">
                        <button className="quest-btn" onClick={() => previousQuestion()}>Back</button>
                        {renderNextButton()}
                    </div>
                </div>
            </div>

            <div className="quest-info-container quest-info-container-sm">
                <img src={questions[currentQuestion].picture} className="quest-img" alt="People"></img>
            </div>

        </div>
    );
}

export default Questionaire;