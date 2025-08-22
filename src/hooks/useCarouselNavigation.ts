import { useState, useCallback } from "react";

export const useCarouselNavigation = (
  itemsLength: number,
  disabled = false
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    if (!disabled) {
      setCurrentIndex((prev) => (prev + 1) % itemsLength);
    }
  }, [itemsLength, disabled]);

  const prevSlide = useCallback(() => {
    if (!disabled) {
      setCurrentIndex((prev) => (prev - 1 + itemsLength) % itemsLength);
    }
  }, [itemsLength, disabled]);

  const goToSlide = useCallback(
    (index: number) => {
      if (!disabled) {
        setCurrentIndex(index);
      }
    },
    [disabled]
  );

  const handleVideoHover = useCallback((videoId: number | null) => {
    setHoveredVideo(videoId);
  }, []);

  return {
    currentIndex,
    hoveredVideo,
    nextSlide,
    prevSlide,
    goToSlide,
    handleVideoHover,
  };
};
