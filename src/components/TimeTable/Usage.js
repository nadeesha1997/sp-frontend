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
                    colors.purple,
                    colors.black,
                    colors.brown,
                    colors.gray,
                    colors.yellow,
                    colors.purple,
                    colors.blue,
                    colors.green,
                    colors.orange,
                    colors.red,
                    colors.pink,
                    colors.black,
                ],
                series: [
                    {
                        name: "Usage",
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


                        //    {value:(this.sessiondata)[0].value},
                            // {value:(this.arr[1].value),name: (this.arr[1].name)},
                            // {value:(this.arr[2].value),name: (this.arr[2].name)},
                            // {value:(this.arr[3].value),name: (this.arr[3].name)},
                            // {value:(this.arr[4].value),name: (this.arr[4].name)},
                            // {value:(this.arr[5].value),name: (this.arr[5].name)},
                            // {value:(this.arr[6].value),name: (this.arr[6].name)},
                            // {value:(this.arr[7].value),name: (this.arr[7].name)},
                            // {value:(this.arr[8].value),name: (this.arr[8].name)},
                            // {value:(this.arr[9].value),name: (this.arr[9].name)},
                            // {value:(this.arr[10].value),name: (this.arr[10].name)},
                            // {value:(this.arr[11].value),name: (this.arr[11].name)},
                            // {value:(this.arr[12].value),name: (this.arr[12].name)},
                            // {value:(this.arr[13].value),name: (this.arr[13].name)},
                            // {value:(this.arr[14].value),name: (this.arr[14].name)},
                            // {value:(this.arr[15].value),name: (this.arr[15].name)},



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

        this.hallsGet();
        this.sessionsGet();
        this.forceUpdate(()=>this.arrangeData());


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
                        style={{backgroundColor: '#baa1e3',width:180,height:25}}>
                    <b>VIEW HALL USAGE</b>
                </button>
                <Col  >

                    <ReactEcharts
                        option={this.state.donut}
                        style={{ height:"250px"}}>
                    </ReactEcharts>

                </Col>
            </div>
        )
    }
}