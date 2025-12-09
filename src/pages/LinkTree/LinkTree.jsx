import React from "react";
import { links } from "../../data/data";
import LinkButton from "../../components/LinkButton/LinkButton";
import "./LinkTree.css";
import BackButton from '../../components/BackButton/BackButton';
import { FaSpotify, FaApple, FaYoutube, FaSoundcloud } from 'react-icons/fa';
import { SiBeatport } from 'react-icons/si';

function LinkTree() {
    return (
        <div className="linktree">
            <BackButton label="Back to site" />
            <div className="linktree__list">
                {links.map((link, index) => {
                    let Icon = null;
                    if (link.type === 'spotify') Icon = FaSpotify;
                    else if (link.type === 'apple') Icon = FaApple;
                    else if (link.type === 'youtube') Icon = FaYoutube;
                    else if (link.type === 'soundcloud') Icon = FaSoundcloud;
                    else if (link.type === 'beatport') Icon = SiBeatport;

                    const style = link.iconColor ? { '--link-icon-hover-color': link.iconColor, '--link-icon-color': link.iconColor } : undefined;

                    return <LinkButton key={index} title={link.title} url={link.url} Icon={Icon} style={style} />
                })}
            </div>
        </div>
    );
};

export default LinkTree;