import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaSoundcloud } from "react-icons/fa6";
import Privacy from "../../pages/Privacy/Privacy"
// import Logo from "../../assets/logo192.png"

const Footer = () => {
    return (
        <>
            <div className="footer" id="inquire">
                <div className="footer__social">
                    <a href="" className=""><FaInstagram className="footer__link"/>
                    </a>
                    <a href="" className=""><FaYoutubeSquare className="footer__link" />
                    </a>
                    <a href="" className=""><SiYoutubemusic className="footer__link"/>
                    </a>
                    <a href="" className=""><FaSpotify className="footer__link"/>
                    </a>
                    <a href="" className=""><SiApplemusic className="footer__link"/>
                    </a>
                    <a href="" className=""><AiOutlineDiscord className="footer__link"/>
                    </a>
                    <a href="" className=""><FaSoundcloud className="footer__link"/>
                    </a>
                </div>
                {/*********************** DIAG LOGO INPUT ***************************/}
                {/* <div className="logo-d">
                    <img src={Logo} alt="" />
                </div> */}
            </div>
            <nav>
                <NavLink to="/Privacy">Privacy</NavLink>
            </nav>
            <div className="footer__date">
                <div className="footer__date--description">
                    © {new Date().getFullYear()}, Built 
                    with love by {` `}
                    <a href="mailto=andrew4ld@gmail.com" alt="" className="footer__date--link">
                        Andrew Arias
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;