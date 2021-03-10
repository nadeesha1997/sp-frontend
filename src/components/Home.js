 import React from 'react'
import './css/home.css'
import SubjectList from "./TimeTable/SubjectList";
import TimeTable from "./TimeTable/TimeTable";
import HomepageNavbar from "./TimeTable/HomepageNavbar";
const Home = () => {
    return (

    <div className="page">

        <HomepageNavbar/>

            {/*
            <div className="row-cols-lg-12 col-md-auto col-sm-12 container-fluid">
                <Calendar/>
            </div>*/}


            <div className="row">
                <div className="col col-lg-8 col-md-auto col-sm-10">
                    <TimeTable/>
                </div>
                <div className="col col-lg-4 col-md-auto col-sm-12 container-fluid">
                        <div className="row">
                            <SubjectList/>
                        </div>

                </div>
            </div>
</div>



);
}

export default Home