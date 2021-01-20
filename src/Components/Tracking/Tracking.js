import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import uuid from "react-uuid";
import { faSave} from "@fortawesome/free-regular-svg-icons";
import { faWindowClose} from "@fortawesome/free-regular-svg-icons";
import { faEdit} from "@fortawesome/free-regular-svg-icons";
import { faForward} from "@fortawesome/free-solid-svg-icons";
import { faBackward} from "@fortawesome/free-solid-svg-icons";


import Total from "./total.png";
import Image from 'react-bootstrap/Image';

import AddJourney from "./AddJourney";

import './Tracking.css';



function Tracking () {
    const [carbonInfoForMonth, setCarbonInfoForMonth] = useState([
        {userId: "101",
        userName: "John",
        trackingItemId: "1",
        trackingItemName: "Housing",
        distance: null,
        emissionCO2: 10,
        changeble: false,
        trackingDate: "19/01/2021",
        idTrackRecord: "001",
        idJourney: null
       },
       {userId: "101",
        userName: "John",
        trackingItemId: "3",
        trackingItemName: "Pescatarian",
        distance: null,
        emissionCO2: 0.5,
        changeble: false,
        trackingDate: "19/01/2021",
        idTrackRecord: "003",
        idJourney: null
       },

       {userId: "101",
       userName: "John",
       trackingItemId: "1",
       trackingItemName: "Housing",
       distance: null,
       emissionCO2: 10,
       changeble: false,
       trackingDate: "02/01/2021",
       idTrackRecord: "004",
       idJourney: null
      },
      {userId: "101",
       userName: "John",
       trackingItemId: "2",
       trackingItemName: "Car",
       distance: "15",
       emissionCO2: 8,
       changeble: true,
       trackingDate: "20/01/2021",
       idTrackRecord: "005",
       idJourney: "012"
      },
      {userId: "101",
       userName: "John",
       trackingItemId: "3",
       trackingItemName: "Pescatarian",
       distance: null,
       emissionCO2: 0.5,
       changeble: false,
       trackingDate: "20/01/2021",
       idTrackRecord: "006",
       idJourney: null
      },
      {userId: "101",
       userName: "John",
       trackingItemId: "4",
       trackingItemName: "Bus",
       distance: "15",
       emissionCO2: 2,
       changeble: true,
       trackingDate: "20/01/2021",
       idTrackRecord: "007",
       idJourney: "013"
      },
      {userId: "101",
       userName: "John",
       trackingItemId: "5",
       trackingItemName: "Train",
       distance: "15",
       emissionCO2: 2,
       changeble: true,
       trackingDate: "20/01/2021",
       idTrackRecord: "008",
       idJourney: "014"
      },

      {userId: "101",
      userName: "John",
      trackingItemId: "1",
      trackingItemName: "Housing",
      distance: null,
      emissionCO2: 10,
      changeble: false,
      trackingDate: "18/01/2021",
      idTrackRecord: "009",
      idJourney: null
     },
     {userId: "101",
      userName: "John",
      trackingItemId: "2",
      trackingItemName: "Car",
      distance: "15",
      emissionCO2: 8,
      changeble: true,
      trackingDate: "18/01/2021",
      idTrackRecord: "010",
      idJourney: "012"
     },
     {userId: "101",
      userName: "John",
      trackingItemId: "3",
      trackingItemName: "Pescatarian",
      distance: null,
      emissionCO2: 0.5,
      changeble: false,
      trackingDate: "18/01/2021",
      idTrackRecord: "011",
      idJourney: null
     },
     {userId: "101",
      userName: "John",
      trackingItemId: "4",
      trackingItemName: "Bus",
      distance: "15",
      emissionCO2: 2,
      changeble: true,
      trackingDate: "18/01/2021",
      idTrackRecord: "012",
      idJourney: "013"
     },
     {userId: "101",
      userName: "John",
      trackingItemId: "5",
      trackingItemName: "Train",
      distance: "15",
      emissionCO2: 2,
      changeble: true,
      trackingDate: "18/01/2021",
      idTrackRecord: "013",
      idJourney: "014"
     }
   
    ]);
    const [forDate, setForDate] = useState (() => {
        return new Date();
    });

    const [carbonInfoByDate, setCarbonInfoByDate] = useState(() => {
        return carbonInfoForMonth.filter (info => info.trackingDate === new Intl.DateTimeFormat("en-GB").format(new Date(forDate)))
    });

    function fetchInfoByDate (forDate) {
        setCarbonInfoByDate(carbonInfoForMonth.filter (info => info.trackingDate === new Intl.DateTimeFormat("en-GB").format(new Date(forDate))));
    };

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
        const updatedRecords =[...carbonInfoByDate, newJourney];
        setCarbonInfoByDate(updatedRecords);
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
        let updatedRecords = {};
        carbonInfoByDate.forEach(item => {
            if (item.idTrackRecord === id) {
                updatedRecords = item;
            }
        })
        updatedRecords.distance = newDistance;
        updatedRecords.emissionCO2 = 0.3 * newDistance;
        //updatedRecords.distance = newDistance;
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

    const onClickForward = () => {
        //console.log("forDate   " + forDate);
        setForDate(new Date(forDate.setDate(forDate.getDate() - 1)));
        fetchInfoByDate(forDate);
    }

    const onClickBackward = () => {
        setForDate(new Date(forDate.setDate(forDate.getDate() + 1)));
        fetchInfoByDate(forDate);
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
                <Col md={12} lg={6}>
                    <h2 className="font-sm">Hi John,  estimated CO2 this month is {daylyAmountCO2(carbonInfoByDate) * 30} kg</h2>
                    <div className="chart-container chart-container-sm">
                        <Image src={Total} alt="total" fluid/>
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="main-container">
                        <div className="container-data">
                            <h5>{new Intl.DateTimeFormat("en-GB").format(new Date(forDate))}</h5>
                            <Table responsive="sm" size="sm" className="font-sm">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="th-align">kg CO2e</th>
                                        <th className="th-align">Mileage</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carbonInfoByDate.map((item) => (
                                            <tr key={item.idTrackRecord}>
                                                <td>{item.trackingItemName}</td>
                                                <td className="cell-co2">{item.emissionCO2}</td>
                                                <td className="cell-distance">
                                                    {
                                                        inEditMode.status && inEditMode.rowKey === item.idTrackRecord ? (
                                                            <input className="input-distance" value={ distance }
                                                                    onChange={(event) => setDistance(event.target.value)}
                                                            />
                                                        ) : (
                                                            item.distance
                                                        )
                                                    }
                                                </td>
                                                <td className="cell-button">
                                                    {
                                                        inEditMode.status && inEditMode.rowKey === item.idTrackRecord ? (
                                                            <React.Fragment>
                                                                {item.changeble === true && <button
                                                                                                className="button-green"
                                                                                                onClick={() => onSave({id: item.idTrackRecord, newDistance: distance})}
                                                                                            >
                                                                                                <FontAwesomeIcon icon={ faSave } />
                                                                                            </button>
                                                                }
                                                                {item.changeble === true && <button
                                                                                                className="button-green"
                                                                                                onClick={() => onCancel()}
                                                                                            >
                                                                                                <FontAwesomeIcon icon={ faWindowClose } />
                                                                                            </button>
                                                                }
                                                            </React.Fragment>
                                                        ) :(
                                                            <React.Fragment>
                                                                {item.changeble === true && <button
                                                                                                className="button-green"
                                                                                                onClick={() => onEdit({id: item.idTrackRecord, currentDistance: item.distance})}
                                                                                            >
                                                                                                <FontAwesomeIcon icon={ faEdit } />
                                                                                            </button>
                                                                }
                                                            </React.Fragment>
                                                        )
                                                    }
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
                                    <React.Fragment>
                                    {!(new Intl.DateTimeFormat("en-GB").format(new Date(forDate)) === new Intl.DateTimeFormat("en-GB").format(new Date())) &&
                                        <button 
                                            className="button-green"
                                            onClick={() => onClickBackward()}
                                        >
                                            <FontAwesomeIcon icon={ faBackward } />
                                        </button>
                                    }
                                    </React.Fragment>
                            </div>        

                            <div className="right-btn">
                                <button 
                                    className="button-green"
                                    onClick={() => onClickForward()}
                                >
                                    <FontAwesomeIcon icon={ faForward } />
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Tracking;