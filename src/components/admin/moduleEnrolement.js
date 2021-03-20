import React,{Component} from "react";
import axios from "axios";
import {FormGroup} from "reactstrap";
import Selectstudent from "./Selectstudent";
import AuthService from '../../services/auth.service'
class ModuleEnrolement extends Component{
    constructor(props) {
        super(props);
        this.state={
            user:AuthService.getCurrentUser().userDetails,
            departmentModules:[],
            iSModules:[],
            modules:[],
            teachers:[]
        }
        this.getModules=this.getModules.bind(this);
    }
    componentDidMount() {
        this.getModules();
        // console.log(this.state)
    }

    getUserById=(id)=>{
        axios.get("https://localhost:5001/api/user/"+id)
            .then(res=>{
                this.setState({
                    user:res.data
                },()=>this.getModules(id))
                console.log(res.data)
            })
            .then(err=>console.log(err))
        // console.log("id is")
        // console.log(id)
    }
    getStudentBySemAndDept=(sem,dept)=>{
        axios.get("https://localhost:5001/api/users/"+sem+"/"+dept)
            .then(res=>{
                this.setState({
                    user:res.data
                })
            })
            .then(err=>console.log(err))
    }
    getModuleBySemAndDept=(sem,dept)=>{
        axios.get("https://localhost:5001/api/subjects/"+sem+"/"+dept)
            .then(res=>{
                this.setState({
                    module:res.data
                })
            })
            .then(err=>console.log(err))
    }
    getTeacherByDept=(dept)=>{
        axios.get("https://localhost:5001/api/users/department"+dept)
            .then(res=>{
                this.setState({
                    user:res.data
                })
            })
            .then(err=>console.log(err))
    }
    // handleDepartmentChange=(e)=>{
    //     this.setState({
    //         // user.semester:e.target.value
    //     })
    // }
    getUser=(id)=>{
        this.getUserById(id);
    }
    getModules=(id)=>{
        axios.get("https://localhost:5001/api/subjectuser/user/"+id)
            .then(res=>{
                this.setState({modules:res.data})
                // console.log(res.data)
            })
    }
    getEnrolableModules=()=>{
        let b='';
        axios.get("https://localhost:5001/api/departments/"+this.state.user.departmentId)
            .then(res=>{
                b=res.data.code.slice(0,2)
            }).then(this.getDepartmentModules(b));
        this.getISModules();
    }
    getDepartmentModules=(b)=>{
        axios.get("https://localhost:5001/api/subjects/department/"+b+"/semester/"+this.state.user.semester)
            .then(res=>{
                this.setState({
                    departmentModules:res.data
                })
                console.log(res.data)
            })
    }
    getISModules=()=>{
        axios.get("https://localhost:5001/api/subjects/department/is/semester/"+this.state.user.semester)
            .then(res=>{
                this.setState({
                    iSModules:res.data
                })
                console.log(res.data)
            })
    }
    render() {
        const mod=this.state.modules.map((module)=>{
            return(
                <li key={module.id}>
                    <label>{module.subject.code}-{module.subject.name}</label>
                    <button>unenroll</button>
                </li>
            )
        })
        const dept=this.state.departmentModules.map((module)=>{
            return(
                <li key={module.id}>
                    <label>{module.code}-{module.name}</label>
                    <button>enroll</button>
                </li>
            )
        })
        const is=this.state.iSModules.map((module)=>{
            return(
                <li key={module.id}>
                    <label>{module.code}-{module.name}</label>
                    <button>enrole</button>
                </li>
            )
        })

        return(
            <>
                {this.state.user!=null&&
                <div>
                    <div className="container-fluid">
                        {/*{userForm}*/}
                        <form method="put">
                            <FormGroup>
                                <label htmlFor="fullname">Fullname</label>
                                <input type="text"
                                       placeholder="fullname"
                                       readOnly
                                       value={this.state.user.fullName}/>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="email">E-mail</label>
                                <input type="email"
                                       placeholder="email"
                                       readOnly
                                       value={this.state.user.email}/>
                            </FormGroup>
                            {this.state.user.semester!=null&&
                            <FormGroup>
                                <label htmlFor="semester">Semester</label>
                                <input type="number"
                                       placeholder="semester"
                                       value={this.state.user.semester}/>
                            </FormGroup>}
                            {/*{semester}*/}
                            {/*{department}*/}
                            {this.state.user.departmentId!=null&&
                            <FormGroup>
                                <label htmlFor="departmentId">Department</label>
                                <input type="text"
                                       placeholder="departmentId"
                                       onChange={(e) => {
                                           this.handleDepartmentChange(e)
                                       }}
                                       value={this.state.user.departmentId}/>
                            </FormGroup>
                            }
                            {/*<FormGroup>*/}
                            {/*    <label htmlFor="fullname">Fullname</label>*/}
                            {/*    <input type="text"*/}
                            {/*           placeholder="fullname"*/}
                            {/*           value={this.state.user.fullName}/>*/}
                            {/*</FormGroup>*/}
                        </form>
                    </div>
                    <Selectstudent getStudent={this.getUserById}/>
                    <div>
                        <h4 onClick={()=>{this.getModules(this.state.user.id)}}>Enrolled Modules</h4>
                        {mod}

                    </div>
                    <div>
                        <h4>Enrollable Modules</h4>
                        {dept}
                        {is}
                    </div>
                </div>
                }
            </>
        )
    }

}
export default ModuleEnrolement