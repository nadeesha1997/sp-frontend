import React from 'react'
import { Link } from 'react-router-dom'
import './css/log.css'
import icon from './../images/icon.jpg'
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Image,Button} from "react-bootstrap";
import Grid from 'react-bootstrap/Container'

const Login = () => {
    return (


        <div>
            <div className="p1">
                <h3><u>LECTURE SCHEDULE MANAGEMENT SYSTEM</u></h3>
            </div>
            <div className="centered img">
                <Image img src={icon} alt="icon"/>
                        {/* properties set in the login page */}
                        <table>
                                <tr>        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                         fullWidth
                                            id="uname"
                                            label="User Name"
                                            name="uname"
                                            autoComplete="uname"
                                            autoFocus
                                            /></tr>

                                <tr>     <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                             />  </tr>

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
                            </table>
                      </div>
</div>

    );

}

export default Login
