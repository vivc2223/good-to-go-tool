import React, { useEffect } from "react";
import { useUniversalScrollReveal } from "@/hooks/useUniversalScrollReveal";

const MissionContent = () => {
  const { elementRef: heroRef, style: heroStyle } = useUniversalScrollReveal();
  const { elementRef: descRef, style: descStyle } = useUniversalScrollReveal();
  const { elementRef: approachRef, style: approachStyle } =
    useUniversalScrollReveal();
  const { elementRef: actionRef, style: actionStyle } =
    useUniversalScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 lg:w-[85%]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 max-w-7xl">
          {/* Content Section */}
          <div className="w-full flex flex-col justify-center">
            <section
              className="overflow-hidden relative bg-black"
              ref={heroRef}
              style={heroStyle}
            >
              <div className="w-full max-w-none relative z-20">
                <div className="text-left">
                  <h2
                    className="leading-tight"
                    style={{
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontSize: "clamp(28px, 5vw, 41px)",
                      fontWeight: "normal",
                      lineHeight: "1.1",
                      color: "white",
                    }}
                  >
                    DYNA's Mission: Power the Future of the Physical Economy
                    With General-Purpose Robots
                  </h2>
                </div>
              </div>
            </section>

            {/* Description Section */}
            <section
              className="w-full pt-8 py-0"
              ref={descRef}
              style={descStyle}
            >
              <div className="w-full relative z-10">
                <div className="text-left">
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      color: "#ffffff",
                      fontSize: "clamp(16px, 5vw, 20px)",
                      fontWeight: "normal",
                      lineHeight: "1.6",
                      opacity: "0.9",
                    }}
                  >
                    We build high-performance, general-purpose robots designed
                    to scale across real-world applications DYNA robots improve
                    through deployment Our goal is physical AI that trains in
                    the field and gets better with use
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* How We Get There Section */}
      <section
        className="w-full py-0 mt-2 lg:w-[85%]"
        ref={approachRef}
        style={approachStyle}
      >
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="pt-12 sm:pt-16 pb-6 sm:pb-8">
            {/* Content - Left */}
            <div className="space-y-6">
              <h2
                className="leading-tight"
                style={{
                  fontSize: "clamp(28px, 5vw, 41px)",
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontWeight: "normal",
                  lineHeight: "1.1",
                  color: "#ffffff",
                }}
              >
                How We Get There
              </h2>

              <p
                className="leading-relaxed"
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  color: "#ffffff",
                  fontSize: "clamp(16px, 5vw, 20px)",
                }}
              >
                To achieve the widest distribution of robots this decade, four
                things must be true:
              </p>

              <div className="space-y-8">
                {/* Point 1 */}
                <div className="space-y-4">
                  <h3
                    className="leading-tight"
                    style={{
                      fontSize: "clamp(20px, 5vw, 32px)",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontWeight: "normal",
                      color: "#ffffff",
                    }}
                  >
                    1. Robots Must Generalize
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "clamp(16px, 5vw, 20px)",
                      fontFamily: "ABCDiatypeMedium, sans-serif",
                      color: "#ffffff",
                    }}
                  >
                    Generalization is key to scaling. That means learning new
                    tasks fast and deploying anywhere with minimal effort.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="space-y-4">
                  <h3
                    className="leading-tight"
                    style={{
                      fontSize: "clamp(20px, 5vw, 32px)",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontWeight: "normal",
                      color: "#ffffff",
                    }}
                  >
                    2. Robots Must Be Performant
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "clamp(16px, 5vw, 20px)",
                      fontFamily: "ABCDiatypeMedium, sans-serif",
                      color: "#ffffff",
                    }}
                  >
                    We optimize relentlessly for quality, consistency, and
                    throughput. From lab prototypes to real-world impact, we
                    deliver exceptional task performance that unlocks real value
                    for users.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="space-y-4">
                  <h3
                    className="leading-tight"
                    style={{
                      fontSize: "clamp(20px, 5vw, 32px)",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontWeight: "normal",
                      color: "#ffffff",
                    }}
                  >
                    3. Systems Must Be Robust
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "clamp(16px, 5vw, 20px)",
                      fontFamily: "ABCDiatypeMedium, sans-serif",
                      color: "#ffffff",
                    }}
                  >
                    Robustness is the difference between a prototype and a
                    platform. Our stack — robot, model, software, and operations
                    — is designed to handle edge cases and improve with each
                    rollout.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="space-y-4">
                  <h3
                    className="leading-tight"
                    style={{
                      fontSize: "clamp(20px, 5vw, 32px)",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontWeight: "normal",
                      color: "#ffffff",
                    }}
                  >
                    4. Robots Will Redefine Economy
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "clamp(16px, 5vw, 20px)",
                      fontFamily: "ABCDiatypeMedium, sans-serif",
                      color: "#ffffff",
                    }}
                  >
                    Physical AGI only scales when the economics work. DYNA
                    systems are designed to generate returns and boost output
                    from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full py-0 mt-2 pb-6"
        ref={actionRef}
        style={actionStyle}
      >
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="pt-12 sm:pt-16 pb-6 sm:pb-8">
            {/* Content - Left */}
            <div className="max-w-4xl space-y-12">
              <h2
                className="leading-tight"
                style={{
                  fontSize: "clamp(28px, 5vw, 41px)",
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontWeight: "normal",
                  lineHeight: "1.1",
                  color: "#ffffff",
                }}
              >
                Watch DYNA In Action
              </h2>
            </div>
          </div>
          <div>
            <video
              className="w-full h-[450px]"
              controls
              loop
              muted
              playsInline
              autoPlay
            >
              <source
                src="/videos/Dyna-Helping-Hands-16X9-V9-Textless-Mission.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionContent;
