import React from 'react';
import journeyIco from "./journey-icon.jpg";
import Image from 'react-bootstrap/Image';
import "./AddJourney.css";

class AddJourneyForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            journeyTypeName: "",
            distance: null,
            dateOfJourney: null
        };
    }
        //ChangeHandler
    render() {
        return (
            <form className="form-inline">
                <Image src={journeyIco} alt="total" />
                <p className="font-sm">Journey by </p>
                <select id="journeyType" className="font-sm">
                    <option value="car">Car</option>
                    <option value="train">Train</option>
                    <option value="bus">Bus</option>
                    <option value="plane">Plane</option>
                </select>
                <p className="font-sm">distance </p>
                <input id="distance" type="number" min="0" className="font-sm" placeholder="miles"></input>
                <button type="submit" className="button-green">+</button>
            </form>
        )
    }

    
}
export default AddJourneyForm;