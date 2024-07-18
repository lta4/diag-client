import React from "react";
import "./Header.css";
import Logo from "../../assets/logo192.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="" className="logo"/>
            <ul className="header-menu">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink></li>
                <li>
                    <NavLink to="About">
                        About
                    </NavLink></li>
                <li>Why Us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
        </div>
    );
};

export default Header