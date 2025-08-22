import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generate video sources with MP4 fallback for better iOS compatibility
 * @param videoSrc - The primary video source (usually .webm)
 * @returns Array of video sources with proper fallbacks
 */
export function getVideoSources(videoSrc: string) {
  const sources = [];
  const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Handle different video format mappings
  if (videoSrc.includes(".webm")) {
    // First try MP4 version with iOS-compatible codec specification
    const mp4Src = videoSrc.replace(".webm", ".mp4");
    sources.push({
      src: mp4Src,
      type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    });
    // Fallback MP4 without codec specification
    sources.push({ src: mp4Src, type: "video/mp4" });
    // For non-iOS devices, also include webm for better compression
    if (!isIOSDevice) {
      sources.push({ src: videoSrc, type: "video/webm" });
    }
  } else if (videoSrc.includes(".mp4")) {
    // If already MP4, prioritize maximum iOS compatibility
    if (isIOSDevice || isSafari) {
      // For iOS/Safari, use the most compatible baseline profile
      sources.push({
        src: videoSrc,
        type: 'video/mp4; codecs="avc1.42001E"', // H.264 Baseline Profile
      });
      sources.push({
        src: videoSrc,
        type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"', // With audio
      });
      sources.push({
        src: videoSrc,
        type: 'video/mp4; codecs="avc1.4D401E, mp4a.40.2"', // Main Profile fallback
      });
    } else {
      // For other devices, use standard codec
      sources.push({
        src: videoSrc,
        type: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
      });
    }
    // Always include plain MP4 fallback for maximum compatibility
    sources.push({ src: videoSrc, type: "video/mp4" });
    // For non-iOS devices, try webm alternative for better compression
    if (!isIOSDevice && !isSafari) {
      const webmSrc = videoSrc.replace(".mp4", ".webm");
      sources.push({ src: webmSrc, type: "video/webm" });
    }
  } else {
    // Fallback for other formats
    sources.push({ src: videoSrc, type: "video/mp4" });
  }

  return sources;
}

/**
 * Check if the device is likely an iOS device
 */
export function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

/**
 * Check if the device is mobile
 */
export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Check if the device is Safari (iOS or macOS)
 */
export function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
