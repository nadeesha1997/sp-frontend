import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';
import { Role } from '../helpers/role';
import {user_circle} from 'react-icons-kit/ikons/user_circle';
import {circle_left} from 'react-icons-kit/ikons/circle_left';
import {notepad} from 'react-icons-kit/ikons/notepad';
import Dashboard from './Dashboard';
import {profileData} from './Dashboard';

function Nav() {
  const [user, setUser] = useState({});
  // only show nav when logged in
  if (!user) return null;

  return (
      <div>
        <div className="navbar-color1">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="navbar-nav">
              <a className="navbar-brand" href="#">WELCOME LSMS</a>
              <a className="navbar-brand" href="#">|</a>

                <NavLink to="/Dashboard" className="nav-item nav-link">
                    <Icon icon={home} style={{ color: '#e379e7', alignSelf: 'center'}}/>  Dashboard
                </NavLink>

               <NavLink to="/Home" className="nav-item nav-link">
                    <Icon icon={notepad} style={{ color: '#e379e7', alignSelf: 'center'}}/>  Time Table
                </NavLink>

                {/* {AuthService.getCurrentUser.userDetails.role===Role.Student &&
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
                {/*<NavLink to="/Dashboard" className="nav-item nav-link">*/}
                {/*    <Icon icon={home} style={{ color: '#e379e7', alignSelf: 'center'}}/>*/}
                {/*    /!*{Dashboard.state.currentUser.userDetails.role}   *!/*/}
                {/*    Dashboard2*/}
                {/*</NavLink>*/}

               {/* {profileData=== "Student" &&
                // {true &&
                  <NavLink to="/student/StudentTimetable" className="nav-item nav-link">
                      <Icon icon={notepad} style={{ color: '#e379e7', alignSelf: 'center'}}/>  Time Table
                  </NavLink>}

                {profileData==="Lecturer"  &&
                  <NavLink to="/lecturer/LecturerTimetable" className="nav-item nav-link">
                      <Icon icon={notepad} style={{ color: '#e379e7', alignSelf: 'center'}}/>  Time Table
                  </NavLink>}
                {profileData ==="Admin"  &&
                  <NavLink to="/admin/AdminTimetable" className="nav-item nav-link">
                      <Icon icon={notepad} style={{ color: '#e379e7', alignSelf: 'center'}}/>  Time Table
                  </NavLink>}*/}


                {profileData=== "Student" &&
                // {true &&
                    <NavLink to="/student/StudentProfile" className="nav-item nav-link">
                        Profile
                    </NavLink>}

                {profileData==="Lecturer" &&
                    <NavLink to="/lecturer/LecturerProfile" className="nav-item nav-link">
                        Profile
                    </NavLink>}
                {profileData ==="Admin" &&
                    <NavLink to="/admin/AdminProfile" className="nav-item nav-link">
                        Profile
                    </NavLink>}

              <NavLink to="" className="nav-item nav-link">
                  <Icon icon={circle_left} style={{ color: '#e379e7', alignSelf: 'center'}}/> Logout
              </NavLink>
                    </div>
                </nav>
            </div>
      </div>
  );

}

export { Nav };

