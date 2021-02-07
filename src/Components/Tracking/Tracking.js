import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import { faSave} from "@fortawesome/free-regular-svg-icons";
import { faWindowClose} from "@fortawesome/free-regular-svg-icons";
import { faEdit} from "@fortawesome/free-regular-svg-icons";
import { faForward} from "@fortawesome/free-solid-svg-icons";
import { faBackward} from "@fortawesome/free-solid-svg-icons";


import Total from "./total.png";
import Image from 'react-bootstrap/Image';

import AddJourney from "./AddJourney";

import './Tracking.css';


function Tracking ({isUserSaved, userIdAuth0}) {
    
    const [forDate, setForDate] = useState (() => {
        return new Date().toISOString().slice(0,10);
        });

    const [carbonInfoForMonth, setCarbonInfoForMonth] = useState([]);
    const [carbonInfoByDate, setCarbonInfoByDate] = useState([]);
    const [uptodateCarbon, setUptodateCarbon] = useState([]);
    const [total, setTotal] = useState(0);
    const [callUseEffect, setCallUseEffect] = useState(false);
    
    
    
    
    //const sDate = forDate.toISOString().slice(0,10);
    const sDate = new Date().toISOString().slice(0,10);
    const carbonValues = {};
    
    useEffect(() => {
        console.log("userIdAuth0 " + userIdAuth0);
        console.log("isUserSaved  " + isUserSaved);

        if(userIdAuth0 && isUserSaved === true) {
            const getTotal = (info) => {
                let sum = 0.0;
                info.forEach(i => {
                    sum += Math.round(i.emission);
                })
                setTotal(sum);
            }

            const graphInfoUpdate =(info) => {
                const finishtDate = new Date().toISOString().slice(0,10);
                const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0,10); 
                    
                const data = info.filter(info => (new Date(info.trackingDate).toISOString().slice(0,10) <= finishtDate && new Date(info.trackingDate).toISOString().slice(0,10) >= startDate));
                //console.log(data);
                getTotal(data);
                data.forEach (e => {
                    const itemCarbon = e.trackingItemName;
                    if (carbonValues[itemCarbon] === undefined) {
                        //carbonValues[itemCarbon] = Math.round(e.emission);
                        carbonValues[itemCarbon] = e.emission;
                    } else {
                        //carbonValues[itemCarbon]  =  Math.round(carbonValues[itemCarbon] + e.emission);
                        carbonValues[itemCarbon]  +=  e.emission;
                    }
                });
                console.log(carbonValues);
                setUptodateCarbon(carbonValues);
            }
            //Initiate a get request to API endpoint
            console.log("get trackingcarbonformonth called")
            axios.get(`https://aeyr60hdff.execute-api.eu-west-2.amazonaws.com/dev/user/${userIdAuth0}/forDate/${forDate}/trackingcarbonformonth`)
            //If successful, update the carbonInfoForMonth state
            .then(                
                response => {
                    console.log("trackingcarbonformonth response.data: ", JSON.stringify(response.data));
                    setCarbonInfoForMonth(response.data);
                    setCarbonInfoByDate(response.data.filter (info => info.trackingDate === forDate));
                    graphInfoUpdate(response.data);
                    setCallUseEffect(false);
                    //console.log(carbonhUptodate);
                })
            //If error, log out the error
            .catch(error => console.log(error));
            
        }
    }, [userIdAuth0, isUserSaved, forDate, callUseEffect]);

    function fetchInfoByDate (forDate) {
        setCarbonInfoByDate(carbonInfoForMonth.filter (info => info.trackingDate === new Intl.DateTimeFormat("en-GB").format(new Date(forDate))));
        
    };

    const addJourney = (newTrackingItemId, newTrackingItemName, newDistance) => {
        const idTrackRecord = Math.max(...carbonInfoForMonth.map(info => info.idTrackRecord)) + 1;
        const newJourney = {
            trackingItemId: newTrackingItemId,
            trackingItemName: newTrackingItemName,
            distance: newDistance,
            emission: "",
            changeable: true,
            trackingDate: forDate,
            idTrackRecord: idTrackRecord,
            idJourney: "0",
            authUserId: userIdAuth0,
        }
        //Make a post request, pass in the newJourney as the body
        axios.post(`https://aeyr60hdff.execute-api.eu-west-2.amazonaws.com/dev/user/${userIdAuth0}/forDate/${forDate}/trackingcarbonformonth`, newJourney)
        //if succesful, update carbonInfoByDate with response
        .then(() => axios.get(`https://aeyr60hdff.execute-api.eu-west-2.amazonaws.com/dev/user/${userIdAuth0}/forDate/${sDate}/trackingcarbonformonth`)) 
        .then(response => {setCarbonInfoForMonth(response.data);
                           setCarbonInfoByDate(response.data.filter (info => info.trackingDate === forDate));
                           setCallUseEffect(true);
            })
        //If error, log out the error
        .catch(error => console.log(error));
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
        const updatedJourney = carbonInfoByDate.find(item =>  item.idTrackRecord === id);
        updatedJourney.distance = newDistance;
        //console.log(updatedJourney);

        //Make a post request, pass in the updatedRecords as the body
        axios.put(` https://aeyr60hdff.execute-api.eu-west-2.amazonaws.com/dev/updatejourney`, updatedJourney)
        //if succesful, update carbonInfoByDate with response
        .then(() => axios.get(`https://aeyr60hdff.execute-api.eu-west-2.amazonaws.com/dev/user/${userIdAuth0}/forDate/${sDate}/trackingcarbonformonth`)) 
        .then(response => {setCarbonInfoForMonth(response.data);
                           setCarbonInfoByDate(response.data.filter (info => info.trackingDate === forDate));
                           setCallUseEffect(true);
            })
        //If error, log out the error
        .catch(error => console.log(error));

        //inEditMode and distance are reset
        onCancel();
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
        setForDate(new Date(new Date(forDate).setDate(new Date(forDate).getDate() - 1)).toISOString().slice(0,10));
        fetchInfoByDate(forDate);
    }

    const onClickBackward = () => {
        setForDate(new Date(new Date(forDate).setDate(new Date(forDate).getDate() + 1)).toISOString().slice(0,10));
        fetchInfoByDate(forDate);
    }
    
    const series = Object.getOwnPropertyNames(uptodateCarbon).map (i => {return Math.round(uptodateCarbon[i]);});
    const options = {
        labels: Object.getOwnPropertyNames(uptodateCarbon),
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                                show: true,
                                fontSize: '22px',
                            },
                        value: {
                            fontSize: '16px',
                            formatter: function (val) {
                                return val + "kg CO2"
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a,b) => {return Math.round(a + b)}) + "kg CO2"
                            }
                        }
                    }
                }
        }
    };    

    return (
        <Container className="track-container">
            <Row>
                <Col md={12} lg={6}>
                    <p className="font-sm">Your estimated carbon footprint for this month is {total} kg</p>
                    <div className="chart-container chart-container-sm">
                        <ReactApexChart options={options} series = {series} type="radialBar" height="500" />
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
                                                <td className="cell-co2">{item.emission}</td>
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
                                                                {item.changeable === true && <button
                                                                                                className="button-green"
                                                                                                onClick={() => onSave({id: item.idTrackRecord, newDistance: distance})}
                                                                                            >
                                                                                                <FontAwesomeIcon icon={ faSave } />
                                                                                            </button>
                                                                }
                                                                {item.changeable === true && <button
                                                                                                className="button-green"
                                                                                                onClick={() => onCancel()}
                                                                                            >
                                                                                                <FontAwesomeIcon icon={ faWindowClose } />
                                                                                            </button>
                                                                }
                                                            </React.Fragment>
                                                        ) :(
                                                            <React.Fragment>
                                                                {item.changeable === true && <button
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