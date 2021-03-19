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
        return (
            <div className="container emp-profile">
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col"></div>
                                <div className="col">
                                <div className="profile-img">
                                <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt=""/>
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file"/>
                                </div>
                                <div className="col"></div>
                            </div>
                                </div>
                            
                            </div>
                        </div> 
                    </div>
                    <div className="row">
                        {/* <div className="col-md-4">
                            <div className="profile-work">
                                <a>DEPARTMENT</a><br/>
                                <button type="button" class="btn btn-default btn-xs">DEIE</button><br/>
                                <button type="button" class="btn btn-default btn-xs">DCEE</button><br/>
                                <button type="button" class="btn btn-default btn-xs">DMME</button><br/>
                                <button type="button" class="btn btn-default btn-xs">DIS</button><br/>
                                
                                <a>SEMESTER</a><br/>
                                
                                   <button type="button" class="btn btn-default btn-xs">Semester1</button><br/>
                                   <button type="button" class="btn btn-default btn-xs">Semester2</button><br/>
                                   <button type="button" class="btn btn-default btn-xs">Semester3</button><br/>
                                   <button type="button" class="btn btn-default btn-xs">Semester4</button><br/>
                                   <button type="button" class="btn btn-default btn-xs">Semester5</button><br/>
                                   <button type="button" class="btn btn-default btn-xs">Semester6</button><br/>
                                   <button type="button" class="btn btn-default btn-xs">Semester7</button><br/>
                                   <button type="button" class="btn btn-default btn-xs">Semester8</button><br/>
    
                            </div>
                        </div> */}
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                                    
                                    <div className="row">
                                        {/* <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Kshiti Ghelani</p>
                                        </div> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Faculty Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.currentUser.userDetails.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Reg No</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.currentUser.userDetails.regNo}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* <div className="col-md-6">
                                            <label>Joined Date</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{Student.joinedDate}</p>
                                        </div> */}
                                    </div>
                                
                                {/* <div >
                                    <h5>
                                        Enrolled Modules
                                    </h5>
                                    <ul>
                                        {mod}
                                    </ul>
                                </div> */}

                                </div>
                                
                                <Table className="EnModule">
                                    <tr>
                                        <th>
                                            Enrolled Modules
                                        </th>
                                        
                                    </tr>
                                    {mod}
                                </Table>
                                
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    {/* <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>Your Bio</label><br/>
                                            <p>Your detail description</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default StudentProfile