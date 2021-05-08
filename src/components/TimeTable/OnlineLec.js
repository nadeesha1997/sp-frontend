import React,{Component} from 'react'
import '../css/OnlineTable.css'
import CalendarNew from "../calendar/calendarNew";
import HomepageNavbar from "./HomepageNavbar";
import {Nav} from "../Nav";
import {Input, Label} from "reactstrap";

class OnlineLec extends Component{
    constructor(props) {
        let now= new Date();
        super(props);
        this.state={
            date:now,

        }

    }



    updateDate = data => {
        this.setState({
            date: data
        },()=>{this.forceUpdate()})

    }

    render() {
        return(
            <div className="page">
                <HomepageNavbar/>
                <Nav/>

                <div className="row">
                    <div className="col-lg-12 col-md-6">

                            <select style={  {marginTop:20,paddingRight:20} }>
                                <option>select Batch:</option>
                                <option value="1">18th</option>
                                <option value="2">19th</option>
                                <option value="3">20th</option>
                                <option value="4">21th</option>
                            </select>
                            <button
                                style={{backgroundColor: '#9b82c3',marginLeft:20}}>
                                <b>SELECT</b>
                            </button>
                        <div className="cale2">
                            <CalendarNew updateDate={this.updateDate}/>
                        </div>



                    </div>
                </div>
                <div className="grid-number">
                    <div className="grid-item">Time</div>
                    <div className="grid-item" hallid="1">Civil</div>
                    <div className="grid-item" hallid="2">Electrical</div>
                    <div className="grid-item" hallid="3">Mechanical</div>

                    <div className="grid-item">7.30</div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>

                    <div className="grid-item">8.30</div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>

                    <div className="grid-item">9.30</div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>

                    <div className="grid-item">10.30</div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>

                    <div className="grid-item">11.30</div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>

                    <div className="grid-item">12.30</div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>

                    <div className="grid-item">1.30</div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>

                    <div className="grid-item">2.30</div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>


                    <div className="grid-item">3.30</div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>
                    <div className="item"><ul><Label for="link" style={{padding:0}}> Zoom link: </Label><Input  style={{width:250,height:40}}/></ul></div>   </div>



            </div>
        )
    }
}
export default OnlineLec;