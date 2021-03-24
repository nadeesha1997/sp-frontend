
import {Button, Image,Modal} from "react-bootstrap";
import './css/home.css'
import logo2 from './../images/logo2.png';
import {Link} from "react-router-dom";
import React, {Component} from "react";
import './css/log.css'
import icon from './../images/icon.jpg'
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
class FirstPageNavbar extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            show:false,
            email: "",
            password: "",
            loading: false,
            message: ""
        };
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
            <div className="navbar-color">

                <nav className="navbar navbar-expand-lg navbar-fixed-top n">
                        <Image img src={logo2} alt="logo" width={300} height={150} margin={5}/>
                        <div className="text">
                            <ul>
                                <li>
                                    <h><b>FACULTY OF ENGINNERING</b></h>
                                    <h4><b>UNIVERSITY OF RUHUNA</b></h4>
                                    <h4><b>LECTURE SCHEDULE MANAGEMENT SYSTEM</b></h4>
                                </li>
                            </ul>
                        </div>


                    <table>
                        <td>

                            <div className="align">
                                <Button onClick={()=>{this.handleModal()}} style={{width:180,backgroundColor:'#440151',marginTop:10,marginLeft:45,marginRight:20}} type='submit' >
                                    <b>LOG IN</b>

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
                                    {/*<Link to="./Login"><b>LOG IN</b>  </Link>*/}
                                </Button>
                                <Button style={{width:180,backgroundColor:'#440151',marginTop:10,marginLeft:40,marginRight:20}} type='submit'>

                                    <Link to="./Register/student"> <b> REGISTER</b>  </Link>
                                </Button>

                            </div>
                        </td>


                    </table>

                </nav>
            </div>
        );
    };
}
export default FirstPageNavbar;


