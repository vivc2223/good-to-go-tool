
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 pb-12 sm:pb-16 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
              <span>Specs</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with headline */}
        <div className="max-w-5xl pl-4 sm:pl-8 mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display leading-tight">
            DYNA isn't built to replace humans. It's built to recover, adapt, and execute — reliably, unsupervised, and at scale. From napkin folding to liquid filling, DYNA delivers precision where it matters.
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Video - Restaurant */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Video Header */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
              backgroundImage: "url('/background-section3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                The details
              </h2>
            </div>
            
            {/* Video Content */}
            <div className="bg-white relative" style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECECEC"
            }}>
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/YjSCZ7jw1h4?autoplay=1&mute=1&playsinline=1"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-white text-sm font-medium">
                  DYNA at the restaurant
                </div>
              </div>
            </div>
          </div>

          {/* Right Video - Factory */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Video Header */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
              backgroundImage: "url('/background-section1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                See it in action
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                See it for yourself
              </h2>
            </div>
            
            {/* Video Content */}
            <div className="bg-white relative" style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECECEC"
            }}>
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/3t5jWPLz_xQ?autoplay=1&mute=1&playsinline=1"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-white text-sm font-medium">
                  DYNA at the factory
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
