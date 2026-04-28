import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCookieBite } from 'react-icons/fa';
import './CookieBanner.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cookieConsent');
      if (!stored) setVisible(true);
      else setAccepted(stored === 'accepted');
    } catch (e) {
      setVisible(true);
    }
  }, []);

  function accept() {
    try { localStorage.setItem('cookieConsent', 'accepted'); } catch (e) {}
    setAccepted(true);
    setVisible(false);

    // analytics: push consent event then initialize analytics if available
    try {
      if (window && window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: 'cookie_consent', action: 'accept', timestamp: new Date().toISOString() });
      }
      if (window && typeof window.gtag === 'function') {
        window.gtag('event', 'cookie_consent', { consent_action: 'accept' });
      }
      // call a site-provided initializer if present (non-breaking)
      if (window && typeof window.initializeAnalytics === 'function') {
        try { window.initializeAnalytics(); } catch (e) { /* ignore */ }
      }
    } catch (e) { /* ignore analytics errors */ }

    window.dispatchEvent(new Event('cookieAccepted'));
  }

  function decline() {
    try { localStorage.setItem('cookieConsent', 'declined'); } catch (e) {}
    setAccepted(false);
    setVisible(false);

    // analytics: push decline event and optionally disable analytics
    try {
      if (window && window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: 'cookie_consent', action: 'decline', timestamp: new Date().toISOString() });
      }
      if (window && typeof window.gtag === 'function') {
        window.gtag('event', 'cookie_consent', { consent_action: 'decline' });
      }
      if (window && typeof window.disableAnalytics === 'function') {
        try { window.disableAnalytics(); } catch (e) { /* ignore */ }
      }
    } catch (e) { /* ignore analytics errors */ }

    window.dispatchEvent(new Event('cookieDeclined'));
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-banner__inner">
        <FaCookieBite className="cookie-banner__icon" aria-hidden="true" />
        <div className="cookie-banner__text">
          <p>
            We use cookies to improve your experience and analyze traffic. By continuing to use this site you agree to our{' '}
            <Link to="/Privacy" className="cookie-banner__link">Privacy Policy</Link>.
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button className="cookie-banner__btn cookie-banner__btn--decline" onClick={decline}>Decline</button>
          <button className="cookie-banner__btn cookie-banner__btn--accept" onClick={accept}>Accept</button>
        </div>
      </div>
    </div>
  );
};