import { useRef, useEffect, useCallback, useState } from "react";
import { isIOS, isSafari } from "@/lib/utils";

interface CarouselItem {
  id: number;
  videoSrc: string;
}

export const useVideoManager = (
  items: CarouselItem[],
  currentIndex: number
) => {
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device and iOS specifically
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
  }, []);

  const isIOSDevice = isIOS();
  const isSafariBrowser = isSafari();

  const playVideo = useCallback(
    async (video: HTMLVideoElement) => {
      try {
        // iOS-specific setup
        if (isIOSDevice) {
          video.muted = true;
          video.playsInline = true;
          video.autoplay = true;

          // Force video attributes for iOS
          video.setAttribute("muted", "true");
          video.setAttribute("playsinline", "true");
          video.setAttribute("autoplay", "true");
          video.setAttribute("webkit-playsinline", "true");
        }

        // Ensure video is ready before playing
        if (video.readyState < 3) {
          console.log(
            `Video not ready (readyState: ${video.readyState}), loading...`
          );
          video.load(); // Reload video if needed

          // Wait for video to be ready with timeout
          await Promise.race([
            new Promise((resolve) => {
              video.addEventListener("canplay", resolve, { once: true });
            }),
            new Promise((_, reject) =>
              setTimeout(() => reject(new Error("Video load timeout")), 5000)
            ),
          ]);
        }

        // Don't reset currentTime to avoid seeking delay
        await video.play();
        console.log("Video played successfully");
      } catch (error) {
        console.log("Video play failed:", error);

        // Enhanced retry logic for iOS and mobile devices
        if (isIOSDevice || isMobile) {
          console.log("Attempting iOS/mobile video retry...");
          setTimeout(async () => {
            try {
              // For iOS, try a different approach
              if (isIOSDevice) {
                video.currentTime = 0;
                video.muted = true;
                video.playsInline = true;
              }

              // Try loading the video again
              video.load();
              await new Promise((resolve) => setTimeout(resolve, 500));
              await video.play();
              console.log("Video play retry successful");
            } catch (retryError) {
              console.log("Video play retry failed:", retryError);

              // Final attempt for iOS
              if (isIOSDevice) {
                try {
                  // Try without loading
                  await video.play();
                  console.log("Video play final attempt successful");
                } catch (finalError) {
                  console.log("All video play attempts failed:", finalError);
                }
              }
            }
          }, 1000);
        }
      }
    },
    [isMobile, isIOSDevice]
  );

  // Auto-play current video when index changes
  useEffect(() => {
    // Pause all videos first (but don't reset currentTime)
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.pause();
        // Don't reset currentTime to avoid seeking delay
      }
    });

    // Play current video with loading handling
    const currentVideo = videoRefs.current[items[currentIndex]?.id];
    if (currentVideo) {
      if (currentVideo.readyState >= 3) {
        playVideo(currentVideo);
      } else {
        currentVideo.addEventListener(
          "canplay",
          () => playVideo(currentVideo),
          { once: true }
        );
        // Don't force load to prevent reloading delay
      }
    }
  }, [currentIndex, items, playVideo]);

  return {
    videoRefs,
    isMobile,
    isIOSDevice,
    isSafariBrowser,
  };
};
