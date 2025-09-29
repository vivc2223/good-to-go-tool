import React, { useState, useEffect, useRef, useMemo } from "react";
import { useUniversalScrollReveal } from "@/hooks/useUniversalScrollReveal";
import { useNavigate } from "react-router-dom";

const TypewriterSection = () => {
  const navigate = useNavigate();
  const [showCursor, setShowCursor] = useState(true);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentTypewriterIndex, setCurrentTypewriterIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [missionText, setMissionText] = useState("");
  const [missionPhraseIndex, setMissionPhraseIndex] = useState(0);
  const [missionIsTyping, setMissionIsTyping] = useState(true);
  const [missionIsPaused, setMissionIsPaused] = useState(false);
  const [missionPreErasePause, setMissionPreErasePause] = useState(false);
  const [showMissionCaret, setShowMissionCaret] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const headlineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const { elementRef: leftRevealRef, style: leftRevealStyle } =
    useUniversalScrollReveal();
  const { elementRef: rightRevealRef, style: rightRevealStyle } =
    useUniversalScrollReveal();

  const typewriterPhrases = useMemo(
    () => [
      "dexterous autonomy",
      "high-throughput reliability",
      "continuous deployment",
    ],
    []
  );

  const missionPhrases = useMemo(
    () => [
      "embodied AI",
      "physical AGI",
      "real autonomy"
    ],
    []
  );

  const textBlocks = [
    "We develop a foundation model for robotics that adapts across environments and learns new skills within hours.",
    "Our robots come with out-of-the-box intelligence—easy to set up and scale.",
    "Dyna's world-class team delivers the best of research and product to push the frontier of AGI in the real world.",
  ];

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Viewport visibility detection for mission headline
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter effect - letter by letter
  useEffect(() => {
    const currentPhrase = typewriterPhrases[currentTypewriterIndex];

    const typewriterTimeout = setTimeout(
      () => {
        if (isPaused) {
          // Pause after completing a word before starting to delete
          setIsPaused(false);
          setIsDeleting(true);
        } else if (isDeleting) {
          // Deleting characters
          if (currentText.length > 0) {
            setCurrentText((prev) => prev.slice(0, -1));
          } else {
            // Finished deleting, move to next phrase
            setIsDeleting(false);
            setCurrentTypewriterIndex(
              (prev) => (prev + 1) % typewriterPhrases.length
            );
          }
        } else {
          // Typing characters
          if (currentText.length < currentPhrase.length) {
            setCurrentText((prev) => currentPhrase.slice(0, prev.length + 1));
          } else {
            // Finished typing, pause before deleting
            setIsPaused(true);
          }
        }
      },
      isDeleting ? 30 : isPaused ? 1500 : 60
    );

    return () => clearTimeout(typewriterTimeout);
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentTypewriterIndex,
    typewriterPhrases,
  ]);

  // Mission headline true typewriter effect
  useEffect(() => {
    // Only animate when visible
    if (!isVisible) return;

    const currentPhrase = missionPhrases[missionPhraseIndex];

    // If reduced motion, show full phrase instantly with longer pauses
    if (prefersReducedMotion) {
      if (missionText !== currentPhrase) {
        setMissionText(currentPhrase);
      }
      
      const pauseTimeout = setTimeout(() => {
        setMissionPhraseIndex((prev) => (prev + 1) % missionPhrases.length);
      }, 3000);
      
      return () => clearTimeout(pauseTimeout);
    }

    const typewriterTimeout = setTimeout(
      () => {
        if (missionIsPaused) {
          // Pause after completing typing
          if (missionIsTyping) {
            // Just finished typing, now enter pre-erase pause
            setMissionIsPaused(false);
            setMissionPreErasePause(true);
            setShowMissionCaret(false);
          } else {
            // Just finished erasing, now pause before next phrase
            setMissionIsPaused(false);
            setMissionIsTyping(true);
            setShowMissionCaret(true);
            setMissionPhraseIndex((prev) => (prev + 1) % missionPhrases.length);
          }
        } else if (missionPreErasePause) {
          // Pre-erase pause completed, start erasing
          setMissionPreErasePause(false);
          setMissionIsTyping(false);
          setShowMissionCaret(true);
        } else if (missionIsTyping) {
          // Typing characters one by one
          if (missionText.length < currentPhrase.length) {
            setMissionText((prev) => currentPhrase.slice(0, prev.length + 1));
            setShowMissionCaret(true);
          } else {
            // Finished typing, pause
            setMissionIsPaused(true);
            setShowMissionCaret(false);
          }
        } else {
          // Erasing characters one by one
          if (missionText.length > 0) {
            setMissionText((prev) => prev.slice(0, -1));
            setShowMissionCaret(true);
          } else {
            // Finished erasing, brief pause
            setMissionIsPaused(true);
            setShowMissionCaret(false);
          }
        }
      },
      missionIsPaused
        ? missionIsTyping
          ? 700 // Pause after typing
          : 100 // Brief pause after erasing
        : missionPreErasePause
        ? 200 // Pre-erase pause
        : missionIsTyping
        ? 60 // Typing speed (55-65ms range)
        : 42 // Erasing speed (40-45ms range)
    );

    return () => clearTimeout(typewriterTimeout);
  }, [
    missionText,
    missionIsTyping,
    missionIsPaused,
    missionPreErasePause,
    missionPhraseIndex,
    missionPhrases,
    prefersReducedMotion,
    isVisible,
  ]);

  // Smart pinning: Pin during scroll-to-reveal, unpin after all blocks shown
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!sectionRef.current) return;

  //     const sectionRect = sectionRef.current.getBoundingClientRect();
  //     const sectionHeight = sectionRef.current.offsetHeight;
  //     const windowHeight = window.innerHeight;

  //     // Pin when section reaches top and we haven't finished all text blocks
  //     const shouldStartPinning = sectionRect.top <= 0;

  //     if (shouldStartPinning && sectionRect.bottom > windowHeight) {
  //       // We're in the scroll-to-reveal zone
  //       const scrolledAmount = Math.abs(sectionRect.top);
  //       const totalScrollableHeight = sectionHeight - windowHeight;
  //       const progress = Math.min(scrolledAmount / totalScrollableHeight, 1);

  //       // Map progress to text blocks
  //       const blockIndex = Math.min(
  //         Math.floor(progress * textBlocks.length),
  //         textBlocks.length - 1
  //       );
  //       setCurrentBlockIndex(Math.max(0, blockIndex));

  //       // Unpin only after we've shown the last text block AND scrolled a bit more
  //       const extraScrollNeeded = windowHeight * 0.3; // 30% of viewport height
  //       const totalNeededScroll = totalScrollableHeight + extraScrollNeeded;
  //       const shouldUnpin = scrolledAmount > totalNeededScroll;

  //       setIsPinned(!shouldUnpin);
  //     } else if (sectionRect.top > 0) {
  //       // Before section
  //       setCurrentBlockIndex(0);
  //       setIsPinned(false);
  //     } else {
  //       // After section - completely unpinned
  //       setCurrentBlockIndex(textBlocks.length - 1);
  //       setIsPinned(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [textBlocks.length]);

  return (
    <>
      {/* Custom styles for mobile height optimization and mission headline */}
      <style>
        {`
          @media (max-height: 600px) {
            .typewriter-section {
              min-height: 100vh !important;
              height: auto !important;
            }
            .typewriter-sticky {
              min-height: 100vh !important;
              height: auto !important;
            }
          }
          @media (max-height: 568px) {
            .typewriter-section {
              min-height: 100vh !important;
            }
            .typewriter-sticky {
              min-height: 100vh !important;
            }
          }
          
          /* Mission headline responsive styling */
          @media (min-width: 1024px) {
            .mission-headline {
              font-size: clamp(40px, 5vw, 56px) !important;
            }
          }

          @media (max-width: 1023px) and (min-width: 768px) {
            .mission-headline {
              font-size: clamp(36px, 6vw, 44px) !important;
            }
          }

          @media (max-width: 767px) {
            .mission-headline {
              font-size: clamp(28px, 7vw, 32px) !important;
            }
            
            .mission-headline .second-line {
              white-space: normal !important;
            }
          }

          /* Caret blinking */
          @keyframes blink-caret {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          .caret-blink {
            animation: blink-caret 1s step-end infinite;
          }
          
          /* Respect reduced motion preference */
          @media (prefers-reduced-motion: reduce) {
            .mission-headline * {
              animation: none !important;
              transition: none !important;
            }
          }
        `}
      </style>
      {/* Main section with extra height for scrolling */}
      <section
        ref={sectionRef}
        className="relative typewriter-section"
        style={{
          height: "100vh", // Standard height since scroll-to-reveal is disabled
          minHeight: "600px", // Ensure minimum height for mobile
        }}
      >
        <div
          className=""
          style={{
            height: "100vh",
            backgroundImage:
              "url(/lovable-uploads/a2645913-8a5d-43ea-98c6-ef5fe8e568ba.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Light overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.1))",
              zIndex: 1,
            }}
          />
          <div className="h-full flex items-center justify-center w-full relative z-10">
            {/* Responsive padding container */}
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6">
              {/* Headline section with responsive centering */}
              {/* <div ref={leftRevealRef} style={leftRevealStyle}>
                    <div className="max-w-4xl text-left">
                      <div
                        style={{
                          minHeight: "clamp(60px, 12vw, 120px)", // Reduced min height for mobile
                          marginBottom: "clamp(1rem, 4vw, 2rem)", // Responsive margin
                        }}
                      >
                        <h2
                          className="leading-tight"
                          style={{
                            fontFamily:
                              "UntitledSans, system-ui, -apple-system, sans-serif",
                            fontSize: "clamp(28px, 4.5vw, 41px)",
                            fontWeight: "normal",
                            lineHeight: "1.1",
                            color: "white",
                          }}
                        >
                          Building robots for{" "}
                          <span
                            className="inline-block"
                            style={{
                              color: "white",
                            }}
                          >
                            {currentText}
                          </span>
                          <span
                            className={`inline-block ${
                              showCursor ? "opacity-100" : "opacity-0"
                            }`}
                            style={{ transition: "opacity 0.1s" }}
                          >
                            _
                          </span>
                        </h2>
                      </div>
                    </div>
                  </div> */}

                  {/* Mission section with responsive centering */}
                  <div
                    ref={rightRevealRef}
                    style={rightRevealStyle}
                    className="w-full flex justify-center lg:justify-start relative"
                  >
                    {/* Vertical scroll indicator dots - positioned relative to text */}
                    {/* <div className="absolute lg:left-0 left-6 md:left-8 top-1/2 transform -translate-y-1/2 -translate-x-8 block z-20">
                      <div className="flex flex-col gap-3">
                        {textBlocks.map((_, index) => (
                          <div
                            key={index}
                            className={`transition-all duration-300 rounded-full border-2 ${
                              index === currentBlockIndex
                                ? "w-3 h-3 sm:w-4 sm:h-4 bg-white border-white"
                                : "w-2 h-2 sm:w-3 sm:h-3 bg-transparent border-white border-opacity-60"
                            }`}
                            aria-label={`Text block ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div> */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                      {/* Left Column - Our Mission & Bold Headline */}
                      <div className="text-left">
                        {/* Our Mission header */}
                        <div className="mb-4 sm:mb-8">
                          <h3
                            style={{
                              fontFamily:
                                "UntitledSans, system-ui, -apple-system, sans-serif",
                              fontSize: "clamp(28px, 5vw, 41px)",
                              fontWeight: "normal",
                              color: "white",
                            }}
                          >
                            Our Mission
                          </h3>
                        </div>

                        {/* Bold headline */}
                        <div ref={headlineRef}>
                          <p
                            className="mission-headline leading-tight"
                            style={{
                              fontFamily:
                                "UntitledSans, system-ui, -apple-system, sans-serif",
                              fontSize: "clamp(40px, 5vw, 56px)",
                              fontWeight: "bold",
                              lineHeight: "1.2",
                              color: "white",
                            }}
                          >
                            {/* First line - always together */}
                            <span className="block whitespace-nowrap">
                              Bring{" "}
                              <span 
                                className="inline-block min-w-[1ch]"
                                aria-live="polite"
                                aria-atomic="true"
                              >
                                {prefersReducedMotion 
                                  ? "embodied AI"
                                  : missionText}
                                {!prefersReducedMotion && showMissionCaret && (
                                  <span className="inline-block ml-0.5 caret-blink">
                                    |
                                  </span>
                                )}
                              </span>
                            </span>
                            {/* Second line - force break */}
                            <span className="block whitespace-nowrap second-line">
                              to the real world.
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Right Column - Text Blocks & CTA */}
                      <div className="text-left lg:text-right">
                        {/* Text blocks container */}
                        <div className="space-y-4 mb-6 sm:mb-8">
                          {textBlocks.map((text, index) => (
                            <div key={index}>
                              <p
                                className="leading-relaxed whitespace-pre-line"
                                style={{
                                  fontFamily:
                                    "UntitledSans, system-ui, -apple-system, sans-serif",
                                  fontSize: "clamp(16px, 5vw, 20px)",
                                  fontWeight: "normal",
                                  lineHeight: "1.4",
                                  color: "white",
                                }}
                              >
                                {text}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Learn More Button */}
                        <div className="flex justify-start lg:justify-end">
                          <button
                            onClick={() => navigate("/mission")}
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
                              Learn More About Our Mission
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
                </div>
              </div>
        </div>
      </section>
    </>
  );
};

export default TypewriterSection;
