import React, { useState, useEffect, useRef } from "react";
import BWDiag from "../../assets/BWDiag.jpg";
// import wDiag from "../../assets/wDiag.jpg"
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const isMobile = useMediaQuery({ maxWidth: "1150px" });

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
    const bwRef = useRef(null);

    useEffect(() => {
        const img = bwRef.current;
        if (!img) return;

        const onScroll = () => {
            // show BWDiag once the user scrolls down a little
            if (window.scrollY > 8) {
                img.classList.add('bw-visible');
            } else {
                img.classList.remove('bw-visible');
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        // run initial check
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`header${isTransparent ? " header--transparent" : ""}`}>
            <nav className="nav active">
                <NavLink to="/" className="nav__logo">
                    <span className="nav__BWDiag">
                        <img ref={bwRef} src={BWDiag} alt="Logo" className="nav__BWDiag--image" />
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
                            {/* <li>
                                <Link smooth to="/#shows" className={linkClassName} onClick={closeMobileMenu}>
                                    Shows
                                </Link>
                            </li> */}
                            {/* <li>
                                <Link smooth to="/#inquire" className={linkClassName} onClick={closeMobileMenu}>
                                    Inquire
                                </Link>
                            </li> */}
                            <li>
                                <NavLink to="/About" className={linkClassName} onClick={closeMobileMenu}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="LinkTree" className={linkClassName} onClick={closeMobileMenu}>
                                    Stream
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="Gallery" className={linkClassName} onClick={closeMobileMenu}>
                                    Gallery
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Video" className={linkClassName} onClick={closeMobileMenu}>
                                    Video
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className={`${linkClassName} ${buttonClassName}`} onClick={closeMobileMenu}>
                                    DIAGNOSTIC
                                </NavLink>
                            </li>
                        </ul>
                        <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                            <IoClose />
                        </div>
                    </div>
                ) : (
                    <ul className={listClassName}>
                        {/* <li>
                            <Link smooth to="/#shows" className={linkClassName}>
                                Shows
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link smooth to="/#inquire" className={linkClassName}>
                                Inquire
                            </Link>
                        </li> */}
                        <li>
                            <NavLink to="/About" className={linkClassName}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/LinkTree" className={linkClassName}>
                                Stream
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Gallery" className={linkClassName}>
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Video" className={linkClassName}>
                                Diagnostic & Friends
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="https://www.youtube.com/@DiagnosticMusic0" target="_blank" className={`${linkClassName} ${buttonClassName}`}>
                                Join the Vibe
                            </NavLink>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
