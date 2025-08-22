import React, { useState, useEffect, useRef } from "react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const ScrollRevealText = ({ text, className = "", style = {} }: ScrollRevealTextProps) => {
  const [revealProgress, setRevealProgress] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when element enters viewport
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Start revealing when element is 80% in viewport, complete when it's 20% from top
      const startReveal = windowHeight * 0.8;
      const endReveal = windowHeight * 0.2;
      
      if (elementTop <= startReveal && elementTop >= endReveal - elementHeight) {
        // Calculate progress (0 to 1)
        const progress = Math.max(0, Math.min(1, (startReveal - elementTop) / (startReveal - endReveal)));
        setRevealProgress(progress);
      } else if (elementTop < endReveal - elementHeight) {
        setRevealProgress(1);
      } else {
        setRevealProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split text into words for more granular control
  const words = text.split(' ');
  const totalWords = words.length;

  return (
    <div ref={textRef} className={className} style={style}>
      {words.map((word, index) => {
        // Calculate if this word should be revealed
        const wordProgress = (index + 1) / totalWords;
        const isRevealed = revealProgress >= wordProgress;
        
        return (
          <span
            key={index}
            style={{
              color: isRevealed ? "#000000" : "#CCCCCC",
              transition: "color 0.3s ease-out",
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </div>
  );
};

export default ScrollRevealText;