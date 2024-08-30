import React from "react";
import "./Hero.css";
// import Header from "../Header/Header";
import HeaderHook from "../HeaderHook/HeaderHook";
import Gigs from "../Gigs/Gigs";

const Hero = () => {

    return (
        <div className="hero" id="home">
            <div className="left-h">
                {/* <Header /> */}
                <HeaderHook />
            </div>
            <div className="right-h">
            </div>
            <Gigs />
        </div>
    );
};

export default Hero