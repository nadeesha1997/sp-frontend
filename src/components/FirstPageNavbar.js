
import {Button, Image} from "react-bootstrap";
import './css/home.css'
import logo2 from './../images/logo2.png';
import {Link} from "react-router-dom";
import React from "react";




const FirstPageNavbar= () => {
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
                <table>
                    <td>

                        <div className="align">
                            <Button  style={{width:180,backgroundColor:'#7047ba',marginTop:10,marginLeft:45,marginRight:20}} type='submit' >

                                <Link to="./Login"><b>Log In</b>  </Link>
                            </Button>
                            <Button style={{width:180,backgroundColor:'#7047ba',marginTop:10,marginLeft:40,marginRight:20,fontcolor:'#f2eef5'}} type='submit'>
                                <Link to="./Register"> <b> Register</b>  </Link>
                            </Button>

                           </div>
                    </td>


                </table>

            </nav>
        </div>
    );
};

export default FirstPageNavbar;


