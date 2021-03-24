import React, {useState, useEffect, Component} from 'react';
import { NavLink, Route } from 'react-router-dom';
import  AuthService  from './../services/auth.service';
import {Role} from '../helpers/role'



function Nav() {

    const [user, setUser] = useState({});
    // only show nav when logged in
    if (!user) return null;
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav">
                    <a className="navbar-brand" href="#">Welcome LSMS</a>
                    <a className="navbar-brand" href="#">|</a>

                    <NavLink exact to="/TimeTable" className="nav-item nav-link">Time Table</NavLink>

                    {/*{ AuthService.getCurrentUser.userDetails.role===Role.Student &&
                    <NavLink to="/student/StudentTimetable" className="nav-item nav-link">
                        TimeTable
                    </NavLink>}
                    {AuthService.getCurrentUser.userDetails.role===Role.Lecturer&&
                    <NavLink to="/lecturer/LecturerTimetable" className="nav-item nav-link">
                        TimeTable
                    </NavLink>}
                    {AuthService.getCurrentUser.userDetails.role===Role.Admin &&
                    <NavLink to="/admin/AdminTimetable" className="nav-item nav-link">
                        TimeTable
                    </NavLink>
                    }*/}

                    <NavLink to="/Dashboard" className="nav-item nav-link">
                       Dashboard
                    </NavLink>
                    {/*{user.role===role.Student &&
                    <NavLink to="/student/StudentProfile" className="nav-item nav-link">
                        Profile
                    </NavLink>}*/}
                    {/*{user.role===role.Admin &&
                    <NavLink to="/admin/AdminProfile" className="nav-item nav-link">
                        Profile
                    </NavLink>}*/}

                    <NavLink to="" className="nav-item nav-link">
                        Logout
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}


export { Nav };