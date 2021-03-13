 import React,{Component} from 'react'
import axios from "axios";
import '../css/ModuleDrop.css'
 import moment from "moment";
import AuthService from '../../services/auth.service'

class ModuleDrop extends Component{

    constructor(props) {
        super(props);
        // let now= new Date();
        this.state={
            date:this.props.date,
            StartTime:this.props.startTime,
            EndTime:this.props.EndTime,
            HallId:this.props.hallId,
            SubjectId:this.props.subjectId,
            StartDateTime:'',
            EndDateTime:'',
            Permitted:false,
            UserId:AuthService.getCurrentUser().userDetails.id,
        }
        // this.setStartDateTime()
        // this.setEndDateTime();
        console.log("drop state"+this.state.SubjectId)
        console.log("drop prop"+this.props.SubjectId)
    }
    componentDidMount() {
        this.setStartDateTime()
        this.setEndDateTime();
    }

    getModule=(id)=>{
        // let mod=axios.get("https://localhost:5001/api/subjects/"+id);
        // return mod;
        // console.log("-------------------------------------------------------------------");
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
    setStartDateTime=()=> {
        let str = moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.startTime;
        this.setState({
            StartDateTime: str
        })
    }
    setEndDateTime=()=> {
        let str = moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.EndTime;
        this.setState({
            EndDateTime: str
        })
    }

    sendData=(e)=>{
        axios.post("https://localhost:5001/api/sessions",e)
            .then(res=>console.log(res))
            .then(err=>console.log(err))
            //.then(console.log(this.state))
    }
    onDragOver=(ev)=>{
        ev.preventDefault()
    }
    onDragStart=(ev,id)=>{
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id",id);
        this.setState({
            SubjectId:id
        })
        // this.setStartDateTime()
        // this.setEndDateTime();
        // console.log(ev.dataTransfer.data);
    }
    // onDragLeave= (ev, cat) => {
    //     let id = ev.dataTransfer.getData("id");
    //     this.setState({
    //         SubjectId: id
    //     })
    //     console.log('dragdrop:', this.state);
    //     this.setStartDateTime()
    //     this.setEndDateTime();
    // }


    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");
        this.setState({
            SubjectId:id
        },()=>{this.sendData(this.state)})
        console.log('dragdrop:',this.state);




        // this.setStartDateTime()
        // this.setEndDateTime();
        // const data={
        //     "StartDateTime":"2021-03-15T07:30:00",
        //     "EndDateTime":"2021-03-15T08:30:00",
        //     "Permitted":false,
        //     "SubjectId":"2",
        //     "HallId":"1",
        //     "UserId":this.state.UserId
        // }
        // console.log("before send")
        this.sendData(this.state);

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