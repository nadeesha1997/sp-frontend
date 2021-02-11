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

class LecturerRegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data: {
      LecturerID: "",
      FullName: "",
      email: "",
      password: "",
      DeptID: "",
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

    if (data.LecturerID === "")
      errors.LecturerID = "Lecturer_ID can not be blank.";
    if (data.FullName === "") errors.FullName = "Full_Name can not be blank.";
    if (data.email === "") errors.email = "Email can not be blank.";
    if (data.DeptID === "") errors.DeptID = "Dept_ID can not be blank.";

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
      axios.post("https://localhost:5001/api/Lecturers", data);
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
        <h3>Lecturer Registration</h3>
        <div className="col-sm-8">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup className="form-group">
              <div className="col-sm-12">
                <Label for="LecturerID">Lecturer ID</Label>
                <Input
                  value={data.LecturerID}
                  invalid={errors.LecturerID ? true : false}
                  name="LecturerID"
                  onChange={this.handleChange}
                />
                <FormFeedback>{errors.LecturerID}</FormFeedback>
              </div>
            </FormGroup>

            <FormGroup>
              <div className="col-sm-12">
                <Label for="FullName">Full Name : </Label>
                <Input
                  value={data.FullName}
                  invalid={errors.FullName ? true : false}
                  name="FullName"
                  onChange={this.handleChange}
                />
                <FormFeedback>{errors.FullName}</FormFeedback>
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
                <Label for="DeptID">Dept ID : </Label>
                <Input
                  value={data.DeptID}
                  invalid={errors.DeptID ? true : false}
                  name="DeptID"
                  onChange={this.handleChange}
                />
                <FormFeedback>{errors.DeptID}</FormFeedback>
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

export default LecturerRegisterForm;

/* Lecturer Register form */
