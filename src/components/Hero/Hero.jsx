import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import HeaderHook from "../HeaderHook/HeaderHook";
import Gigs from "../Gigs/Gigs";

const Hero = () => {

    return (
        <div className="hero" id="home">
            <div className="left-h">
                <HeaderHook />
            </div>
            <div className="right-h">
            </div>
            <div className="gigs" id="gig">
                <Gigs />
            </div>
        </div>
    );
};

export default Hero