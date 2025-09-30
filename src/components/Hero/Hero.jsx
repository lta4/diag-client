import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Gigs from "../Gigs/Gigs";
import Mix from "../Mix/Mix";
import ContactForm from "../ContactForm/ContactForm";
import JOne from "../../assets/jOne.jpeg";
import JThree from "../../assets/jThree.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";

const Hero = (props) => {

    return (
        <div className="hero" id="home">
            <div className="hero__container">
                <Header />
                <div className="jOne_container">
                    <img src={JOne} alt="" className="jOne-image" />
                </div>
                <div className="hero__bar--shows" id="shows">
                    {/* <hr /> */}
                    <Link to="/Gigs">{<Gigs />}</Link>
                    {/* <hr /> */}
                    {/* ^ this break is set in order to create one smooth break for site */}
                </div>
                <div className="hero__bar--mix" id="mix">
                    {/* <hr /> */}
                    <Link to="/Mix">{<Mix />}</Link>
                    {/* <hr /> */}
                </div>
                <div className="jThree_container">
                    <img src={JThree} alt="" className="jThree-image" />
                </div>
                <div className="hero__bar--inquire" id="inquire">
                    {/* <hr /> */}
                    <ContactForm />
                    <hr />
                    {/* <hr />
                    <Link to="/">{<ContactForm />}</Link>
                    <hr /> */}
                    {/* <hr />
                    <Link to="/ContactForm">{<Form />}
                    </Link>
                    <hr /> */}
                </div>
                <ScrollToTop className="hero__scroll"/>
            </div>
        </div>
    );
};

export default Hero;