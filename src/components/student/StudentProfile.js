import React,{Component} from 'react';
import '../css/StudentProfile.css'
import Student from './data/profile.json'

class StudentProfile extends Component {
    constructor(){
        super();
    }
    render () {
        return (
            <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {
                                            Student.name
                                        }
                                    </h5>
                                    <h6>
                                        Student
                                    </h6>
                                    <p className="proile-rating"> : <span></span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div> */}
                </div>
                 <div className="row">
                    {/*<div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div> */}
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{Student.userName}</p>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Kshiti Ghelani</p>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Faculty Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{Student.facultyEmail}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Mobile No</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{Student.mobileNo}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Joined Date</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{Student.joinedDate}</p>
                                            </div>
                                        </div>
                            </div>
                             <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div> */}
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        )
    }
}

export default StudentProfile