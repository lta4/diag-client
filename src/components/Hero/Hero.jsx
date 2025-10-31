import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Show from "../Show/Show";
import Mix from "../Mix/Mix";
import ContactForm from "../ContactForm/ContactForm";
// import JOne from "../../assets/jOne.jpeg";
import jOne from "../../assets/jOne.jpg";
import JFifteen from "../../assets/jFifteen.jpg";
import FWDiag from "../../assets/FWDiag.jpg";
import JFourteen from "../../assets/jFourteen.jpg";
import { Link } from "react-router-dom";
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
                <div className="show">
                    <div className="show__wall">
                        <img src={JFifteen} className="show__wall--image" />
                    </div>
                </div>
                <div className="hero__bar--shows" id="shows">
                    <div className="show--preview">
                        <Show />
                        <Link to="/Show"
                            className="show--preview__cta">
                                View Show
                        </Link>
                    </div>
                </div>
                <div className="hero__bar--mix" id="mix">
                    <div className="mix--preview">
                        <img src={jOne} alt="" className="mix--preview__image" />
                        <Mix />
                        {/* <Link to="/Tree" className="tree--preview__cta">STREAM</Link> */}
                    </div>
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