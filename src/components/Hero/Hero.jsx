import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Gigs from "../Gigs/Gigs";
import Mix from "../Mix/Mix";
import ContactForm from "../ContactForm/ContactForm";
// import JOne from "../../assets/jOne.jpeg";
import FWDiag from "../../assets/FWDiag.jpg";
import JThree from "../../assets/jThree.jpg";
import JFourteen from "../../assets/jFourteen.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";

const Hero = (props) => {

    return (
        <div className="hero" id="home">
            <div className="hero__container">
                <Header />
                <div className="FWDiag__container">
                    <img
                        src={FWDiag}
                        alt=""
                        className={`FWDiag--image ${/* add visible class when loaded */ ""}`}
                        onLoad={(e) => e.currentTarget.classList.add('is-visible')}
                    />
                </div>
                {/* <div className="hero__text">
                    <h1 className="hero__title">Diagnostic</h1>
                    <p className="hero__subtitle">Underground house and Latin vibes</p>
                </div> */}
                <div className="hero__bar--shows" id="shows">
                    <Link to="/Gigs">{<Gigs />}</Link>
                </div>
                <div className="hero__bar--mix" id="mix">
                    <Link to="/Mix">{<Mix />}</Link>
                </div>
                <div className="jThree_container">
                    <img src={JFourteen} alt="" className="jThree-image" />
                </div>
                <div className="hero__bar--inquire" id="inquire">
                    <ContactForm />
                    {/* <hr />
                    <Link to="/">{<ContactForm />}</Link>
                    <hr /> */}
                </div>
                <ScrollToTop className="hero__scroll"/>
            </div>
        </div>
    );
};

export default Hero;