import React from "react";
import { useNavigate } from "react-router-dom";

type Logo = {
  src: string;
  alt: string;
};

interface BannerProps {
  logos?: Logo[];
}

const defaultLogos: Logo[] = [
  { src: "/deepmind.svg", alt: "Google deepmind" },
  { src: "/nvidia.jpg", alt: "Nvidia" },
  {
    src: "/google.svg",
    alt: "Google",
  },
  {
    src: "/meta.png",
    alt: "Meta",
  },
  {
    src: "/amazon.jpg",
    alt: "Amazon",
  },
  {
    src: "/MIT.png",
    alt: "MIT",
  },
  {
    src: "/penn.jpg",
    alt: "UPenn",
  },
  {
    src: "/cmus.png",
    alt: "CMU",
  },
];

const Banner: React.FC<BannerProps> = ({ logos = defaultLogos }) => {
  const navigate = useNavigate();
  const renderTrack = () => (
    <div className="logo-marquee-track">
      {logos.map((logo, idx) => (
        <div
          key={`logo-${idx}`}
          className="mx-4 sm:mx-6 md:mx-8 flex items-center opacity-80 hover:opacity-100 transition-opacity duration-200 h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-48 lg:h-16 lg:w-52"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-full w-full"
            loading="lazy"
            decoding="async"
            style={{
              // Optimize image rendering during animation
              imageRendering: "crisp-edges",
              // Prevent layout shifts during animation
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              // Enable hardware acceleration for images
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
            }}
          />
        </div>
      ))}
      {/* duplicate for seamless loop */}
      {logos.map((logo, idx) => (
        <div
          key={`logo-dup-${idx}`}
          className="mx-4 sm:mx-6 md:mx-8 flex items-center opacity-80 hover:opacity-100 transition-opacity duration-200 h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-48 lg:h-16 lg:w-52"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-full w-full"
            loading="lazy"
            decoding="async"
            style={{
              // Optimize image rendering during animation
              imageRendering: "crisp-edges",
              // Prevent layout shifts during animation
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              // Enable hardware acceleration for images
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
            }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="py-6 lg:py-8 2xl:py-10">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Logo marquee section - moved to top */}
        <div className="logo-marquee-container relative py-12">
          {/* fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex items-center">{renderTrack()}</div>
        </div>

        {/* Heading - updated text and reduced margin */}
        <h2
          className="leading-tight mb-4"
          style={{
            fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            fontSize: "clamp(28px, 5vw, 41px)",
            fontWeight: "normal",
            lineHeight: "1.1",
            color: "white",
          }}
        >
          Our team brings experience from renowned universities and research labs.
        </h2>

        {/* View Careers button - reduced top margin */}
        <div className="mt-4">
          <button
            onClick={() => navigate("/careers")}
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
              View Careers
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
  );
};

export default Banner;
