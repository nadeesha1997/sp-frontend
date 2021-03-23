import React,{Component} from 'react'
import './css/home.css'
import SubjectList from "./TimeTable/SubjectList";
import TimeTable from "./TimeTable/TimeTable";
import HomepageNavbar from "./TimeTable/HomepageNavbar";
import {Nav} from "./Nav"

const col = {
    padding: "10px 20px",
    textAlign: "center",
    fontSize: "22px",
    height:"20px"
}

class Home extends Component {
    constructor(props) {
        super(props);
        let today = new Date();
        this.state = {
            date: today
        }
        this.updateDate=this.updateDate.bind(this)
    }

    updateDate = data => {
        this.setState({
            date: data
        })
        // console.log("Time in home:")
        // console.log(this.state)
        // console.log("--------------------------------------------")
    }
    componentDidMount() {
        this.updateDate();
    }
    getSelectedModule=(id)=>{
        this.setState({
            subjectId:id
        })
    }

    render() {
        return (

            <div className="page">
                <HomepageNavbar updateDate={this.updateDate}/>
                <Nav/>

                <div className="col col-lg-2 col-md-2 col-sm-2 container-fluid">
                    <div className="row">
                        <SubjectList getModuleId={this.getSelectedModule}/>
                    </div>

                </div>
                <div className="row">
                    <div className="col col-lg-8 col-md-2 col-sm-12">
                        <TimeTable date={this.state.date}/>
                    </div>


                </div>

            </div>


        );
    }
}

export default Home