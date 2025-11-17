import React from "react";
import "./LinkButton.css";

const LinkButton = ({ title, url }) => {
    return (
        <div className="link-button">
            <a href={url} target="_blank" rel="noreferrer" className="link-button__anchor">
                {title}
            </a>
        </div>
    );
};

export default LinkButton;