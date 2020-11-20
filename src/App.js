import './App.css';
import {React,Component} from "react";
import StudentDashboard from "./components/student/StudentDashboardComponent";
import Registration from "./components/RegistrationComponent"
class App extends Component{
  render(){
    return(
        <div className="App">
            {/*<StudentDashboard/>*/}
            <Registration/>
        </div>
    );
  }
}
export default App;
