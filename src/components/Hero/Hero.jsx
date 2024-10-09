import React from "react";
import "./Hero.css";
// import Header from "../Header/Header";
import HeaderHook from "../HeaderHook/HeaderHook";
import Gigs from "../Gigs/Gigs";
import JOne from "../../assets/jOne.jpeg";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {

    return (
        <div className="hero" id="home">
            <div>
                {/* <Header /> */}
                <HeaderHook />
                <div className="jOne_container">
                    <img src={JOne} alt="" className="jOne-image" />
                </div>
                <Link to="section1">{<Gigs />} </Link>
            </div>
        </div>
    );
};

export default Hero;