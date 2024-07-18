import React from "react";
import "./Header.css";
import Logo from "../../assets/logo192.png";

const Header = () => {
    return (
        <div className="header">
            header
            <img src={Logo} alt="" className="logo"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Why Us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
        </div>
    );
};

export default Header