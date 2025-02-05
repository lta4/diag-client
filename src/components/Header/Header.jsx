import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo192.png"; 
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    // const [nav, setNav] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };

const Nav = () => {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        // console.log(window.scrollY)
        if(window.scrollY >= 100) {
            setNav(true)
        } else {
            setNav(false)
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <header className="header">
            <nav className= {nav ? 'nav active' : 'nav'}>
            {/* <img src={Logo} alt="" className="logo"/> */}
            <NavLink to="/" className="nav__logo">
                Diagnostic Music
            </NavLink>
            <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu"
            >
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link smooth to="#shows" className="nav__link" onClick={closeMenuOnMobile}>
                        Shows
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link smooth to="#mixes" className="nav__link" onClick={closeMenuOnMobile}>
                        Mixes
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link smooth to="#inquire" className="nav__link" onClick={closeMenuOnMobile}>
                        Inquire
                        </Link>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/About" className="nav__link" onClick={closeMenuOnMobile}>
                        About
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/Video" className="nav__link" onClick={closeMenuOnMobile}>
                        Video
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
}
};

export default Header;