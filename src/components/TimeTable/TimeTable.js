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
        axios.get('https://localhost:5001/api/sessions/dateonly/'+moment(this.props.date).format('YYYY-MM-DD'))
            .then((res)=>{this.setState({sessions:res.data},()=>{this.forceUpdate();})})

    }
    setDate=()=>{
        let {date}=this.props
        this.setState({date})
        this.forceUpdate(()=>this.sessionsGet())
    }
    componentDidMount() {
        this.sessionsGet()
        this.setDate()
        this.updateDate();
    }
    rerender=()=>{
        this.sessionsGet()
        this.forceUpdate()
    }
    updateDate = data => {
        this.setState({
            date: data
        },()=>{this.forceUpdate(()=>this.sessionsGet())})

    }
    getModule=(startTimeDate,endTimeDate)=>{
        if(this.state.sessions.length!=0){
            this.state.sessions.forEach(module=>{
                if((moment(module.startDateTime).format("YYYY-MM-DD[T]HH:mm:ss")<=startTimeDate)&&((moment(module.endDateTime).format("YYYY-MM-DD[T]HH:mm:ss")>=endTimeDate))){
                    return({
                        module:module,
                        reserved:true
                    })
                }
                else {
                    return ({
                        module:null,
                        reserved:false
                    })
                }
            });
        }
    }

    render() {
        return(
            <div>


                <div className="row">
                    <CalendarNew updateDate={this.updateDate}/>
                </div>
                <div className="grid-container">
                    <div className="grid-item">Time</div>
                    <div className="grid-item" hallId="1">DO1-A</div>
                    <div className="grid-item" hallId="2">DO1-B</div>
                    <div className="grid-item" hallId="3">DO2-A</div>
                    <div className="grid-item" hallId="4">DO2-B</div>
                    <div className="grid-item" hallId="5">LR1</div>
                    <div className="grid-item" hallId="6">LR2</div>
                    <div className="grid-item" hallId="7">LT1</div>
                    <div className="grid-item" hallId="8">LT2</div>
                    <div className="grid-item" hallId="9">NLH1</div>
                    <div className="grid-item" hallId="10">NLH2</div>
                    <div className="grid-item" hallId="11">IS-CC</div>
                    <div className="grid-item" hallId="12">ELEC-CC</div>
                    <div className="grid-item" hallId="13">ELR</div>
                    <div className="grid-item" hallId="14">CLR</div>
                    <div className="grid-item" hallId="15">MLR</div>
                    <div className="grid-item" hallId="16">IS-SEMINOR</div>

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
                    <div className="grid-item"><ModuleDrop hallid="22" startTime="08:30:00" EndTime="09:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="13" startTime="08:30:00" EndTime="09:30:00" date={this.state.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="14" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender} /></div>
                    <div className="grid-item"><ModuleDrop hallid="15" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallid="16" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">9.30</div>
                    <div className="grid-item"><ModuleDrop hallId="1" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="2" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="3" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="4" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="5" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="6" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="7" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="8" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="9" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="10" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="11" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="12" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="13" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="14" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="15" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="16" startTime="9.30" EndTime="10.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">10.30</div>
                    <div className="grid-item"><ModuleDrop hallId="1" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="2" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="3" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="4" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="5" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="6" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="7" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="8" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="9" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="10" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="11" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="12" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="13" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="14" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="15" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="16" startTime="10.30" EndTime="11.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">11.30</div>
                    <div className="grid-item"><ModuleDrop hallId="1" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="2" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="3" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="4" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="5" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="6" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="7" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="8" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="9" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="10" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="11" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="12" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="13" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="14" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="15" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="66" startTime="11.30" EndTime="12.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">12.30</div>
                    <div className="grid-item"><ModuleDrop hallId="1" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="2" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="3" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="4" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="5" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="6" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="7" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="8" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="9" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="10" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="11" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="12" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="13" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="14" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="15" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="66" startTime="12.30" EndTime="1.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">1.30</div>
                    <div className="grid-item"><ModuleDrop hallId="1" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="2" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="3" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="4" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="5" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="6" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="7" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="8" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="9" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="10" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="11" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="12" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="13" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="14" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="15" startTime="1.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="66" startTime="1.30" EndTime="2.30" date={this.props.date}sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">2.30</div>
                    <div className="grid-item"><ModuleDrop hallId="1" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="2" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="3" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="4" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="5" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="6" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="7" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="8" startTime="2.30" EndTime="2.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="9" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="10" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="11" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="12" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="13" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="14" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="15" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="66" startTime="2.30" EndTime="3.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">3.30</div>
                    <div className="grid-item"><ModuleDrop hallId="1" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="2" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="3" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="4" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="5" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="6" startTime="3.30" EndTime="4.30" date={this.props.date}sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="7" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="8" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="9" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="10" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="11" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="12" startTime="3.30" EndTime="4.30" date={this.props.date}sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="13" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="14" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="15" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="66" startTime="3.30" EndTime="4.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">4.30</div>
                    <div className="grid-item"><ModuleDrop hallId="1" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="2" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="3" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="4" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="5" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="6" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="7" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="8" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="9" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="10" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="11" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="12" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="13" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="14" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="15" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="66" startTime="4.30" EndTime="5.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">5.30</div>
                    <div className="grid-item"><ModuleDrop hallId="1" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="2" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="3" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="4" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="5" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="6" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="7" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="8" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="9" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="10" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="11" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="12" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="13" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="14" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="15" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="66" startTime="5.30" EndTime="6.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item">6.30</div>
                    <div className="grid-item"><ModuleDrop hallId="1" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="2" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="3" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="4" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="5" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="6" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="7" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="8" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="9" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="10" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="11" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="12" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="13" startTime="6.30" EndTime="7.30" date={this.props.date}sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="14" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="15" startTime="6.30" EndTime="7.30" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                    <div className="grid-item"><ModuleDrop hallId="66" startTime="6.30" EndTime="7cd.30" date={this.props.date}sessions={this.state.sessions} rerender={this.rerender}/></div>

           
                </div>
            </div>
        )
    }
}
export default TimeTable;