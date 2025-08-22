import { useEffect, useState, useRef } from 'react';

interface UseScrollFadeOptions {
  fadeStart?: number; // Percentage of section height where fade starts
  fadeEnd?: number;   // Percentage of section height where fade completes
  threshold?: number; // Distance threshold for fade calculation
}

export const useScrollFade = (options: UseScrollFadeOptions = {}) => {
  const [opacity, setOpacity] = useState(1);
  const elementRef = useRef<HTMLElement>(null);
  
  const {
    fadeStart = 0.2,  // Start fading when scrolled 20% past the section
    fadeEnd = 0.8,    // Complete fade when scrolled 80% past the section
    threshold = 100   // Additional threshold for fine-tuning
  } = options;

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how much the element has been scrolled past
      const scrolledPast = -rect.top;
      
      // Calculate fade range based on element height
      const fadeStartPoint = elementHeight * fadeStart;
      const fadeEndPoint = elementHeight * fadeEnd;
      
      if (scrolledPast <= fadeStartPoint) {
        setOpacity(1);
      } else if (scrolledPast >= fadeEndPoint) {
        setOpacity(0);
      } else {
        // Calculate opacity between fadeStart and fadeEnd
        const fadeProgress = (scrolledPast - fadeStartPoint) / (fadeEndPoint - fadeStartPoint);
        setOpacity(Math.max(0, Math.min(1, 1 - fadeProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [fadeStart, fadeEnd, threshold]);

  return { opacity, elementRef };
};

// Special hook for hero section with different fade behavior
export const useHeroScrollFade = () => {
  const [opacity, setOpacity] = useState(1);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Start fading when user scrolls 20% of viewport height
      // Complete fade by 80% of viewport height
      const fadeStart = windowHeight * 0.2;
      const fadeEnd = windowHeight * 0.8;
      
      if (scrollY <= fadeStart) {
        setOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setOpacity(0);
      } else {
        // Calculate opacity between fadeStart and fadeEnd
        const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        setOpacity(Math.max(0, Math.min(1, 1 - fadeProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { opacity, elementRef };
};