import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";

const Footer = () => {
    return (
        <>
            <div className="footer" id="inquire">
                <div className="footer__social">
                    <img src={Github} alt="" />
                    <a href="https://www.instagram.com/diagnosticmusic?igsh=MWQ1ZGUxMzBkMA==">
                        <img src={Instagram} alt=""/>
                    </a>
                    {/* <img src={Instagram}
                    alt="" attributionsrc="https://www.instagram.com/diagnosticmusic?igsh=MWQ1ZGUxMzBkMA==" /> */}
                    <img src={LinkedIn} alt="" />
                </div>
                <div className="logo-d">
                    {/* <img src={Logo} alt="" /> */}
                </div>
            </div>
            <div className="footer-date">
                © {new Date().getFullYear()}, Built 
                with love by {` `}
                <a href="mailto=andrew4ld@gmail.com" className="footLink">Andrew Arias</a>
            </div>
        </>
    );
};

export default Footer;