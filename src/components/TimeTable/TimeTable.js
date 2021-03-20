import React,{Component} from 'react'
import '../css/table.css'
import ModuleDrop from "./ModuleDrop";
import axios from "axios";
import moment from "moment";

class TimeTable extends Component{
    constructor(props) {
        // let now= new Date();
        super(props);
        this.state={
            date:null,
            sessions:[]
        }
        // this.setDate();
        this.sessionsGet=this.sessionsGet.bind(this);
        this.setDate=this.setDate.bind(this);
        this.rerender=this.rerender.bind(this);
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
    }
    rerender=()=>{
        this.sessionsGet()
        this.forceUpdate()
    }
    rerender=()=>{
        this.forceUpdate()
    }

    render() {
        return(
            <div className="grid-container">
                <div className="grid-item" hallId="1">Time</div>
                <div className="grid-item">DO1-A</div>
                <div className="grid-item">DO1-B</div>
                <div className="grid-item">DO2-A</div>
                <div className="grid-item">DO2-B</div>
                <div className="grid-item">LR1</div>
                <div className="grid-item">LR2</div>
                <div className="grid-item">NLH1</div>
                <div className="grid-item">NLH2</div>
                <div className="grid-item">IS-CC</div>
                <div className="grid-item">ELEC-CC</div>
                <div className="grid-item">7.30</div>

                <div className="grid-item"><ModuleDrop hallId="1" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} subjectId={this.props.moduleId}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} subjectId={this.props.moduleId}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} subjectId={this.props.moduleId}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} subjectId={this.props.moduleId}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} subjectId={this.props.moduleId}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="07:30:00" EndTime="08:30:00" date={this.props.date} subjectId={this.props.moduleId}/></div>
                <div className="grid-item">8.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} sessions={this.state.sessions} rerender={this.rerender}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} subjectId={this.props.moduleId} rerender={this.rerender}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} subjectId={this.props.moduleId} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} subjectId={this.props.moduleId}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} subjectId={this.props.moduleId}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} subjectId={this.props.moduleId}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} subjectId={this.props.moduleId}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} subjectId={this.props.moduleId}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="08:30:00" EndTime="09:30:00" date={this.props.date} subjectId={this.props.moduleId}/></div>

                <div className="grid-item">9.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.props.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item">10.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.props.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item">11.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.props.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item">12.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.props.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item">1.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.props.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item">2.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.props.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item">3.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.props.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item">4.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.props.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item">5.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.props.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item">6.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.props.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.props.date}/></div>
            </div>
        )
    }
}
export default TimeTable;