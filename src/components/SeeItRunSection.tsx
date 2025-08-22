import React, { useEffect, useRef, useState } from "react";

const SeeItRunSection = () => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);
  const [videosLoaded, setVideosLoaded] = useState({
    video1: false,
    video2: false,
    video3: false
  });

  useEffect(() => {
    const videos = [
      { ref: video1Ref, src: "/videos/dyna-folding-laundry.mp4", name: "Folding Laundry", key: "video1" as keyof typeof videosLoaded },
      { ref: video2Ref, src: "/videos/dyna-restaurant.mp4", name: "Restaurant", key: "video2" as keyof typeof videosLoaded },
      { ref: video3Ref, src: "/videos/dyna-factory.mp4", name: "Factory/Warehouse", key: "video3" as keyof typeof videosLoaded }
    ];

    console.log('🎬 Starting SeeItRun section video loading for', videos.length, 'videos');

    videos.forEach((videoData, index) => {
      const video = videoData.ref.current;
      if (!video) {
        console.error(`❌ ${videoData.name} video element not found`);
        return;
      }

      console.log(`🎥 Loading ${videoData.name} video (${index + 1}/${videos.length})...`);
      console.log(`📁 Video source: ${videoData.src}`);
      console.log(`🔧 Initial video state:`, {
        readyState: video.readyState,
        networkState: video.networkState,
        paused: video.paused,
        currentSrc: video.currentSrc
      });
      
      // Set video properties
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.controls = false;
      video.preload = "auto";
      
      console.log(`⚙️ ${videoData.name} video properties set:`, {
        muted: video.muted,
        autoplay: video.autoplay,
        loop: video.loop,
        playsInline: video.playsInline,
        preload: video.preload
      });
      
      // Handle video loading success
      const handleCanPlay = () => {
        console.log(`✅ ${videoData.name} video can play - ready state:`, video.readyState);
        setVideosLoaded(prev => ({ ...prev, [videoData.key]: true }));
        video.play().catch(e => console.error(`❌ ${videoData.name} play error:`, e));
      };

      const handleLoadedData = () => {
        console.log(`📊 ${videoData.name} video data loaded - duration:`, video.duration);
      };

      const handleLoadStart = () => {
        console.log(`🔄 ${videoData.name} video loading started`);
      };

      const handleProgress = () => {
        const buffered = video.buffered.length > 0 ? video.buffered.end(0) : 0;
        console.log(`📈 ${videoData.name} video loading progress:`, buffered);
      };

      // Handle video loading errors
      const handleError = (e: Event) => {
        console.error(`❌ ${videoData.name} video loading error:`, e);
        console.error(`Error details for ${videoData.name}:`, {
          error: video.error,
          networkState: video.networkState,
          readyState: video.readyState,
          src: video.src,
          currentSrc: video.currentSrc
        });
      };

      // Add event listeners
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('progress', handleProgress);
      video.addEventListener('error', handleError);
      
      // Load the video
      console.log(`🚀 Calling video.load() for ${videoData.name}`);
      video.load();
      
      // Attempt to play immediately
      const attemptPlay = async () => {
        try {
          console.log(`▶️ Attempting to play ${videoData.name} video...`);
          await video.play();
          console.log(`🎉 ${videoData.name} video playing successfully`);
        } catch (error) {
          console.log(`🚫 ${videoData.name} autoplay blocked:`, error);
        }
      };
      
      // Small delay to ensure load() has started
      setTimeout(attemptPlay, 100);
    });

    // Cleanup event listeners
    return () => {
      videos.forEach((videoData) => {
        const video = videoData.ref.current;
        if (video) {
          video.removeEventListener('canplay', () => {});
          video.removeEventListener('loadeddata', () => {});
          video.removeEventListener('loadstart', () => {});
          video.removeEventListener('progress', () => {});
          video.removeEventListener('error', () => {});
        }
      });
    };
  }, []);

  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="see-it-run">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-black border border-black">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black text-white mr-2">04</span>
              <span>In Action</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight">
            See DYNA In Action
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {/* First Video - Folding Laundry */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-sm lg:max-w-none">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant bg-white border border-gray-200">
              <div className="relative w-full aspect-video">
                <video
                  ref={video1Ref}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  preload="auto"
                  className="w-full h-full object-cover"
                  style={{ pointerEvents: 'none' }}
                >
                  <source src="/videos/dyna-folding-laundry.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-white text-sm font-medium">
                  DYNA folding laundry
                </div>
              </div>
            </div>
          </div>

          {/* Second Video - Restaurant */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-sm lg:max-w-none">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant bg-white border border-gray-200">
              <div className="relative w-full aspect-video">
                <video
                  ref={video2Ref}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  preload="auto"
                  className="w-full h-full object-cover"
                  style={{ pointerEvents: 'none' }}
                >
                  <source src="/videos/dyna-restaurant.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-white text-sm font-medium">
                  DYNA in a restaurant environment
                </div>
              </div>
            </div>
          </div>

          {/* Third Video - Factory/Warehouse */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-sm lg:max-w-none">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant bg-white border border-gray-200">
              <div className="relative w-full aspect-video">
                <video
                  ref={video3Ref}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  preload="auto"
                  className="w-full h-full object-cover"
                  style={{ pointerEvents: 'none' }}
                >
                  <source src="/videos/dyna-factory.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-white text-sm font-medium">
                  DYNA in a warehouse environment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeItRunSection;
