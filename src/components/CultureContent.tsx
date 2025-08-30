import React from "react";
import { useUniversalScrollReveal } from "@/hooks/useUniversalScrollReveal";

const CultureContent = () => {
  const { elementRef: heroRef, style: heroStyle } = useUniversalScrollReveal();
  const { elementRef: descRef, style: descStyle } = useUniversalScrollReveal();
  const { elementRef: principlesRef, style: principlesStyle } =
    useUniversalScrollReveal();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section
        className="overflow-hidden relative bg-black pt-24 lg:w-[85%]"
        ref={heroRef}
        style={heroStyle}
      >
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-20">
          <div className="">
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
              DYNA's Culture Marries Big Ambition With Disciplined Execution.
            </h2>
          </div>
        </div>
      </section>
      <section
        className="w-full lg:w-[85%] py-0"
        ref={descRef}
        style={descStyle}
      >
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="pt-4 sm:pt-8 pb-6 sm:pb-8">
            <div className="">
              <p
                className="leading-relaxed"
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "clamp(16px, 5vw, 20px)",
                  color: "#ffffff",
                  fontWeight: "normal",
                  lineHeight: "1.6",
                }}
              >
                We hire people who push the boundaries of AGI yet stay grounded
                in commercial impact, who debate hard ideas without hardening
                egos, and who move fast because speed is a startup's greatest
                advantage. The four principles below define how we work together
                every day—and how we build a team that learns fast, builds
                boldly, and stays focused on what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture in Four Principles Section */}
      <section
        className="w-full lg:w-[85%] py-0 mt-2"
        ref={principlesRef}
        style={principlesStyle}
      >
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="pt-12 pb-6 sm:pb-8">
            <div className="space-y-8">
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
                Our Culture in Four Principles
              </h2>

              <div className="space-y-8">
                {/* Principle 1 */}
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
                    1. Aim High, Stay Grounded
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "ABCDiatypeMedium, sans-serif",
                      fontSize: "clamp(16px, 5vw, 20px)",
                      color: "#ffffff",
                    }}
                  >
                    We set extremely ambitious goals that inspire us, and
                    support them with disciplined execution to deliver
                    measurable real-world impact. We don't chase hype; we build
                    systems that perform. When we commit to a vision, we go
                    deep, put in the hard work, and make it real.
                  </p>
                </div>

                {/* Principle 2 */}
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
                    2. Sharp Minds, Low Egos
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "ABCDiatypeMedium, sans-serif",
                      fontSize: "clamp(16px, 5vw, 20px)",
                      color: "#ffffff",
                    }}
                  >
                    We value clear thinking, innovative ideas, and strong
                    convictions. We engage in rigorous (and low ego) debates,
                    make quick decisions, and prioritize team success over
                    individual recognition. Our focus is on discovering what is
                    right, not on who is right. We prioritize impact over egos.
                  </p>
                </div>

                {/* Principle 3 */}
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
                    3. Open‑Mindedness Fuels Novelty
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "ABCDiatypeMedium, sans-serif",
                      fontSize: "clamp(16px, 5vw, 20px)",
                      color: "#ffffff",
                    }}
                  >
                    Curiosity drives breakthroughs. We challenge assumptions,
                    invite diverse perspectives, and actively pursue ideas that
                    move paradigms. While we debate thoughtfully, we maintain a
                    bias toward pursuing 10x solutions that push boundaries. We
                    listen to learn, swiftly align, and decisively execute.
                  </p>
                </div>

                {/* Principle 4 */}
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
                    4. Relentless Urgency, Driven by Obsession
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "ABCDiatypeMedium, sans-serif",
                      fontSize: "clamp(16px, 5vw, 20px)",
                      color: "#ffffff",
                    }}
                  >
                    We move with unmatched velocity, because extreme urgency
                    turns ambitious ideas into reality. Our unwavering obsession
                    pushes the boundaries of what's possible, fueling our
                    pursuit to build first-of-their-kind products. We don't slow
                    down for permission or perfection—we ship boldly, iterate
                    fiercely, and relentlessly chase exceptional outcomes. For
                    DYNA, urgency and obsession aren't preferences; they're
                    necessities to navigate the frontier of Physical AGI and
                    become its undisputed leader.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-20">
          <div className="max-w-4xl md:pb-12 pb-8 pt-12">
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
              Meet the DYNA Team
            </h2>
          </div>
          <div className="hidden lg:block lg:w-[85%]">
            <div
              className="relative group cursor-pointer overflow-hidden hover-lift-enhanced w-full"
              style={{
                height: "550px",
              }}
            >
              <img
                src="/lovable-uploads/d9ffd18f-9824-43f8-a87e-e3afaf759c16.png"
                alt="DYNA Team"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Mobile Layout - Hidden on desktop */}
          <div className="block lg:hidden">
            {/* Research Section */}

            {/* Stories Card */}
            <div className="flex flex-col">
              <div
                className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                style={{
                  width: "100%",
                }}
              >
                <img
                  src="/lovable-uploads/d9ffd18f-9824-43f8-a87e-e3afaf759c16.png"
                  alt="DYNA Team"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CultureContent;
