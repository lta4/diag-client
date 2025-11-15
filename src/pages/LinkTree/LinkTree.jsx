import React from "react";
import { links } from "../../data/data";
import LinkButton from "../../components/LinkButton/LinkButton";
import "./LinkTree.css";

function LinkTree({ title, url }) {
    return (
        <a href={url}>
            {title}
        </a>
    );
};

export default LinkTree;