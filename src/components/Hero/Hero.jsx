import React from "react";
import "./Hero.css";
// import Header from "../Header/Header";
import HeaderHook from "../HeaderHook/HeaderHook";
import Gigs from "../Gigs/Gigs";
import JoseOne from "../../assets/joseOne.jpeg";

const Hero = () => {

    return (
        <div className="hero" id="home">
            <div>
                {/* <Header /> */}
                <HeaderHook />
                <div>
                <img src={JoseOne} alt=""/>
                </div>
                <Gigs />
            </div>
        </div>
    );
};

export default Hero;