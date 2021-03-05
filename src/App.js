import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import StudentRegisterForm from './components/registration/StudentRegisterForm'
import LecturerRegisterForm from "./components/registration/LecturerRegisterForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentDashboard from './components/student/StudentDashboard';
import StudentProfile from './components/student/StudentProfile';
import LecturerDashboard from './components/Lecturer/LecturerDashboard';
import LecturerProfile from './components/Lecturer/LecturerProfile';
import Home from './components/Home'
import FirstPage from './components/FirstPage'
import Loginnew from "./components/loginnew";
import Profilenew from "./components/profilenew";
import FacultyStaffRegisterForm from "./components/registration/FacultyStaffRegisterForm";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path='/' component={FirstPage}/>
                    <Route path='/student' component={StudentDashboard}/>
                    <Route path='/Lecturer' component={LecturerDashboard}/>
                   <Route path='/Register' component={Register} />
                    <Route path='/registration' component={LecturerRegisterForm} />
                    <Route path='/registration' component={FacultyStaffRegisterForm} />
                    <Route path='/registration' component={StudentRegisterForm} />
                    <Route path= '/Student/Profile' component={StudentProfile}/>
                    <Route path= '/Lecturer/Profile' component={LecturerProfile}/>
                    <Route path= '/Home' component={Home}/>
                    <Route path= '/Login' component={Loginnew}/>
                    <Route path='/profilenew' component={Profilenew}/>

                </div>
            </BrowserRouter>
        );
    }
}


export default App;

