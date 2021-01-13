
import Total from "./total.png";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
//import Dropdown from 'react-bootstrap/DropdownButton';
import './Tracking.css';


function Tracking () {
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
                        <div className="container-data">
                            <Table responsive="sm" size="sm" className="font-sm">
                                <thead>
                                    <tr>
                                        <th>11/01/2021</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td>Housing</td>
                                        <td>10 kg</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Car</td>
                                        <td>8 kg</td>
                                        <td>15 mi</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select className="diet-select" id="diet">
                                                <option value="Pescatarian">Pescatarian</option>
                                                <option value="Meat at most">Meat at most meal</option>
                                                <option value="Occasionally meat">Occasionally meat</option>
                                            </select>
                                        </td>
                                        <td>0.5 kg</td>
                                        <td>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Bus</td>
                                        <td>2 kg</td>
                                        <td>15 mi</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Train</td>
                                        <td>2 kg</td>
                                        <td>15 mi</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>


                        
                            <Table className="button-day-container">
                                <tbody>
                                    <tr>
                                        <td className="tdButtonBack">
                                            <button className="button-green">Back</button>
                                        </td>
                                        <td className="tdButtonForward">
                                            <button className="button-green">Forward</button>
                                        </td>
                                    </tr>
                                </tbody>
                            
                            

                            </Table>

                        
                    </div>

                </Col>

            </Row>
        </Container>
    );
};

export default Tracking;