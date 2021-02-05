import React from 'react'
import './css/home.css'
import Calendar from "./calendar/calendar";
import Table from "react-bootstrap/Table";
import {Image} from "react-bootstrap";
import icon3 from './../images/icon3.png'


const Home = () => {
    return (
<div className="page">
        <div className="row"  >
            <div className="column1">
                <Calendar/>
            </div>

            <div className="top_left">
                <div className="photo">
                <Image img src={icon3} alt="icon2"/>
            </div>
            </div>
            <div className="column2">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Time</th>
                            <th>DO1-A</th>
                            <th>DO1-B</th>
                            <th>DO2-A</th>
                            <th>DO2-B</th>
                            <th>LR1</th>
                            <th>LR2</th>
                            <th>NLH1</th>
                            <th>NLH2</th>
                            <th>IS-CC</th>
                            <th>ELEC-CC</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>7.30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>8.30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>9.30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>10.30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>11.30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>12.30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>13.30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>14.30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>15.30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>16.30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>17.30</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        </tbody>
                    </Table>
            </div>

                <div className="bottom_right">
                    <div className="custom-select">
                        <select>
                            <option value="0">select the semester:</option>
                            <option value="1">semester 01</option>
                            <option value="2">semester 02</option>
                            <option value="2">semester 03</option>
                            <option value="2">semester 04</option>
                            <option value="2">semester 05</option>
                            <option value="2">semester 06</option>
                            <option value="2">semester 07</option>
                            <option value="2">semester 08</option>
                        </select>
                    </div>
                </div>

        </div>

</div>



);
}

export default Home