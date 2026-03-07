import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="notfound-container">
            <h1 className="notfound-code">404</h1>

            <h2 className="notfound-title">
                Track Not Found
            </h2>

            <p className="nofound-text">
                Looks like this page got lost in the mix.
            </p>

            <Link to="/" className="notfound-button">
                Return to Diagnostic
            </Link>
        </div>
    );
}