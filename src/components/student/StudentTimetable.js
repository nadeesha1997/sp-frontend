import React,{Component} from 'react'
import './css/home.css'
import SubjectList from "./../../components/TimeTable/SubjectList";
import TimeTable from "./../../components/TimeTable/TimeTable";
import HomepageNavbar from "./../../components/TimeTable/HomepageNavbar";
import {Nav} from "../Nav"
import AuthService from "./../../services/auth.service";
// const col = {
//     padding: "10px 20px",
//     textAlign: "center",
//     fontSize: "22px",
//     height:"20px",
//     fontFamily:"Arial"
// }

class StudentTimetable extends Component {
    constructor(props) {
        super(props);
        let today = new Date();
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            date: today
        }
        this.updateDate=this.updateDate.bind(this)
    }

    updateDate = data => {
        this.setState({
            date: data
        })
        // console.log("Time in home:")
        // console.log(this.state)
        // console.log("--------------------------------------------")
    }
    componentDidMount() {
        this.updateDate();
    }
    getSelectedModule=(id)=>{
        this.setState({
            subjectId:id
        })
    }

    render() {
        return (
            <div className="page">
                <HomepageNavbar updateDate={this.updateDate}/>
                <Nav/>
                <h3>
                    {this.state.currentUser.userDetails.role} Time Table
                </h3>
                <div className="col col-lg-2 col-md-2 col-sm-2 container-fluid">
                    <div className="row">
                        <SubjectList getModuleId={this.getSelectedModule}/>
                    </div>

                </div>
                <div className="row">
                    <div className="col col-lg-12 col-md-12 col-sm-12">
                        <TimeTable date={this.state.date}/>
                    </div>


                </div>

            </div>


        );
    }
}

export default StudentTimetable