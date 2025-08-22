import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ProductCarouselRef {
  goToNext: () => void;
  goToPrevious: () => void;
  goToSlide: (index: number) => void;
}

interface ProductItem {
  id: number;
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
}

const productItems: ProductItem[] = [
  {
    id: 1,
    title: "Optimized to Perform",
    description:
      "Robustness to run multiple work shifts, 24/7. Deploy once — scale output, not headcount.",
    videoSrc: "/videos/clothesstacking.mp4",
  },
  {
    id: 2,
    title: "Consistent, Quality Output",
    description:
      "99%+ quality. 150% throughput. Powered by DYNA-1 — our real-world-trained foundation model with 99.4% task completion rate.",
    videoSrc: "/videos/carousellnapkinfolding2.mp4",
  },
  {
    id: 3,
    title: "Precision You Can Trust",
    description:
      "Deploy instantly. Pay only when DYNA delivers value. Priced to yield value from day 1.",
    videoSrc: "/videos/boxfolding.mp4",
  },
];

const ProductCarousel = forwardRef<ProductCarouselRef>((_, ref) => {
  // Set initial index to 0 for all devices
  const getInitialIndex = () => 0;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [videoLoadingStates, setVideoLoadingStates] = useState<{
    [key: number]: boolean;
  }>({});
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const slideWidth = 100; // Each slide takes full container width

  // Calculate transform for proper 90/10 layout
  const getTransform = (index: number) => {
    return -(index * slideWidth);
  };

  // Video management functions
  const handleVideoLoad = useCallback((videoId: number) => {
    setVideoLoadingStates((prev) => ({ ...prev, [videoId]: false }));
  }, []);

  const handleVideoLoadStart = useCallback((videoId: number) => {
    setVideoLoadingStates((prev) => ({ ...prev, [videoId]: true }));
  }, []);

  const playActiveVideo = useCallback(() => {
    const activeItem = productItems[activeIndex];
    if (activeItem.videoSrc && videoRefs.current[activeItem.id]) {
      const video = videoRefs.current[activeItem.id];
      if (video) {
        // Don't reset currentTime to avoid seeking delay
        video.play().catch(console.error);
      }
    }
  }, [activeIndex]);

  const pauseAllVideos = useCallback(() => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.pause();
      }
    });
  }, []);

  // Handle dot navigation
  const goToSlide = (index: number) => {
    pauseAllVideos();
    setActiveIndex(index);
    const newTranslate = getTransform(index);
    setCurrentTranslate(newTranslate);
    setPrevTranslate(newTranslate);

    // Play video after slide change
    setTimeout(() => {
      const targetItem = productItems[index];
      if (targetItem.videoSrc && videoRefs.current[targetItem.id]) {
        const video = videoRefs.current[targetItem.id];
        if (video) {
          // Don't reset currentTime to avoid seeking delay
          video.play().catch(console.error);
        }
      }
    }, 500);
  };

  // Handle left/right navigation
  const goToPrevious = () => {
    if (activeIndex > 0) {
      goToSlide(activeIndex - 1);
    }
  };

  const goToNext = () => {
    if (activeIndex < productItems.length - 1) {
      goToSlide(activeIndex + 1);
    }
  };

  // Expose methods via ref
  useImperativeHandle(
    ref,
    () => ({
      goToNext,
      goToPrevious,
      goToSlide,
    }),
    []
  );

  // Simplified video initialization
  useEffect(() => {
    productItems.forEach((item, index) => {
      if (item.videoSrc && videoRefs.current[item.id]) {
        const video = videoRefs.current[item.id];
        if (video) {
          video.muted = true;
          video.playsInline = true;
          video.preload = "metadata";

          // Only play the active video
          if (index === activeIndex) {
            setTimeout(() => {
              video.play().catch(console.error);
            }, 200);
          }
        }
      }
    });
  }, [activeIndex]);

  // Initialize on mount with proper starting position
  useEffect(() => {
    const initialIndex = 0;
    setActiveIndex(initialIndex);
    const initialTranslate = getTransform(initialIndex);
    setCurrentTranslate(initialTranslate);
    setPrevTranslate(initialTranslate);
  }, []);

  // Handle active video playback
  useEffect(() => {
    playActiveVideo();
  }, [activeIndex, playActiveVideo]);

  // Touch/Mouse handlers
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setPrevTranslate(currentTranslate);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;

    const currentPosition = clientX;
    const diff = currentPosition - startX;
    const newTranslate = prevTranslate + (diff / window.innerWidth) * 100;
    setCurrentTranslate(newTranslate);
  };

  const handleEnd = () => {
    setIsDragging(false);

    // Calculate which slide we should snap to
    const moved = currentTranslate - prevTranslate;
    const threshold = 20; // 20% threshold for slide change

    let newIndex = activeIndex;

    if (moved < -threshold && activeIndex < productItems.length - 1) {
      newIndex = activeIndex + 1;
    } else if (moved > threshold && activeIndex > 0) {
      newIndex = activeIndex - 1;
    }

    goToSlide(newIndex);
  };

  // Preview drag handlers - more sensitive for forward navigation
  const handlePreviewStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setPrevTranslate(currentTranslate);
  };

  const handlePreviewMove = (clientX: number) => {
    if (!isDragging) return;

    const currentPosition = clientX;
    const diff = currentPosition - startX;
    const newTranslate = prevTranslate + (diff / window.innerWidth) * 100;
    setCurrentTranslate(newTranslate);
  };

  const handlePreviewEnd = () => {
    setIsDragging(false);

    // For preview, prioritize forward movement with lower threshold
    const moved = currentTranslate - prevTranslate;
    const threshold = 10; // Lower threshold for preview

    let newIndex = activeIndex;

    // Prioritize forward movement from preview
    if (moved < -threshold) {
      // Move to next video or loop to first
      newIndex = activeIndex < productItems.length - 1 ? activeIndex + 1 : 0;
    } else if (moved > threshold && activeIndex > 0) {
      newIndex = activeIndex - 1;
    }

    goToSlide(newIndex);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Preview mouse events
  const handlePreviewMouseDown = (e: React.MouseEvent) => {
    handlePreviewStart(e.clientX);
  };

  const handlePreviewMouseMove = (e: React.MouseEvent) => {
    handlePreviewMove(e.clientX);
  };

  const handlePreviewMouseUp = () => {
    handlePreviewEnd();
  };

  const handlePreviewMouseLeave = () => {
    if (isDragging) {
      handlePreviewEnd();
    }
  };

  // Preview touch events
  const handlePreviewTouchStart = (e: React.TouchEvent) => {
    handlePreviewStart(e.touches[0].clientX);
  };

  const handlePreviewTouchMove = (e: React.TouchEvent) => {
    handlePreviewMove(e.touches[0].clientX);
  };

  const handlePreviewTouchEnd = () => {
    handlePreviewEnd();
  };

  return (
    <div className="w-full overflow-hidden touch-pan-y select-none px-2 sm:px-4 md:px-6 lg:px-8">
      {/* Main layout with responsive split and padding */}
      <div className="relative w-full flex gap-2 sm:gap-4 md:gap-6 h-[40vh] sm:h-[50vh] md:h-[60vh]">
        {/* Navigation Arrows - Responsive positioning */}
        <button
          onClick={goToPrevious}
          disabled={activeIndex === 0}
          className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous video"
        >
          <ChevronLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        <button
          onClick={goToNext}
          disabled={activeIndex === productItems.length - 1}
          className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next video"
        >
          <ChevronRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        {/* Main video area - responsive width */}
        <div
          className="w-[85%] sm:w-[88%] md:w-[90%] overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out h-full"
            style={{
              transform: `translateX(${currentTranslate}%)`,
            }}
          >
            {productItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  className="flex-none cursor-pointer w-full h-full"
                  onClick={() => !isDragging && goToSlide(index)}
                >
                  {/* Video Container */}
                  <div className="relative w-full h-full">
                    <div className="relative w-full h-full overflow-hidden">
                      {/* Media content */}
                      {item.videoSrc ? (
                        item.videoSrc.includes("youtube.com/embed") ? (
                          <iframe
                            className="w-full h-full brightness-110 contrast-105"
                            src={item.videoSrc}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <div className="relative w-full h-full">
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
                              onLoadStart={() => handleVideoLoadStart(item.id)}
                              onCanPlay={() => {
                                handleVideoLoad(item.id);
                              }}
                              onError={(e) => {
                                console.error(
                                  "Video loading error for:",
                                  item.videoSrc,
                                  e
                                );
                                handleVideoLoad(item.id);
                              }}
                            >
                              <source src={item.videoSrc} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>

                            {/* Loading indicator */}
                            {videoLoadingStates[item.id] && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              </div>
                            )}
                          </div>
                        )
                      ) : (
                        <img
                          src={item.imageSrc}
                          alt={item.title}
                          className="w-full h-full object-cover brightness-110 contrast-105"
                        />
                      )}

                      {/* Text overlay - responsive positioning */}
                      <div className="absolute top-0 left-0 p-2 sm:p-3 md:p-4 lg:p-5 z-10 text-left">
                        <h3
                          className="text-white mb-1 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
                          style={{
                            lineHeight: "1.3",
                            fontWeight: "700",
                            textShadow: "0 4px 12px rgba(0,0,0,0.9)",
                            filter: "contrast(1.2)",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-white font-diatype font-normal max-w-xs sm:max-w-sm text-xs sm:text-sm md:text-base"
                          style={{
                            lineHeight: "1.4",
                            fontWeight: "500",
                            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                            filter: "contrast(1.1)",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next video preview - responsive width */}
        <div className="w-[15%] sm:w-[12%] md:w-[10%] relative">
          <div className="relative w-full h-full overflow-hidden">
            {/* Next video content */}
            {(() => {
              const nextIndex =
                activeIndex < productItems.length - 1 ? activeIndex + 1 : 0;
              const nextItem = productItems[nextIndex];

              return (
                <>
                  {nextItem.videoSrc ? (
                    <video
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={nextItem.videoSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={nextItem.imageSrc}
                      alt={nextItem.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Drag and click handler for preview */}
                  <div
                    className="absolute inset-0 cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => goToSlide(nextIndex)}
                    onMouseDown={handlePreviewMouseDown}
                    onMouseMove={handlePreviewMouseMove}
                    onMouseUp={handlePreviewMouseUp}
                    onMouseLeave={handlePreviewMouseLeave}
                    onTouchStart={handlePreviewTouchStart}
                    onTouchMove={handlePreviewTouchMove}
                    onTouchEnd={handlePreviewTouchEnd}
                  />
                </>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Three Dot Navigation - responsive spacing */}
      <div className="flex justify-center items-center space-x-2 sm:space-x-3 mt-4 sm:mt-6 relative z-10">
        {productItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white"
                : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white bg-opacity-60 hover:bg-opacity-80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

ProductCarousel.displayName = "ProductCarousel";

export default ProductCarousel;
