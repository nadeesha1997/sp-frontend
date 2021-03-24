import React, {useState, useEffect, Component} from 'react';
import { NavLink, Route } from 'react-router-dom';
<<<<<<< HEAD
import  AuthService  from './../services/auth.service';
import {Role} from '../helpers/role'
=======
import AuthService from '../services/auth.service';
>>>>>>> 883b63dd66782eb2476f357f16ed5c6273901670



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
<<<<<<< HEAD

                    <NavLink exact to="/TimeTable" className="nav-item nav-link">Time Table</NavLink>

                    {/*{ AuthService.getCurrentUser.userDetails.role===Role.Student &&
=======
                    <NavLink exact to="/Home" className="nav-item nav-link">Time Table</NavLink>
                    {/*{user.role===Role.Student &&
>>>>>>> 883b63dd66782eb2476f357f16ed5c6273901670
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
<<<<<<< HEAD
                    </NavLink>}*/}

=======
                    </NavLink>}
                    {user.role === Role.Admin &&
                    <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
                    }*/}
                    {/*<NavLink to="" className="nav-item nav-link" onClick={AuthService.logout()}>*/}
>>>>>>> 883b63dd66782eb2476f357f16ed5c6273901670
                    <NavLink to="" className="nav-item nav-link">
                    Logout
                    </NavLink>
                </div>
            </nav>
<<<<<<< HEAD
=======
            <Route path="/admin" component={AdminNav}/>
            </div>
>>>>>>> 883b63dd66782eb2476f357f16ed5c6273901670
        </div>
    );
}


export { Nav };