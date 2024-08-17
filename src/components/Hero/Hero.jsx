import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import HeaderHook from "../HeaderHook/HeaderHook";

const Hero = () => {

    return (
        <div className="hero" id="home">
            <div className="left-h">
                <HeaderHook />
            </div>
            <div className="right-h">
            </div>
        </div>
    );
};

export default Hero