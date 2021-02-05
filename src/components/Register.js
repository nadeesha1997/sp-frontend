import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className="Container">
            <h4 className="center">REGISTER</h4>


            <div className="card">

                <div className="content">
                    <span>Register as a Lecturer </span>
                    <Link to="./LecturerRegisterForm">
                        <button type="button">Register</button>
                    </Link>

                </div>


                <div className="card">

                    <div className="content">
                        <span>Register as a Student </span>
                        <Link to="./StudentRegisterForm">
                            <button type="button">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Register