import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import VideoCarousel from "./VideoCarousel";
import { useUniversalScrollReveal } from "@/hooks/useUniversalScrollReveal";
import LineButton from "@/components/ui/line-button";

const carouselItems = [
  {
    id: 1,
    title: "Factory",
    description: "Precision manufacturing and assembly tasks",
    videoSrc: "/videos/Dyna-Factory-Compressed.mp4",
    thumbnailSrc: "/lovable-uploads/cd31b9c6-ceb0-40d9-baff-99c7b429e6c6.webp",
  },
  {
    id: 2,
    title: "Laundry",
    description: "Automated folding and garment handling",
    videoSrc: "/videos/Dyna-Folding-Laundry-Compressed.mp4",
    thumbnailSrc: "/lovable-uploads/cd31b9c6-ceb0-40d9-baff-99c7b429e6c6.webp",
  },
  {
    id: 3,
    title: "Restaurant",
    description: "Food service and hospitality automation",
    videoSrc: "/videos/Dyna-Restaurant-Compressed.mp4",
    thumbnailSrc: "/lovable-uploads/cd31b9c6-ceb0-40d9-baff-99c7b429e6c6.webp",
  },
];

export interface ScrollPinnedIndustriesRef {
  setCarouselIndex: (index: number) => void;
}

const ScrollPinnedIndustries = forwardRef<ScrollPinnedIndustriesRef>(
  (_, ref) => {
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
    const [isPinned, setIsPinned] = useState(false);
    const [isManualNavigation, setIsManualNavigation] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const lastScrollTopRef = useRef<number>(0);
    const { elementRef: headingRef, style: headingStyle } =
      useUniversalScrollReveal();

    // Handle manual navigation with scroll override prevention
    const handleManualNavigation = (index: number) => {
      // Set manual navigation flag to prevent scroll override
      setIsManualNavigation(true);
      setCurrentCarouselIndex(index);
      // Note: Manual navigation flag will be cleared when user actually scrolls
    };

    useImperativeHandle(ref, () => ({
      setCarouselIndex: handleManualNavigation,
    }));

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
    //       const itemProgress = clampedProgress * carouselItems.length;
    //       const newCarouselIndex = Math.min(
    //         Math.floor(itemProgress),
    //         carouselItems.length - 1
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
          className="relative overflow-hidden"
          style={{
            minHeight: "700px",
            height: "100vh", // Standard height since scroll-to-reveal is disabled
          }}
          id="real-world-autonomy"
        >
          {/* Fixed container when pinned */}
          <div className="relative w-full z-20">
            <div className="h-full flex flex-col pt-6 lg:pt-8 2xl:pt-10">
              {/* Header section with responsive spacing */}
              <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-6 lg:mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                  {/* Left column - Industries title */}
                  <div
                    className="text-left"
                    ref={headingRef}
                    style={headingStyle}
                  >
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
                      Industries
                    </h2>
                  </div>

                  {/* Right column - Description text and button */}
                  <div className="text-left lg:text-right">
                    <p
                      className="leading-relaxed mb-4"
                      style={{
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                        fontSize: "clamp(16px, 5vw, 20px)",
                        fontWeight: "normal",
                        lineHeight: "1.4",
                        color: "white",
                      }}
                    >
                      DYNA-1 is powering real output today — across factories,
                      restaurants, laundromats, and more.
                    </p>

                    {/* Button moved inline with description */}
                    <div className="flex justify-start lg:justify-end">
                      <button
                        onClick={() => {
                          window.location.href = '/contact';
                        }}
                        className="group inline-flex items-center gap-3 transition-all duration-300 hover:gap-4 text-white"
                      >
                        <span
                          className="font-medium text-white"
                          style={{
                            fontFamily:
                              "UntitledSans, system-ui, -apple-system, sans-serif",
                            fontSize: "clamp(16px, 2vw, 18px)",
                            textDecoration: "underline",
                            textUnderlineOffset: "4px",
                            textDecorationThickness: "1px",
                          }}
                        >
                          Need Help In Your Industry?
                        </span>
                        <div className="w-8 h-8 rounded-full border-white border flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 3L11 8L6 13"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Carousel with responsive container and proper overflow handling */}
              <div className="flex-1 flex items-center justify-center  overflow-hidden ">
                <div className="w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                  <div className=" w-full overflow-hidden">
                    <VideoCarousel
                      items={carouselItems}
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
            {carouselItems.map((_, index) => (
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
  }
);

ScrollPinnedIndustries.displayName = "ScrollPinnedIndustries";

export default ScrollPinnedIndustries;
