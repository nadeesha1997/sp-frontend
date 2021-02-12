import React from 'react'
import './css/home.css'
import Calendar from "./calendar/calendar";
import Table from "react-bootstrap/Table";
import {Image} from "react-bootstrap";
import icon3 from './../images/icon3.png'
import SubjectList from "./SubjectList";


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


          <div><div className="row-cols-md-6">
              <SubjectList/>
          </div></div>




        </div>

</div>



);
}

export default Home