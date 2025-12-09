import React from "react";
import "./LinkButton.css";

const LinkButton = ({ title, url, Icon, style }) => {
    return (
        <div className="link__button">
            <a href={url} aria-label="Open Diagnostic" target="_blank" rel="noopener noreferrer" className="link__button--anchor" style={style}>
                {Icon && <Icon className="link__button__icon" aria-hidden="true" />}
                <span className="link__button__title">{title}</span>
            </a>
        </div>
    );
};

export default LinkButton;