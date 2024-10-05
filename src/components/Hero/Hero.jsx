import React from "react";
import "./Hero.css";
// import Header from "../Header/Header";
import HeaderHook from "../HeaderHook/HeaderHook";
import Gigs from "../Gigs/Gigs";
import JOne from "../../assets/jOne.jpeg";

const Hero = () => {

    return (
        <div className="hero" id="home">
            <div>
                {/* <Header /> */}
                <HeaderHook />
                <div>
                    <img src={JOne} alt=""/>
                </div>
                <Gigs />
            </div>
        </div>
    );
};

export default Hero;