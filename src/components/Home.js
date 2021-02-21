import React from 'react'
import './css/home.css'
import Calendar from "./calendar/calendar";
import {Image} from "react-bootstrap";
import icon3 from './../images/icon3.png'
import SubjectList from "./SubjectList";
import TimeTable from "./TimeTable";


const Home = () => {
    return (

    <div className="page">

        <div className="row" >
            <div className="column1">
                <div className="photon">
                    <Image img src={icon3} alt="icon3" height="170px" width="850px" padding="10px"/>
                </div>
            </div>
            <div className="row-cols-lg-12 col-md-auto col-sm-12 container-fluid">
                <Calendar/>
            </div>
        </div>


            <div className="row">
                <div className="col col-lg-8 col-md-auto col-sm-10">
                    <TimeTable/>
                </div>
                <div className="col col-lg-4 col-md-auto col-sm-12 container-fluid">
                        <div className="row">
                            <SubjectList/>
                        </div>

                </div>
            </div>
</div>



);
}

export default Home