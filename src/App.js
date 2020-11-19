import './App.css';
import {React,Component} from "react";
import StudentDashboard from "./components/StudentDashboardComponent";

class App extends Component{
  render(){
    return(
        <div className="App">
            <StudentDashboard/>
        </div>
    );
  }
}
export default App;
