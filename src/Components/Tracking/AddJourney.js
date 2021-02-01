import React, { useRef } from 'react';
import { useState } from "react";

import journeyIco from "./journey-icon.jpg";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare} from "@fortawesome/free-regular-svg-icons";
import "./AddJourney.css";



function AddJourneyForm({addJourney}) {
    
    const selectJourney = useRef(null);
    const inputMileage = useRef(null);

    const [trackingItemId, setTrackingItemId] = useState("");
    const [trackingItemName, setTrackingItemName] = useState("");
    const [distance, setDistance] = useState("");


    const handleChange = event => {
        switch (event.target.type) {
        case "number":
            setDistance(event.target.value);
            break;
        default:
            setTrackingItemId(event.target.value);
            setTrackingItemName(event.target.options[event.target.selectedIndex].text);
        }
    }

    const handleClick = () => {
        if (trackingItemId === "") {
            alert("Please choose a journey");
            selectJourney.current.focus();
        }else if (distance === "") {
            alert("Please add a mileage")
            inputMileage.current.focus();
        }
        else {
            addJourney(trackingItemId, trackingItemName, distance);
            setDistance("");
            setTrackingItemId("");
            setTrackingItemName("");
        }

    }
    
return (
    <div className="form-inline">
            {/*<Image src={journeyIco} alt="total" />*/}
            {/*<label htmlfor="journeyType" className="font-sm">Journey by </label>*/}
            <select 
                ref = { selectJourney }
                value = { trackingItemId }
                id="journeyType" 
                className="font-sm"
                onChange={ handleChange }>
                    <option value="0">Please choose a journey</option>
                    <option value="1">Car</option>
                    <option value="2">Bus</option>
                    <option value="3">Train</option>
                    <option value="4">Plane</option>
            </select>
            {/*<p className="font-sm">distance </p>*/}
            <input 
                ref = { inputMileage }
                onChange={ handleChange }
                id="distance" 
                type="number" 
                min="0" 
                className="font-sm" 
                placeholder="miles"
                value={ distance }>
            </input>
            <button onClick={handleClick} type="submit" className="button-green"><FontAwesomeIcon icon={ faPlusSquare } className="icon-size" /></button>
    </div>
    );
}
export default AddJourneyForm;