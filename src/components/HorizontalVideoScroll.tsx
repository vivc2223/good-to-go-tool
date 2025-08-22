import React from 'react';
import VideoCarousel from './VideoCarousel';

interface VideoItem {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
}

const videoItems: VideoItem[] = [
  {
    id: 1,
    title: "Optimized to Perform",
    description: "Robustness to run multiple work shifts, 24/7",
    videoSrc: ""
  },
  {
    id: 2,
    title: "Consistent, Quality Output",
    description: "99%+ quality. 150% throughput. Powered by DYNA-1",
    videoSrc: "/videos/carousellnapkinfolding2.mp4"
  },
  {
    id: 3,
    title: "Precision You Can Trust",
    description: "Deploy instantly. Pay only when DYNA delivers value",
    videoSrc: "/videos/boxfolding.mp4"
  }
];

const HorizontalVideoScroll: React.FC = () => {
  return (
    <div className="w-full py-12">
      <VideoCarousel items={videoItems} />
    </div>
  );
};

export default HorizontalVideoScroll;