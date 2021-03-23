import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

import Dashboard from './components/Dashboard'

import StudentRegisterForm from './components/registration/StudentRegisterForm'
import AdminRegisterForm from './components/registration/AdminRegisterForm'
import LecturerRegisterForm from "./components/registration/LecturerRegisterForm";

import 'bootstrap/dist/css/bootstrap.min.css';

import StudentProfile from './components/student/StudentProfile';
import LecturerProfile from './components/lecturer/LecturerProfile';
import AdminProfile from './components/admin/AdminProfile';

import Home from './components/Home'
import FirstPage from './components/FirstPage'
import TimeTable from "./components/TimeTable/TimeTable";
import SubjectList from "./components/TimeTable/SubjectList";
import ModuleDrop from "./components/TimeTable/ModuleDrop";
import ModuleEnrolement from "./components/admin/moduleEnrolement";




class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <div className="App">

                    <Route exact path='/' component={FirstPage}/>




                    <Route path='/Register' component={Register} />
                    <Route path='/Dashboard' component={Dashboard} />

                    <Route path='/LecturerRegisterForm' component={LecturerRegisterForm} />
                    <Route path='/StudentRegisterForm' component={StudentRegisterForm} />
                    <Route path='/AdminRegisterForm' component={AdminRegisterForm} />

                    <Route path= '/Student/StudentProfile' component={StudentProfile}/>
                    <Route path= '/Lecturer/LecturerProfile' component={LecturerProfile}/>
                    <Route path= '/Admin/AdminProfile' component={AdminProfile}/>

                    <Route path= '/Home' component={Home}/>
                    <Route path= '/Login' component={Login}/>
                    <Route path= '/SubjectList' component={SubjectList}/>
                    <Route path= '/timetable' component={TimeTable}/>
                    <Route path= '/ModuleDrop' component={ModuleDrop}/>
                    <Route path='/moduleenrolement' component={ModuleEnrolement}/>

                </div>
            </BrowserRouter>
        );
    }
}


export default App;

