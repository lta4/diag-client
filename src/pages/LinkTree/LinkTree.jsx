import React from "react";
import { links } from "../../data/data";
import LinkButton from "../../components/LinkButton/LinkButton";
import "./LinkTree.css";

function LinkTree() {
    return (
        <div>
            {links.map((link, index) => (
                <LinkButton key={index} title={link.title} url={link.url} />
            ))}
        </div>
    );
};

export default LinkTree;