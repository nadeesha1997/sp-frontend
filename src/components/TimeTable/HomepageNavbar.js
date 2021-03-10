 import React from "react";
import {Image} from "react-bootstrap";
import '../css/home.css'
import logo2 from "../../images/logo2.png";
 import CalendarNew from "../calendar/calendarNew";
 import {Navbar} from 'react-bootstrap';

const HomepageNavbar= () => {
    return (

        <div className="navbar-color">
            <nav  className="navbar navbar-expand-lg navbar-fixed-top" >
                <Image img src={logo2} alt="logo"  width={300} height={150}/>
                <div className="text">
                    <ul>
                        <li>
                            <h5> <b>FACULTY OF ENGINNERING</b></h5>
                            <h5><b>UNIVERSITY OF RUHUNA</b></h5>
                            <h5><b>LECTURE SCHEDULE MANAGEMENT SYSTEM</b></h5>
                        </li>
                    </ul>
                </div>
                <div className="row-cols-lg-12 col-md-4  col-sm-12">
                    <CalendarNew />
                </div>
            </nav>
        </div>
    );
};

export default HomepageNavbar;