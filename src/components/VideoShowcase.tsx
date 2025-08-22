import React, { useRef, useState, useEffect } from "react";
import { Play, X } from "lucide-react";

interface VideoItem {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
}

const videoItems: VideoItem[] = [
  {
    id: 1,
    title: "OPTIMIZED TO PERFORM",
    description: "Robustness to run multiple work shifts, 24/7",
    videoSrc: "/videos/clothesstacking.mp4",
  },
  {
    id: 2,
    title: "CONSISTENT, QUALITY OUTPUT",
    description: "99%+ quality. 150% throughput. Powered by DYNA-1",
    videoSrc: "/videos/carousellnapkinfolding2.mp4",
  },
  {
    id: 3,
    title: "PRECISION YOU CAN TRUST",
    description: "Deploy instantly. Pay only when DYNA delivers value",
    videoSrc: "/videos/boxfolding.mp4",
  },
];

const VideoShowcase: React.FC = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [fullScreenVideo, setFullScreenVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleVideoHover = (videoId: number | null) => {
    setHoveredVideo(videoId);

    // Play video on hover, pause others
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (video) {
        const numId = parseInt(id);
        if (numId === videoId) {
          // Don't reset currentTime to avoid seeking delay
          video.play().catch(console.error);
        } else {
          video.pause();
        }
      }
    });
  };

  const handleVideoClick = (videoSrc: string) => {
    setFullScreenVideo(videoSrc);
  };

  const closeFullScreen = () => {
    setFullScreenVideo(null);
  };

  // Auto-play first video on mount
  useEffect(() => {
    const firstVideo = videoRefs.current[1];
    if (firstVideo) {
      setTimeout(() => {
        firstVideo.play().catch(console.error);
      }, 200);
    }
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {videoItems.map((item) => {
            const isHovered = hoveredVideo === item.id;

            return (
              <div
                key={item.id}
                className="group relative transition-all duration-300 ease-out cursor-pointer hover:scale-105"
                onMouseEnter={() => handleVideoHover(item.id)}
                onMouseLeave={() => handleVideoHover(null)}
                onClick={() => handleVideoClick(item.videoSrc)}
              >
                {/* Video Container - Much larger aspect ratio */}
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-lg bg-gray-900">
                  <video
                    ref={(el) => {
                      if (el) {
                        videoRefs.current[item.id] = el;
                      }
                    }}
                    className="w-full h-full object-cover brightness-110 contrast-105"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={item.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Watch Now button - top left */}
                  <div className="absolute top-6 left-6">
                    <span className="text-white text-sm font-medium bg-transparent">
                      Watch Now
                    </span>
                  </div>

                  {/* Text content - bottom left - matching Industries style exactly */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="robotics-heading text-2xl md:text-3xl lg:text-4xl mb-1">
                      {item.title}
                    </div>
                    <div className="text-sm md:text-base lg:text-lg font-light opacity-90">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full screen video modal */}
      {fullScreenVideo && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={closeFullScreen}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onClick={(e) => e.stopPropagation()}
          >
            <source src={fullScreenVideo} type="video/mp4" />
          </video>

          {/* Video overlay text in full screen */}
          <div className="absolute bottom-8 left-8 text-white z-10">
            {videoItems.find((item) => item.videoSrc === fullScreenVideo) && (
              <>
                <div className="robotics-heading text-2xl md:text-3xl lg:text-4xl mb-1">
                  {
                    videoItems.find((item) => item.videoSrc === fullScreenVideo)
                      ?.title
                  }
                </div>
                <div className="text-sm md:text-base lg:text-lg font-light opacity-90">
                  {
                    videoItems.find((item) => item.videoSrc === fullScreenVideo)
                      ?.description
                  }
                </div>
              </>
            )}
          </div>

          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors z-10"
            onClick={closeFullScreen}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default VideoShowcase;
