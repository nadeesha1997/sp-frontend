import React, { Component } from 'react'
import StudentNavbar from './StudentNavbar'
// import LectureSchedule from './LectureSchedule'

class StudentDashboard extends Component {
    constructor() {
        super();
        this.state={};
    }
    render() {
        return (
                <div className="StudentDashboard">
                    <StudentNavbar />
                    {/* <LectureSchedule/> */}
                </div>
        )
    }
}

export default StudentDashboard