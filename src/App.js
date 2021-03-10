 import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import StudentRegisterForm from './components/StudentRegisterForm'
import LecturerRegisterForm from "./components/registration/LecturerRegisterForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentDashboard from './components/student/StudentDashboard';
import StudentProfile from './components/student/StudentProfile';
import Home from './components/Home'
import FirstPage from './components/FirstPage'
import TimeTable from "./components/TimeTable/TimeTable";
import SubjectList from "./components/TimeTable/SubjectList";
import ModuleDrop from "./components/TimeTable/ModuleDrop";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path='/' component={FirstPage}/>
                    <Route path='/student' component={StudentDashboard}/>
                    <Route path='/Register' component={Register} />
                    <Route path='/LecturerRegisterForm' component={LecturerRegisterForm} />
                    <Route path='/StudentRegisterForm' component={StudentRegisterForm} />
                    <Route path= '/Student/Profile' component={StudentProfile}/>
                    <Route path= '/Home' component={Home}/>
                    <Route path= '/Login' component={Login}/>
                    <Route path= '/SubjectList' component={SubjectList}/>
                    <Route path= '/timetable' component={TimeTable}/>
                    <Route path= '/ModuleDrop' component={ModuleDrop}/>

                </div>
            </BrowserRouter>
        );
    }
}


export default App;

