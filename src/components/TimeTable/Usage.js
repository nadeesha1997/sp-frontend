import React from 'react';
// import ReactECharts from 'echarts-for-react';
import ReactEcharts from 'echarts-for-react';
import axios from "axios";
import moment from "moment";  // or var ReactECharts = require('echarts-for-react');
import config from '../config';
import {Col,Table,Badge,} from "reactstrap";

const colors = config.chartColors;


export default class Usage extends React.Component {
    constructor() {
        super();
        this.state = {
            sessions:[],
            sessiondata:[],
            halls:[],
            donut: {
                tooltip: {trigger: "item", formatter: "{a} <br/>{b}: {c} ({d}%)",},
                legend: {show: false,},
                color: [
                    colors.blue,
                    colors.green,
                    colors.orange,
                    colors.red,
                    colors.purple],
                series: [
                    {
                        name: "Likelihood",
                        type: "pie",
                        radius: ["50%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: "center",
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: "20",
                                    fontWeight: "bold",
                                },
                            },
                        },
                        data: [
                            // { value: 24, name: "LT1/LT2" },
                            // { value: 7, name: "NLH1/NLH2" },
                            // { value: 8, name: "LR1/LR2" },
                            // { value: 3, name: "DO1/DO2" },
                            // { value: 3, name: "Other" },
                        ]
                    }
                ]
            }
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
                value:hall.length
            };
            let arr=this.state.sessiondata;
            arr.push(obj);
            this.setState({sessiondata:arr});
            console.log("state");
            console.log(this.state);
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
        // let arr=this.state.donut.series[0].data;
        // this.setState({donut.series[0]})
        // this.setState(prevState => ({
        //     donut: {
        //       ...prevState.donut,           // copy all other key-value pairs of food object
        //       series: {                     // specific object of food object
        //         ...prevState.donut.series,   // copy all pizza key-value pairs
        //         series[0]         // update value of specific key
        //       }
        //     }
        //   }))

        this.setState(prevState => {
            let arr = Object.assign({}, prevState.donut.series);  // creating copy of state variable jasper
            arr[0].data=this.state.sessiondata;                    // update the name property, assign a new value                 
            return { arr };                                 // return new object jasper object
          })
    }


    render() {
        return (

            <div className="row" style={{margin: '10px'}}>
                <button onClick={() => this.OnSubmit()}
                        style={{backgroundColor: '#9b82c3'}}>
                    <b>VIEW HALL USAGE</b>
                </button>
                <Col  >
                        <p title={<h5>Chart <span className="fw-semi-bold">Donut Chart</span></h5>} close collapse>
                            <ReactEcharts
                                option={this.state.donut}
                                style={{ height:"250px"}}>
                            </ReactEcharts>
                            {/* Last modified : 2021/03/25 */}
                            {/* <div></div> */}
                            {/* <button style={{fontFamily:'Arial',width:150,backgroundColor:'#150037',marginTop:10,marginLeft:20,marginright:20}}><a href="https://forms.gle/KtdthhJRvhVcSKai9"><b>Add your preference here</b></a></button> */}
                            {/*<div>Add your preference here</div>
                            <div></div>
                            <button style={{fontFamily:'Arial',width:150,backgroundColor:'#150037',marginTop:10,marginLeft:20,marginright:20}}><a href="https://forms.gle/KtdthhJRvhVcSKai9"><b>Click me</b></a></button>
                        */}</p>
                    </Col>
</div>
        )
    }
}