import React, { useRef, useEffect } from 'react';
import { useTextScrollEffect } from '../hooks/useScrollEffects';

interface ScrollTextProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

const ScrollText: React.FC<ScrollTextProps> = ({ 
  children, 
  className = '', 
  threshold = 200 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { scrollY, getTextOpacity } = useTextScrollEffect();
  const [elementOffset, setElementOffset] = React.useState(0);

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setElementOffset(rect.top + window.scrollY);
    }
  }, []);

  const opacity = getTextOpacity(elementOffset, threshold);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-300 ${className}`}
      style={{
        color: `rgba(0, 0, 0, ${opacity})`,
        filter: `contrast(${0.8 + opacity * 0.4})`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollText;