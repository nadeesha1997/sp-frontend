import React,{Component} from 'react'
import './css/home.css'
import SubjectList from "./TimeTable/SubjectList";
import TimeTable from "./TimeTable/TimeTable";
import HomepageNavbar from "./TimeTable/HomepageNavbar";


class Home extends Component {
    constructor(props) {
        super(props);
        let today = new Date();
        this.state = {
            date: today,
            subjectId:0
        }
        this.updateDate()
    }

    updateDate = data => {
        this.setState({
            date: data
        })
        // console.log("Time in home:")
        console.log(this.state)
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
                <div className="row">
                    <div className="col col-lg-8 col-md-auto col-sm-10">
                        <TimeTable date={this.state.date} moduleId={this.state.subjectId}/>
                    </div>

                    <div className="col col-lg-4 col-md-auto col-sm-12 container-fluid">
                        <div className="row">
                            <SubjectList getModuleId={this.getSelectedModule}/>
                        </div>

                    </div>
                </div>
            </div>


        );
    }
}

export default Home