import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Show from "../Show/Show";
// import Mix from "../Mix/Mix";
import ContactForm from "../ContactForm/ContactForm";
import jOneInk from "../../assets/jOneInk.jpg";
import jFifteenInk from "../../assets/jFifteenInk.jpg";
import FWDiag from "../../assets/FWDiag.jpg";
import jFourteenInk from "../../assets/jFourteenInk.jpg";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Hero = (props) => {

    const StreamButton = () => {
        const navigate = useNavigate();
    }

    return (
        <div className="hero" id="home">
            <div className="hero__container">
                <Header />
                    {/* Desktop-only parallax wrapper: background image handled in CSS for desktop, img fallback remains for mobile */}
                    <div className="hero__wall">
                        <div
                            className="hero__parallax"
                            style={{ backgroundImage: `url(${FWDiag})` }}
                            aria-hidden="true"
                        />
                        <img src={FWDiag}
                            alt=""
                            className={`FWDiag--image ${/* add visible class when loaded */"FWDiag--seen"}`}
                            onLoad={(e) => e.currentTarget.classList.add("is-visible")}
                        />
                    </div>
                    <div className="hero__wall">
                        <img src={jFourteenInk}
                            alt=""
                            className="hero__wall--image" 
                        />
                    </div>
                <div className="hero__shows" id="shows">
                    <div className="hero__shows--preview">
                        <Show />
                    </div>
                </div>
                    <div className="hero__wall">
                        <img src={jOneInk} 
                            alt="" 
                            className="hero__wall--image" 
                        />
                    </div>
                    <div className="hero__wall">
                        <img src={jFifteenInk}
                            alt="" 
                            className="hero__wall--image" 
                        />
                        <Link to="/LinkTree" className="hero__linktree-cta">
                            Stream
                        </Link>
                    </div>
                <div className="hero__inquire" id="inquire">
                    <ContactForm />
                </div>
                <ScrollToTop className="hero__scroll"/>
            </div>
        </div>
    );
};

export default Hero;