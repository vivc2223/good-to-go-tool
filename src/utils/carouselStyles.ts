export const getCardStyle = (index: number, currentIndex: number, itemsLength: number) => {
  const isActive = index === currentIndex;
  const diff = index - currentIndex;
  const isMobile = window.innerWidth < 768;
  
  // Adjust transforms for mobile
  const translateX = isMobile ? 300 : 500;
  const translateZ = isMobile ? -200 : -400;
  const rotateY = isMobile ? 45 : 65;
  const scale = isMobile ? 0.7 : 0.6;
  
  if (isActive) {
    return {
      transform: 'translateX(0) translateZ(0) rotateY(0deg) scale(1)',
      zIndex: 30,
      opacity: 1,
    };
  } else if (diff === 1 || (currentIndex === itemsLength - 1 && index === 0)) {
    // Right card - dramatic 3D effect with darker appearance
    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(-${rotateY}deg) scale(${scale})`,
      zIndex: 20,
      opacity: 0.85,
    };
  } else if (diff === -1 || (currentIndex === 0 && index === itemsLength - 1)) {
    // Left card - dramatic 3D effect with darker appearance
    return {
      transform: `translateX(-${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex: 20,
      opacity: 0.85,
    };
  } else {
    // Hidden cards
    return {
      transform: `translateX(0) translateZ(${translateZ - 100}px) rotateY(0deg) scale(${scale})`,
      zIndex: 10,
      opacity: 0,
    };
  }
};