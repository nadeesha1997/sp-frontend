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
            module:null,
            teachers:[]
        }
        console.log(this.state)
    }
    getUserById=(id)=>{
        axios.get("https://localhost:5001/api/users/"+id)
            .then(res=>{
                this.setState({
                    user:res.data
                })
            })
            .then(err=>console.log(err))
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
    handleDepartmentChange=(e)=>{
        this.setState({
            // user.semester:e.target.value
        })
    }
    getUser=(id)=>{
        this.getUserById(id);
    }
    render() {
        // const semester=this.state.user.map(
        //     (user)=>{
        //         // console.log("semester is: "+user.semester)
        //         if(this.state.user.semester!=null){
        //             return(
        //                 <FormGroup>
        //                     <label htmlFor="semester">Semester</label>
        //                     <input type="number"
        //                            placeholder="semester"
        //                            value={user.fullName}/>
        //                 </FormGroup>
        //             )
        //         }
        //         else{
        //             return (<div></div>);
        //         }
        //     }
        // )
        // const department=this.state.user.map((user)=>{
        //         if(user.departmentId!=null){
        //             return(
        //                 <FormGroup>
        //                     <label htmlFor="department">Semester</label>
        //                     <input type="number"
        //                            placeholder="department"
        //                            value={user.departmentId}/>
        //                 </FormGroup>
        //             )
        //         }
        //         else{
        //             return (<div></div>);
        //         }
        //     }
        // )
        // const userForm=this.state.user.map(()=>{
        //     if(this.state.user){
        //         return(
        //             <form method="put">
        //                 <FormGroup>
        //                     <label htmlFor="fullname">Fullname</label>
        //                     <input type="text"
        //                            placeholder="fullname"
        //                            readOnly
        //                            value={this.state.user.fullName}/>
        //                 </FormGroup>
        //                 <FormGroup>
        //                     <label htmlFor="email">E-mail</label>
        //                     <input type="email"
        //                            placeholder="email"
        //                            readOnly
        //                            value={this.state.user.email}/>
        //                 </FormGroup>
        //                 <FormGroup>
        //                     <label for="semester">Semester</label>
        //                     <input type="number"
        //                            placeholder="semester"
        //                            value={this.state.user.userDetails.fullName}/>
        //                 </FormGroup>
        //                 {/*{semester}*/}
        //                 {/*{department}*/}
        //                 <FormGroup>
        //                     <label htmlFor="department">Department</label>
        //                     <input type="text"
        //                            placeholder="department"
        //                            onChange={(e)=>{this.handleDepartmentChange(e)}}
        //                            value={this.state.user.userDetails.fullName}/>
        //                 </FormGroup>
        //                 <FormGroup>
        //                     <label for="fullname">Fullname</label>
        //                     <input type="text"
        //                            placeholder="fullname"
        //                            value={this.state.user.userDetails.fullName}/>
        //                 </FormGroup>
        //             </form>
        //         )
        //     }
        // })
        return(
            <>
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
                        <FormGroup>
                            <label htmlFor="semester">Semester</label>
                            <input type="number"
                                   placeholder="semester"
                                   value={this.state.user.fullName}/>
                        </FormGroup>
                        {/*{semester}*/}
                        {/*{department}*/}
                        <FormGroup>
                            <label htmlFor="department">Department</label>
                            <input type="text"
                                   placeholder="department"
                                   onChange={(e) => {
                                       this.handleDepartmentChange(e)
                                   }}
                                   value={this.state.user.fullName}/>
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="fullname">Fullname</label>
                            <input type="text"
                                   placeholder="fullname"
                                   value={this.state.user.fullName}/>
                        </FormGroup>
                    </form>
                </div>
                <Selectstudent getStudent={this.getUser}/>
            </>
        )
    }

}
export default ModuleEnrolement