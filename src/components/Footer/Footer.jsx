import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";

const Footer = () => {
    return (
        <div className="footer-container" id="inquire">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
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
        </div>
    );
};

export default Footer;