import React from "react";
import {Image} from "react-bootstrap";
import '../css/home.css'
import logo2 from "../../images/logo2.png";



const HomepageNavbar= () => {
    return (

        <div className="navbar-color">
            <nav  className="navbar navbar-expand-lg navbar-fixed-top n" >

                <Image img src={logo2} alt="logo"  width={300} height={150} margin={5}/>
                <div className="text">
                    <ul>
                        <li>
                            <h5> <b>FACULTY OF ENGINNERING</b></h5>
                            <h5><b>UNIVERSITY OF RUHUNA</b></h5>
                            <h5><b>LECTURE SCHEDULE MANAGEMENT SYSTEM</b></h5>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
};

export default HomepageNavbar;