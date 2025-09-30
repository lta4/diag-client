import React, { useState, useEffect } from "react";
import "./Header.css";
// import CDiagBanner from "../../assets/CDiagBanner.jpg";
import WDiag from "../../assets/wDiag.png"; 
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";

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

    // const [isTransparent, setIsTransparent] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsTransparent(window.scrollY > 50);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

const Nav = () => {

    const [nav, setNav] = useState(false);

    // const changeBackground = () => {
    //     // console.log(window.scrollY)
    //     if(window.scrollY >= 100) {
    //         setNav(true)
    //     } else {
    //         setNav(false)
    //     }
    // };

    // window.addEventListener('scroll', changeBackground);

    const [isTransparent, setIsTransparent] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsTransparent(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={isTransparent ? "header header--transparent" : "header"}>
            <nav className= {nav ? 'nav active' : 'nav'}>
            {/* <img src={CDiagBanner} alt="" className="CDiagBanner"/> */}
            <NavLink to="/" className="nav__logo">
                {/* DIAGNOSTIC */}
                <a href="" className="nav__wDiag">
                <img src={WDiag} alt="" className="nav__wDiag"/>
                </a>
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
                        <Link smooth to="#mix" className="nav__link" onClick={closeMenuOnMobile}>
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
                        <NavLink to="/" className="nav__link nav__cta">
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
};

export default Header;