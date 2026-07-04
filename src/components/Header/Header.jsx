import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { IoClose, IoMenu } from "react-icons/io5";
import BWDiag from "../../assets/BWDiag.jpg";
import "./Header.css";

export default function Header(props) {
  // track whether we're at the top so CSS class can reflect it
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const headerEl = document.querySelector("header");

    // find the real scroll container (prefer application root/any scrollable ancestor)
    const findScrollContainer = () => {
      const candidates = [
        document.scrollingElement,
        document.documentElement,
        document.body,
        document.getElementById("root"),
        document.querySelector(".App"),
        document.querySelector("main")
      ].filter(Boolean);
      for (const el of candidates) {
        const style = getComputedStyle(el);
        if ((el.scrollHeight > el.clientHeight) &&
            (["auto", "scroll", "overlay"].includes(style.overflowY) || ["auto", "scroll", "overlay"].includes(style.overflow))) {
          return el;
        }
      }
      // fallback to window
      return window;
    };

    const scrollContainer = findScrollContainer();

    const getScrollTop = () => {
      if (scrollContainer === window) return window.scrollY || window.pageYOffset || 0;
      return scrollContainer.scrollTop || 0;
    };

    const onScroll = () => {
      const atTop = getScrollTop() < 24;
      setIsTop(atTop);
      if (headerEl) {
        if (atTop) headerEl.classList.add("header--transparent");
        else headerEl.classList.remove("header--transparent");
      }
    };

    onScroll();
    // listen on both window (safe) and the discovered container if it's not window
    window.addEventListener("scroll", onScroll, { passive: true });
    if (scrollContainer && scrollContainer !== window) {
      scrollContainer.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollContainer && scrollContainer !== window) {
        scrollContainer.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1150 });

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
