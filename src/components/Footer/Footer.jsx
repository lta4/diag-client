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
import Bandsintown from "../../assets/bandsintown.svg";
// import Logo from "../../assets/logo192.png"

const Footer = () => {
    return (
        <>
            <div className="footer" id="inquire">
                <div className="footer__social">
                    <NavLink to="https://www.instagram.com/diagnosticmusic/">
                        <FaInstagram className="footer__link" />
                    </NavLink>
                    <NavLink to="https://www.youtube.com/@DiagnosticMusic0">
                        <FaYoutubeSquare className="footer__link" />
                    </NavLink>
                    <NavLink to="https://music.youtube.com/channel/UCfJTzGJfOfLZUPlSNDoV7ow?si=q2U6E_YssNIgftNx">
                        <SiYoutubemusic className="footer__link"/>
                    </NavLink>
                    <NavLink to="https://open.spotify.com/artist/0T62YioSTCaw1NRFNbE4lE?si=s36brJ5sT1GtdAxgegRz2A">
                        <FaSpotify className="footer__link"/>
                    </NavLink>
                    <NavLink to="https://music.apple.com/us/artist/diagnostic/402385985">
                        <SiApplemusic className="footer__link"/>
                    </NavLink>
                    {/* <NavLink>
                        <AiOutlineDiscord className="footer__link"/>
                    </NavLink> */}
                    <NavLink to="https://soundcloud.com/kid-diagnostic?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                        <FaSoundcloud className="footer__link"/>
                    </NavLink>
                    <img src={Bandsintown} alt="" className="footer__link footer__link--bit" />
                </div>
                {/*********************** DIAG LOGO INPUT ***************************/}
                {/* <div className="logo-d">
                    <img src={Logo} alt="" />
                </div> */}
            </div>
            <div className="footer__policy">
                <NavLink to="/Privacy" className="footer__service">
                    Privacy
                </NavLink>
                <NavLink to="/Term" className="footer__service">
                    Term
                </NavLink>
            </div>
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