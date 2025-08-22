import React, { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText = ({ text, className = "", style = {} }: AnimatedTextProps) => {
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  // Split text into words and then into letters while preserving spaces
  const renderAnimatedText = () => {
    const words = text.split(' ');
    let letterIndex = 0;

    return words.map((word, wordIndex) => (
      <span key={wordIndex}>
        {word.split('').map((letter, charIndex) => (
          <span
            key={`${wordIndex}-${charIndex}`}
            className="inline-block transition-opacity duration-75 ease-out"
            style={{
              opacity: isInView ? 1 : 0.3,
              transitionDelay: isInView ? `${letterIndex++ * 15}ms` : '0ms',
            }}
          >
            {letter}
          </span>
        ))}
        {wordIndex < words.length - 1 && (
          <span
            className="inline-block transition-opacity duration-75 ease-out"
            style={{
              opacity: isInView ? 1 : 0.3,
              transitionDelay: isInView ? `${letterIndex++ * 15}ms` : '0ms',
            }}
          >
            {' '}
          </span>
        )}
      </span>
    ));
  };

  return (
    <p
      ref={textRef}
      className={className}
      style={style}
    >
      {renderAnimatedText()}
    </p>
  );
};

export default AnimatedText;