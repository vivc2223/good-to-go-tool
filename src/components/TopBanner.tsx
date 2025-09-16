import React from "react";
import { ArrowUpRight } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-white text-black py-3 px-1 sm:px-6 md:px-8">
      <div className="max-[430px]:text-[10px] max-w-7xl md:mx-auto flex flex-row flex-wrap items-center justify-center gap-2  sm:text-sm md:text-base">
        {/* Series A Announcement */}
        <div className="flex items-center gap-1">
          <span>DYNA just raised</span>
          <a
            href="https://www.bloomberg.com/news/articles/2025-09-15/dyna-robotics-raises-120-million-in-funding-from-nvidia-amazon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity duration-200 underline underline-offset-2"
            aria-label="Read Bloomberg article about DYNA's funding"
          >
            $120M series A!{/* <ArrowUpRight size={14} /> */}
          </a>
        </div>

        {/* Separator */}
        {/* <span className="hidden sm:inline text-gray-400">•</span> */}

        {/* Blog Link */}
        <div className="flex items-center gap-1">
          Read more
          <a
            href="/blog/dyna-robotics-closes-120m-series-a"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity duration-200"
          >
            here.
          </a>
          {/* <ArrowUpRight size={14} /> */}
        </div>

        {/* Separator */}
        {/* <span className="hidden sm:inline text-gray-400">•</span> */}

        {/* Hiring Link */}
        <div className="flex items-center gap-1">
          <a
            href="/careers"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity duration-200"
          >
            We're hiring!
          </a>
          {/* <ArrowUpRight size={14} /> */}
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
