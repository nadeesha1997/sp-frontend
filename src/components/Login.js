import React,{Component} from 'react'
import './css/log.css'
import icon from './../images/icon.jpg'
import {Button, Image, Modal} from "react-bootstrap";
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {Link} from "react-router-dom";



const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};


class Login extends Component{
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "Successfully log in",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.email, this.state.password).then(
                () => {
                    this.props.history.push("Dashboard");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }
    render() {
        return (
            <div>

                <div className="p1">
                    <h5><u>LECTURE SCHEDULE MANAGEMENT SYSTEM</u></h5>
                </div>

            <div className="page1">


                <Image img src={icon} alt="icon" style={{width: 300,
                    height: 300,
                    borderRadius: 500 ,
                    padding:30,}}/>
                <Form
                    onSubmit={this.handleLogin}
                    ref={c => {
                        this.form = c;
                    }}
                >
                    <div className="form-group">
                        <label  htmlFor="username" style={{color:'black',fontWeight:'bolder'}}>Email : </label>
                        <Input
                            type="text"
                            className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeUsername}
                            required
                            //validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" style={{color:'black',fontWeight:'bolder'}}>Password : </label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            required
                            //validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <button style={{width:150,height:40,backgroundColor:'#440151',marginTop:5,marginLeft:130}}
                                className="btn btn-primary btn-block"
                                disabled={this.state.loading}
                        >
                            {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            Login

                        </button>


                        <Link className="lin"  href="#" variant="body2" >
                            <Link to="./Reset/ResetPassword">   Forgot password?</Link>
                        </Link>

                        <p  className="lin"> Don't have an account?
                            <Link to="./Register">
                                {"Register Here"}
                            </Link></p>


                    </div>

                    {this.state.message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {this.state.message}
                            </div>
                        </div>
                    )}
                    <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                    />
                </Form>
            </div>
                </div>



        );
    }

}

export default Login
