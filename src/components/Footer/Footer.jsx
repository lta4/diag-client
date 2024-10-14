import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
// import Logo from "../../assets/logo192.png"

const Footer = () => {
    return (
        <>
            <div className="footer" id="inquire">
                <div className="footer__social">
                    <a href="" alt="">
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.instagram.com/diagnosticmusic?igsh=MWQ1ZGUxMzBkMA==" alt="">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="" alt="">
                        <img src={LinkedIn} alt="" />
                    </a>
                </div>
                {/*********************** DIAG LOGO INPUT ***************************/}
                {/* <div className="logo-d">
                    <img src={Logo} alt="" />
                </div> */}
            </div>
            <div className="footer__date">
                <div className="footer__date--description">
                    © {new Date().getFullYear()}, Built 
                    with love by {` `}
                    <a href="mailto=andrew4ld@gmail.com" alt="" className="footer__date--link">Andrew Arias</a>
                </div>
            </div>
        </>
    );
};

export default Footer;