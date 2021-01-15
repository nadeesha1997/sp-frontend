import React from "react";

const RegistrationNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="/">
        Faculty of Engineering University of Ruhuna | Registration Form
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#myNavbar"
        aria-controls="myNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <span className="fa fa-sign-in"></span> Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default RegistrationNavbar;
