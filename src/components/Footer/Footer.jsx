import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img />
                    <img />
                    <img />
                </div>
                <div className="logo-f">
                    <img />
                </div>
            </div>
            © {new Date().getFullYear()}, Built 
             with love by {` `}
            <a href="mailto=andrew4ld@gmail.com" className="footLink">Andrew Arias</a>
        </div>
    );
};

export default Footer;