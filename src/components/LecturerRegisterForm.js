import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';

class LecturerRegisterForm extends Component  {


    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {



            "Lecturer_ID": '',
            "Full_Name": '',
            "email": '',
            "password": '',
            "Dept_ID": ''


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

        if (data.Lecturer_ID === '') errors.Lecturer_ID = 'Lecturer_ID can not be blank.';
        if (data.Full_Name === '') errors.Full_Name = 'Full_Name can not be blank.';
        if (data.email === '') errors.email = 'Email can not be blank.';
        if (data.Dept_ID === '') errors.Dept_ID = 'Dept_ID can not be blank.';

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
                <h4 className="center">LECTURER REGISTER</h4>
                <div id="Registerbox">
                    <div className="box">
                        <Form onSubmit={this.handleSubmit}>

                            <FormGroup>
                                <Label for="Lecturer_ID">Lecturer_ID</Label>
                                <Input  value={data.Lecturer_ID} invalid={errors.Lecturer_ID ? true : false} name="Lecturer_ID" onChange={this.handleChange} />
                                <FormFeedback>{errors.Lecturer_ID}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="Full_Name">Full_Name</Label>
                                <Input  value={data.Full_Name} invalid={errors.Full_Name? true : false} name="Full_Name" onChange={this.handleChange} />
                                <FormFeedback>{errors.Full_Name}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input  value={data.email} invalid={errors.email? true : false} name="email" onChange={this.handleChange} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="Dept_ID">Dept_ID</Label>
                                <Input  value={data.Dept_ID} invalid={errors.Dept_ID? true : false} name="Dept_ID" onChange={this.handleChange} />
                                <FormFeedback>{errors.Dept_ID}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                                <FormFeedback>{errors.password}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="confirmPassword">Confirm Password</Label>
                                <Input  value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange} />
                                <FormFeedback>{errors.confirmPassword}</FormFeedback>
                            </FormGroup>

                            <Button color="primary" >Register</Button>
                        </Form>
                    </div>
                </div>
            </div>

        )

    }
}

export default LecturerRegisterForm

/* Lecturer Register form */