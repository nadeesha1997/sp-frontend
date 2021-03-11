 import React,{Component} from "react";
import {Image} from "react-bootstrap";
import '../css/home.css'
import logo2 from "../../images/logo2.png";
 import CalendarNew from "../calendar/calendarNew";
 import {Navbar} from 'react-bootstrap';

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

            <div className="navbar-color">
                <nav  className="navbar navbar-expand-lg navbar-fixed-top" >
                    <Image img src={logo2} alt="logo"  width={300} height={150}/>
                    <div className="text">
                        <ul>
                            <li>
                                <h5> <b>FACULTY OF ENGINNERING</b></h5>
                                <h5><b>UNIVERSITY OF RUHUNA</b></h5>
                                <h5><b>LECTURE SCHEDULE MANAGEMENT SYSTEM</b></h5>
                            </li>
                        </ul>
                    </div>
                    <div className="row-cols-lg-12 col-md-4  col-sm-12">
                        <CalendarNew updateDate={this.updateDate}/>
                    </div>
                </nav>
            </div>
        );
    }

}

export default HomepageNavbar;