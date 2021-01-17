import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useState} from "react";
import uuid from "react-uuid";
import Total from "./total.png";
import journeyIco from "./journey-icon.jpg";
import Image from 'react-bootstrap/Image';

import AddJourney from "./AddJourney";

import './Tracking.css';


function Tracking () {
    const [ trackRecords, setTrackRecords] =useState([
        {userId: "101",
        userName: "John",
        trackingItemId: "1",
        trackingItemName: "Housing",
        distance: null,
        emissionCO2: 10,
        changeble: false,
        trackingDate: "01.01.2021",
        idTrackRecord: "001",
        idJourney: null
       },
       {userId: "101",
        userName: "John",
        trackingItemId: "2",
        trackingItemName: "Car",
        distance: "15",
        emissionCO2: 8,
        changeble: true,
        trackingDate: "01.01.2021",
        idTrackRecord: "002",
        idJourney: "012"
       },
       {userId: "101",
        userName: "John",
        trackingItemId: "3",
        trackingItemName: "Pescatarian",
        distance: null,
        emissionCO2: 0.5,
        changeble: false,
        trackingDate: "01.01.2021",
        idTrackRecord: "003",
        idJourney: null
       },
       {userId: "101",
        userName: "John",
        trackingItemId: "4",
        trackingItemName: "Bus",
        distance: "15",
        emissionCO2: 2,
        changeble: true,
        trackingDate: "01.01.2021",
        idTrackRecord: "004",
        idJourney: "013"
       },
       {userId: "101",
        userName: "John",
        trackingItemId: "5",
        trackingItemName: "Train",
        distance: "15",
        emissionCO2: 2,
        changeble: true,
        trackingDate: "01.01.2021",
        idTrackRecord: "005",
        idJourney: "014"
       }
    ])

    const addJourney = (newTrackingItemId, newTrackingItemName, newDistance) => {
        const newJourney = {
            userId: "101",
            userName: "John",
            trackingItemId: newTrackingItemId,
            trackingItemName: newTrackingItemName,
            distance: newDistance,
            emissionCO2: 6,
            changeble: true,
            trackingDate: "01.01.2021",
            idTrackRecord: uuid(),
            idJourney: uuid()
        }
        const updatedRecords =[...trackRecords, newJourney];
        setTrackRecords(updatedRecords);
    }
    
    
    
    // inEditMode - a state variable to track the edit status
    const [inEditMode, setInEditMode] =useState({
        status: false,  // shows whether the records is in edit mode or not
        rowKey: null    // id of journey (idJourney) being edited and indicates which row on table is being edited
    });

    // distance - a state variable to hold the distance of the row being edited
    const [distance, setDistance] = useState(null);

    /**
     * 
     * @param id - the id of journey (idJourney)
     * @param currentDistance - the current distance for the journey
     */
    const onEdit = ({id, currentDistance}) => {
        setInEditMode({
            status: true,
            rowKey: id
        })
        setDistance(currentDistance);
    }
    /**
     * @param id - the id of journey (idJourney)
     * @param newDistance
     */
    const updateJourney =({id, newDistance}) => {
        // update data
        //inEditMode and distance are reset
        onCancel();
        //fetch updated list of Tracking records
    }
    const onSave = ({id, newDistance}) => {
        //calls updateJourney 
        updateJourney({id, newDistance});
    }

    const onCancel = () => {
        // reseet the inEditMode state value
        setInEditMode({
            status: false,
            rowkey: null
        });
        //reset the distance state value
        setDistance(null);
    }

    function daylyAmountCO2 (records) {
        let amountCO2 = 0;
        for (let i = 0; i < records.length; i ++){
            amountCO2 += records[i].emissionCO2;
        }
        return amountCO2;
    }
    return (
        <Container className="track-container">
            <Row>
                <Col xs={12} md={6}>
                    <h2 className="font-sm">Hi John,  estimated CO2 this month is {daylyAmountCO2(trackRecords) * 30} kg</h2>
                    <div className="chart-container chart-container-sm">
                        <Image src={Total} alt="total" fluid/>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="main-container">
                        <div className="container-data">
                            <Table responsive="sm" size="sm" className="font-sm">
                                <thead>
                                    <tr>
                                        <th>11/01/2021</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trackRecords.map((item) => (
                                            <tr key={item.idTrackRecord}>
                                                <td>{item.trackingItemName}</td>
                                                <td className="cell-co2">{item.emissionCO2} kg</td>
                                                <td className="cell-distance">{item.distance} mi</td>
                                                <td className="cell-button">
                                                    {item.changeble === true && <button className="button-green">-</button>}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                            </div>

                        <AddJourney addJourney={ addJourney }/>
                        <div className="button-day-container flex-contianer">
                            <div className="left-btn">
                                <button className="button-green">Back</button>
                            </div>
                            <div className="right-btn">
                                <button type="submit" className="button-green">Forward</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Tracking;