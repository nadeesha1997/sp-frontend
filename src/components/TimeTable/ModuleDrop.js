 import React,{Component} from 'react'
import axios from "axios";
import '../css/ModuleDrop.css'

class ModuleDrop extends Component{

    constructor(props) {
        super(props)}
    getModule=(id)=>{
        let mod=axios.get("https://localhost:5001/api/subjects/"+id);
        return mod;
        console.log("-------------------------------------------------------------------");
        axios.get("https://localhost:5001/api/subjects/"+id).then(res=>{
            const mod=res.data;
            console.log("mod");
            console.log(mod);
            this.setState({
                module:mod
            });
        })
        console.log(this.state);
    }
    state={
        StartTime:this.props.startTime,
        EndTime:this.props.EndTime,
        HallId:this.props.hallId,
        SubjectId:this.getModule
    }


    onDragOver=(ev)=>{
        ev.preventDefault()
    }
    onDragStart=(ev,id)=>{
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id",id);
        // console.log(ev.dataTransfer.data);
    }


    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");
        // let tasks = this.state.tasks.filter((task) => {
        //     if (task.name === id) {
        //         task.category = cat;
        //     }
        //     return task;
        // });
        this.setState({
            SubjectId:id
        })
        console.log('dragdrop:',this.state);

        {/*

           data:
           StartTime:this.props.startTime
           EndTime:this.props.EndTime
           HallId:this.props.hallId
           SubjectId:null
            console.log(this.state)*/
        }
    }

    render() {
        return(
            <div
                className="grid-item1"
                onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>this.onDrop(e, "complete")}>
            </div>

        )
    }
}
export default ModuleDrop