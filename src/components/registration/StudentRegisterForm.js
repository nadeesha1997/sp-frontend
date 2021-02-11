import React, { Component } from "react";
import axios from "axios";
import {
  Form,
  Input,
  Label,
  FormGroup,
  FormFeedback,
  Button,
} from "reactstrap";
import Link from "@material-ui/core/Link";

class StudentRegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data: {
      Student_ID: "",
      Full_Name: "",
      email: "",
      password: "",
      Dept_ID: "",

    },
    errors: {},
  });
  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: "",
      },
    });
  };
  validate = () => {
    const { data } = this.state;
    let errors = {};

    if (data.Student_ID === "")
      errors.Student_ID = "Student_ID can not be blank.";
    if (data.Full_Name === "") errors.Full_Name = "Full_Name can not be blank.";
    if (data.email === "") errors.email = "Email can not be blank.";
    if (data.email === "") errors.email = "Email can not be blank.";
    if (data.Dept_ID === "") errors.Dept_ID = "Dept_ID can not be blank.";
    if (data.password === "") errors.password = "Password must be valid.";
    if (data.confirmPassword !== data.password)
      errors.confirmPassword = "Passwords must match.";

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      console.log(data);
      //Call an api here
      axios.post("https://localhost:44374/api/Lecturer", data);
      //Resetting the form
      this.setState(this.getInitialState());
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="container tab-pane active mb-5">
        <br />
        <h3>Student Registration</h3>
        <div className="col-sm-8">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup className="form-group">
              <div className="col-sm-12">
                <Label for="Student_ID">Student ID</Label>
                <Input
                  value={data.Student_ID}
                  invalid={errors.Student_ID ? true : false}
                  name="Student_ID"
                  onChange={this.handleChange}
                />
                <FormFeedback>{errors.Student_ID}</FormFeedback>
              </div>
            </FormGroup>

            <FormGroup>
              <div className="col-sm-12">
                <Label for="Full_Name">Full Name : </Label>
                <Input
                  value={data.Full_Name}
                  invalid={errors.Full_Name ? true : false}
                  name="Full_Name"
                  onChange={this.handleChange}
                />
                <FormFeedback>{errors.Full_Name}</FormFeedback>
              </div>
            </FormGroup>

            <FormGroup>
              <div className="col-sm-12">
                <Label for="email">Email : </Label>
                <Input
                  value={data.email}
                  invalid={errors.email ? true : false}
                  name="email"
                  onChange={this.handleChange}
                />
                <FormFeedback>{errors.email}</FormFeedback>
              </div>
            </FormGroup>

            <FormGroup>
              <div className="col-sm-12">
                <Label for="Dept_ID">Dept ID : </Label>
                <Input
                  value={data.Dept_ID}
                  invalid={errors.Dept_ID ? true : false}
                  name="Dept_ID"
                  onChange={this.handleChange}
                />
                <FormFeedback>{errors.Dept_ID}</FormFeedback>
              </div>
            </FormGroup>

            <FormGroup>
              <div className="col-sm-12">
                <Label for="password">Password : </Label>
                <Input
                  value={data.password}
                  type="password"
                  name="password"
                  invalid={errors.password ? true : false}
                  onChange={this.handleChange}
                />
                <FormFeedback>{errors.password}</FormFeedback>
              </div>
            </FormGroup>

            <FormGroup>
              <div className="col-sm-12">
                <Label for="confirmPassword">Confirm Password : </Label>
                <Input
                  value={data.confirmPassword}
                  type="password"
                  name="confirmPassword"
                  invalid={errors.confirmPassword ? true : false}
                  onChange={this.handleChange}
                />
                <FormFeedback>{errors.confirmPassword}</FormFeedback>
              </div>
            </FormGroup>

            <div className="col-sm-12">
              <Button className="btn-block" color="primary">
                Register
              </Button>
        </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default StudentRegisterForm;

