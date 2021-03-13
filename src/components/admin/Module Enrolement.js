import React,{Component} from "react";
import axios from "axios";
class ModuleEnrolement extends Component{
    constructor(props) {
        super(props);
        this.state={
            user:null,
            module:null,
            teachers:[]
        }
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

}
export default ModuleEnrolement