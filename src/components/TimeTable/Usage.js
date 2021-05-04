import React from 'react';
import ReactECharts from 'echarts-for-react';
import axios from "axios";
import moment from "moment";  // or var ReactECharts = require('echarts-for-react');


export default class Usage extends React.Component {
    constructor() {
        super();
       
        this.state = {
            sessions:[],
            sessiondata:[],
            halls:[]
        }

    }
    
    hallsGet=()=>{
        axios.get('https://localhost:5001/api/halls')
        .then(res=>{
            this.setState({halls:res.data})
        })
    }

    sessionsGet=()=>{
        axios.get('https://localhost:5001/api/sessions/dateonly/'+moment(this.props.date).format('YYYY-MM-DD'))
            .then((res)=>{this.setState({sessions:res.data},()=>{this.forceUpdate();})})
            .catch(err=>console.log(err))
        // this.state.sessions.filter(
        //     sessions:[],
        //     sessions.hallid=1,
        //     this.setState({sessions.hallid.length})
        // )
    }
    arrangeData=()=>{
        for(let i=1;i<=this.state.halls.length;i++){
            let hall=this.state.sessions.filter(session=>{
                return(session.hall.id===i);
            });
            let obj={
                name:this.state.halls[i-1].name,
                count:hall.length
            };
            let arr=this.state.sessiondata;
            arr.push(obj);
            this.setState({sessiondata:arr});
            console.log("hall");
            console.log(hall);
            console.log("state");
            console.log(this.state);
            console.log("obj");
            console.log(obj);
        }
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
        this.hallsGet();
        this.sessionsGet();
        this.forceUpdate(()=>this.arrangeData());

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