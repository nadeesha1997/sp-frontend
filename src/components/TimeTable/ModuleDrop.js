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
            smodule:this.getSmodule
        }
        this.updateDate=this.updateDate.bind(this)
        this.checkBooked=this.checkBooked.bind(this)
        this.parentCallback=this.parentCallback.bind(this)
        this.setStartDateTime=this.setStartDateTime.bind(this)
        this.setEndDateTime=this.setEndDateTime.bind(this)
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
    }
    static getDerivedStateFromProps(props, state){
        // const  getSmodule=()=>{
        //     if(props.sessions.length!=0){
        //         state.dailyModules.forEach(module=>{
        //             if((moment(module.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=state.StartDateTime)&&((moment(module.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=state.EndDateTime))&&module.hallId.toString()===this.state.HallId){
        //                 return(module);
        //             }
        //         });
        //     }
        // }
        let stime = moment(props.date).format('YYYY-MM-DD') + "T" + props.startTime
        let etime = moment(props.date).format('YYYY-MM-DD') + "T" + props.endTime
        // const  getSmodule=()=>{
        //     if(props.sessions.length!=0){
        //         props.sessions.forEach(module=>{
        //             if((moment(module.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=stime)&&((moment(module.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=etime))&&module.hallId.toString()===props.hallid){
        //                 console.log(module)
        //                 return(module);
        //             }
        //         });
        //     }
        // }
        //let getmodule=(props.sessions.length!=0&&props.sessions.forEach(session=>{}))
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
    getModule=()=>{
        axios.get('https://localhost:5001/api/sessions')
    }
    // checkBooked=()=>{
    //     this.setState({dailyModules:this.props.sessions},()=>{
    //         if(this.state.dailyModules){
    //             this.state.dailyModules.forEach(module=>{
    //                 if((moment(module.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=this.state.StartDateTime)&&((moment(module.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=this.state.EndDateTime))&&module.hallId.toString()===this.state.HallId){
    //                     this.setState({
    //                         reserved:true,
    //                         smodule:module
    //                     })
    //                     console.log("smodule"+this.state.smodule)
    //                 }
    //             });
    //             // console.log("state is")
    //             // console.log(this.state)
    //         }
    //         else {
    //             console.log("smodule is null")
    //         }
    //     })
    //     // console.log(this.state)
    // }
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
    // getSmodule=()=>{
    //     if(this.state.dailyModules.length!=0){
    //         this.state.dailyModules.forEach(module=>{
    //             if((moment(module.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=this.state.StartDateTime)&&((moment(module.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=this.state.EndDateTime))&&module.hallId.toString()===this.state.HallId){
    //                 return(module);
    //             }
    //         });
    //     }
    // }

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
        // this.forceUpdate()
        this.props.rerender();
        this.parentCallback(this.checkBooked);
    }
    // componentWillMount() {
    //     this.checkBooked();
    // }

    render() {
        // const code=()=>{
        //     this.props.sessions.forEach(module=>{
        //         if((moment(module.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=this.state.StartDateTime)&&((moment(module.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=this.state.EndDateTime))&&module.hallId.toString()===this.state.HallId){
        //             this.setState({
        //                 reserved:true,
        //                 smodule:module
        //             })
        //             console.log("smodule"+this.state.smodule)
        //         }
        //     })
        // }
        console.log("value is")
        console.log(this.props.module(this.state.StartDateTime,this.state.EndDateTime))
        return(
            <div
                className="grid-item1"
                onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>this.onDrop(e, "complete")}
                onClick={()=>{this.parentCallback(this.checkBooked)}}>
                {/*{this.props.module(this.state.StartDateTime,this.state.EndDateTime).reserved&&*/}

            {/*<div style={{backgroundColor: "red"}}><p>{this.props.module(this.state.StartDateTime,this.state.EndDateTime).module}</p></div>}*/}
            {/*    {this.props.module(this.state.StartDateTime,this.state.EndDateTime).reserved&&*/}
            {/*     <div style={{backgroundColor: "red"}}><p>Reserved</p></div>}*/}
                {this.props.module(this.state.StartDateTime,this.state.EndDateTime)}
            </div>
        )
    }
}
export default ModuleDrop