import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="Footer">
            © {new Date().getFullYear()}, Built 
             with love by {` `}
            <a href="mailto=andrew4ld@gmail.com" className="footLink">Andrew Arias</a>
        </footer>
    );
};

export default Footer;