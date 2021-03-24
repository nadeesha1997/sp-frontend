import React, {Component} from 'react'
import Calendar from 'react-calendar'
import '../css/calendar.css';
import moment from 'moment'
import axios from "axios";

class CalendarNew extends Component {
    constructor(props) {
        super(props);
        let today=new Date();
        this.state={
            date:today,
            sessions:null
        }
        this.props.updateDate(today);
        this.changeDate=this.changeDate.bind(this);
        this.sessionsGet=this.sessionsGet.bind(this);
    }
    changeDate = (e) => {
        this.setState({
            date:e
        },()=>{this.sessionsGet(e)})
        // console.log(e);
        this.props.updateDate(e);
        // window.location.reload();
        this.forceUpdate(()=>this.props.updateDate(e));
    }
    sessionsGet=(e)=>{
        axios.get('https://localhost:5001/api/sessions/dateonly/'+moment(e).format('YYYY-MM-DD'))
            .then((res)=>{this.setState({sessions:res.data},()=>{this.forceUpdate(()=>this.props.sessions(res.data));})})

    }
    render() {
        return (
            <div className="calendar">

                <Calendar
                    value={this.state.date}
                    onChange={this.changeDate}
                    className="react-calendar"
                />
                {/*<p> TODAY: <b>{moment(this.state.date).format('MMMM Do YYYY')}</b></p>
*/}
            </div>
        )
    }
}
export default CalendarNew;