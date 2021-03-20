import React,{Component} from 'react'
import axios from "axios";
import '../css/ModuleDrop.css'
import moment from "moment";
import AuthService from '../../services/auth.service'

class ModuleDrop extends Component{

    constructor(props) {
        super(props);
        // let now= new Date();
        this.checkBooked();
        this.state={
            date:this.props.date,
            StartTime:this.props.startTime,
            EndTime:this.props.EndTime,
            HallId:this.props.hallId,
            SubjectId:0,
            StartDateTime:moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.startTime,
            EndDateTime:moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.EndTime,
            Permitted:false,
            UserId:AuthService.getCurrentUser().userDetails.id,
            reserved:false,
            dailyModules:this.props.sessions,
            smodule:null
        }
        this.updateDate=this.updateDate.bind(this)
        this.checkBooked=this.checkBooked.bind(this)
        this.parentCallback=this.parentCallback.bind(this)
    }
    updateDate=()=>{
        let {date}=this.props;
        this.setState({date})
    }
    parentCallback=(func)=>{
        this.props.rerender();
        func();
    }
    componentDidMount() {
        this.checkBooked();
        this.updateDate()
        this.setStartDateTime()
        this.setEndDateTime();
    }
    checkBooked=()=>{
        this.setState({dailyModules:this.props.sessions},()=>{
            if(this.state.dailyModules){
                this.state.dailyModules.forEach(module=>{
                    if((moment(module.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=this.state.StartDateTime)&&((moment(module.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=this.state.EndDateTime))&&module.hallId.toString()===this.state.HallId){
                        this.setState({
                            reserved:true,
                            smodule:module
                        })
                        console.log("smodule"+this.state.smodule)
                    }
                });
                // console.log("state is")
                // console.log(this.state)
            }
            else {
                console.log("smodule is null")
            }
        })
        // console.log(this.state)
    }

    // getModule=(id)=>{
    //     // let mod=axios.get("https://localhost:5001/api/subjects/"+id);
    //     // return mod;
    //     // console.log("-------------------------------------------------------------------");
    //     axios.get("https://localhost:5001/api/subjects/"+id).then(res=>{
    //         const mod=res.data;
    //         console.log("mod");
    //         console.log(mod);
    //         this.setState({
    //             module:mod
    //         });
    //     })
    //     console.log(this.state);
    // }
    setStartDateTime=()=> {
        // let str = moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.startTime;
        this.setState({
            StartDateTime: moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.startTime
        })
    }
    setEndDateTime=()=> {
        // let str = moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.EndTime;
        this.setState({
            EndDateTime: moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.EndTime
        })
    }

    sendData=()=>{
        let data={
            date:this.props.date,
            StartTime:this.props.startTime,
            EndTime:this.props.EndTime,
            HallId:this.props.hallId,
            SubjectId:this.state.SubjectId,
            StartDateTime:moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.startTime,
            EndDateTime:moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.EndTime,
            Permitted:false,
            UserId:this.state.UserId,
            reserved:false,
        }
        axios.post("https://localhost:5001/api/sessions",data)
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
    }
    onDragLeave= (ev) => {
        let id = ev.dataTransfer.getData("id");
        this.setState({
            SubjectId: id
        })
        this.parentCallback()
    }


    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");
        console.log("id is"+id)
        this.setState({
            SubjectId:ev.dataTransfer.getData("id")
        },()=>{this.forceUpdate(()=>{this.sendData()})})
        console.log('dragdrop:',this.state);
        this.checkBooked();
        this.sendData();
        // this.forceUpdate()
        this.props.rerender();
        this.parentCallback(this.checkBooked);
    }

    render() {
        return(
            <div
                className="grid-item1"
                onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>this.onDrop(e, "complete")}
                onClick={()=>{this.parentCallback(this.checkBooked)}}
            >{this.state.reserved&&
            // <div style={{backgroundColor: "red"}}><p>{this.state.smodule.code}</p></div>}
            <div style={{backgroundColor: "red"}}><p>Reserved</p></div>}
            </div>
        )
    }
}
export default ModuleDrop