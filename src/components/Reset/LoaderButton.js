import React from "react";
import { Button,  } from "react-bootstrap";
import "../css/LoaderButton.css";

export default function LoaderButton({
                                         isLoading,
                                         className = "",
                                         disabled = false,
                                         ...props
                                     }) {
    return (
        <Button
            className={`LoaderButton ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {/*{isLoading && <Glyphicon glyph="refresh" className="spinning" />}*/}
            {props.children}
        </Button>
    );
}