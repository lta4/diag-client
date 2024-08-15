import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import HeaderHook from "../HeaderHook/HeaderHook";

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <HeaderHook />
            </div>
            <div className="right-h">right side</div>
        </div>
    );
};

export default Hero