import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  duration = 1500,
  className = "",
  style = {}
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setDisplayValue('0');
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Extract number from value string
    const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out cubic function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = numericValue * easeOut;
      
      // Format the number to match original format
      let formattedValue = currentValue.toFixed(1);
      
      // Handle different value formats
      if (value.includes('%')) {
        formattedValue = Math.round(currentValue * 10) / 10 + '%';
      } else if (value.includes('kg')) {
        formattedValue = Math.round(currentValue * 10) / 10 + ' kg';
      } else if (value.includes('hrs')) {
        formattedValue = Math.round(currentValue) + ' hrs';
      } else if (value.includes('tasks/day')) {
        formattedValue = Math.round(currentValue) + '+ tasks/day';
      } else if (value.includes('~')) {
        formattedValue = '~' + Math.round(currentValue) + '% of human speed';
      } else {
        formattedValue = Math.round(currentValue * 10) / 10 + value.replace(/[\d.]/g, '');
      }
      
      setDisplayValue(formattedValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [isVisible, value, duration]);

  return (
    <div 
      ref={elementRef}
      className={`metric-value count-up ${className}`}
      style={{ 
        animationDelay: '0.2s',
        animationFillMode: 'both',
        ...style
      }}
    >
      {displayValue}
    </div>
  );
};

export default AnimatedCounter;