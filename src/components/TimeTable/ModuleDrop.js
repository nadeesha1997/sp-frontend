import React,{Component} from 'react'
import axios from "axios";
import '../css/ModuleDrop.css'
import moment from "moment";
import AuthService from '../../services/auth.service'

class ModuleDrop extends Component{

    constructor(props) {
        super(props);
        // let now= new Date();
        // this.checkBooked();
        this.state={
            date:this.props.date,
            StartTime:this.props.startTime,
            EndTime:this.props.EndTime,
            HallId:this.props.hallid,
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
        this.setStartDateTime=this.setStartDateTime.bind(this)
        this.setEndDateTime=this.setEndDateTime.bind(this)
        this.getMod=this.getMod.bind(this);
        // this.getMod();
    }
    updateDate=()=>{
        // let {date}=this.props;
        // this.setState({date})
        this.setState({date:this.props.date})
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
        this.getMod();
    }
    static getDerivedStateFromProps(props, state){
        let stime = moment(props.date).format('YYYY-MM-DD') + "T" + props.startTime
        let etime = moment(props.date).format('YYYY-MM-DD') + "T" + props.endTime
         return(
            {
                dailyModules:props.sessions,
                date:props.date,
                StartDateTime:moment(props.date).format('YYYY-MM-DD') + "T" + props.startTime,
                EndDateTime:moment(props.date).format('YYYY-MM-DD') + "T" + props.EndTime,
                // smodule: getSmodule()
            }
        )

    }

    getMod=()=>{
        let stime = moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.startTime
        let etime = moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.EndTime
        axios.get("https://localhost:5001/api/sessions/"+stime+"/"+etime+"/"+this.props.hallid)
            .then(res=>{
                if(res.data!=null){
                    this.setState({
                        smodule:res.data,
                        reserved:true
                    })
                }
                console.log()

            })
            .then(()=>this.forceUpdate())
    }
    checkBooked=()=>{
        if(this.state.dailyModules.length!=0){
            this.state.dailyModules.forEach(module=>{
                if((moment(module.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=this.state.StartDateTime)&&((moment(module.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=this.state.EndDateTime))&&module.hallId.toString()===this.state.HallId){
                    this.setState({
                        reserved:true,
                        smodule:module
                    })
                    console.log("smodule"+this.state.smodule)
                }
            });
        }
    }

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
            HallId:this.props.hallid,
            SubjectId:this.state.SubjectId,
            StartDateTime:moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.startTime,
            EndDateTime:moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.EndTime,
            Permitted:false,
            UserId:this.state.UserId,
            reserved:false,
        }
        axios.post("https://localhost:5001/api/sessions",data)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
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
        this.getMod();
        this.forceUpdate()
        this.props.rerender();
        this.parentCallback(this.checkBooked);
    }

    render() {
        // console.log("value is")
        // console.log(this.props.module(this.state.StartDateTime,this.state.EndDateTime))
        return(
            <div
                className="grid-item1"
                onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>this.onDrop(e, "complete")}
                onClick={()=>{this.parentCallback(this.checkBooked)}}>
                {this.state.reserved&&<div style={{backgroundColor: "red"}}><p>{this.state.smodule.subject.code}</p></div>}
            </div>
        )
    }
}
export default ModuleDrop