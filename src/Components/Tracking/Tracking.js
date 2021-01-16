import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState} from "react";
import Total from "./total.png";
import journeyIco from "./journey-icon.jpg";
import Image from 'react-bootstrap/Image';
//import Table from 'react-bootstrap/Table';

import AddJourney from "./AddJourney";
import TrackingData from "./TrackingData";
import './Tracking.css';


function Tracking () {
    const [ trackRecord, setTrackRecord] =useState([
        {userId: "101",
        userName: "John",
        trackingItemId: "1",
        trackingItemName: "Housing",
        distance: null,
        emissionCO2: "10",
        changeble: "false",
        trackingDate: "01.01.2021"
       },
       {userId: "101",
        userName: "John",
        trackingItemId: "2",
        trackingItemName: "Car",
        distance: "15",
        emissionCO2: "8",
        changeble: "true",
        trackingDate: "01.01.2021"
       },
       {userId: "101",
        userName: "John",
        trackingItemId: "3",
        trackingItemName: "Pescatarian",
        distance: null,
        emissionCO2: "0.5",
        changeble: "false",
        trackingDate: "01.01.2021"
       },
       {userId: "101",
        userName: "John",
        trackingItemId: "4",
        trackingItemName: "Bus",
        distance: "15",
        emissionCO2: "2",
        changeble: "true",
        trackingDate: "01.01.2021"
       },
       {userId: "101",
        userName: "John",
        trackingItemId: "5",
        trackingItemName: "Train",
        distance: "15",
        emissionCO2: "2",
        changeble: "true",
        trackingDate: "01.01.2021"
       }
    ])
    return (
        <Container className="track-container">
            <Row>
                <Col xs={12} md={6}>
                    <h2 className="font-sm">Hi John, estimated CO2 this month is 150 kg</h2>
                    <div className="chart-container chart-container-sm">
                        <Image src={Total} alt="total" fluid/>
                    </div>

                </Col>
                <Col xs={12} md={6}>
                    <div className="main-container">
                        <TrackingData />
                        <AddJourney />
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