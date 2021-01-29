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

function Results({ questionnaire }) {
    console.log(JSON.stringify(questionnaire));

    const [initialCarbon, setInitialCarbon] = useState([])

    const [mappingValues, setMappingValues] = useState([]);

    const [maxContribution, setMaxContribution] = useState(0);

    useEffect(() => {
        const getMaxContribution = (data) => {
            var maximum = Math.max.apply(Math, data.map(o => o.userCarbon));
            return maximum;
        }

        const getUserPercent = (val, max) => {
            return Math.round((val / max) * 100);
        };

        const updateCarbon = (data) => {
            setInitialCarbon(data);
            const max = getMaxContribution(data);
            const vals = data.filter(d => d.userCarbon !== 0).map(c => ({relativeCarbon: getUserPercent(c.userCarbon, max), carbonType: c.carbonType, carbonValue: c.userCarbon}));
            setMaxContribution(max);
            setMappingValues(vals.sort((a, b)=> a.carbonValue - b.carbonValue));            
         }

        axios
        .post(` https://aeyr60hdff.execute-api.eu-west-2.amazonaws.com/dev/initialcarbon`, questionnaire)
        .then(response => {
            updateCarbon(response.data);
        })
        .catch(error => console.log(error))
    }, [questionnaire])

   
    const getUserValue = (val) => {
        return Math.round(val * maxContribution / 100);
    };

    const getUserTotal = () => {
        let sum = 0.0;
        initialCarbon.forEach((c) => {
          sum += c.userCarbon;
        })
        return Math.round(sum);
    }   

    const series = mappingValues.map((c) => { return c.relativeCarbon; });

    const options = {
        labels: mappingValues.map((c) => { return c.carbonType; }),
        chart: {
            height: 350,
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
                           return getUserTotal() + ' Kg'                           
                        }
                    }
                }
            }
        }
    };

    return (
        <Container className="loginContainer">

            <Row className="row">
                <Col xs={12} md={6}>
                    <div id="chart">
                        <ReactApexChart options={options} series={series} type="radialBar" height={350} />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="font-sm"><p>Your carbon footprint could be much lower. Try to reduce number of your flights or choose low emission flights to help out the planet</p></div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Type</th>
                                <th scope="col">Carbon Footprint in Kg</th>
                                <th scope="col">Average in Kg</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-danger">
                                <th scope="row">1</th>
                                <td>Flights</td>
                                <td>7000</td>
                                <td>4500</td>
                            </tr>
                            <tr class="table-warning">
                                <th scope="row">2</th>
                                <td>Transport</td>
                                <td>500</td>
                                <td>650</td>
                            </tr>
                            <tr class="table-warning">
                                <th scope="row">3</th>
                                <td>Diet</td>
                                <td>1500</td>
                                <td>2200</td>
                            </tr>
                            <tr class="table-success">
                                <th scope="row">4</th>
                                <td>Housing</td>
                                <td>900</td>
                                <td>1642</td>
                            </tr>
                            <tr class="table-success">
                                <th scope="row">5</th>
                                <td>Products</td>
                                <td>654</td>
                                <td>1200</td>
                            </tr>
                            <tr class="table-info">
                                <th scope="row">6</th>
                                <td>Services</td>
                                <td>150</td>
                                <td>200</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row className="row">
                <div className="font-sm">
                    <strong>Sign up </strong>today to save your results.<br />
                    <ul>
                        <li><strong>Track</strong> Your ongoing carbon usage.</li>
                        <li><strong>Compete</strong> with Your organisation colleagues or friends.</li>
                        <li><strong>Reduce</strong> Your impact on the planet Today.</li>
                    </ul>



                    <div style={{ marginTop: "5px" }}>
                        <Link to="/login"><button type="button" className="btn btn-success d-md-block">Sign up now!</button></Link>
                    </div>
                </div>
            </Row>

        </Container>
    );
}

export default Results;

