
import React, { useState, useEffect, useRef } from "react";
import VideoCarousel from "./VideoCarousel";
import { useScrollFade } from '@/hooks/useScrollFade';

const carouselItems = [
  {
    id: 1,
    title: "Factory",
    description: "Precision manufacturing and assembly tasks",
    videoSrc: "/videos/dyna-factory.mp4",
    thumbnailSrc: "/lovable-uploads/cd31b9c6-ceb0-40d9-baff-99c7b429e6c6.png"
  },
  {
    id: 2,
    title: "Laundry", 
    description: "Automated folding and garment handling",
    videoSrc: "/videos/dyna-folding-laundry.mp4",
    thumbnailSrc: "/lovable-uploads/cd31b9c6-ceb0-40d9-baff-99c7b429e6c6.png"
  },
  {
    id: 3,
    title: "Restaurant",
    description: "Food service and hospitality automation",
    videoSrc: "/videos/dyna-restaurant.mp4",
    thumbnailSrc: "/lovable-uploads/cd31b9c6-ceb0-40d9-baff-99c7b429e6c6.png"
  }
];

const RealWorldAutonomySection = () => {
  const { opacity, elementRef } = useScrollFade({ fadeStart: 0.1, fadeEnd: 0.9 });
  
  return (
    <>
      <section ref={elementRef} className="w-screen bg-white" id="real-world-autonomy" style={{ opacity }}>
        {/* Header section with standard site alignment */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-12 pb-8 sm:pb-12">
          {/* Section title */}
          <div className="text-left">
            <h2 
              className="leading-tight"
              style={{
                fontFamily: 'UntitledSans, system-ui, -apple-system, sans-serif',
                fontSize: '49.5px',
                fontWeight: 'normal',
                lineHeight: '1.1'
              }}
            >
              <span 
                style={{
                  background: "linear-gradient(135deg, #1F2937 0%, #F97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Industries
              </span>
            </h2>
          </div>
        </div>

        {/* Video Carousel */}
        <div className="pb-16 sm:pb-20">
          <VideoCarousel items={carouselItems} />
        </div>
      </section>
    </>
  );
};

export default RealWorldAutonomySection;
