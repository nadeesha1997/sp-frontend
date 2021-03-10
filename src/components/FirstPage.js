import React,{Component} from 'react'
import {Image,Button} from "react-bootstrap";
import './css/FirstPage.css'
import {Link} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import icon3 from "../images/icon3.png";
import faculty from "../images/faculty.png";
import faculty1 from "../images/faculty1.jpg";
import faculty2 from  "../images/faculty2.jpg";
import faculty4 from "../images/faculty4.jpg";
import faculty5 from "../images/faculty5.jpg";
import faculty6 from "../images/faculty6.jpg";
import FirstPageNavbar from "./FirstPageNavbar";


const FirstPage = () => {
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


<h4 style={{backgroundColor:'#7047ba',height:40,MarginTop:30}}><b> Realated Links</b></h4>
        <div className="w3-show-inline-block">

            <div className="w3-bar">

                <button style={{width:150,backgroundColor:'#150037',marginTop:10,marginLeft:20,marginright:20}}><a href="http://lms.eng.ruh.ac.lk/"><b>LMS</b></a></button>
                <button style={{width:150,backgroundColor:'#2d0473',marginTop:10,marginLeft:20,marginright:20}}><a href="https://paravi.ruh.ac.lk/foenmis/"><b>MIS</b></a></button>
                <button style={{width:150,backgroundColor:'#150037',marginTop:10,marginLeft:20,marginright:20}}><a href="https://www.ruh.ac.lk/"><b>UOR </b></a></button>
                <button style={{width:150,backgroundColor:'#2d0473',marginTop:10,marginLeft:20,marginright:20}}><a href="https://www.ugc.ac.lk/"><b>UGC</b></a></button>
                <button style={{width:150,backgroundColor:'#150037',marginTop:10,marginLeft:20,marginright:20}}><a href="http://www.eng.ruh.ac.lk/eec/"><b>EEC</b></a></button>
                <button style={{width:150,backgroundColor:'#2d0473',marginTop:10,marginLeft:20,marginright:20}}><a href="https://www.lib.ruh.ac.lk/web/Eng/index.php"><b>LIBRARY</b></a></button>
                <button style={{width:150,backgroundColor:'#150037',marginTop:10,marginLeft:20,marginright:20}}><a href="https://ieee.lk/"><b>IEEE</b></a></button>

            </div>

        </div>
                        <div className="contact">
                            <dl>
                                <dt><b>Contact Info : </b></dt>
                                <dd><b>Website :<a href="http://www.eng.ruh.ac.lk/"> eng.ruh.ac.lk </a></b></dd>
                                <dd><b>Address : Hapugala, Galle, Sri Lanka</b></dd>
                                <dd><b>Tel: +(94)0 91 2245765-8</b></dd>
                                <dd><b> Fax:+(94)0 91 2245762</b></dd>
                            </dl>
                        </div>
    </div>


    );



}




export default FirstPage