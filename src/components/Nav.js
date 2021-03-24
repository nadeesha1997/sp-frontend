import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import AuthService from '../services/auth.service';

import { Role } from '../helpers/role';

function Nav() {
    const [user, setUser] = useState({});



    // only show nav when logged in
    if (!user) return null;

    return (
        <div>
            <div className="navbar-color1">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="navbar-nav">
                        <a className="navbar-brand" href="#">Welcome LSMS</a>
                        <a className="navbar-brand" href="#">|</a>

                        <NavLink exact to="/Home" className="nav-item nav-link">Time Table</NavLink>

                       {/*{AuthService.getCurrentUser.userDetails.role===Role.Student &&
                    <NavLink to="/student/StudentTimetable" className="nav-item nav-link">
                        TimeTable
                    </NavLink>}
                    {AuthService.getCurrentUser.userDetails.role===Role.Lecturer &&
                    <NavLink to="/lecturer/LecturerTimetable" className="nav-item nav-link">
                        TimeTable
                    </NavLink>}
                    {AuthService.getCurrentUser.userDetails.role === Role.Admin &&
                    <NavLink to="/admin/adminTimetable" className="nav-item nav-link">Admin</NavLink>
                    }*/}

                        <NavLink to="/Dashboard" className="nav-item nav-link">
                            Dashboard
                        </NavLink>
                        <NavLink to="/student/StudentProfile" className="nav-item nav-link">
                            Profile
                        </NavLink>
                        {/*{user.role===Role.Student &&
                    <NavLink to="/student/StudentProfile" className="nav-item nav-link">
                        Profile
                    </NavLink>}
                    {user.role===Role.Lecturer &&
                    <NavLink to="/lecturer/LecturerProfile" className="nav-item nav-link">
                        Profile
                    </NavLink>}
                    {user.role === Role.Admin &&
                    <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
                    }*/}
                        {/*<NavLink to="" className="nav-item nav-link" onClick={AuthService.logout()}>*/}
                        <NavLink to="" className="nav-item nav-link">
                            Logout
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export { Nav };