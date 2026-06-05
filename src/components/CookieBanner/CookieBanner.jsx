import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCookieBite } from "react-icons/fa";
import "./CookieBanner.css";

export default function CookieBanner() {
  const STORAGE_KEY = "cookieBannerDismissed";
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, dismissed ? "1" : "0");
    } catch {}
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="cookie-banner__inner">
        <FaCookieBite className="cookie-banner__icon" aria-hidden="true" />
        <div className="cookie-banner__text">
          <p>
            We use cookies to improve your experience and analyze traffic. By
            continuing to use this site you agree to our{" "}
            <Link to="/Privacy" className="cookie-banner__link">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button
            className="cookie-banner__btn"
            onClick={() => setDismissed(true)}
            aria-label="Accept cookies"
          >
            Accept
          </button>
        </div>

        {/* small dismiss "X" */}
        <button
          className="cookie-banner__close"
          onClick={() => setDismissed(true)}
          aria-label="Close cookie banner"
        >
          ×
        </button>
      </div>
    </div>
  );
}