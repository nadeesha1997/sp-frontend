import React, { Component } from "react";
import AuthService from "../services/auth.service";

export default class Profilenew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className="container">
                <header className="jumbotron">
                    {/*<h3>*/}
                    {/*    <strong>{currentUser.userDetails.username}</strong> Profile*/}
                    {/*</h3>*/}
                    <div className="row">
                        <div className="column">
                            <h3>
                                <strong>{currentUser.userDetails.fullName}</strong>
                            </h3>
                        </div>
                        <div className="column">
                        </div>
                    </div>

                </header>
                <p>
                    <strong>Token:</strong>{" "}
                    {currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
                <p>
                    <strong>Id:</strong>{" "}
                    {currentUser.userDetails.id}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {currentUser.userDetails.email}
                </p>
                <strong>Authorities:</strong>
                <ul>
                    {currentUser.userDetails.roles &&
                    currentUser.userDetails.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
            </div>
        );
    }
}