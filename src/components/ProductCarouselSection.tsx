import React, { useState, useEffect, useRef } from "react";
import VideoCarousel from "./VideoCarousel";
import { useUniversalScrollReveal } from "@/hooks/useUniversalScrollReveal";

interface ProductItem {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
  thumbnailSrc: string;
}

const productItems: ProductItem[] = [
  {
    id: 1,
    title: "General-purpose robots",
    description:
      "Powered by DYNA-1. Deploy instantly. Learn new skills in hours and self-improve over time.",
    videoSrc: "/videos/Carousellnapkinfolding2.mp4",
    thumbnailSrc: "/lovable-uploads/cd31b9c6-ceb0-40d9-baff-99c7b429e6c6.webp",
  },
  {
    id: 2,
    title: "Complex end-to-end task completion",
    description: "24/7, 100% autonomous. Human-level manipulation.",
    videoSrc: "/videos/Transistor-2X-Speed.mp4",
    thumbnailSrc: "/lovable-uploads/cd31b9c6-ceb0-40d9-baff-99c7b429e6c6.webp",
  },
  {
    id: 3,
    title: "Precision with speed",
    description:
      "Consistent output with self-correction. Language interaction.",
    videoSrc: "/videos/Kitting.mp4",
    thumbnailSrc: "/lovable-uploads/cd31b9c6-ceb0-40d9-baff-99c7b429e6c6.webp",
  },
];

const ProductCarouselSection = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [isPinned, setIsPinned] = useState(false);
  const [isManualNavigation, setIsManualNavigation] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const lastScrollTopRef = useRef<number>(0);
  const { elementRef: headingRef, style: headingStyle } =
    useUniversalScrollReveal();
  const { elementRef: descRef, style: descStyle } = useUniversalScrollReveal();

  // Handle manual navigation with scroll override prevention
  const handleManualNavigation = (index: number) => {
    // Set manual navigation flag to prevent scroll override
    setIsManualNavigation(true);
    setCurrentCarouselIndex(index);
    // Note: Manual navigation flag will be cleared when user actually scrolls
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!sectionRef.current) return;

  //     const currentScrollTop = window.scrollY;

  //     // Detect if user actually scrolled (not programmatic)
  //     if (
  //       isManualNavigation &&
  //       Math.abs(currentScrollTop - lastScrollTopRef.current) > 5
  //     ) {
  //       // User scrolled, clear manual navigation flag
  //       setIsManualNavigation(false);
  //     }

  //     lastScrollTopRef.current = currentScrollTop;

  //     const sectionRect = sectionRef.current.getBoundingClientRect();
  //     const sectionHeight = sectionRef.current.offsetHeight;
  //     const windowHeight = window.innerHeight;

  //     // Start pinning when section enters viewport
  //     const shouldPin =
  //       sectionRect.top <= 0 && sectionRect.bottom > windowHeight;
  //     setIsPinned(shouldPin);

  //     if (shouldPin && !isManualNavigation) {
  //       // Calculate scroll progress through the section
  //       const scrollProgress =
  //         Math.abs(sectionRect.top) / (sectionHeight - windowHeight);
  //       const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

  //       // Convert scroll progress to carousel index
  //       // Each carousel item gets an equal portion of the scroll distance
  //       const itemProgress = clampedProgress * productItems.length;
  //       const newCarouselIndex = Math.min(
  //         Math.floor(itemProgress),
  //         productItems.length - 1
  //       );

  //       if (newCarouselIndex !== currentCarouselIndex) {
  //         setCurrentCarouselIndex(newCarouselIndex);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Initial call

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [currentCarouselIndex, isManualNavigation]);

  return (
    <>
      {/* Main section with extended height for scroll-through behavior */}
      <section
        ref={sectionRef}
        id="features"
        className="relative overflow-hidden"
        style={{
          minHeight: "810px",
          height: "100vh", // Standard height since scroll-to-reveal is disabled
        }}
      >
        {/* Fixed container when pinned */}
        <div className="relative w-full z-10">
          <div className="h-full flex flex-col justify-between pt-6 lg:pt-8 2xl:pt-10">
            {/* Responsive header layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              {/* Left column - Header */}
              <div className="text-left" ref={headingRef} style={headingStyle}>
                <h2
                  className="leading-tight"
                  style={{
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                    fontSize: "clamp(28px, 5vw, 41px)",
                    fontWeight: "normal",
                    lineHeight: "1.1",
                    color: "white",
                  }}
                >
                  AI-Autonomy. Production-Grade Performance.
                </h2>
              </div>

              {/* Right column - DYNA-1 description with scroll reveal and left alignment */}
              <div
                className="text-left lg:text-right"
                ref={descRef}
                style={descStyle}
              >
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                    fontSize: "clamp(16px, 5vw, 20px)",
                    fontWeight: "normal",
                    lineHeight: "1.5",
                    color: "white",
                  }}
                >
                  DYNA-1 is our first commercial AI system engineered for task
                  mastery and rapid iteration. Every deployment feeds a
                  continuous training loop — improving performance, shortening
                  onboarding, and unlocking new applications. This is how we
                  scale across space, time, and use cases.
                </p>
              </div>
            </div>

            {/* Video Carousel with responsive container and proper overflow handling */}
            <div className="flex-1 flex items-center justify-center overflow-hidden mt-2">
              <div className="w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6">
                <div className=" w-full overflow-hidden">
                  <VideoCarousel
                    items={productItems}
                    currentIndex={currentCarouselIndex}
                    onIndexChange={handleManualNavigation}
                    enableManualNavigation={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Dots positioned at bottom of viewport when pinned */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-3 z-30">
          {productItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualNavigation(index)}
              className={`transition-all duration-300 rounded-full border-2 ${
                index === currentCarouselIndex
                  ? "w-3 h-3 sm:w-4 sm:h-4 bg-white border-white"
                  : "w-2 h-2 sm:w-3 sm:h-3 bg-transparent border-white border-opacity-60 hover:border-opacity-100"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductCarouselSection;
