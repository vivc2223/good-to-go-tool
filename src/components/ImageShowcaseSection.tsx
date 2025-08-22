import React from "react";
import { useUniversalScrollReveal } from "@/hooks/useUniversalScrollReveal";
import { useNavigate } from "react-router-dom";

const ImageShowcaseSection = () => {
  const navigate = useNavigate();
  const { elementRef: headingRef, style: headingStyle } =
    useUniversalScrollReveal();
  const { elementRef: descRef, style: descStyle } = useUniversalScrollReveal();

  return (
    <section className="relative w-full min-h-screen overflow-hidden pb-2">
      {/* Content - Two column layout like other sections */}
      <div className="relative z-10 h-full flex flex-col justify-start sm:pt-20 pb-16">
        {/* Main Content - Two column layout */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Two-column layout for heading and description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left column - Section title */}
            <div className="text-left" ref={headingRef} style={headingStyle}>
              <h2
                className="leading-none text-white"
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize:
                    window.innerWidth < 640
                      ? "32px"
                      : window.innerWidth < 1024
                      ? "40px"
                      : "49.5px",
                  fontWeight: "normal",
                  lineHeight: "0.95",
                }}
              >
                <span className="text-white">Backed by </span>
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, var(--teal-gradient-start), var(--teal-gradient-end))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  World-Class{" "}
                </span>
                <span className="text-white">Research</span>
              </h2>
            </div>

            {/* Right column - Description text */}
            <div
              className="text-left lg:text-right"
              ref={descRef}
              style={descStyle}
            >
              <p
                className="leading-relaxed"
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "20.25px",
                  fontWeight: "normal",
                  lineHeight: "1.6",
                  color: "white",
                }}
              >
                We close the gap between frontier AI models and physical-world
                autonomy. DYNA-1 is built on advanced vision-language-action
                systems and trained directly in real environments — no
                simulation shortcuts.
              </p>

              {/* Research button - positioned after the text */}
              <div className="text-left lg:text-right mt-8">
                <button
                  onClick={() => navigate("/research")}
                  className="group inline-flex items-center gap-3 transition-all duration-300 hover:gap-4 text-white"
                >
                  <span
                    className="text-lg font-medium text-white"
                    style={{
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                      textDecorationThickness: "1px",
                    }}
                  >
                    Explore our research
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
        </div>

        {/* Research diagram images - different for mobile and desktop */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="my-8 sm:my-12">
            {/* Mobile view diagram */}
            <img
              src="/lovable-uploads/92015b82-6884-4504-9662-cb2383ac9e14.png"
              alt="DYNA AI architecture diagram for mobile view"
              className="w-full h-auto block sm:hidden"
            />
            {/* Desktop view diagram */}
            <img
              src="/lovable-uploads/9a87be7f-b067-489e-b5c4-871d5bda4058.png"
              alt="DYNA AI architecture diagram showing semantic planner and reflex engine components"
              className="w-full max-w-5xl h-auto hidden sm:block mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
