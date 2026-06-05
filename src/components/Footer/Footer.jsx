import React from "react";
import "./Footer.css";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiSongkick } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* <div className="footer__social" aria-label="Social links">
          <a href="https://instagram.com" className="social-link" aria-label="Instagram">IG</a>
          <a href="https://twitter.com" className="social-link" aria-label="Twitter">TW</a>
          <a href="https://github.com" className="social-link" aria-label="GitHub">GH</a>
        </div> */}
        <div className="footer__social" aria-label="Social links">
                    <NavLink to="https://www.instagram.com/diagnosticmusic/" aria-label="Instagram">
                        <FaInstagram className="social__link" alt="View Instagram"/>
                    </NavLink>
                    <NavLink to="https://www.youtube.com/@DiagnosticMusic0" aria-label="YouTube">
                        <FaFacebookF className="social-link" alt="View YouTube"/>
                    </NavLink>
                    <NavLink to="https://www.tiktok.com/@diagnosticmusic?_r=1&_t=ZP-916LhS5VoY3" aria-label="TikTok">
                        <FaTiktok className="social-link" alt="View TikTok"/>
                    </NavLink>
                    <NavLink to="https://www.songkick.com/artists/10389354-diagnostic-music" aria-label="Songkick">
                        <SiSongkick className="social-link" alt="View Songkick"/>
                    </NavLink>
                </div>

        <nav className="footer__links" aria-label="Footer links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/term" className="footer-link">Term and Conditions</a>
        </nav>
        
        <div className="footer__copy">
                <div className="footer__date--description">
                    <p>© {new Date().getFullYear()} Fignewt</p>
                    <p>Designed & Developed by {` `}</p>
                    <a href="mailto=andrew@fignewt.com" className="footer__date--link">
                        Andrew Arias
                    </a>
                </div>
            </div>
      </div>
    </footer>
  );
}