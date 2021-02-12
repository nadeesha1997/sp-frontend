import axios from 'axios';
import React from 'react';
import './css/home.css'


export default class StudentList extends React.Component {
constructor() {
    super();
    this.state = {
        semester: ' ',
        department: ' ',
        modules: []
    }

}

    OnSubmit() {
        console.log(this.state)
        axios.get(`https://localhost:5001/api/subjects/department/${this.state.department}/semester/${this.state.semester}`)
            .then(res => {
                const mod= res.data;
                this.setState({modules:mod});
                console.log(this.state)
            })
    }


    handleSemChange(event) {
        let value = event.target.value;
        this.setState({semester:value});
        console.log(this.state)
    }

    handleDeptChange(event) {
        let value = event.target.value;
        this.setState({department:value});
        console.log(this.state)
    }


    render() {

        const mod=this.state.modules.map((mod)=>{
            return(
                <div>
             <table> <div key={mod.code}>
                 <th><h5>{mod.code}</h5>
             </th>
             <th> <div key={mod.name}>
                <h5>{mod.name}</h5>
            </div> </th></div>
             </table>

                </div>

        );
        });

        return (
            <div><div className="row-cols-md-6">
                <div className="bottom_right">
                    <div className="custom-select">
                        <select ref="selectOption" onChange={(e) => this.handleSemChange(e)}>
                            <option>select the semester:</option>
                            <option value="1">semester 01</option>
                            <option value="2">semester 02</option>
                            <option value="3">semester 03</option>
                            <option value="4">semester 04</option>
                            <option value="5">semester 05</option>
                            <option value="6">semester 06</option>
                            <option value="7">semester 07</option>
                            <option value="8">semester 08</option>
                        </select>
                    </div>
                </div>

                <div className="bottom_corner">
                    <div className="custom-select">
                        <select ref="selectTime" onChange={(e) => this.handleDeptChange(e)}>
                            <option>select the Department:</option>
                            <option value="EE">DEIE</option>
                            <option value="CE">CEE</option>
                            <option value="MM">MME</option>
                            <option value="IS">IS</option>
                        </select>
                    </div>
                </div>



                <div>
                    <button onClick={() => this.OnSubmit()}
                            style={{backgroundColor:'#9b82c3',marginTop:300,marginLeft:200}}>
                        <b>SELECT</b>
                    </button>

                    <div>
                        <div>
                            <table><td>{mod}</td>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        )
    }


}