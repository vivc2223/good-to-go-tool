
import React, { useEffect, useState } from "react";

const ResearchHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section 
      className="overflow-hidden relative bg-black" 
      id="research-hero" 
      style={{
        height: isMobile ? '70vh' : '100vh',
        minHeight: isMobile ? '500px' : '600px'
      }}
    >
      {/* HTML5 Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            width: '100vw',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none'
          }}
        >
          <source src="/videos/research-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Title positioned to overlay the video content */}
      <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-4 sm:left-6 lg:left-8 z-10 max-w-4xl">
        <h1 
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight text-white opacity-0 animate-fade-in" 
          style={{ animationDelay: "0.3s" }}
        >
          Dyna-1: Real-World Learning. Real-World Performance.
        </h1>
      </div>
    </section>
  );
};

export default ResearchHero;
