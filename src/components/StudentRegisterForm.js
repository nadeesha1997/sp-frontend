 import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';

class StudentRegisterForm extends Component  {


    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {



            "Student_ID": '',
            "Full_Name": '',
            "email": '',
            "password": '',
            "Dept_ID": '',
            "Semester": '',
            "Select_Modules":''


        },
        errors: {}
    });
    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }
    validate = () => {
        const { data } = this.state;
        let errors = {};

        if (data.Student_ID === '') errors.Student_ID = 'Student_ID can not be blank.';
        if (data.Full_Name === '') errors.Full_Name = 'Full_Name can not be blank.';
        if (data.email === '') errors.email = 'Email can not be blank.';
        if (data.email === '') errors.email = 'Email can not be blank.';
        if (data.Dept_ID === '') errors.Dept_ID = 'Dept_ID can not be blank.';
        if (data.Semester === '') errors.Semester = 'Semester should be entered.';
        if (data.Select_Modules === '') errors.Select_Modules = 'Modules should be selected';
        if (data.password === '') errors.password = 'Password must be valid.';
        if (data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords must match.';

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            //Call an api here
            axios.post('https://localhost:44374/api/Lecturer',data)
            //Resetting the form
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }



    render(){
        const { data, errors } = this.state;
        return(
            <div className="Container">
                <h4 className="center">STUDENT REGISTER</h4>
                <div id="Registerbox">
                    <div className="box">
                        <Form onSubmit={this.handleSubmit}>

                            <FormGroup>
                                <Label for="Student_ID">Student_ID</Label>
                                <Input  value={data.Student_ID} invalid={errors.Student_ID ? true : false} name="Student_ID" onChange={this.handleChange} />
                                <FormFeedback>{errors.Student_ID}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="Full_Name">Full_Name : </Label>
                                <Input  value={data.Full_Name} invalid={errors.Full_Name? true : false} name="Full_Name" onChange={this.handleChange} />
                                <FormFeedback>{errors.Full_Name}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email : </Label>
                                <Input  value={data.email} invalid={errors.email? true : false} name="email" onChange={this.handleChange} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="Dept_ID">Dept_ID : </Label>
                                <Input  value={data.Dept_ID} invalid={errors.Dept_ID? true : false} name="Dept_ID" onChange={this.handleChange} />
                                <FormFeedback>{errors.Dept_ID}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Password : </Label>
                                <Input value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                                <FormFeedback>{errors.password}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="confirmPassword">Confirm Password : </Label>
                                <Input  value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange} />
                                <FormFeedback>{errors.confirmPassword}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Semester">Semester : </Label>
                                <select className="form-control">
                                    <option>Semester 1</option>
                                    <option>Semester 2</option>
                                    <option>Semester 3</option>
                                    <option>Semester 4</option>
                                    <option>Semester 5</option>
                                    <option>Semester 6</option>
                                    <option>Semester 7</option>
                                    <option>Semester 8</option>
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Select_Modules">Select_Modules</Label>
                                <label className="checkbox-inline"><input type="checkbox" value=""/>Module 1</label>
                                <label className="checkbox-inline"><input type="checkbox" value=""/>Module 2</label>
                                <label className="checkbox-inline"><input type="checkbox" value=""/>Module 3</label>
                                <label className="checkbox-inline"><input type="checkbox" value=""/>Module 4</label>
                                <label className="checkbox-inline"><input type="checkbox" value=""/>Module 5</label>
                                <label className="checkbox-inline"><input type="checkbox" value=""/>Module 6</label>
                                <label className="checkbox-inline"><input type="checkbox" value=""/>Module 7</label>
                                <label className="checkbox-inline"><input type="checkbox" value=""/>Module 8</label>


                               </FormGroup>

                            <Button color="primary" >Register</Button>
                        </Form>
                    </div>
                </div>
            </div>

        )

    }
}

export default StudentRegisterForm

/* Lecturer Register form */