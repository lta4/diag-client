import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiSongkick } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer" id="inquire">
                <div className="footer__social">
                    <NavLink to="https://www.instagram.com/diagnosticmusic/">
                        <FaInstagram className="footer__link" />
                    </NavLink>
                    <NavLink to="https://www.youtube.com/@DiagnosticMusic0">
                        <FaFacebookF className="footer__link" />
                    </NavLink>
                    <NavLink to="https://www.tiktok.com/@diagnosticmusic?_r=1&_t=ZP-916LhS5VoY3">
                        <FaTwitter className="footer__link" />
                    </NavLink>
                    <NavLink to="https://www.songkick.com/artists/10389354-diagnostic-music">
                        <SiSongkick className="footer__link" />
                    </NavLink>
                    {/* <NavLink to="https://open.spotify.com/artist/0T62YioSTCaw1NRFNbE4lE?si=s36brJ5sT1GtdAxgegRz2A">
                        <FaSpotify className="footer__link"/>
                    </NavLink> */}
                    {/* <NavLink to="https://www.youtube.com/@DiagnosticMusic0">
                        <FaYoutube className="footer__link" />
                    </NavLink> */}
                    {/* <NavLink to="https://soundcloud.com/kid-diagnostic?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                        <FaSoundcloud className="footer__link"/>
                    </NavLink> */}
                </div>
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
                    <a href="mailto=andrew@fignewt.com" alt="" className="footer__date--link">
                        Andrew Arias
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;