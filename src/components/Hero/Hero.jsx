import React from "react";
import "./Hero.css";
// import Header from "../Header/Header";
import HeaderHook from "../HeaderHook/HeaderHook";
import Gigs from "../Gigs/Gigs";
import Contact from "../Contact/Contact";
import JOne from "../../assets/jOne.jpeg";
import JThree from "../../assets/jThree.jpg";
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
                <div className="hr__bar">
                    <hr />
                    <Link to="/">{<Gigs />} </Link>
                    <hr />
                </div>
                <div className="jThree_container">
                    <img src={JThree} alt="" className="jThree-image" />
                </div>
                <div className="hr__bar">
                    <hr />
                    <Link to="/">{<Contact />}</Link>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Hero;