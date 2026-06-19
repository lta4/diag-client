import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { IoClose, IoMenu } from "react-icons/io5";
import BWDiag from "../../assets/BWDiag.jpg";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 1150 });

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 24);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMobileMenu = () => isMobile && setIsMenuOpen(false);

  return (
    <header className={`header ${isTop ? "header--transparent" : ""}`}>
      <nav className="nav">
        <NavLink to="/" className="nav__logo" onClick={closeMobileMenu}>
          <span className="nav__BWDiag">
            <img
              src={BWDiag}
              alt="Home"
              className={`nav__BWDiag--image ${!isTop ? "bw-visible" : "bw-hidden"}`}
            />
          </span>
        </NavLink>

        {isMobile && (
          <div className="nav__toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}>
            <ul className="nav__list">
              <li><NavLink to="/" onClick={closeMobileMenu}>Home</NavLink></li>
              <li><NavLink to="/About" onClick={closeMobileMenu}>Biography</NavLink></li>
              <li><NavLink to="/Gallery" onClick={closeMobileMenu}>Gallery</NavLink></li>
              <li><NavLink to="/Gig" onClick={closeMobileMenu}>Shows</NavLink></li>
              <li><NavLink to="/Contact" onClick={closeMobileMenu}>Contact</NavLink></li>
            </ul>
            <div className="nav__close" onClick={toggleMenu}><IoClose /></div>
          </div>
        ) : (
          <ul className="nav__list__web">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">Biography</NavLink></li>
            <li><NavLink to="/Gallery">Gallery</NavLink></li>
            <li><NavLink to="/Gig">Shows</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="https://www.youtube.com/@DiagnosticMusic0" target="_blank" rel="noreferrer" className="nav__cta">Join the Vibe</NavLink></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
