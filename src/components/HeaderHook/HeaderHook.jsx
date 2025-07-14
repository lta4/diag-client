import React, { useState } from "react";
import CDiagBanner from "../../assets/CDiagBanner.jpg";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./HeaderHook.css";
import { HashLink as Link } from "react-router-hash-link";

const HeaderHook = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "1150px" });
    
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
                <Link smooth to="#shows" className={linkClassName} onClick={closeMobileMenu}>
                    Shows
                </Link>
            </li>
            <li>
                <Link smooth to="#mix" className={linkClassName} onClick={closeMobileMenu}>
                    Mixes
                </Link>
            </li>
            <li>
                <Link smooth to="#inquire" className={linkClassName} onClick={closeMobileMenu}>
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
        );
    };

    return (
        <header className="header">
            <nav className="nav active">
                <img src={CDiagBanner} alt="" className="CDiagBanner"/>
                <NavLink to="/" className="nav__logo">
                    DIAGNOSTIC
                </NavLink>
                
                {isMobile && (
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <IoMenu />
                    </div>
                )}

                {isMobile ? (
                    <div 
                        className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
                        id="nav-menu"
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