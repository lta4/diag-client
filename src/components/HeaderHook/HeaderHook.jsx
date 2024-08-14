import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./HeaderHook.css";

const HeaderHook = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "1150px"});
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMobileMenu = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    const renderNavLinks = () => {
        const listClassName = isMobile ? "nav__list" : "nav__list__web";
        const linkClassName = "nav__link";
        const buttonClassName = "nav__cta";
    

    return (
        <ul className={listClassName}>
            <li>
                <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/About" className={linkClassName} onClick={closeMobileMenu}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/Plans" className={linkClassName} onClick={closeMobileMenu}>
                    Plans
                </NavLink>
            </li>
            <li>
                <NavLink to="/Testimonials" className={linkClassName} onClick={closeMobileMenu}>
                    Testimonials
                </NavLink>
            </li>
            <li>
                <NavLink to="/Why" className={linkClassName} onClick={closeMobileMenu}>
                    Why
                </NavLink>
            </li>
            <li>
                <NavLink to="/get-started" className={`${linkClassName} ${buttonClassName}`} onClick={closeMobileMenu}>
                    Get Started
                </NavLink>
            </li>
        </ul>
        );
    };

    return (
        <header className="header">
            <nav className="nav container">
                <NavLink to="/" className="nav__logo">
                    Navigation Bar
                </NavLink>
                {isMobile && (
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <IoMenu />
                    </div>
                )}
                {isMobile ? (
                    <div 
                        className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
                    >
                        {renderNavLinks()}
                        <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                            <IoClose />
                        </div>

                    </div>
                ) : (
                    renderNavLinks()
                )}
            </nav>
        </header>
    );
};

export default HeaderHook; 