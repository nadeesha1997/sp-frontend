import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './css/log.css'

import axios from "axios";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";

export default class Login extends Component {


    handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        }

        axios.post("https://localhost:3001/login", data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            })

    };


    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>



                        <div className="form-group">
                            <label> Email : </label>
                            <Input type="email" className="form-control" placeholder="email"
                                   onChange={e => this.email = e.target.value}/>
                        </div>


                        <div className="form-group">
                            <label>Password : </label>
                            <Input type="password"  className="form-control" placeholder="password"
                                   onChange={e => this.password = e.target.value}/>
                        </div>


                        <FormControlLabel
                            control={<Checkbox value="remember" color="#91beep"/>}
                            label="Remember me"
                        />

                        <Button type="submit" fullWidth variant="contained" color="#91beeb">
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <p> Don't have an account?
                                    <Link to="./register/student">
                                        {"Register Here"}
                                    </Link></p>
                            </Grid>
                        </Grid>



            </form>

        )
    }

}


