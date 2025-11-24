import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

export default function BackButton({ label = 'Back', fallback = '/' }) {
  const navigate = useNavigate();
  const handleBack = () => {
    // if there's no previous history entry, go to the provided fallback
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <button onClick={handleBack} className="back__button" aria-label={label}>
      <span className="back__icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="back__label">{label}</span>
    </button>
  );
}
