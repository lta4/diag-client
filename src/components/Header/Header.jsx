import React, { useState, useEffect } from "react";
import WDiag from "../../assets/wDiag.png";
import SDiagBanner from "../../assets/SDiagBanner.jpg";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const isMobile = useMediaQuery({ maxWidth: "1150px" });
    console.log('isMobile:', isMobile);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsTransparent(false);
            } else {
                setIsTransparent(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMobileMenu = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";

    return (
        <header className={`header${isTransparent ? " header--transparent" : ""}`}>
            <nav className="nav active">
                <NavLink to="/" className="nav__logo">
                    <span className="nav__wDiag">
                        <img src={SDiagBanner} alt="Logo" className="nav__wDiag" />
                    </span>
                </NavLink>
                {isMobile && (
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <IoMenu />
                    </div>
                )}
                {isMobile ? (
                    <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
                        <ul className={listClassName}>
                            <li>
                                <Link smooth to="/#shows" className={linkClassName} onClick={closeMobileMenu}>
                                    Shows
                                </Link>
                            </li>
                            <li>
                                <Link smooth to="/#mix" className={linkClassName} onClick={closeMobileMenu}>
                                    Mixes
                                </Link>
                            </li>
                            <li>
                                <Link smooth to="/#inquire" className={linkClassName} onClick={closeMobileMenu}>
                                    Inquire
                                </Link>
                            </li>
                            <li>
                                <NavLink to="/About" className={linkClassName} onClick={closeMobileMenu}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Video" className={linkClassName} onClick={closeMobileMenu}>
                                    Video
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className={`${linkClassName} ${buttonClassName}`} onClick={closeMobileMenu}>
                                    Get Started
                                </NavLink>
                            </li>
                        </ul>
                        <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                            <IoClose />
                        </div>
                    </div>
                ) : (
                    <ul className={listClassName}>
                        <li>
                            <Link smooth to="/#shows" className={linkClassName}>
                                Shows
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="/#mix" className={linkClassName}>
                                Mixes
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="/#inquire" className={linkClassName}>
                                Inquire
                            </Link>
                        </li>
                        <li>
                            <NavLink to="/About" className={linkClassName}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Video" className={linkClassName}>
                                Video
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className={`${linkClassName} ${buttonClassName}`}>
                                Get Started
                            </NavLink>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
