import {React, Component} from 'react'
import StudentNavigation from "./StudentNavigationComponent";
class StudentDashboard extends Component{
    render() {
        return(
            <div className="studentDash">
                <StudentNavigation/>
                <h1>This is student dashboard</h1>
            </div>
        );
    }
}
export default StudentDashboard;
