import React,{Component} from 'react'
import './css/home.css'
import SubjectList from "./TimeTable/SubjectList";
import TimeTable from "./TimeTable/TimeTable";
import {Nav} from "./Nav"
import HomepageNavbar from "./TimeTable/HomepageNavbar";
import Usage from "./TimeTable/Usage";
//import HomepageNavbar from "./TimeTable/HomepageNavbar";

// const col = {
//     padding: "10px 20px",
//     textAlign: "center",
//     fontSize: "22px",
//     height:"20px",
//     fontFamily:"Arial"
// }

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
                <HomepageNavbar/>
                {/*<HomepageNavbar updateDate={this.updateDate}/>*/}
                <Nav/>
               <div className="row">
                <div className="list">

                        <SubjectList getModuleId={this.getSelectedModule}/>
                </div>
                </div>

                    <div className="col col-lg-12 col-md-12 col-sm-12">
                        <TimeTable date={this.state.date}/>

                </div>


            </div>


        );
    }
}

export default Home