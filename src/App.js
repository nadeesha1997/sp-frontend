import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import StudentRegisterForm from './components/StudentRegisterForm'
import LecturerRegisterForm from "./components/LecturerRegisterForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentDashboard from './components/student/StudentDashboard';
import StudentProfile from './components/student/StudentProfile';
import Home from './components/Home'
import FirstPage from './components/FirstPage'
import Loginnew from "./components/loginnew";
import Profilenew from "./components/profilenew";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path='/' component={FirstPage}/>
                    <Route path='/student' component={StudentDashboard}/>
                   <Route path='/Register' component={Register} />
                    <Route path='/LecturerRegisterForm' component={LecturerRegisterForm} />
                    <Route path='/StudentRegisterForm' component={StudentRegisterForm} />
                    <Route path= '/Student/Profile' component={StudentProfile}/>
                    <Route path= '/Home' component={Home}/>
                    <Route path= '/Login' component={Loginnew}/>
                    <Route path='/profilenew' component={Profilenew}/>
                    <Route path='/loginold' component={Login}/>

                </div>
            </BrowserRouter>
        );
    }
}


export default App;

