
import React from "react";

const VideoShowcaseSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="videos">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Left Video - Restaurant */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            <div className="bg-white relative" style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECECEC"
            }}>
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/YjSCZ7jw1h4"
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
            <div className="bg-white relative" style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECECEC"
            }}>
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/3t5jWPLz_xQ"
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

export default VideoShowcaseSection;
