import React, {Component} from 'react'
import Calendar from 'react-calendar'
import '../css/calendar.css';
import moment from 'moment'

class CalendarNew extends Component {
    constructor(props) {
        super(props);
        let today=new Date();
        this.state={
            date:today
        }
        this.changeDate=this.changeDate.bind(this)
    }
    changeDate = (e) => {
        this.setState({
            date:e
        })
        // console.log(e);
        this.props.updateDate(e);
        // window.location.reload();
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