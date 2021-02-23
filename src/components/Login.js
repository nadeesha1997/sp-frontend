import React from 'react'
import { Link } from 'react-router-dom'
import './css/log.css'
import icon from './../images/icon.jpg'
import {Image} from "react-bootstrap";
import Grid from 'react-bootstrap/Container'
import {
    Button,
    Input,
    Label,
    FormGroup,
} from "reactstrap";
import Checkbox from "@material-ui/core/Checkbox";

const Login = () => {
    return (


        <div>  <div className="col-md-12">
            <div className="p1">
                <h3><u>LECTURE SCHEDULE MANAGEMENT SYSTEM</u></h3>
            </div></div>

            <div className="centered img"><div className="col-md-6">
                <Image img src={icon} alt="icon"/></div>
                        {/* properties set in the login page */}
                        <div className="col-md-12">
                                <Label for="username">username</Label>
                                    <Input
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


                                    <Label for="Password">password</Label>
                                    <Input
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

                                <FormGroup>
                                    <div className="col-sm-12">


                                        <Checkbox value="remember" color="#91beeb" />
                                        <Label for="Remember me"> Remember me: </Label>

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
                                                             <Link to="./Register">
                                                              {"Register Here"}
                                                             </Link></p>
                                               </Grid>
                                           </Grid></div></FormGroup></div>

                      </div>
</div>

    );

}

export default Login
