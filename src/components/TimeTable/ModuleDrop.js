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
        //this.updateMod=this.updateMod.bind(this);
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
    static getDerivedStateFromProps(props, state){
        let stime = moment(props.date).format('YYYY-MM-DD') + "T" + props.startTime
        let etime = moment(props.date).format('YYYY-MM-DD') + "T" + props.EndTime
        let reservedhall=false;
        let module=null;
        //////
        if(props.sessions.length!=0){
            props.sessions.forEach(session=>{
                if((moment(session.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=stime)&&((moment(session.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=etime))&&session.hallId.toString()===props.hallid){
                    module=session;
                    reservedhall=true;
                    //console.log("smodule"+this.state.smodule.subject.code)
                }
            })
        }
        //////
        return(
            {
                dailyModules:props.sessions,
                date:props.date,
                StartDateTime:moment(props.date).format('YYYY-MM-DD') + "T" + props.startTime,
                EndDateTime:moment(props.date).format('YYYY-MM-DD') + "T" + props.EndTime,
                smodule: module,
                reserved:reservedhall
            }
        )

    }
    // updateMod=()=>{
    //     let stime = moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.startTime
    //     let etime = moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.EndTime
    //     axios.get("https://localhost:5001/api/sessions/"+stime+"/"+etime+"/"+this.props.hallid)
    //         .then(res=>{
    //             if(res.data!=null){
    //                 let arr=this.state.dailyModules.push(res.data);
    //                 this.setState({
    //                     smodule:res.data,
    //                     reserved:true,
    //                     dailyModules:arr
    //                 })
    //             }
    //             console.log()
    //
    //         })
    //         .then(()=>this.forceUpdate())
    // }

    getMod=()=>{
        this.setState({
            reserved:false,
            smodule:null
        })
        let stime = moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.startTime
        let etime = moment(this.props.date).format('YYYY-MM-DD') + "T" + this.props.EndTime
        // axios.get("https://localhost:5001/api/sessions/"+stime+"/"+etime+"/"+this.props.hallid)
        //     .then(res=>{
        //         if(res.data!=null){
        //             this.setState({
        //                 smodule:res.data,
        //                 reserved:true
        //             })
        //         }
        //         console.log()
        //
        //     })
        //     .then(()=>this.forceUpdate())
        if(this.props.sessions.length!=0){
            this.props.sessions.forEach(session=>{
                if((moment(session.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=stime)&&((moment(session.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=etime))&&session.hallId.toString()===this.props.hallid){
                    this.setState({
                        reserved:true,
                        smodule:module
                    })
                    //console.log("smodule"+this.state.smodule.subject.code)
                }
                this.forceUpdate(()=>this.parentCallback(()=>this.forceUpdate()));
                this.parentCallback(this.checkBooked);
                this.parentCallback(this.checkBooked);
            })
        }
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
                this.forceUpdate();
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
            reserved:true,
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
        },()=>{this.forceUpdate(()=>{this.sendData();
            this.checkBooked()})})
        console.log('dragdrop:',this.state);
        this.checkBooked();
        //this.sendData();
        this.getMod();
        // this.updateMod();
        this.forceUpdate()
        // this.props.rerender();
        this.parentCallback(this.checkBooked);
        this.forceUpdate()
    }
    componentDidMount() {
        this.checkBooked();
        this.updateDate()
        this.setStartDateTime()
        this.setEndDateTime();
        this.getMod();
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
                {/*{this.state.reserved&&this.state.smodule&&<div style={{backgroundColor: "red", marginTop:"1"}}><p>{this.state.smodule.subject.code}</p></div>}*/}
                {this.state.reserved&&this.state.Permitted&&this.state.smodule&&<div style={{backgroundColor: "red", marginTop:"1"}}><p>{this.state.smodule.subject.code}</p></div>}
                {this.state.reserved&&!this.state.Permitted&&this.state.smodule&&<div style={{backgroundColor: "yellow", marginTop:"-10px",marginBottom:"-60px"}}><p>{this.state.smodule.subject.code}</p></div>}
            </div>
        )
    }
}
export default ModuleDrop