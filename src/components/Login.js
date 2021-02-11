import React from 'react'
import { Link } from 'react-router-dom'
import './css/log.css'
import icon from './../images/icon.jpg'
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import {Image} from "react-bootstrap";

const Login = () => {
    return (
        <div className="split left">

                    <div className="p1">
                        <h3><u>LECTURE SCHEDULE MANAGEMENT SYSTEM</u></h3>
                    </div>

            <div className="centered img">
                <Image img src={icon} alt="icon"/>


                        {/* properties set in the login page */}
                        <div className="Container">
                            <div className="content">
                                            <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="uname"
                                            label="User Name"
                                            name="uname"
                                            autoComplete="uname"
                                            autoFocus
                                            />

                                           <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                             />

                                            <FormControlLabel
                                            control={<Checkbox value="remember" color="#91beeb" />}
                                            label="Remember me"
                                            />

                                            <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="#91beeb"
                                             >
                                            Sign In
                                            </Button>

                                           <Grid container>
                                               <Grid item s>
                                                              <Link href="#" variant="body2">
                                                               Forgot password?
                                                              </Link>
                                               </Grid>
                                               <Grid item>
                                                            <p> Don't have an account?
                                                             <Link to="./register/student">
                                                              {"Register Here"}
                                                             </Link></p>
                                               </Grid>
                                           </Grid>
                            </div>
                        </div>
                      </div>





            {/* right part of the page setting*/}
            <div className="split right">


                  <div className="centered">

                      <div class="p1">
                           <div id="movetxt"><p class="groove">LSMS   <br/>
                             FACULTY OF ENGINEERING<br/>
                             UNIVERSITY OF RUHUNA</p>
                           </div>
                      </div>
                  </div>

                  <div className="topright">
                                <dl>
                                    <dt><b>Contact Info : </b></dt>
                                    <dd><b>Website :<a href="http://www.eng.ruh.ac.lk/"> eng.ruh.ac.lk </a></b></dd>
                                    <dd><b>Address : Hapugala, Galle, Sri Lanka</b></dd>
                                    <dd><b>Tel: +(94)0 91 2245765-8</b></dd>
                                    <dd><b> Fax:+(94)0 91 2245762</b></dd>
                                </dl>
                  </div>
            </div>
        </div>

    );

}

export default Login
