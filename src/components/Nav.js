import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';

import { Role } from '../helpers/role';

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
                    {/*{user.role===Role.Student &&
                    <NavLink to="/student/StudentTimetable" className="nav-item nav-link">
                        TimeTable
                    </NavLink>}
                    {user.role===Role.Lecturer &&
                    <NavLink to="/lecturer/LecturerTimetable" className="nav-item nav-link">
                        TimeTable
                    </NavLink>}
                    {user.role === Role.Admin &&
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
                    <NavLink to="" className="nav-item nav-link">
                        Logout
                    </NavLink>
                </div>
            </nav>
            <Route path="/admin" component={AdminNav}/>

        </div>
    );
}

function AdminNav({ match }) {
    const { path } = match;

    return (
        <nav className="admin-nav navbar navbar-expand navbar-light">
            <div className="navbar-nav">
                <NavLink to={`${path}/users`} className="nav-item nav-link">Users</NavLink>
            </div>
        </nav>
    );
}

export { Nav };