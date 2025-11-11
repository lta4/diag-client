import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Show from "../Show/Show";
// import Mix from "../Mix/Mix";
import ContactForm from "../ContactForm/ContactForm";
import jOne from "../../assets/jOne.jpg";
import jOneInk from "../../assets/jOneInk.jpg";
import jOneSlate from "../../assets/jOneSlate.jpg";
import JFifteen from "../../assets/jFifteen.jpg";
import jFifteenInk from "../../assets/jFifteenInk.jpg";
import jFifteenSlate from "../../assets/jFifteenSlate.jpg";
import FWDiag from "../../assets/FWDiag.jpg";
import JFourteen from "../../assets/jFourteen.jpg";
import jFourteenInk from "../../assets/jFourteenInk.jpg";
import jFourteenSlate from "../../assets/jFourteenSlate.jpg";
import jFourteenInk60p from "../../assets/jFourteenInk60p.jpg";
import jFourteenSlate72p from "../../assets/jFourteenSlate72p.jpg";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Hero = (props) => {

    return (
        <div className="hero" id="home">
            <div className="hero__container">
                <Header />
                <div className="dj">
                    <div className="dj__wall">
                        <img src={FWDiag}
                            alt=""
                            className={`FWDiag--image ${/* add visible class when loaded */""}`}
                            onLoad={(e) => e.currentTarget.classList.add("is-visible")}
                        />
                    </div>
                </div>
                <div className="dj">
                    <div className="dj__wall">
                        <img src={jFifteenInk}
                            alt=""
                            className="dj__wall--image" 
                        />
                    </div>
                </div>
                <div className="hero__shows" id="shows">
                    <div className="hero__show--preview">
                        <Show />
                        <Link to="/Show"
                            className="hero__show--preview__cta">
                                View Show
                        </Link>
                    </div>
                </div>
                <div className="dj">
                    <div className="dj__wall">
                        <img src={jOneInk} 
                            alt="" 
                            className="dj__wall--image" 
                        />
                    </div>
                </div>
                <div className="dj">
                    <div className="dj__wall">
                        <img src={jFourteenInk}
                            alt="" 
                            className="dj__wall--image" 
                        />
                    </div>
                </div>
                <div className="hero__inquire" id="inquire">
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