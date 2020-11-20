import{React,Component} from 'react';

class Registration extends Component{
    render(){
        return(
            <div>
                <div className="main">
                    <div className="container">
                        <div className="signup-content">
                            <div className="LSMS.png">
                                {/*<img src="images/LSMS.png" alt="">*/}
                            </div>
                            <div className="signup-form">
                                <form method="POST" className="register-form" id="register-form">
                                    <h2>Lecture Scheduling and Management System</h2>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Name with Initials :</label>
                                            <input type="text" name="name" id="name" required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="reg_number">Register number :</label>
                                            <input type="text" name="reg_number" id="reg_number" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="e_address">Faculty email address :</label>
                                        <input type="text" name="e_address" id="e_address" required/>
                                    </div>
                                    <div className="form-radio">
                                        <label htmlFor="gender" className="radio-label">Gender :</label>
                                        <div className="form-radio-item">
                                            <input type="radio" name="gender" id="male" checked>
                                                <label htmlFor="male">Male</label>
                                                <span className="check"></span>
                                        </div>
                                        <div className="form-radio-item">
                                            <input type="radio" name="gender" id="female">
                                                <label htmlFor="female">Female</label>
                                                <span className="check"></span>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="department">Department :</label>
                                            <div className="form-select">
                                                <select name="department" id="department">
                                                    <option value=""></option>
                                                    <option value="dcee">Department of Civil and Environmental
                                                        Engineering
                                                    </option>
                                                    <option value="deie">Department of Electrical and Information
                                                        Engineering
                                                    </option>
                                                    <option value="dmme">Department of Mechanical and Manufacturing
                                                        Engineering
                                                    </option>
                                                    <option value="none">Not selected</option>
                                                </select>
                                                <span className="select-icon"><i className="zmdi zmdi-chevron-down"></i></span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Semester">Semester :</label>
                                            <div className="form-select">
                                                <select name="semester" id="semester">
                                                    <option value=""></option>
                                                    <option value="first">1</option>
                                                    <option value="second">2</option>
                                                    <option value="third">3</option>
                                                    <option value="forth">4</option>
                                                    <option value="fifth">5</option>
                                                    <option value="sixth">6</option>
                                                    <option value="seventh">7</option>
                                                    <option value="eight">8</option>
                                                </select>
                                                <span className="select-icon"><i className="zmdi zmdi-chevron-down"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tpnumber">Telephone number :</label>
                                        <input type="text" name="e_address" id="tpnumber" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_name">User name :</label>
                                        <input type="text" name="user_name" id="user_name"></input>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="password">Password :</label>
                                            <input type="text" name="password" id="password" required/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirm-password_password">Confirm Password :</label>
                                            <input type="text" name="confirm_password" id="confirm-password" required/>
                                        </div>
                                    </div>
                                    <div className="form-submit">
                                        <input type="submit" value="Submit" className="submit" name="submit"
                                               id="submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>


                {/* <script src="vendor/jquery/jquery.min.js"></script>*/}
                {/*<script src="js/main.js"></script>*/}
            </div>
        );
    }
}
export default Registration;