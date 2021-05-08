import React, {Component} from 'react'

import './css/FirstPage.css'

import Carousel from "react-bootstrap/Carousel";

import faculty from "../images/faculty.png";
import faculty1 from "../images/faculty1.jpg";
import faculty2 from  "../images/faculty2.jpg";
import faculty4 from "../images/faculty4.jpg";
import faculty5 from "../images/faculty5.jpg";
import faculty6 from "../images/faculty6.jpg";
import FirstPageNavbar from "./FirstPageNavbar";
import Footer from "./Footer";
import CalendarNew from "./calendar/calendarNew";
import {Button, Card} from "@material-ui/core";


    class FirstPage extends Component{
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
        //this.props.updateDate(data)
        // console.log(this.state)
    }

        render() {
    return (
        <div className="page">
            <FirstPageNavbar/>


            <div>
                <Carousel>
                    <Carousel.Item interval={800}>

                        <img
                            className="w-75 p-3"
                            img src={faculty} alt="faculty" height="400px" width="300px"

                        />
                        <Carousel.Caption>
                            <h3>Faculty of Engineering</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={800}>
                        <img
                            className="w-75 p-3"
                            img src={faculty1} alt="faculty" height="400px" width="300px"

                        />

                        <Carousel.Caption>
                            <h3>University of Ruhuna</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={800}>
                        <img
                            className="w-75 p-3"
                            img src={faculty2} alt="faculty" height="400px" width="300px"

                        />
                        <Carousel.Caption>
                            <h3>Hapugala , Galle</h3>

                        </Carousel.Caption>
                    </Carousel.Item >
                    <Carousel.Item interval={800}>
                        <img
                            className="w-75 p-3"
                            img src={faculty4} alt="faculty" height="400px" width="300px"

                        />
                        <Carousel.Caption>
                            <h3>Civil And Environmental Engineering</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={800}>
                        <img
                            className="w-75 p-3"
                            img src={faculty5} alt="faculty" height="400px" width="300px"

                        />
                        <Carousel.Caption>
                            <h3>Electrical And Information Engineering</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={800}>
                        <img
                            className="w-75 p-3"
                            img src={faculty6} alt="faculty" height="400px" width="300px"

                        />
                        <Carousel.Caption>
                            <h3>Mechanical And Manufacturing  Engineering</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>



                  <div className="Container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <CalendarNew updateDate={this.updateDate}/>
                    </div>
                    <div className="Col">Academic Timetable</div>
                </div>

            </div>

              {/*<div>*/}
            {/*<Card style={{ width: '18rem' }}>*/}
            {/*    <Card.Img variant="top" src="holder.js/100px180" />*/}
            {/*    <Card.Body>*/}
            {/*        <Card.Title>Card Title</Card.Title>*/}
            {/*        <Card.Text>*/}
            {/*            Some quick example text to build on the card title and make up the bulk of*/}
            {/*            the card's content.*/}
            {/*        </Card.Text>*/}
            {/*        <Button variant="primary">Go somewhere</Button>*/}
            {/*    </Card.Body>*/}
            {/*</Card>*/}
            {/*</div>*/}

           {/* <div className="contact1">
                <dl>
                    <dt><b>Contact Info : </b></dt>
                    <dd><b>Website :<a href="http://www.eng.ruh.ac.lk/"> eng.ruh.ac.lk </a></b></dd>
                    <dd><b>Address : Hapugala, Galle, Sri Lanka</b></dd>
                    <dd><b>Tel: +(94)0 91 2245765-8</b></dd>
                    <dd><b> Fax:+(94)0 91 2245762</b></dd>
                </dl>
            </div>*/}
        </div>


    );



}}




export default FirstPage