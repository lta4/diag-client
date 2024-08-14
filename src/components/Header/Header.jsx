import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo192.png";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };

    return (
        <header className="header">
            <nav className="nav container">
            {/* <img src={Logo} alt="" className="logo"/> */}
            <NavLink to="/" className="nav__logo">
                Navigation Bar
            </NavLink>
            <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu"
            >
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                        Home
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/About" className="nav__link" onClick={closeMenuOnMobile}>
                        About
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/Plans" className="nav__link" onClick={closeMenuOnMobile}>
                        Plans
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/Testimonials" className="nav__link" onClick={closeMenuOnMobile}>
                        Testimonials
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/Why" className="nav__link" onClick={closeMenuOnMobile}>
                        Why
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/get-started" className="nav__link nav__cta">
                        Get Started
                        </NavLink>
                    </li>
                </ul>
                <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                    <IoClose />
                </div>
            </div>
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <IoMenu />
            </div>
            </nav>
        </header>
    );
};

export default Header;