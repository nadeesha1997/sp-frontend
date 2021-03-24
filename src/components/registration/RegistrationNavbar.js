import React from "react";
import logo2 from "../../images/logo2.png";
import {Button, Image, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import HomepageNavbar from "../TimeTable/HomepageNavbar";
import AuthService from "../../services/auth.service";
import icon from "../../images/icon.jpg";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

class RegistrationNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);


        let now = new Date();
        this.state = {
            date: now,
            show:false,
            email: "",
            password: "",
            loading: false,
            message: ""
        }
    }

    updateDate = data => {
        this.setState({
            date: data
        })
        //this.props.updateDate(data)
        // console.log(this.state)
    }




    handleModal(){
        this.setState({show:true})

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
<div> <HomepageNavbar updateDate={this.updateDate}/>
            <nav className="navbar navbar-expand-sm  navbar-fixed-top " style={{padding:0, marginBottom:20,backgroundColor:'#31023e'}}>

                {/*/!* <a className="navbar-brand" href="#">ENG</a>*/}
                {/*<Image img src={logo2} alt="logo"  width={100} height={100}/>*!/*/}
                {/*<Image img src={logo2} alt="logo"  width={150} height={75} margin={4}/>*/}
                {/*/!*<a className="navbar-brand" href="#" >LSMS</a>*!/*/}
                {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*    <span className="navbar-toggler-icon"/>*/}
                {/*</button>*/}


                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link">
                            <Button onClick={()=>{this.handleModal()}}
                                    style={{
                                width: 150,
                                backgroundColor: '#440151',
                                marginTop: 0,
                                marginLeft: 20,
                                marginRight: 10,
                                fontFamily:'Arial'
                            }} type='submit'>

Log In
                                <Modal show={this.state.show} className="row-cols-md-12 row-cols-lg-12">

                                    <Modal.Header closeButton>
                                        <div className="p1">
                                            <h5><u>LECTURE SCHEDULE MANAGEMENT SYSTEM</u></h5>
                                        </div>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="page">

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
                                                    <button style={{width:150,height:40,backgroundColor:'#440151',marginTop:5,marginLeft:150}}
                                                            className="btn btn-primary btn-block"
                                                            disabled={this.state.loading}
                                                    >
                                                        {this.state.loading && (
                                                            <span className="spinner-border spinner-border-sm"></span>
                                                        )}
                                                        Login

                                                    </button>


                                                    <Link href="#" variant="body2" style={{color:'black'}}>
                                                        Forgot password?
                                                    </Link>

                                                    <p style={{color:'black'}}> Don't have an account?
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
                                    </Modal.Body>
                                </Modal>
                            </Button>
                            {/*<span className="fa fa-sign-in"/> <Link to="./Login">Login</Link>*/}
                        </a>
                        <a className="navbar-brand   mb-.2">
                            <h6>You are not log in.</h6>
                        </a>
                    </li>
                </ul>


            </nav>
</div>
        );
    };
}
export default RegistrationNavbar;