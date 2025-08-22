import React, { useEffect, useRef } from "react";
import { getVideoSources, isIOS } from "@/lib/utils";

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
  thumbnailSrc?: string;
}

interface VideoCarouselCardProps {
  item: CarouselItem;
  index: number;
  isActive: boolean;
  style?: React.CSSProperties; // Make style optional if not always passed
  videoRef: (el: HTMLVideoElement | null) => void;
  onClick: (item: CarouselItem, index: number) => void;
}

const VideoCarouselCard: React.FC<VideoCarouselCardProps> = ({
  item,
  index,
  isActive,
  style,
  videoRef,
  onClick,
}) => {
  const internalVideoRef = useRef<HTMLVideoElement>(null);

  // Debug video sources
  const videoSources = getVideoSources(item.videoSrc);
  console.log(`Video ${item.id} sources:`, videoSources);

  useEffect(() => {
    const video = internalVideoRef.current;
    if (!video) return;

    const isIOSDevice = isIOS();

    if (isActive) {
      // iOS-specific setup
      if (isIOSDevice) {
        console.log(`Setting up iOS video for item ${item.id}`);
        video.muted = true;
        video.playsInline = true;
        video.autoplay = true;
        video.setAttribute("muted", "true");
        video.setAttribute("playsinline", "true");
        video.setAttribute("autoplay", "true");
        video.setAttribute("webkit-playsinline", "true");
        video.setAttribute("x5-playsinline", "true");
      }

      // Attempt autoplay immediately
      const attemptPlay = async () => {
        try {
          console.log(
            `Attempting to play video ${item.id}, readyState: ${video.readyState}`
          );

          // Check if video is ready to play
          if (video.readyState >= 3) {
            await video.play();
            console.log(`Video ${item.id} played successfully`);
          } else {
            console.log(
              `Video ${item.id} not ready, waiting for canplay event`
            );

            // Wait for video to be ready with timeout
            const playPromise = new Promise((resolve, reject) => {
              const timeout = setTimeout(() => {
                reject(new Error(`Video ${item.id} load timeout`));
              }, 5000);

              video.addEventListener(
                "canplay",
                async () => {
                  clearTimeout(timeout);
                  try {
                    await video.play();
                    console.log(`Video ${item.id} played after canplay event`);
                    resolve(true);
                  } catch (error) {
                    console.log(`Video ${item.id} autoplay prevented:`, error);
                    reject(error);
                  }
                },
                { once: true }
              );
            });

            await playPromise;
          }
        } catch (error) {
          console.log(`Video ${item.id} autoplay prevented:`, error);

          // iOS-specific retry
          if (isIOSDevice) {
            console.log(`Retrying iOS video ${item.id} playback...`);
            setTimeout(async () => {
              try {
                video.currentTime = 0;
                video.load();
                await new Promise((resolve) => setTimeout(resolve, 200));
                await video.play();
                console.log(`Video ${item.id} iOS retry successful`);
              } catch (retryError) {
                console.log(`Video ${item.id} iOS retry failed:`, retryError);
              }
            }, 500);
          }
        }
      };

      attemptPlay();
    } else {
      // Ensure inactive videos are paused and reset
      video.pause();
      video.currentTime = 0;
      console.log(`Video ${item.id} paused and reset (inactive)`);
    }
  }, [isActive, item.id]);

  useEffect(() => {
    if (internalVideoRef.current) {
      videoRef(internalVideoRef.current);
    }
  }, [videoRef]);

  // Add debugging for iOS video loading
  useEffect(() => {
    const video = internalVideoRef.current;
    if (!video || !isIOS()) return;

    console.log(`Setting up iOS debugging for video ${item.id}`);

    const events = [
      "loadstart",
      "loadedmetadata",
      "loadeddata",
      "canplay",
      "canplaythrough",
      "play",
      "playing",
      "pause",
      "ended",
      "error",
      "abort",
      "stalled",
      "suspend",
    ];

    const eventHandlers = events.map((eventType) => {
      const handler = (e: Event) => {
        console.log(`iOS Video ${item.id} event: ${eventType}`, {
          readyState: video.readyState,
          networkState: video.networkState,
          paused: video.paused,
          currentTime: video.currentTime,
          duration: video.duration,
          error: video.error,
        });

        if (eventType === "error" && video.error) {
          console.error(`iOS Video ${item.id} error details:`, video.error);
        }
      };

      video.addEventListener(eventType, handler);
      return { eventType, handler };
    });

    return () => {
      eventHandlers.forEach(({ eventType, handler }) => {
        video.removeEventListener(eventType, handler);
      });
    };
  }, [item.id]);

  // Removed problematic useEffect that was playing videos regardless of isActive state

  return (
    <div
      className="absolute transition-all duration-500 ease-out cursor-pointer overflow-visible"
      style={{
        ...style,
        top: "50%",
        transform: `${style?.transform || ""} translateY(-50%)`,
        transformOrigin: "top center",
      }}
      onClick={() => onClick(item, index)}
    >
      <div className="flex flex-col items-center max-h-[85vh] overflow-hidden">
        <div
          className={`relative overflow-hidden shadow-2xl transition-all duration-500 flex-shrink-0 ${
            isActive
              ? "w-[320px] sm:w-[300px] md:w-[380px] lg:w-[460px] xl:w-[520px] 2xl:w-[580px] [@media(min-height:900px)]:w-[630px] [@media(min-height:1024px)]:w-[750px] h-[310px] lg:h-[370px] xl:h-[370px] 2xl:h-[450px] [@media(min-height:900px)]:h-[500px] [@media(min-height:1024px)]:h-[800px] rounded-2xl sm:rounded-3xl"
              : "w-[280px] sm:w-[280px] md:w-[360px] lg:w-[340px] xl:w-[400px] 2xl:w-[460px] [@media(min-height:900px)]:w-[500px] [@media(min-height:1024px)]:w-[550px] h-[295px] lg:h-[355px] xl:h-[300px] 2xl:h-[350px]  [@media(min-height:900px)]:h-[400px] [@media(min-height:1024px)]:h-[50px] rounded-2xl sm:rounded-3xl"
          }`}
        >
          {!isActive && (
            <div className="absolute inset-0 bg-black bg-opacity-20 z-10 rounded-2xl sm:rounded-3xl" />
          )}
          <video
            ref={internalVideoRef}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl brightness-110 contrast-105"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
            onError={(e) => console.log(`Video ${item.id} error:`, e)}
            onLoadStart={() => console.log(`Video ${item.id} loading started`)}
            onCanPlay={() => console.log(`Video ${item.id} can play`)}
          >
            {/* Generate multiple sources for better compatibility */}
            <source src={item.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className={`mt-3 sm:mt-4 mb-4 sm:mb-6 md:mb-8 text-white transition-all duration-500 flex-shrink min-h-0 ${
            isActive
              ? "w-[320px] sm:w-[300px] md:w-[380px] lg:w-[460px] xl:w-[520px]"
              : "w-[280px] sm:w-[280px] md:w-[360px] lg:w-[340px] xl:w-[400px]"
          }`}
        >
          <div
            className="mb-1 text-white overflow-hidden"
            style={{
              fontSize: isActive
                ? "clamp(14px, 2.5vw, 24px)"
                : "clamp(12px, 2vw, 20px)",
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
              fontWeight: "medium",
              lineHeight: "1.1",
              transition: "font-size 0.3s ease",
            }}
          >
            {item.title}
          </div>
          <div
            className="opacity-90 text-white overflow-hidden"
            style={{
              fontSize: isActive
                ? "clamp(12px, 1.8vw, 18px)"
                : "clamp(10px, 1.5vw, 16px)",
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
              fontWeight: "medium",
              lineHeight: "1.2",
              transition: "font-size 0.3s ease",
            }}
          >
            {item.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarouselCard;
