// useScrollAnimation.js
// Custom hook that ensures all elements remain fully visible and gracefully animated
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollAnimation() {
  const location = useLocation();

  useEffect(() => {
    // Immediately ensure all elements are visible
    const revealAll = () => {
      const elements = document.querySelectorAll('.fade-up, .fade-in');
      elements.forEach((el) => el.classList.add('visible'));
    };

    revealAll();
    // Also run after next paint when lazy components finish mounting
    const timer = setTimeout(revealAll, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);
}
