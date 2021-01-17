import React from 'react';
import { useState } from "react";
import journeyIco from "./journey-icon.jpg";
import Image from 'react-bootstrap/Image';
import "./AddJourney.css";

function AddJourneyForm({addJourney}) {
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
        addJourney(trackingItemId, trackingItemName, distance);
        setDistance("");
        setTrackingItemId("");
        setTrackingItemName("");
    }
    
return (
    <div className="form-inline">
        <Image src={journeyIco} alt="total" />
        <p className="font-sm">Journey by </p>
        <select
            id="journeyType" 
            className="font-sm"
            onChange={ handleChange }>
                <option value="2">Car</option>
                <option value="4">Bus</option>
                <option value="5">Train</option>
                <option value="6">Plane</option>
        </select>
        <p className="font-sm">distance </p>
        <input 
            onChange={ handleChange }
            id="distance" 
            type="number" 
            min="0" 
            className="font-sm" 
            placeholder="miles">
        </input>
        <button onClick={handleClick} type="submit" className="button-green">+</button>
    </div>
    );
}
export default AddJourneyForm;