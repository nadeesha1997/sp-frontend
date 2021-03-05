import React from "react";
import logo from "../../images/logo.jpg";
import {Image} from "react-bootstrap";

const RegistrationNavbar = () => {

  return (

    <nav  className="navbar navbar-dark navbar-expand-sm bg-dark mb-4 navbar-fixed-top ">
      <a className="navbar-brand" href="#">ENG</a>
        <Image img src={logo} alt="logo"  width={30} height={50}/>

        <a className="navbar-brand" href="#" >LSMS</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <span className="fa fa-sign-in"/> Login
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
