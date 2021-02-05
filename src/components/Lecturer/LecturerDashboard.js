import React, { Component } from 'react'
import LecturerNavbar from './LecturerNavbar'
import LecturerProfile from './LecturerProfile'
// import LectureSchedule from './LectureSchedule'

class LecturerDashboard extends Component {
    constructor() {
        super();
        this.state={};
    }
    render() {
        return (
            <div className="LecturerDashboard">
                <LecturerNavbar />
                <LecturerProfile/>
                {/* <LecturerSchedule/> */}
            </div>
        )
    }
}

export default LecturerDashboard