import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ExpandableCardProps {
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const ExpandableCard = ({ children, isExpanded, onToggle, onClose, className = "", style = {} }: ExpandableCardProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        onClose();
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isExpanded, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (isExpanded) {
    return (
      // Portal-like full viewport takeover with consistent website padding
      <div 
        className="fixed top-0 left-0 w-screen h-screen bg-black z-[99999] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
        onClick={handleBackdropClick}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 99999
        }}
      >
        {/* Video container that fills the available space with padding */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-full max-w-none">
            {children}
          </div>
        </div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-black bg-opacity-60 rounded-full text-white hover:bg-opacity-80 transition-all duration-200 z-[100000]"
          aria-label="Close expanded view"
        >
          <X size={24} />
        </button>
      </div>
    );
  }

  return (
    <div 
      className={`cursor-pointer ${className}`}
      style={style}
      onClick={onToggle}
    >
      {children}
    </div>
  );
};

export default ExpandableCard;