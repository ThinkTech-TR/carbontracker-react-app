import React from 'react';
import Table from 'react-bootstrap/Table';
import "./TrackingData.css";

class TrackingDataTable extends React.Component{
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
                        <td className="cell-co2">10 kg</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Car</td>
                        <td className="cell-co2">8 kg</td>
                        <td className="cell-distance">15 mi</td>
                        <td className="cell-button">
                            <button className="button-green">-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Pescatarian</td>
                        <td className="cell-co2">0.5 kg</td>
                        <td>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Bus</td>
                        <td className="cell-co2">2 kg</td>
                        <td className="cell-distance">15 mi</td>
                        <td className="cell-button">
                            <button className="button-green">-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Train</td>
                        <td className="cell-co2">2 kg</td>
                        <td className="cell-distance">15 mi</td>
                        <td className="cell-button">
                            <button className="button-green">-</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        )
    }

    
}
export default TrackingDataTable;

