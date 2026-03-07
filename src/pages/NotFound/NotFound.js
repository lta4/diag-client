import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="notfound-container">
            <h1 className="glitch" data-text="404">
                404
            </h1>

            <h2 className="subtitle">
                SIGNAL LOST
            </h2>

            <p className="description">
                Looks like this page got lost in the mix. Tis page drifted off the frequency.
            </p>

            <div>
                {Array.from({ length: 20 }).map((_, i) => {
                    <span key={i}></span>
                })}
            </div>

            <Link to="/" className="home-button">
                Return to Diagnostic
            </Link>
        </div>
    );
}