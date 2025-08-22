
import { useEffect, useState } from "react";

export const useScrollEffects = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Enhanced intersection observer with fade-in and fade-out
  useEffect(() => {
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const animationType = element.dataset.animation || 'fade-in';
          const delay = element.dataset.delay || '0';
          
          if (entry.isIntersecting) {
            // Dramatic fade-in animation with optional delay
            setTimeout(() => {
              element.classList.remove("animate-fade-out", "opacity-0", "animate-fade-out-dramatic", "opacity-10");
              element.classList.add(`animate-${animationType}`, "animate-fade-in-dramatic");
            }, parseInt(delay));
            
            // Don't unobserve so we can animate out when leaving
          } else {
            // Dramatic fade-out when leaving viewport
            element.classList.remove(`animate-${animationType}`, "animate-fade-in-dramatic");
            element.classList.add("animate-fade-out-dramatic", "opacity-10");
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '400px 0px -50px 0px' // Start animation much earlier, exit later
      }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el, index) => {
      // Add staggered delay for grouped elements
      if (!el.getAttribute('data-delay')) {
        el.setAttribute('data-delay', `${index * 100}`);
      }
      // Set initial state
      el.classList.add("opacity-0");
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [prefersReducedMotion]);

  // Video-specific scroll effects
  useEffect(() => {
    if (prefersReducedMotion) return;

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.classList.add("animate-fade-in");
            // Auto-play video when in view (if muted)
            if (video.muted) {
              video.play().catch(() => {});
            }
          } else {
            video.classList.add("animate-fade-out");
            // Pause video when out of view for performance
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    const videos = document.querySelectorAll("video[data-scroll-video]");
    videos.forEach((video) => {
      video.classList.add("opacity-0");
      videoObserver.observe(video);
    });

    return () => {
      videos.forEach((video) => videoObserver.unobserve(video));
    };
  }, [prefersReducedMotion]);

  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);
};

// New hook for text color transitions on scroll
export const useTextScrollEffect = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate text opacity based on scroll (grey to black transition)
  const getTextOpacity = (elementOffset: number, threshold: number = 200) => {
    const distance = Math.abs(scrollY - elementOffset);
    return Math.max(0.4, Math.min(1, 1 - distance / threshold));
  };

  return { scrollY, getTextOpacity };
};
