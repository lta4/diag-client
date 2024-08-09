import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo192.png";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
            {/* <img src={Logo} alt="" className="logo"/> */}
            <NavLink to="/" className="nav__logo">
                Navigation Bar
            </NavLink>
            <div className={"nav__menu"} id="nav-menu"
            >
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to="/" className="nav__link">
                        Home
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/About" className="nav__link">
                        About
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/Plans" className="nav__link">
                        Plans
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/Testimonials" className="nav__link">
                        Testimonials
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/Why" className="nav__link">
                        Why
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/get-started" className="nav__link nav__cta">
                        Get Started
                        </NavLink>
                    </li>
                </ul>
                <div className="nav__close" id="nav-close">
                    <IoClose />
                </div>
            </div>
            <div className="nav__toggle" id="nav-toggle">
                    <IoMenu />
            </div>
            </nav>
        </header>
    );
};

export default Header;