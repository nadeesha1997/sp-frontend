import React from "react";
import {Link, NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";


const RegistrationTabbar = () => {
    const navTabsTitleStyle = {
        fontSize: "22px",
        padding: "10px",
        fontWeight: "700",
    };

    const navItemStyle = {
        fontSize: "18px",
    };

    return (
        <ul className="nav nav-tabs registration-tab-pane" role="tablist">


            <li style={navTabsTitleStyle}>
                Register as a <span className="fa fa-chevron-right"></span>
            </li>
            <li className="nav-item">
                <NavLink
                    exact
                    style={navItemStyle}
                    activeClassName="nav-link active"
                    className="nav-link"
                    to="/register/student"
                >
                    Student
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    exact
                    style={navItemStyle}

                    activeClassName="nav-link active"
                    className="nav-link"
                    to="/register/lecturer"
                >
                    Lecturer
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    exact
                    style={navItemStyle}
                    activeClassName="nav-link active"
                    className="nav-link"
                    to="/register/faculty-staff"
                >
                    Faculty Staff Member
                </NavLink>
            </li>
        </ul>

    );
};

export default RegistrationTabbar;