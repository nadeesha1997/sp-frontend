import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentDashboard from "./components/student/StudentDashboard";
import LecturerDashboard from "./components/Lecturer/LecturerDashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Route exact path="/" component={Login} />
          <Route  path="/student" component={StudentDashboard} />
          {/* <Route path='/' component={Home}/> */}
          <Route  path="/register" component={Register} />
            <Route exact path="/Lecturer" component={LecturerDashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
