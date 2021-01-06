import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";


class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [70, 50, 44, 33, 22, 10],
            options: {
                labels: ['Flights', 'Transport', 'Diet', 'Housing', 'Products', 'Services'],
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
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (w) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return 229
                                }
                            }
                        }
                    }
                },

            },


        };
    }

    render() {

        return (
            <Container className="loginContainer">

                <Row className="row">
                    <Col xs={12} md={6}>
                        <div id="chart">
                            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <b><p>Your carbon footprint can be much lower. Try to reduce your flights to help out the planer</p></b>
                        <ul className="list-group" style={{columns: 2}}>
                            <li className="list-group-item">Flights <span className="badge">70</span></li>
                            <li className="list-group-item">Transport <span className="badge">50</span></li>
                            <li className="list-group-item">Diet <span className="badge">44</span></li>
                            <li className="list-group-item">Housing <span className="badge">33</span></li>
                            <li className="list-group-item">Products <span className="badge">22</span></li>
                            <li className="list-group-item">Services <span className="badge">10</span></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ApexChart;