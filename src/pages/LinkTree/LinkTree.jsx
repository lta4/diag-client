import React from "react";
import { links } from "../../data/data";
import LinkButton from "../../components/LinkButton/LinkButton";
import "./LinkTree.css";
import BackButton from '../../components/BackButton/BackButton';

function LinkTree() {
    return (
        <div className="linktree">
            <BackButton label="Back to site" />
            <div className="linktree__list">
                {links.map((link, index) => (
                    <LinkButton key={index} title={link.title} url={link.url} />
                ))}
            </div>
        </div>
    );
};

export default LinkTree;