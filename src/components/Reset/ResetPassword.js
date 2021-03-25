import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import {

    FormGroup
    ,
    FormControl, Alert,

} from "react-bootstrap";
import LoaderButton from "./LoaderButton";
import { useFormFields } from "./hooksLib";
import { onError } from "./errorLib";
import "../css/ResetPassword.css";

export default function ResetPassword() {
    const [fields, handleFieldChange] = useFormFields({
        code: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [codeSent, setCodeSent] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [isConfirming, setIsConfirming] = useState(false);
    const [isSendingCode, setIsSendingCode] = useState(false);

    function validateCodeForm() {
        return fields.email.length > 0;
    }

    function validateResetForm() {
        return (
            fields.code.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    async function handleSendCodeClick(event) {
        event.preventDefault();

        setIsSendingCode(true);

        try {
            await Auth.forgotPassword(fields.email);
            setCodeSent(true);
        } catch (error) {
            onError(error);
            setIsSendingCode(false);
        }
    }

    async function handleConfirmClick(event) {
        event.preventDefault();

        setIsConfirming(true);

        try {
            await Auth.forgotPasswordSubmit(
                fields.email,
                fields.code,
                fields.password
            );
            setConfirmed(true);
        } catch (error) {
            onError(error);
            setIsConfirming(false);
        }
    }

    function renderRequestCodeForm() {
        return (
            <form onSubmit={handleSendCodeClick}>
                <FormGroup bsSize="large" controlId="email">
                    <label>Email</label>
                    <FormControl
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <LoaderButton
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isSendingCode}
                    disabled={!validateCodeForm()}
                >
                    Send Confirmation
                </LoaderButton>
            </form>
        );
    }

    function renderConfirmationForm() {
        return (
            <form onSubmit={handleConfirmClick}>
                <FormGroup bsSize="large" controlId="code">
                    <label>Confirmation Code</label>
                    <FormControl
                        autoFocus
                        type="tel"
                        value={fields.code}
                        onChange={handleFieldChange}
                    />
                    <Alert>
                        Please check your email ({fields.email}) for the confirmation code.
                    </Alert>
                </FormGroup>
                <hr />
                <FormGroup bsSize="large" controlId="password">
                    <label>New Password</label>
                    <FormControl
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup bsSize="large" controlId="confirmPassword">
                    <label>Confirm Password</label>
                    <FormControl
                        type="password"
                        value={fields.confirmPassword}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <LoaderButton
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isConfirming}
                    disabled={!validateResetForm()}
                >
                    Confirm
                </LoaderButton>
            </form>
        );
    }

    function renderSuccessMessage() {
        return (
            <div className="success">

                <p>Your password has been reset.</p>
                <p>
                    <Link to="/login">
                        Click here to login with your new credentials.
                    </Link>
                </p>
            </div>
        );
    }

    return (
        <div className="ResetPassword">
            {!codeSent
                ? renderRequestCodeForm()
                : !confirmed
                    ? renderConfirmationForm()
                    : renderSuccessMessage()}
        </div>
    );
}