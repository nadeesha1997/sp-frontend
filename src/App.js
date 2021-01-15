import React, { Component } from 'react';
import Navbar from './components/Navbar'
// import Home from './components/Home'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import StudentRegisterForm from './components/StudentRegisterForm'
import LecturerRegisterForm from "./components/LecturerRegisterForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentDashboard from './components/student/StudentDashboard';
import StudentProfile from './components/student/StudentProfile';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path='/' component={Login}/>
                    <Route path='/student' component={StudentDashboard}/>
                    {/* <Route path='/' component={Home}/> */}
                    <Route path='/Register' component={Register} />
                    <Route path='/LecturerRegisterForm' component={LecturerRegisterForm} />
                    <Route path='/StudentRegisterForm' component={StudentRegisterForm} />
                    <Route path= '/Student/Profile' component={StudentProfile}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

