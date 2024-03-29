import React,{Component} from 'react'
import '../css/table.css'
import ModuleDrop from "./ModuleDrop";
import axios from "axios";
import moment from "moment";
import CalendarNew from "../calendar/calendarNew";

class TimeTable extends Component{
    constructor(props) {
        let now= new Date();
        super(props);
        this.state={
            date:now,
            sessions:[]
        }
        // this.setDate();
        this.sessionsGet=this.sessionsGet.bind(this);
        //this.setDate=this.setDate.bind(this);
        this.rerender=this.rerender.bind(this);
        //this.sessionsGet();
        this.updateDate=this.updateDate.bind(this);
    }
    sessionsGet=()=>{
        axios.get('https://localhost:5001/api/sessions/dateonly/'+moment(this.state.date).format('YYYY-MM-DD'))
            .then((res)=>{this.setState({sessions:res.data},()=>{this.forceUpdate();})})

    }
    getSessions=(data)=>{
        this.setState({sessions:data},()=>this.forceUpdate())
    }
    // setDate=()=>{
    //     let {date}=this.props
    //     this.setState({date})
    //     this.forceUpdate()
    // }
    componentDidMount() {
        this.sessionsGet()
        // this.setDate()
        this.updateDate();
    }
    rerender=()=>{
        this.sessionsGet()
        this.forceUpdate()
    }
    updateDate = data => {
        this.setState({
            date: data
        },()=>{this.forceUpdate()})

    }
    // getModule=(startTimeDate,endTimeDate)=>{
    //     if(this.state.sessions.length!=0){
    //         this.state.sessions.forEach(module=>{
    //             if((moment(module.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=startTimeDate)&&((moment(module.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=endTimeDate))){
    //                 return({
    //                     module:module,
    //                     reserved:true
    //                 })
    //             }
    //             else {
    //                 return ({
    //                     module:null,
    //                     reserved:false
    //                 })
    //             }
    //         });
    //     }
    // }

    render() {
        return(
            <div>


                <div className="row">
                    <div className="col-lg-12 col-md-6">
                        <div className="cale">
                            <CalendarNew updateDate={this.updateDate} sessions={this.getSessions}/>
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-item">Time</div>
                    <div className="grid-item" hallid="1">DO1-A</div>
                    <div className="grid-item" hallid="2">DO1-B</div>
                    <div className="grid-item" hallid="3">DO2-A</div>
                    <div className="grid-item" hallid="4">DO2-B</div>
                    <div className="grid-item" hallid="5">LR1</div>
                    <div className="grid-item" hallid="6">LR2</div>
                    <div className="grid-item" hallid="7">LT1</div>
                    <div className="grid-item" hallid="8">LT2</div>
                    <div className="grid-item" hallid="9">NLH1</div>
                    <div className="grid-item" hallid="10">NLH2</div>
                    <div className="grid-item" hallid="11">IS-CC</div>
                    <div className="grid-item" hallid="12">ELEC-CC</div>
                    <div className="grid-item" hallid="13">ELR</div>
                    <div className="grid-item" hallid="14">CLR</div>
                    <div className="grid-item" hallid="15">MLR</div>
                    <div className="grid-item" hallid="16">IS-SEMINAR</div>
                    <div className="grid-item">7.30</div>
                    <div className="grid-item"><ModuleDrop hallid="1" startTime="07:30:00" EndTime="08:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="2" startTime="07:30:00" EndTime="08:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="3" startTime="07:30:00" EndTime="08:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="4" startTime="07:30:00" EndTime="08:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="5" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="6" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="7" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="8" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="9" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="10" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="11" startTime="07:30:00" EndTime="08:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="12" startTime="07:30:00" EndTime="08:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="07:30:00" EndTime="08:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="07:30:00" EndTime="08:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">8.30</div>
                    <div className="grid-item"><ModuleDrop hallid="1" startTime="08:30:00" EndTime="09:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="2" startTime="08:30:00" EndTime="09:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="3" startTime="08:30:00" EndTime="09:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="4" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender} /></div>
                    <div className="grid-item"><ModuleDrop hallid="5" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="6" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="7" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="8" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="9" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="10" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="11" startTime="08:30:00" EndTime="09:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="12" startTime="08:30:00" EndTime="09:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="08:30:00" EndTime="09:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender} /></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">9.30</div>
                    <div className="grid-item"><ModuleDrop hallid="1" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="2" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="3" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="4" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="5" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="6" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="7" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="8" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="9" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="10" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="11" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="12" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="09:30:00" EndTime="10:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">10.30</div>
                    <div className="grid-item"><ModuleDrop hallid="1" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="2" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="3" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="4" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="5" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="6" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="7" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="8" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="9" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="10" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="11" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="12" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="10:30:00" EndTime="11:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">11.30</div>
                    <div className="grid-item"><ModuleDrop hallid="1" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="2" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="3" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="4" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="5" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="6" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="7" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="8" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="9" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="10" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="11" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="12" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="11:30:00" EndTime="12:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">12.30</div>
                    <div className="grid-item"><ModuleDrop hallid="1" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="2" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="3" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="4" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="5" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="6" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="7" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="8" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="9" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="10" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="11" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="12" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="12:30:00" EndTime="13:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">1.30</div>
                    <div className="grid-item"><ModuleDrop hallid="1" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="2" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="3" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="4" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="5" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="6" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="7" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="8" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="9" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="10" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="11" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="12" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="13:30:00" EndTime="14:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">2.30</div>
                    <div className="grid-item"><ModuleDrop hallid="1" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="2" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="3" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="4" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="5" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="6" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="7" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="8" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="9" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="10" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="11" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="12" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="14:30:00" EndTime="15:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">3.30</div>
                    <div className="grid-item"><ModuleDrop hallid="1" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="2" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="3" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="4" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="5" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="6" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="7" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="8" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="9" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="10" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="11" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="12" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="15:30:00" EndTime="16:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">4.30</div>
                    <div className="grid-item"><ModuleDrop hallid="1" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="2" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="3" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="4" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="5" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="6" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="7" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="8" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="9" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="10" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="11" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="12" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="16:30:00" EndTime="17:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">5.30</div>
                    <div className="grid-item"><ModuleDrop hallid="1" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="2" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="3" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="4" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="5" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="6" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="7" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="8" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="9" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="10" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="11" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="12" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="17:30:00" EndTime="18:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">6.30</div>
                    <div className="grid-item"><ModuleDrop hallid="1" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="2" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="3" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="4" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="5" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="6" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="7" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="8" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="9" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="10" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="11" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="12" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="18:30:00" EndTime="19:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                </div>
            </div>
        )
    }
}
export default TimeTable;