import { useEffect, useState, useRef } from 'react';

interface UseUniversalScrollRevealOptions {
  threshold?: number; // Distance from viewport for fade in/out
  fadeDuration?: string; // CSS transition duration
}

export const useUniversalScrollReveal = (options: UseUniversalScrollRevealOptions = {}) => {
  const [opacity, setOpacity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  const {
    threshold = 100, // Distance from viewport edges
    fadeDuration = '0.8s'
  } = options;

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Use hero-like fade logic: smooth fade based on scroll distance
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementHeight = rect.height;
      
      // Calculate fade based on element position relative to viewport
      let newOpacity = 0;
      
      // Element entering from bottom (fade in)
      if (elementTop <= windowHeight && elementTop > windowHeight - threshold) {
        const fadeProgress = (windowHeight - elementTop) / threshold;
        newOpacity = Math.max(0, Math.min(1, fadeProgress));
      }
      // Element in full view
      else if (elementTop <= windowHeight - threshold && elementBottom >= threshold) {
        newOpacity = 1;
      }
      // Element exiting from top (fade out)
      else if (elementBottom < threshold && elementBottom > 0) {
        const fadeProgress = elementBottom / threshold;
        newOpacity = Math.max(0, Math.min(1, fadeProgress));
      }
      // Element completely out of view
      else {
        newOpacity = 0;
      }
      
      setOpacity(newOpacity);
      setIsVisible(newOpacity > 0.1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { 
    opacity, 
    isVisible, 
    elementRef,
    style: {
      opacity,
      transition: `opacity ${fadeDuration} ease-out`,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
    }
  };
};