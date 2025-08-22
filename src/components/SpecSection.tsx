import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const SpecSection = () => {
  return (
    <section className="w-screen bg-white overflow-x-hidden">
      {/* Header section with standard site alignment */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-12 pb-4 sm:pb-6">
        {/* Section title */}
        <div className="text-left mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl robotics-heading leading-tight">
            <span 
              style={{
                color: "#9B9490",
              }}
            >
              Introducing{" "}
            </span>
            <span 
              style={{
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              DYNA 01
            </span>
          </h2>
        </div>
      </div>
      
      {/* Mobile content area with standard padding */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 lg:hidden">
        {/* Mobile Layout - Image + 2x3 Grid */}
        <div className="space-y-6 overflow-x-hidden">
          {/* Robot Image - Mobile - Perfectly Centered */}
          <div className="w-full flex justify-center items-center mb-6">
            <div className="w-full max-w-sm mx-auto flex justify-center">
              <img 
                src="/lovable-uploads/f7c70d75-e2ff-4086-8ecc-e3d20d751438.png" 
                alt="DYNA 01 Robot"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          {/* All Specifications - Mobile 2x3 Grid */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-5">
            {/* PAYLOAD */}
            <div className="text-left">
              <div className="text-sm font-medium mb-1 uppercase tracking-wider robotics-body" style={{ 
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>PAYLOAD</div>
              <AnimatedCounter value="2.5 kg" className="text-lg mb-4" style={{ color: "#4F4749" }} />
            </div>
            
            {/* RUNTIME */}
            <div className="text-left">
              <div className="text-sm font-medium mb-1 uppercase tracking-wider robotics-body" style={{ 
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>RUNTIME</div>
              <AnimatedCounter value="24 hrs" className="text-lg mb-4" style={{ color: "#4F4749" }} />
            </div>
            
            {/* THROUGHPUT */}
            <div className="text-left">
              <div className="text-sm font-medium mb-1 uppercase tracking-wider robotics-body" style={{ 
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>THROUGHPUT</div>
              <AnimatedCounter value="850+ tasks/day" className="text-lg mb-4" style={{ color: "#4F4749" }} />
              <div className="text-xs mt-1 robotics-body" style={{ color: "#4F4749" }}>e.g. folding, placing, napkin manipulation</div>
            </div>
            
            {/* DIMENSIONS */}
            <div className="text-left">
              <div className="text-sm font-medium mb-1 uppercase tracking-wider robotics-body" style={{ 
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>DIMENSIONS</div>
              <div className="text-lg mb-4 robotics-body" style={{ color: "#4F4749" }}>Compact, dual-arm desktop form</div>
            </div>
            
            {/* SUCCESS RATE */}
            <div className="text-left">
              <div className="text-sm font-medium mb-1 uppercase tracking-wider robotics-body" style={{ 
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>SUCCESS RATE</div>
              <AnimatedCounter value="99.4% task success" className="text-lg mb-4" style={{ color: "#4F4749" }} />
            </div>
            
            {/* SPEED */}
            <div className="text-left">
              <div className="text-sm font-medium mb-1 uppercase tracking-wider robotics-body" style={{ 
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>SPEED</div>
              <div className="flex items-baseline">
                <AnimatedCounter value="60%" className="text-lg" style={{ color: "#4F4749" }} />
                <span className="text-lg robotics-body ml-0.5" style={{ color: "#4F4749" }}>of human speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Full Width 3 Column Grid */}
      <div className="hidden lg:block w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pb-8">
        <div className="grid grid-cols-3 w-full min-h-[70vh]">
          {/* Left Column */}
          <div className="flex flex-col justify-between h-full py-16 px-12 xl:px-16">
            {/* PAYLOAD */}
            <div className="text-left">
              <div className="text-[18px] font-medium mb-4 uppercase tracking-wider robotics-body" style={{ 
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>PAYLOAD</div>
              <AnimatedCounter value="2.5 kg" className="text-[36px]" style={{ color: "#4F4749" }} />
            </div>
            
            {/* RUNTIME */}
            <div className="text-left">
              <div className="text-[18px] font-medium mb-4 uppercase tracking-wider robotics-body" style={{ 
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>RUNTIME</div>
              <AnimatedCounter value="24 hrs" className="text-[36px]" style={{ color: "#4F4749" }} />
            </div>
            
            {/* THROUGHPUT */}
            <div className="text-left">
              <div className="text-[18px] font-medium mb-4 uppercase tracking-wider robotics-body" style={{ 
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>THROUGHPUT</div>
              <AnimatedCounter value="850+ tasks/day" className="text-[36px]" style={{ color: "#4F4749" }} />
              <div className="text-[18px] mt-4 robotics-body" style={{ color: "#4F4749" }}>e.g. folding, placing, napkin manipulation</div>
            </div>
          </div>
          
          {/* Center Column - Robot Image */}
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-full max-w-2xl aspect-square flex items-center justify-center">
              <img 
                src="/lovable-uploads/f7c70d75-e2ff-4086-8ecc-e3d20d751438.png" 
                alt="DYNA 01 Robot"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col justify-between h-full py-16 px-12 xl:px-16">
            {/* DIMENSIONS */}
            <div className="text-right">
              <div className="text-[18px] font-medium mb-4 uppercase tracking-wider robotics-body" style={{ 
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>DIMENSIONS</div>
              <div className="text-[36px] robotics-body" style={{ color: "#4F4749" }}>Compact, dual-arm desktop form</div>
            </div>
            
            {/* SUCCESS RATE */}
            <div className="text-right">
              <div className="text-[18px] font-medium mb-4 uppercase tracking-wider robotics-body" style={{ 
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>SUCCESS RATE</div>
              <AnimatedCounter value="99.4% task success" className="text-[36px]" style={{ color: "#4F4749" }} />
            </div>
            
            {/* SPEED */}
            <div className="text-right">
              <div className="text-[18px] font-medium mb-4 uppercase tracking-wider robotics-body" style={{ 
                background: "linear-gradient(135deg, #2C3E50 0%, #0ABAB5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>SPEED</div>
              <div className="flex items-baseline">
                <AnimatedCounter value="60%" className="text-[36px]" style={{ color: "#4F4749" }} />
                <span className="text-[36px] robotics-body ml-1" style={{ color: "#4F4749" }}>of human speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecSection;