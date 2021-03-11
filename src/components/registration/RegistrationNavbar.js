import React from "react";
import logo2 from "../../images/logo2.png";
import {Button, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

const RegistrationNavbar = () => {

    return (

        <nav  className="navbar navbar-dark navbar-expand-sm bg-dark mb-4 navbar-fixed-top ">
            {/* <a className="navbar-brand" href="#">ENG</a>
            <Image img src={logo2} alt="logo"  width={200} height={100}/>*/}
            <Image img src={logo2} alt="logo"  width={300} height={150} margin={5}/>
            {/*<a className="navbar-brand" href="#" >LSMS</a>*/}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link">
                            <Button  style={{width:150,backgroundColor:'#7047ba',marginTop:10,marginLeft:20,marginright:20}} type='submit'>
                                <Link to="./Login"><b>Log In</b>  </Link>
                            </Button>
                            {/*<span className="fa fa-sign-in"/> <Link to="./Login">Login</Link>*/}
                        </a>
                        <a  className="navbar-brand   mb-.5">
                            <h6>You are not log in.</h6>
                        </a>
                    </li>
                </ul>
            </div>

        </nav>

    );
};

export default RegistrationNavbar;