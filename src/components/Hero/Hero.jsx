import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import GWDiag from "../../assets/GWDiag.png";
import jThirteen from "../../assets/jThirteen.jpg";
// import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Hero = (props) => {

    const StreamButton = () => {
        const navigate = useNavigate();
    }

    return (
        <div className="hero" id="home">
            <div className="hero__container">
                <Header />
                    <div className="hero__wall">
                        <div
                            className="about__bg"
                            aria-hidden="true"
                            style={{ backgroundImage: `url(${jThirteen})` }}
                        >
                            <div className="about__bg--over">
                                <div
                                className="about__bg--title"
                                aria-hidden="true"
                                style={{ backgroundImage: `url(${GWDiag})` }}
                                >
                                    {/* empty space for Diagnostic */}
                                </div>
                            </div> 
                        </div>
                    </div>
                        
                <ScrollToTop smooth color="#fff" style={{ backgroundColor: '#000', borderRadius: '50%' }} />
                {/* <ScrollToTop className="hero__scroll" /> */}
                {/* CookieBanner rendered globally in MainLayout */}
            </div>
        </div>
    );
};

export default Hero;