import React from "react";
import { Button } from "@/components/ui/button";
import { useUniversalScrollReveal } from "@/hooks/useUniversalScrollReveal";

const CareersHero = () => {
  const { elementRef: heroRef, style: heroStyle } = useUniversalScrollReveal();
  const { elementRef: buttonRef, style: buttonStyle } =
    useUniversalScrollReveal();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black">
      <div className="max-w-4xl">
        {/* Hero Content - matching home page layout */}
        <div className="mb-8 sm:my-10" ref={heroRef} style={heroStyle}>
          <h1
            className="leading-tight mb-4 sm:mb-6"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
              fontSize: "clamp(28px, 5vw, 41px)",
              fontWeight: "normal",
              lineHeight: "1.1",
              color: "white",
            }}
          >
            Build the Next Era of Embodied AI
          </h1>

          <p
            className="max-w-4xl leading-relaxed"
            style={{
              color: "white",
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
              fontWeight: "normal",
              fontSize: "clamp(16px, 5vw, 20px)",
            }}
          >
            We're assembling a focused team of builders, researchers, and
            engineers who care deeply about impact. If you're driven by
            execution and autonomy — you're in the right place.
          </p>
        </div>

        {/* CTA Button - line and arrow style */}
        <div className="flex justify-start" ref={buttonRef} style={buttonStyle}>
          <button
            onClick={() => (window.location.href = "/culture")}
            className="group inline-flex items-center gap-3 transition-all duration-300 hover:gap-4 text-white"
          >
            <span
              className="text-lg text-white"
              style={{
                fontFamily:
                  "UntitledSans, system-ui, -apple-system, sans-serif",
                fontWeight: "normal",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationThickness: "1px",
              }}
            >
              Learn about our culture
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

export default CareersHero;
