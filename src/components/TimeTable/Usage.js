import React from 'react';
import ReactECharts from 'echarts-for-react';
import axios from "axios";
import moment from "moment";  // or var ReactECharts = require('echarts-for-react');


export default class Usage extends React.Component {
    constructor() {
        super();
        this.state = {
            sessions:[]
        }

    }

    sessionsGet=()=>{
        axios.get('https://localhost:5001/api/sessions/dateonly/'+moment(this.state.date).format('YYYY-MM-DD'))
            .then((res)=>{this.setState({sessions:res.data},()=>{this.forceUpdate();})})
        this.state.sessions.filter(
            sessions:[],
            sessions.hallid=1,
            this.setState({sessions.hallid.length})
        )
    }

    OnSubmit() {

       /* axios.get(`https://localhost:5001/api/Sessions`)
            .then(res => {
                let sessions=[]
                sessions=res.data
                this.setState({Hall1Usage:sessions.length});
                console.log(this.state)
                console.log(sessions)
            })*/

    }


    render() {
        return (

            <div className="row" style={{margin: '10px'}}>
                <button onClick={() => this.OnSubmit()}
                        style={{backgroundColor: '#9b82c3'}}>
                    <b>VIEW HALL USAGE</b>
                </button>
            </div>
        )
    }
}