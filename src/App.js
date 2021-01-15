import React, { Component } from "react";
// import Home from './components/Home'
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentDashboard from "./components/student/StudentDashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/student" component={StudentDashboard} />
          {/* <Route path='/' component={Home}/> */}
          <Route path="/register" component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
