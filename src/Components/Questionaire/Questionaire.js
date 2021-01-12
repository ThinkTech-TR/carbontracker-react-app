import './Questionaire.css';
import Radio from "./Radio";
import people from './people.png'
import car from './car.png'
import food from './food.png'
import house from './house.png'
import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useCallback } from "react";
import { useState } from "react";

function Questionaire({ currentQuestion,
    setCurrentQuestion,
    questData,
    updateQuestData
}) {

    const [nextButtonLabel, setNextButtonLabel] = useState("Next");

    const questions = [
        {
            question: "For whom do you wish to estimate carbon?",
            questDataItem: "entityType",
            radioButtons: [
                { option: "Individual", value: "individual", icon: "user" },
                { option: "Company", value: "company", icon: "building" },
                { option: "Community Group", value: "communityGroup", icon: "users" }],
            picture: people
        },
        {
            question: "How would you describe your diet?",
            questDataItem: "diet",
            radioButtons: [
                { option: "Eat meat at most meals", value: "frequentMeatEater", icon: "hamburger" },
                { option: "Occasionally eat meat", value: "meatEater", icon: "drumstick-bite" },
                { option: "Pescatarian", value:"pescatarian", icon: "fish" },
                { option: "Vegetarian", value:"vegetarian", icon: "cheese" },
                { option: "Vegan", value:"vegan", icon: "carrot" },
            ],
            picture: food
        },
        {
            question: "What type of car do you own or use?",
            questDataItem: "carUsage",
            radioButtons: [
                { option: "Only use public transport", value: "noCar" },
                { option: "Electric car", value: "electric"},
                { option: "Plug-in Hybrid car", value: "pluginHybrid" },
                { option: "Hybrid car", value: "hybrid" },
                { option: "Small petrol or diesel car", value: "smallPetrolDiesel" },
                { option: "Medium petrol or diesel car", value: "mediumPetrolDiesel" },
                { option: "Large petrol or diesel car", value: "largePetrolDiesel" }
            ],
            picture: car
        },
        {
            question: "How many miles do you travel by car each year?", 
            questDataItem: "carMileage",
            radioButtons: [
                { option: "1000 or less", value: "lessThan1000" },
                { option: "1001 to 5000", value: "1001to5000" },
                { option: "5001 to 10,000", value: "5001to10000" },
                { option: "Over 10,000", value: "over10000" }
            ],
            picture: car
        },
        {
            question: "How many people live in your household?", 
            questDataItem: "numberInHousehold",
            radioButtons: [
                { option: "1", value: "1" },
                { option: "2", value: "2" },
                { option: "3", value: "3" },
                { option: "4", value: "4" },
                { option: "5", value: "5" },
                { option: "6", value: "6" },
                { option: "Over 6", value: "over6" }
            ],
            picture: house
        },
        {
            question: "What type of accomodation do you live in?",  
            questDataItem: "houseType",
            radioButtons: [
                { option: "Detached house", value: "detached"  },
                { option: "Semi detached house", value: "semiDetatched"},
                { option: "End terrace", value: "endTerrace"},
                { option: "Mid terrace", value: "midTerrace" },
                { option: "Bungalow", value: "bungalow" },
                { option: "Converted flat", value: "convertedFlat" },
                { option: "Purpose built flat", value: "purposeBuiltFlat" }
            ],
            picture: house
        },
        {
            question: "When was your accomodation built?",   
            questDataItem: "houseAge",
            radioButtons: [
                { option: "Pre 1919", value: "pre1919" },
                { option: "1919-44", value: "1919-44" },
                { option: "1945-64", value: "1945-64" },
                { option: "1965-83", value: "1965-83" },
                { option: "1983-92", value: "1983-92" },
                { option: "1993-99", value: "1993-99" },
                { option: "Post 1999", value: "post1999" }
            ],
            picture: house
        },
    ];

    const updateRadio = (e) => {
        updateQuestData(e);
    }

    let history = useHistory();
    
    const moveToNextQuestion = useCallback(() => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);          
        } else {
            console.log(questData);
            history.push("/results");
        }
        if (currentQuestion === questions.length - 2){
           setNextButtonLabel("Finish");
        }
    }, [setCurrentQuestion, currentQuestion, questions.length, history, questData]);

    useEffect(() => {

        const handleKeyPress = (e) => {
            if (e.code === "Enter") {
                moveToNextQuestion();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [moveToNextQuestion]);

    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setNextButtonLabel("Next");
        }
    };

    const isRadioChecked = (value) => {
        return questData[questions[currentQuestion].questDataItem] === value;
    };

    return (
        <div className="questionaire-container">
            <div className="quest-main-container">
                <div className="quest-radio-group">
                    <h3 className="quest-font-md">{questions[currentQuestion].question}</h3>
                    {questions[currentQuestion].radioButtons.map((r, i) => <Radio key={r.value}
                        option={r.option}
                        questDataItem={questions[currentQuestion].questDataItem}
                        questDataValue={r.value}
                        icon={r.icon}
                        isChecked={isRadioChecked(r.value)}
                        updateRadio={updateRadio} />)}
                    <div className="quest-btn-container quest-font-sm">
                        <button className="quest-btn button-green" onClick={() => previousQuestion()}>Back</button>
                        <button className="quest-btn button-green" onClick={moveToNextQuestion}>{nextButtonLabel}</button>
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