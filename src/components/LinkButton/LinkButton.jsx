import React from "react";
import "./LinkButton.css";

const LinkButton = ({ title, url }) => {
    return (
        <div className="link__button">
            <a href={url} target="_blank" rel="noreferrer" className="link__button--anchor">
                {title}
            </a>
        </div>
    );
};

export default LinkButton;