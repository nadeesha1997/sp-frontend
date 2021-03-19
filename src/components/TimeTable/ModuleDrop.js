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
            reserved:false,
            dailyModules:[],
            smodule:null
        }
        // this.setStartDateTime()
        // this.setEndDateTime();
        console.log("drop state"+this.state.SubjectId)
        console.log("drop prop"+this.props.SubjectId)
        this.updateDate=this.updateDate.bind(this)
        this.checkBooked=this.checkBooked.bind(this)
    }
    updateDate=()=>{
        let {date}=this.props;
        this.setState({date})
    }
    componentDidMount() {
        this.updateDate()
        this.setStartDateTime()
        this.setEndDateTime();
        this.checkBooked();
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
                console.log("state is")
                console.log(this.state)
            }
            else {
                console.log("null")
            }
        })
        console.log(this.state)
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

    sendData=()=>{
        let data={
            date:this.props.date,
            StartTime:this.props.startTime,
            EndTime:this.props.EndTime,
            HallId:this.props.hallId,
            SubjectId:this.props.subjectId,
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
        },()=>{this.sendData()})
        console.log('dragdrop:',this.state);
        this.checkBooked();




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
        this.sendData();
        this.forceUpdate()

        {/*

           data:
           StartTime:this.props.startTime
           EndTime:this.props.EndTime
           HallId:this.props.hallId
           SubjectId:null
            console.log(this.state)*/
        }}

    render() {
        return(
            <div
                className="grid-item1"
                onDragOver={(e)=>this.onDragOver(e)}
                onDrop={(e)=>this.onDrop(e, "complete")}
                // onClick={()=>{this.checkBooked()}}
            >{this.state.reserved&&
            // <div style={{backgroundColor: "red"}}><p>{this.state.smodule.code}</p></div>}
            <div style={{backgroundColor: "red"}}><p>Reserved</p></div>}

            </div>

        )
    }
}
export default ModuleDrop