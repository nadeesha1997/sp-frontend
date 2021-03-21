import React from 'react';

import map from './../images/map.jpg';
import LT1 from './../images/LT1.jpg';
import ELR from './../images/ELR.jpg';
import CLR from './../images/CLR.jpg';

import {Nav} from "./Nav";
import {Col,Table,Badge,} from "reactstrap";

import ReactEcharts from "echarts-for-react";
import config from "./config";
import {green} from "@material-ui/core/colors";
const colors = config.chartColors;

const Header = {
    padding: "10px 20px",
    textAlign: "center",
    fontSize: "22px",
    height:"80px"
}
const col = {
    padding: "10px 20px",
    textAlign: "center",
    fontSize: "22px",
    height:"20px"
}
class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            donut: {
                tooltip: {trigger: "item", formatter: "{a} <br/>{b}: {c} ({d}%)",},
                legend: {show: false,},
                color: [
                    colors.blue,
                    colors.green,
                    colors.orange,
                    colors.red,
                    colors.purple],
                series: [
                    {
                        name: "Likelihood",
                        type: "pie",
                        radius: ["50%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: "center",
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: "20",
                                    fontWeight: "bold",
                                },
                            },
                        },
                        data: [
                            { value: 16, name: "LT1/LT2" },
                            { value: 6, name: "NLH1/NLH2" },
                            { value: 7, name: "LR1/LR2" },
                            { value: 3, name: "DO1/DO2" },
                            { value: 3, name: "Other" },
                        ],
                    },
                ],
            },

            tableStyles: [
                {
                    id: 7,
                    picture:LT1,

                    description: "LT1-first floor",
                    info: {
                        Usage: "1-3 hour periods",
                        Area: "26sq.ft.per seat",
                        Other:"Multimedia,Rolling black board"
                    },
                    Occupancy: "Max 300 students",
                    label2: {
                        text:"Available",
                        colorClass: "success",
                    }, label: {
                        colorClass: "primary",
                        text: "Available for any students",
                    },

                },
                {
                    id: 10,
                    picture:ELR,

                    description: "ELR-Third floor",
                    info: {
                        Usage: "1-6 hour periods",
                        Area: "32sq.ft.per seat",
                        Other:"Multimedia,Two white boards"
                    },
                    Occupancy: "Max 80 students",
                    label2: {
                        text:"Available",
                        colorClass: "success",
                    }, label: {
                        colorClass: "primary",
                        text: "Available for EIE students",
                    },

                },
                {
                    id: 13,
                    picture:CLR,

                    description: "CLR-Third floor",
                    info: {
                        Usage: "1-6 hour periods",
                        Area: "32sq.ft.per seat",
                        Other:"Multimedia,Two white boards"
                    },
                    Occupancy: "Max 80 students",
                    label2: {
                        text:"Not Available",
                        colorClass: "danger",
                    }, label: {
                        colorClass: "primary",
                        text: "Available for CEE students",
                    },

                },

            ],
        };
    }
    

    render() {

        return (
            <div >
                <Nav/>
                <div style={col} ></div>
                <h1 align="center">Graphical visualization of lecture venues </h1>
                <div style={col}></div>
                <img src={map} align="right" id='map' class="map" useMap="#image-map" alt="map"/>

                <map id="Map-area" name="image-map">

                    <area id="1" target="" alt="NLH1-Ground floor" title="NLH1-Ground floor" href=""
                          coords="75,261,83,248,107,265,98,275" shape="poly"/>
                    <area id="2" target="" alt="NLH2-Ground floor" title="NLH2-Ground floor" href=""
                          coords="88,253,99,236,118,251,107,263" shape="poly"/>
                    <area id="3" target="" alt="DO1-Second floor" title="DO1-Second floor" href=""
                          coords="126,272,140,252,163,266,148,288" shape="poly"/>
                    <area id="4" target="" alt="DO2-Second floor" title="DO2-Second floor" href=""
                          coords="200,194,216,172,243,190,225,214" shape="poly"/>
                    <area id="5" target="" alt="LR1-first floor" title="LR1-first floor" href=""
                          coords="148,292,165,266,189,283,170,306" shape="poly"/>
                    <area id="6" target="" alt="LR2-first floor" title="LR2-first floor" href=""
                          coords="236,222,253,231,269,212,254,200" shape="poly"/>
                    <area id="7" target="" alt="LT1-first floor" title="LT1-first floor" href=""
                          coords="109,294,126,272,185,319,169,337" shape="poly"/>
                    <area id="8" target="" alt="LT2-first floor" title="LT2-first floor" href=""
                          coords="219,170,236,152,292,193,275,217" shape="poly"/>
                    <area id="9" target="" alt="IS-Seminar room" title="IS-Seminar room" href=""
                          coords="393,36,412,15,456,43,436,65" shape="poly"/>
                    <area id="10" target="" alt="ELR-Third floor" title="ELR-Third floor" href=""
                          coords="447,463,471,480,503,432,478,419" shape="poly"/>
                    <area id="11" target="" alt="ELT-second floor" title="ELT-second floor" href=""
                          coords="501,471,512,451,534,463,520,483" shape="poly"/>
                    <area id="12" target="" alt="MLR-Third floor" title="MLR-Third floor" href=""
                          coords="265,371,287,370,291,404,267,406" shape="poly"/>
                    <area id="13" target="" alt="CLR-Third floor" title="CLR-Third floor" href=""
                          coords="184,464,210,478,227,442,199,431" shape="poly"/>

                </map>


                <row>
                    <Col sm={4}>
                        <div className=" text-left border rounded">
                            <h6></h6>
                            <p align="center">
                                <ins>FACULTY AUDITORIUM</ins>
                            </p>
                            <h6 className="text-danger">*NLH1-Ground floor</h6>
                            <h6 className="text-danger">*NLH2-Ground floor</h6>
                            <p align="center">
                                <ins>HALL A</ins>
                            </p>
                            <h6 className="text-lime">*LR1-first floor</h6>
                            <h6 className="text-lime">*LR2-first floor</h6>
                            <h6 className="text-lime">*LT1-first floor</h6>
                            <h6 className="text-lime">*LT2-first floor</h6>
                            <p align="center">
                                <ins>INTERDISCIPLINARY STUDIES</ins>
                            </p>
                            <h6 className="text-white">*IS-Seminar room</h6>
                            <p align="center">
                                <ins>MECHANICAL AND MANUFACTURING DEPARTMENT</ins>
                            </p>
                            <h6 className="text-success">*MLR-Third</h6>
                            <p align="center">
                                <ins>CIVIL AND ENVIRONMENT DEPARTMENT</ins>
                            </p>
                            <h6 className="text-warning">*CLR-Third floor</h6>
                            <p align="center">
                                <ins>ELECTRICAL AND INFORMATION DEPARTMENT</ins>
                            </p>
                            <h6 className="text-primary">*ELR-Third floor</h6>
                            <h6 className="text-primary">*ELR-Third floor</h6>

                        </div>
                    </Col>
                </row>
                <div style={Header}></div>
                  <div className="table" >
                    <h2>Availability of Lecture Venues </h2>
                      <Table  striped >
                        <thead>

                           <tr className="fs-sm">
                             <th className="hidden-sm-down">#</th>
                               <th>Picture</th>
                               <th>Description</th>
                               <th className="hidden-sm-down">Info</th>
                               <th className="hidden-sm-down">Occupancy</th>
                               <th className="hidden-sm-down">Status</th>
                           </tr>
                        </thead>
                          <tbody>
                               {this.state.tableStyles.map((row) => (
                                 <tr key={row.id}>
                                    <td>{row.id}</td>
                                      <td><img className="img-rounded" src={row.picture} alt="" height="100"/></td>
                                          <td>{row.description}{row.label && (
                                          <div><Badge color={row.label.colorClass}>{row.label.text}</Badge></div>)}
                                     </td>
                    <td>
                        <p className="mb-0">
                            <small>
                                Usage:
                                <span className="text-muted fw-semi-bold">
                              &nbsp; {row.info.Usage}
                            </span>
                            </small>
                        </p>
                        <p className="mb-0">
                            <small>
                                Area:
                                <span className="text-muted fw-semi-bold">
                              &nbsp; {row.info.Area}
                            </span>
                            </small>
                        </p>
                        <p className="mb-0">
                            <small>
                                Other:
                                <span className="text-muted fw-semi-bold">
                              &nbsp; {row.info.Other}
                            </span>
                            </small>
                        </p>
                    </td>

                    <td className="text-dark-bold">{row.Occupancy}</td>
                    <td className="width-150">

                            {row.label2 && (
                                <div>
                                    <Badge color={row.label2.colorClass}>
                                        {row.label2.text}
                                    </Badge>
                                </div>
                            )}

                    </td>

                </tr>

            ))}
            </tbody>
        </Table>


                      <h2>Student likelihood of lecture venues</h2>
                         <Col  >
                             <p title={<h5>Chart <span className="fw-semi-bold">Donut Chart</span></h5>} close collapse>
                               <ReactEcharts
                                   option={this.state.donut}
                                   style={{ height:"250px"}}>
                               </ReactEcharts>
                             </p>
                         </Col>
                  </div>
            </div>
        );
    }
}

export default Index;




