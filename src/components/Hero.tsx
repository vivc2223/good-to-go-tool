import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState, useCallback } from "react";

// Mock hooks for demo
const useUniversalScrollReveal = () => ({
  elementRef: useRef(null),
  style: {},
});
const useIsMobile = () => window.innerWidth < 768;

// Type definition for Network Information API
interface NetworkConnection {
  effectiveType: "slow-2g" | "2g" | "3g" | "4g";
  downlink: number;
  rtt: number;
  saveData: boolean;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkConnection;
}

// Type extension for iOS-specific video properties
interface IOSVideoElement {
  webkitEnterFullscreen?: () => void;
  webkitExitFullscreen?: () => void;
}

// Utility functions
const cn = (...classes: (string | undefined | null | boolean)[]) =>
  classes.filter(Boolean).join(" ");

const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent);

const getVideoSources = (videoSrc: string) => {
  const sources = [];
  const isIOSDevice = isIOS();
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (videoSrc.includes(".mp4")) {
    if (isIOSDevice || isSafari) {
      sources.push({
        src: videoSrc,
        type: 'video/mp4; codecs="avc1.42001E"',
      });
      sources.push({
        src: videoSrc,
        type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
      });
    } else {
      sources.push({
        src: videoSrc,
        type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
      });
    }
    sources.push({ src: videoSrc, type: "video/mp4" });
  }
  return sources;
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isMobile = useIsMobile();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState<"slow" | "fast">(
    "fast"
  );
  const { elementRef: heroTextRef, style: heroTextStyle } =
    useUniversalScrollReveal();
  const { elementRef: heroButtonRef, style: heroButtonStyle } =
    useUniversalScrollReveal();

  // Aggressive video playback function for immediate autoplay
  const tryPlayVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return false;

    try {
      console.log("🎬 Attempting immediate hero video play...");

      // Ensure all required properties are set before play
      video.muted = true;
      video.volume = 0;
      video.currentTime = 0;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        await playPromise;
      }

      console.log("✅ Hero video playing immediately");
      setAutoplayBlocked(false);
      setShowPlayButton(false);
      return true;
    } catch (error) {
      console.log("🚫 Hero video autoplay blocked, showing fallback:", error);
      setAutoplayBlocked(true);

      // For mobile/iOS, show play button for user interaction
      if (isMobile) {
        setShowPlayButton(true);
      }
      return false;
    }
  }, [isMobile]);

  // Detect user interaction for mobile autoplay (simplified)
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserHasInteracted(true);
      // Try to play video after user interaction only once
      if (isMobile && autoplayBlocked && videoRef.current) {
        tryPlayVideo();
      }
    };

    // Listen for user interaction (simplified to avoid aggressive retries)
    document.addEventListener("touchstart", handleUserInteraction, {
      once: true,
      passive: true,
    });

    return () => {
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [isMobile, autoplayBlocked, tryPlayVideo]);

  // Detect connection speed
  useEffect(() => {
    const detectConnection = () => {
      // Check for Network Information API
      if ("connection" in navigator) {
        const connection = (navigator as NavigatorWithConnection).connection;
        if (connection) {
          const effectiveType = connection.effectiveType;
          setConnectionSpeed(
            effectiveType === "slow-2g" ||
              effectiveType === "2g" ||
              effectiveType === "3g"
              ? "slow"
              : "fast"
          );
        }
      }

      // Fallback: Check based on mobile
      if (isMobile) {
        setConnectionSpeed("slow");
      }
    };

    detectConnection();
  }, [isMobile]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      console.error("❌ Hero video element not found");
      return;
    }

    const isIOSDevice = isIOS();
    console.log("🎬 Setting up Hero video for immediate playback...");

    // Show content immediately - no loading states
    setVideoLoaded(true);
    setVideoError(false);
    setShowHeading(true);
    setShowButton(true);

    // Aggressive iOS compatibility setup for older Safari versions
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;
    video.preload = "auto";
    video.defaultMuted = true;

    // Comprehensive iOS attributes for maximum compatibility
    video.setAttribute("muted", "true");
    video.setAttribute("playsinline", "true");
    video.setAttribute("autoplay", "true");
    video.setAttribute("loop", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");
    video.setAttribute("x5-video-player-type", "h5");
    video.setAttribute("x5-video-player-fullscreen", "false");
    video.setAttribute("x-webkit-airplay", "allow");

    // CRITICAL: Force controls to be hidden
    video.setAttribute("controls", "false");
    video.removeAttribute("controls");

    // Additional iOS Safari compatibility attributes
    if (isIOSDevice) {
      video.setAttribute("preload", "auto");
      video.setAttribute("data-object-fit", "cover");
      // Force inline playback for older iOS versions
      try {
        (video as IOSVideoElement).webkitEnterFullscreen = undefined;
        (video as IOSVideoElement).webkitExitFullscreen = undefined;
      } catch (e) {
        // Ignore if these properties don't exist
      }
    }

    // Prevent context menu and selection that might trigger controls
    const preventContextMenu = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const preventSelection = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners to prevent controls from appearing
    video.addEventListener("contextmenu", preventContextMenu);
    video.addEventListener("selectstart", preventSelection);
    video.addEventListener("dragstart", preventSelection);

    // Force controls off whenever they might appear
    const forceControlsOff = () => {
      if (video.controls) {
        video.controls = false;
        video.removeAttribute("controls");
      }
    };

    // Monitor for control changes and force them off
    const controlsObserver = new MutationObserver(() => {
      forceControlsOff();
    });

    controlsObserver.observe(video, {
      attributes: true,
      attributeFilter: ["controls"],
    });

    // Immediate video loading and playback attempt
    const initializeVideo = async () => {
      try {
        // Ensure controls are off before loading
        forceControlsOff();

        // Load the video immediately
        video.load();

        // Small delay for video to initialize, then attempt play
        setTimeout(async () => {
          try {
            forceControlsOff(); // Ensure controls stay off
            await video.play();
            console.log("✅ Hero video playing immediately");
            setAutoplayBlocked(false);
            setShowPlayButton(false);
          } catch (playError) {
            console.log("🚫 Autoplay blocked, showing play button");
            setAutoplayBlocked(true);
            if (isMobile) {
              setShowPlayButton(true);
            }
          }
        }, 100);
      } catch (error) {
        console.error("❌ Video initialization error:", error);
      }
    };

    // Error handling - but don't prevent video display
    const handleError = (e: Event) => {
      console.error("❌ Hero video error:", e);
      // Don't hide video on error - keep trying to display
    };

    // Keep video playing - essential for continuous loop
    const ensureVideoPlaying = () => {
      forceControlsOff(); // Ensure controls stay hidden
      if (video.paused && !autoplayBlocked && !videoError) {
        video.play().catch(() => {});
      }
    };

    // Check video state every second to ensure it keeps playing and controls stay hidden
    const playInterval = setInterval(ensureVideoPlaying, 1000);

    video.addEventListener("error", handleError);
    video.addEventListener("loadeddata", () => {
      console.log("📊 Hero video data loaded");
      forceControlsOff();
    });

    // Additional events that might trigger controls - force them off
    video.addEventListener("loadstart", forceControlsOff);
    video.addEventListener("canplay", forceControlsOff);
    video.addEventListener("canplaythrough", forceControlsOff);
    video.addEventListener("playing", forceControlsOff);
    video.addEventListener("pause", forceControlsOff);

    // Initialize video immediately
    initializeVideo();

    return () => {
      clearInterval(playInterval);
      controlsObserver.disconnect();
      video.removeEventListener("error", handleError);
      video.removeEventListener("contextmenu", preventContextMenu);
      video.removeEventListener("selectstart", preventSelection);
      video.removeEventListener("dragstart", preventSelection);
      video.removeEventListener("loadstart", forceControlsOff);
      video.removeEventListener("canplay", forceControlsOff);
      video.removeEventListener("canplaythrough", forceControlsOff);
      video.removeEventListener("playing", forceControlsOff);
      video.removeEventListener("pause", forceControlsOff);
    };
  }, [isMobile, autoplayBlocked, videoError]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // A promise is returned by the play() method.
      const playPromise = videoElement.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Autoplay was prevented. This can happen if the browser
          // policy changes or in cases like Low Power Mode.
          console.error("Autoplay was prevented:", error);
        });
      }
    }
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector("#deployment-form");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="overflow-hidden relative bg-black"
      id="hero"
      style={{
        height: isMobile ? "100vh" : "100vh",
        minHeight: isMobile ? "100vh" : "600px",
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Minimal fallback background - only shows if video completely fails */}
        <div className="absolute inset-0 w-full h-full bg-black" />

        {/* Hero background video - displays immediately with no opacity transitions */}
        {/* <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/Dyna-Hero-Page.mp4"
          onError={(e) => console.error("Hero video error:", e)}
          onLoadStart={() => console.log("Hero video loading started")}
          onCanPlay={() => console.log("Hero video can play")}
          onLoadedData={() => console.log("Hero video data loaded")}
          onPlaying={() => console.log("Hero video is playing")}
          style={{
            // Additional CSS to ensure controls never show
            WebkitAppearance: "none",
            outline: "none",
            border: "none",
            // Disable text selection and context menu
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            // Disable touch callout on iOS
            WebkitTouchCallout: "none",
            // Disable highlight on tap
            WebkitTapHighlightColor: "transparent",
            // Force pointer events to be handled by parent
            pointerEvents: "none",
          }}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          onTouchStart={(e) => {
            // Allow touch events to bubble up but prevent default video behavior
            e.preventDefault();
          }}
        >
          <source src="/videos/Dyna-Hero-Page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          poster="/new-og-image.png"
          preload={isMobile || connectionSpeed === "slow" ? "metadata" : "auto"}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            media="(max-width: 768px)"
            src="/videos/Dyna-Hero-Page-480.webm"
            type="video/webm"
          />
          <source
            media="(max-width: 768px)"
            src="/videos/Dyna-Hero-Page-480.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
          <source
            media="(min-width: 769px)"
            src="/videos/Dyna-Hero-Page-720.webm"
            type="video/webm"
          />
          <source
            media="(min-width: 769px)"
            src="/videos/Dyna-Hero-Page-720.mp4"
            type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'
          />
        </video> */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/new-og-image.png"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          crossOrigin="anonymous"
        >
          {/* High-DPR small screens → 1080p preferred */}
          <source
            media="(max-width: 480px) and (min-resolution: 3dppx)"
            src="/videos/Dyna-Hero-Page-1080.webm"
            type="video/webm"
          />
          <source
            media="(max-width: 480px) and (min-resolution: 3dppx)"
            src="/videos/Dyna-Hero-Page-1080.mp4"
            type='video/mp4; codecs="avc1.640028"'
          />

          {/* Normal mobile/tablet → 720p */}
          <source
            media="(max-width: 1023px)"
            src="/videos/Dyna-Hero-Page-720.webm"
            type="video/webm"
          />
          <source
            media="(max-width: 1023px)"
            src="/videos/Dyna-Hero-Page-720.mp4"
            type='video/mp4; codecs="avc1.64001F"'
          />

          {/* Desktops and large tablets → 1080p */}
          <source
            media="(min-width: 1024px)"
            src="/videos/Dyna-Hero-Page-1080.webm"
            type="video/webm"
          />
          <source
            media="(min-width: 1024px)"
            src="/videos/Dyna-Hero-Page-1080.mp4"
            type='video/mp4; codecs="avc1.640028"'
          />

          {/* Optional Safari HEVC high quality */}
          {/* <source media="(min-width: 1024px)" src="/videos/Dyna-Hero-Page-1080-hevc.mp4" type='video/mp4; codecs="hvc1"' /> */}

          {/* Final fallback */}
          <source src="/videos/Dyna-Hero-Page-720.mp4" type="video/mp4" />
        </video>
        {/* Play button overlay for mobile when autoplay is blocked */}
        {showPlayButton && autoplayBlocked && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
            style={{ pointerEvents: "auto" }}
          >
            <button
              onClick={async () => {
                const success = await tryPlayVideo();
                if (success) {
                  setShowPlayButton(false);
                }
              }}
              className="group flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full border-2 border-white hover:bg-opacity-30 transition-all duration-300"
              aria-label="Play video"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white group-hover:scale-110 transition-transform duration-300"
              >
                <path
                  d="M8 5.14V19.86C8 20.72 8.98 21.26 9.68 20.74L19.5 13.74C20.11 13.3 20.11 12.7 19.5 12.26L9.68 5.26C8.98 4.74 8 5.28 8 6.14V5.14Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div
        className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative h-full flex flex-col justify-end pb-4 sm:pb-12 transition-opacity duration-300 ease-out"
        ref={containerRef}
        style={{
          zIndex: 30,
          pointerEvents: "auto",
        }}
      >
        <div className="max-w-4xl">
          <h1
            ref={heroTextRef}
            style={{
              ...heroTextStyle,
              fontSize: isMobile ? "28px" : "49.5px",
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontWeight: "normal",
              letterSpacing: "-0.02em",
              color: "white",
              display: "inline-block",
              filter: "blur(0px)",
              minHeight: isMobile ? "84px" : "148px",
              marginBottom: isMobile ? "16px" : "24px",
              lineHeight: "1.1",
            }}
            className="hero-text leading-tight opacity-100 translate-y-0"
          >
            DYNA is building general-purpose robots that power the future of the
            physical economy
          </h1>
        </div>
        <div
          ref={heroButtonRef}
          style={{
            ...heroButtonStyle,
            minHeight: "48px",
            position: "relative",
          }}
          className="opacity-100 flex flex-row items-center justify-between gap-4"
        >
          <button className="flex flex-row items-center gap-2 text-lg border border-white rounded-2xl p-1 px-4 transition-all duration-200 hover:bg-white hover:bg-opacity-10 hover:scale-105">
            We raised $120M. Read our story <ArrowRight width={32} />
          </button>
          <button
            onClick={scrollToFeatures}
            className="group inline-flex items-center gap-3 transition-all duration-300 hover:gap-4 text-white"
            style={{
              position: "static",
              transform: "none",
            }}
          >
            <span
              className="text-lg font-medium text-white"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationThickness: "1px",
              }}
            >
              Request A Demo
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
    </section>
  );
};

export default Hero;
