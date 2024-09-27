import React from "react";
import "./Hero.css";
// import Header from "../Header/Header";
import HeaderHook from "../HeaderHook/HeaderHook";
import Gigs from "../Gigs/Gigs";

const Hero = () => {

    return (
        <div className="hero" id="home">
            <div>
                {/* <Header /> */}
                <HeaderHook />
                <Gigs />
            </div>
        </div>
    );
};

export default Hero;