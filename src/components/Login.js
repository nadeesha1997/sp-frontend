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
                 <div className="centered">
                      <div className="centered img">
                         <div className="image">
                             <Image img src={icon} alt="icon" width="430" height="430"  border-radius="50%"/>
                         </div>

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
                                                              <Link to="./Register">
                                                              {"Don't have an account? Register Here"}
                                                             </Link>
                                               </Grid>
                                           </Grid>
                            </div>
                        </div>
                      </div>
                 </div>





            {/* right part of the page setting*/}
            <div className="split right">

                  <div className="centered">

                      <div class="p1">
                           <div id="movetxt"><p class="groove">LSMS   <br/>
                             FACULTY OF ENGINNERING<br/>
                             UNIVERSITY OF RUHUNA</p>
                           </div>
                      </div>

                  </div>

            </div>

        </div>

    )

}

export default Login
