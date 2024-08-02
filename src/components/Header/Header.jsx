import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo192.png";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="" className="logo"/>
            <ul className="header-menu">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="About">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="Why">
                        Why
                    </NavLink>
                </li>
                <li>
                    <NavLink to="Plans">
                        Plans
                    </NavLink>
                </li>
                <li>
                    <NavLink to="Testimonials">
                        Testimonials
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;