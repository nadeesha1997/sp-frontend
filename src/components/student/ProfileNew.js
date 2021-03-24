import React,{Component} from 'react';
import '../css/StudentProfile.css'
//import Student from './data/profile.json'
import AuthService from "../../services/auth.service";
import axios from "axios";
import { Table } from 'react-bootstrap';

class StudentProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            modules:[],
            // enrolablemodules:{
            //     departmentModules:[],
            //     iSModules:[]
            // }
            departmentModules:[],
            iSModules:[]
        };
        this.getModules();
    }
    componentDidMount() {
        //this.getModules();
    }
    getModules=()=>{
        axios.get("https://localhost:5001/api/subjectuser/user/"+this.state.currentUser.userDetails.id)
            .then(res=>{
                this.setState({
                    modules:res.data
                })
                console.log(res.data)
            }).then(console.log(this.state))
    }
    getEnrolableModules=()=>{
        let b='';
        axios.get("https://localhost:5001/api/departments/"+this.state.currentUser.userDetails.departmentId)
            .then(res=>{
                b=res.data.code.slice(0,2)
            }).then(this.getDepartmentModules(b));
        this.getISModules();
    }
    getDepartmentModules=(b)=>{
        axios.get("https://localhost:5001/api/subjects/department/"+b+"/semester/"+this.state.currentUser.userDetails.semester)
            .then(res=>{
                this.setState({
                    departmentModules:res.data
                })
                console.log(res.data)
            }).then(console.log(this.state));
    }
    getISModules=()=>{
        axios.get("https://localhost:5001/api/subjects/department/is/semester/"+this.state.currentUser.userDetails.semester)
            .then(res=>{
                this.setState({
                    iSModules:res.data
                })
                console.log(res.data)
            }).then(console.log(this.state))
    }

    render () {
        const mod = this.state.modules.map((mod) => {
            return (
                <tr>
                    <td >
                        <div key={mod.id}>
                            {mod.subject.code} - {mod.subject.name}
                        </div>
                    </td>
                </tr>
            );
        });
        // const dept = this.state.departmentModules.map((mod) => {
        //     return (
        //         <tr>
        //         <td >
        //             <div key={mod.id}>
        //                 {mod.subject.code} - {mod.subject.name}
        //             </div>
        //         </td>
        //         </tr>
        //     );
        // });
        // const Isdept = this.state.iSModules.map((mod) => {
        //     return (
        //         <tr>
        //         <td >
        //             <div key={mod.id}>
        //                 {mod.subject.code} - {mod.subject.name}
        //             </div>
        //         </td>
        //         </tr>
        //     );
        // });
        return (
            <div className="container emp-profile col-md-6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col"></div>
                        <div className="col-md-4 col">
                            <div className="profile-img">
                                <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt=""/>
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col"></div>
                    </div>

                    {/* <div className="row">
                     <div className="row">
                        <div className="col-md-6">
                        <label>Full Name</label>
                        </div>

                    <div className="col-md-6">
                        <p>{this.state.currentUser.userDetails.fullName}</p>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label>User Name</label>
                        </div>
                    <div className="col-md-6">
                        <p>{this.state.currentUser.userDetails.userName}</p>
                    </div>
                </div>
                </div> */}
                    <Table className="table table-borderless StudentDetails">
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>
                                FUll Name
                            </td>
                            <td>
                                {this.state.currentUser.userDetails.fullName}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                User Name
                            </td>
                            <td>
                                {this.state.currentUser.userDetails.userName}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Reg No
                            </td>
                            <td>
                                {this.state.currentUser.userDetails.regNo}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Faculty Email
                            </td>
                            <td>
                                {this.state.currentUser.userDetails.email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Department
                            </td>
                            <td>
                                {this.state.currentUser.userDetails.email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Semester
                            </td>
                            <td>
                                {this.state.currentUser.userDetails.email}
                            </td>
                        </tr>
                    </Table>
                </div>
                <hr/>
                <div className="row">
                    <Table className="table table-borderless StudentDetails">
                        <tr>
                            <th>
                                Enrolled Modules
                            </th>
                        </tr>
                        {mod}
                    </Table>
                </div>
                {/* <div className="row">
                <Table className="table table-borderless StudentDetails">
                    <tr>
                        <th>
                            Enrollable Modules
                        </th>
                    </tr>
                    {dept}
                    {Isdept}
                </Table>
            </div> */}
            </div>

        )
    }
}

export default StudentProfile