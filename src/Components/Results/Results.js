import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import ReactApexChart from 'react-apexcharts'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResultRow from './ResultRow';

function Results({ questionnaire, userIdAuth0 }) {
    const [initialCarbon, setInitialCarbon] = useState([])

    const [mappingValues, setMappingValues] = useState([]);

    const [maxContribution, setMaxContribution] = useState(0);

    const [userTotal, setUserTotal] = useState(0);

    const [averageTotal, setAverageTotal] = useState(0);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getMaxContribution = (data) => {
            var maximum = Math.max.apply(Math, data.map(o => o.userCarbon));
            return maximum;
        }

        const getUserPercent = (val, max) => {
            return Math.round((val / max) * 100);
        };

        const getUserTotal = (data) => {
            let sum = 0.0;
            data.forEach((c) => {
                sum += c.userCarbon;
            })
            setUserTotal(Math.round(sum));
        }

        const getAverageTotal = (data) => {
            let sum = 0.0;
            data.forEach((c) => {
                sum += c.averageCarbon;
            })
            setAverageTotal(Math.round(sum));
        }

        const updateCarbon = (data) => {
            getUserTotal(data);
            getAverageTotal(data);
            setInitialCarbon(data);
            const max = getMaxContribution(data);
            const vals = data.filter(d => d.userCarbon !== 0).map(c => ({ relativeCarbon: getUserPercent(c.userCarbon, max), carbonType: c.carbonType, carbonValue: c.userCarbon }));
            setMaxContribution(max);
            setMappingValues(vals.sort((a, b) => a.carbonValue - b.carbonValue));
        }

        setLoading(true)
        axios
            .post(` https://aeyr60hdff.execute-api.eu-west-2.amazonaws.com/dev/initialcarbon`, questionnaire)
            .then(response => {
                updateCarbon(response.data);
            })
            .catch(error => console.log(error))
            .finally(setLoading(false))

    }, [questionnaire])


    const getUserValue = (val) => {
        return Math.round(val * maxContribution / 100);
    };

    const message = () => {

        const diffAverage = userTotal - averageTotal;
        const threshold = 500;
        const signUpMessage = "Sign up to track carbon and help reduce your footprint";
        if (diffAverage > threshold) {
            return `Your carbon footprint is higher than the average of ${averageTotal} Kg and could be much lower. ${signUpMessage}.`;
        }
        if (diffAverage < threshold && diffAverage > -1 * threshold) {
            return `Your carbon footprint is around the average of  ${averageTotal} Kg but could be lower. ${signUpMessage}.`;
        }
        return `Well done your carbon footprint is below the average of ${averageTotal} Kg. ${signUpMessage} further.`;

    }

    const series = mappingValues.map((c) => { return c.relativeCarbon; });

    const options = {
        labels: mappingValues.map((c) => { return c.carbonType; }),
        chart: {
            height: "400",
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                        formatter: function (val) {
                            return getUserValue(val) + ' Kg';
                        }
                    },
                    total: {
                        show: true,
                        label: 'Total Carbon',
                        formatter: function (w) {
                            return userTotal + ' Kg'
                        }
                    }
                }
            }
        }
    };

    if (loading) {
        return (
            <Container className="loginContainer">
                <Row className="row">
                    <p>Loading Carbon</p>
                </Row>
            </Container>
        );
    }
    else {
        return (
            <Container className="loginContainer">


                <Row className="row">
                    <Col xs={12} md={6}>
                        <div id="chart">
                            <ReactApexChart options={options} series={series} type="radialBar" height="500" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="font-sm margin-top-xsm"><p>{message()}</p></div>
                        <table className="font-xs table table-hover">
                            <thead className="font-xs">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">CO2 in Kg</th>
                                    <th scope="col">Avg in Kg</th>
                                </tr>
                            </thead>
                            <tbody>
                                {initialCarbon.map((c, ind) => {
                                    return <ResultRow key={c.carbonType} carbonItem={c} ind={ind + 1} />
                                })}
                            </tbody>
                        </table>
                    </Col>
                </Row>
                {!userIdAuth0 &&
                <Row className="row">
                    <div className="font-sm margin-left-15px">
                        <strong>Sign up </strong>today to save your results.<br />
                        <ul>
                            <li><strong>Track</strong> Your ongoing carbon usage.</li>
                            <li><strong>Compete</strong> with Your organisation colleagues or friends.</li>
                            <li><strong>Reduce</strong> Your impact on the planet Today.</li>
                        </ul>
                        <div className="margin-top-xsm margin-btm-sm">
                            <Link to="/login"><button type="button" className="btn btn-success d-md-block">Sign up now!</button></Link>
                        </div>
                    </div>
                </Row>
                }
            </Container>
        );
    }
}

export default Results;

