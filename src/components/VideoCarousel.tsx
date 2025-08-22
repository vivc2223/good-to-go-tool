import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useVideoManager } from "../hooks/useVideoManager";
import { useCarouselNavigation } from "../hooks/useCarouselNavigation";
import { getCardStyle } from "../utils/carouselStyles";
import VideoCarouselCard from "./VideoCarouselCard";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
  thumbnailSrc?: string;
}

interface VideoCarouselProps {
  items: CarouselItem[];
  onVideoClick?: (item: CarouselItem) => void;
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  enableManualNavigation?: boolean;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  items,
  onVideoClick,
  currentIndex: externalCurrentIndex,
  onIndexChange,
  enableManualNavigation = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Only use internal state when external state is not provided
  const isExternallyControlled =
    externalCurrentIndex !== undefined && onIndexChange !== undefined;

  const {
    currentIndex: internalCurrentIndex,
    hoveredVideo,
    nextSlide: internalNextSlide,
    prevSlide: internalPrevSlide,
    goToSlide: internalGoToSlide,
  } = useCarouselNavigation(items.length, isExternallyControlled);

  // Use external currentIndex if provided, otherwise use internal
  const currentIndex = isExternallyControlled
    ? externalCurrentIndex
    : internalCurrentIndex;

  const { videoRefs, isMobile } = useVideoManager(items, currentIndex);

  const handleVideoClick = (item: CarouselItem, index: number) => {
    if (index !== currentIndex) {
      if (onIndexChange) {
        onIndexChange(index);
      } else {
        internalGoToSlide(index);
      }
    }

    if (onVideoClick) {
      onVideoClick(item);
    }
  };

  const handleNextSlide = () => {
    if (onIndexChange) {
      const nextIndex = (currentIndex + 1) % items.length;
      onIndexChange(nextIndex);
    } else {
      internalNextSlide();
    }
  };

  const handlePrevSlide = () => {
    if (onIndexChange) {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      onIndexChange(prevIndex);
    } else {
      internalPrevSlide();
    }
  };

  const handleDotClick = (index: number) => {
    if (onIndexChange) {
      onIndexChange(index);
    } else {
      internalGoToSlide(index);
    }
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const threshold = 50; // minimum drag distance

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        handlePrevSlide();
      } else {
        handleNextSlide();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - startX;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        handlePrevSlide();
      } else {
        handleNextSlide();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Carousel Container with proper responsive height */}
      <div className="relative h-[400px] lg:h-[490px] 2xl:h-[550px] [@media(min-height:900px)]:h-[650px] [@media(min-height:1024px)]:h-[1000px] [@media(min-height:1024px)]:mt-14 2xl:mt-8 max-h-full flex items-center justify-center">
        {/* Navigation Arrows - positioned within viewport bounds */}
        {enableManualNavigation && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePrevSlide();
              }}
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center"
              aria-label="Previous video"
            >
              <ChevronLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleNextSlide();
              }}
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center"
              aria-label="Next video"
            >
              <ChevronRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* Video Cards Container */}
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing mx-auto px-12 sm:px-16 md:px-20"
          style={{
            perspective: window.innerWidth < 768 ? "1200px" : "2000px",
            transformStyle: "preserve-3d",
            maxWidth: "100%",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {items.map((item, index) => {
            const style = getCardStyle(index, currentIndex, items.length);
            const isActive = index === currentIndex;

            return (
              <VideoCarouselCard
                key={item.id}
                item={item}
                index={index}
                isActive={isActive}
                style={style}
                videoRef={(el) => {
                  if (el) {
                    videoRefs.current[item.id] = el;
                  }
                }}
                onClick={handleVideoClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
