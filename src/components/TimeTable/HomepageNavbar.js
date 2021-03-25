import React,{Component} from "react";
import {Button, Image} from "react-bootstrap";
import '../css/home.css'
import logo2 from "../../images/logo2.png";
import CalendarNew from "../calendar/calendarNew";
import {Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom";
import FirstPage from "../FirstPage";

class HomepageNavbar extends Component{
    constructor(props) {
        super(props);
        let now = new Date();
        this.state={
            date:now
        }
    }
    updateDate = data => {
        this.setState({
            date: data
        })
        this.props.updateDate(data)
        // console.log(this.state)
    }
    render() {
        return (

            <div className="App">

                <div className="navbar-color">
                    <nav  className="navbar navbar-expand-lg navbar-fixed-top" >
                        <Image img src={logo2} alt="logo"  width={300} height={150}/>
                        <div className="text">
                            <ul>
                                <li>
                                    <h5><b>FACULTY OF ENGINEERING</b></h5>
                                    <h5><b>UNIVERSITY OF RUHUNA</b></h5>
                                    <h5><b>LECTURE SCHEDULE MANAGEMENT SYSTEM</b></h5>
                                </li>
                            </ul>
                            {/* <ul>
                            <li>
                                <Button  style={{width:90,backgroundColor:'#7047ba',marginTop:0,marginLeft:0,marginRight:10,fontFamily:"Arial",color:"black"}} type='submit' >
                                <Link to=""><b>Home</b>  </Link>
                            </Button>
                                <Button  className="btn-link" style={{width:90,backgroundColor:'#7047ba',marginTop:0,marginLeft:0,marginRight:10,fontFamily:"Arial"}} type='submit' >
                                    <Link to="/student/Profile"><b>Profile</b>  </Link>
                                </Button>
                                <Button  style={{width:90,backgroundColor:'#7047ba',marginTop:0,marginLeft:0,marginRight:10,fontFamily:"Arial"}} type='submit' >
                                    <Link to="./index"><b>Map</b>  </Link>
                                </Button>
                            </li>
                        </ul>*/}
                        </div>
                       {/* <div className="cols-lg-12 col-md-4 col-sm-12">*/}
                            <div  className="locate">
                                <CalendarNew updateDate={this.updateDate}/>
                            </div>
                       {/* </div>*/}
                    </nav>
                </div>

            </div>
        );
    }

}

export default HomepageNavbar;