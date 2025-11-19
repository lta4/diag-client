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
    <button onClick={handleBack} className="back__button">
      {label}
    </button>
  );
}
