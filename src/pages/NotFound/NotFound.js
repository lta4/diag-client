import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">

      <h1 className="glitch" data-text="404">
        404
      </h1>

      <h2 className="subtitle">SIGNAL LOST</h2>

      <p className="description">
        This page drifted off the frequency.
      </p>

      <div className="pulse-line">
        <div className="pulse"></div>
      </div>

      <Link to="/" className="home-button">
        Return to Diagnostic
      </Link>

    </div>
  );
}