 import React,{Component} from 'react'
import '../css/table.css'
import ModuleDrop from "./ModuleDrop";

class TimeTable extends Component{
    constructor(props) {
        super(props);
        this.state={
            date:this.props.date
        }
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

                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.state.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item">8.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.state.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item">9.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.state.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item">10.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.state.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item">11.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.state.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item">12.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.state.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item">1.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.state.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item">2.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.state.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item">3.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.state.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item">4.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.state.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item">5.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.state.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item">6.30</div>
                <div className="grid-item"><ModuleDrop hallId="1" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="2" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="3" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="4" startTime="7.30" EndTime="8.30" date={this.state.date} /></div>
                <div className="grid-item"><ModuleDrop hallId="5" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="6" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="7" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="8" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="9" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
                <div className="grid-item"><ModuleDrop hallId="10" startTime="7.30" EndTime="8.30" date={this.state.date}/></div>
            </div>
        )
    }
}
export default TimeTable;