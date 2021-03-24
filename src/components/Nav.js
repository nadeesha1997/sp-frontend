import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import AuthService from '../services/auth.service';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { Role } from '../helpers/role';
import {user_circle} from 'react-icons-kit/ikons/user_circle'
import {circle_left} from 'react-icons-kit/ikons/circle_left'
import {notepad} from 'react-icons-kit/ikons/notepad'


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




                <NavLink to="/Home" className="nav-item nav-link">
                    <Icon icon={notepad} style={{ color: '#e379e7', alignSelf: 'center'}}/>  Time Table
                </NavLink>
              {/*{user.role===Role.Student &&

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
                    <Icon icon={home} style={{ color: '#e379e7', alignSelf: 'center'}}/>                      Dashboard
                </NavLink>


              <NavLink to="/student/StudentProfile" className="nav-item nav-link">
                  <Icon icon={user_circle} style={{ color: '#e379e7', alignSelf: 'center'}}/>       Profile
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
                  <Icon icon={circle_left} style={{ color: '#e379e7', alignSelf: 'center'}}/>        Logout
              </NavLink>

                        {/*<NavLink to="" className="nav-item nav-link" onClick={AuthService.logout()}>*/}
                        {/*<NavLink to="" className="nav-item nav-link">
                            Logout
                        </NavLink>*/}
                    </div>
                </nav>

            </div>

      </div>
  );

}
/*<Route path="/admin" component={AdminNav}/>
function AdminNav({ match }) {
  const { path } = match;

  return (
      <nav className="admin-nav navbar navbar-expand navbar-light">
        <div className="navbar-nav">
          <NavLink to={`${path}/users`} className="nav-item nav-link">Users</NavLink>
        </div>
      </nav>
  );
}*/

export { Nav };

