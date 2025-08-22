import React, { useState, useRef } from 'react';

interface VideoThumbnailProps {
  videoSrc: string;
  thumbnailSrc?: string;
  title: string;
  subtitle?: string;
  className?: string;
  onClick?: () => void;
  isExpanded?: boolean;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  videoSrc,
  thumbnailSrc,
  title,
  subtitle,
  className = "",
  onClick,
  isExpanded = false
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      className={`relative w-full h-full video-thumbnail cursor-pointer overflow-hidden rounded-2xl ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onClick={onClick}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl"
        muted
        playsInline
        preload="metadata"
        onEnded={handleVideoEnd}
        onLoadedData={handleVideoLoad}
        style={{ display: isLoaded ? 'block' : 'none' }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Thumbnail fallback */}
      {thumbnailSrc && (
        <img
          src={thumbnailSrc}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
          style={{ display: isLoaded ? 'none' : 'block' }}
        />
      )}


      {/* Watch Now text at top */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-white text-sm font-medium bg-transparent">
          {isExpanded ? 'Click to close' : 'Watch Now'}
        </span>
      </div>

      {/* Video overlay text - positioned like Figure AI */}
      <div className="video-overlay-text">
        <div 
          className="mb-1 text-white"
          style={{
            fontSize: isExpanded ? '48px' : '27px',
            fontFamily: 'UntitledSans, system-ui, -apple-system, sans-serif',
            fontWeight: 'normal',
            lineHeight: '1.2',
            transition: 'font-size 0.3s ease'
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div 
            className="opacity-90 text-white"
            style={{
              fontSize: isExpanded ? '24px' : '18px',
              fontFamily: 'UntitledSans, system-ui, -apple-system, sans-serif',
              fontWeight: 'normal',
              lineHeight: '1.4',
              transition: 'font-size 0.3s ease'
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default VideoThumbnail;