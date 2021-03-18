import axios from 'axios';
import React from 'react';
import '../css/SubjectList.css'


export default class selectstudent extends React.Component {
    constructor() {
        super();
        this.state = {
            semester: ' ',
            department: ' ',
            students: []
        }
        this.OnSubmit=this.OnSubmit.bind(this);

    }

    OnSubmit() {
        console.log(this.state)
        axios.get(`https://localhost:5001/api/user/department/${this.state.department}/semester/${this.state.semester}`)
            .then(res => {
                const users = res.data;
                this.setState({students: users});
                console.log(this.state)
            })
    }

    handleSemChange(event) {
        let value = event.target.value;
        this.setState({semester: value});
        console.log(this.state)
    }

    handleDeptChange(event) {
        let value = event.target.value;
        this.setState({department: value});
        console.log(this.state)
    }
    // getModuleId=(id)=>{this.props.getModuleId(id)}
    handleClick=(e)=>{
        this.props.getUser(e)
    }
    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value,
            }
        });
    };

    render() {

        const mod = this.state.students.map((mod) => {
            return (
                <ul>
                    <div key={mod.id}
                         className="draggable"
                        onClick={()=>{
                            this.props.getStudent(mod.id)
                        }}>
                        {mod.userName} - {mod.fullName}
                    </div>
                </ul>
            );
        });

        return (
            <div style={{margin: '50px'}}>
                <div style={{width: '100%'}}>


                    <div className=" bottom_right ">

                        <div className="custom-select">

                            <select
                                // ref="selectOption"
                                onChange={(e) => this.handleSemChange(e)}>
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


                    <div className=" bottom_corner ">
                        <div className="custom-select">

                            <select
                                // ref="selectTime"
                                onChange={(e) => this.handleDeptChange(e)}>
                                <option>select the Department:</option>
                                <option value="1">DEIE</option>
                                <option value="2">CEE</option>
                                <option value="3">MME</option>
                                <option value="4">IS</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div>

                    <div className="container">
                        <div className="row" style={{margin: '20px'}}>
                            <button onClick={(e) => this.OnSubmit()}
                                    style={{backgroundColor: '#9b82c3'}}>
                                <b>SELECT</b>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div>
                        {mod}
                    </div>
                </div>
            </div>
        )
    }
}
