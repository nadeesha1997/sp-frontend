import React from 'react';
import ReactECharts from 'echarts-for-react';
import axios from "axios";  // or var ReactECharts = require('echarts-for-react');


export default class Usage extends React.Component {
    constructor() {
        super();
        this.state = {
          Hall1Usage: 0
        }

    }


    OnSubmit() {
        axios.get(`https://localhost:5001/api/Sessions`)
            .then(res => {
                let sessions=[]
                sessions=res.data
                this.setState({Hall1Usage:sessions.length});
                console.log(this.state)
                console.log(sessions)
            })
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