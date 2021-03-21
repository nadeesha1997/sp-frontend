import React from "react";
import logo2 from "../../images/logo2.png";
import {Button, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

const RegistrationNavbar = () => {

    return (

        <nav  className="navbar navbar-expand-sm bg-dark mb-10 navbar-fixed-top ">
            {/* <a className="navbar-brand" href="#">ENG</a>
            <Image img src={logo2} alt="logo"  width={100} height={100}/>*/}
            <Image img src={logo2} alt="logo"  width={150} height={75} margin={4}/>
            {/*<a className="navbar-brand" href="#" >LSMS</a>*/}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>


                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link">
                            <Button  style={{width:150,backgroundColor:'#7047ba',marginTop:.1,marginLeft:20,marginRight:10}} type='submit'>
                                <Link to="/Login"><b>Log In</b>  </Link>
                            </Button>
                            {/*<span className="fa fa-sign-in"/> <Link to="./Login">Login</Link>*/}
                        </a>
                        <a  className="navbar-brand   mb-.2">
                            <h6>You are not log in.</h6>
                        </a>
                    </li>
                </ul>


        </nav>

    );
};

export default RegistrationNavbar;