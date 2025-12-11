import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollEffects } from "@/hooks/useScrollEffects";
import { useUniversalScrollReveal } from "@/hooks/useUniversalScrollReveal";
import { useNavigate } from "react-router-dom";

const Research = () => {
  const navigate = useNavigate();
  useScrollEffects();
  const { elementRef: mainTitleRef, style: mainTitleStyle } =
    useUniversalScrollReveal();
  const { elementRef: storiesTitleRef, style: storiesTitleStyle } =
    useUniversalScrollReveal();
  const { elementRef: mainDescRef, style: mainDescStyle } =
    useUniversalScrollReveal();
  const { elementRef: storiesDescRef, style: storiesDescStyle } =
    useUniversalScrollReveal();

  const blogPosts = [
    {
      id: 1,
      title: "Dyna-1: A Breakthrough in Real-World Dexterity",
      date: "June 24, 2025",
      summary:
        "Dyna-1 sustained a 24-hour deployment folding 850+ napkins autonomously — holding a 99.4% success rate at 60% of human speed, with zero resets.",
      slug: "dyna-1-breakthrough-real-world-dexterity",
      externalUrl: "/dyna-1/research",
      imageUrl: "/lovable-uploads/64eeb563-e7dc-4367-b1ae-7e649cae6e56.webp",
    },
    {
      id: 2,
      title: "Scaling Robotic Learning: From Simulation to Production",
      date: "May 15, 2025",
      summary:
        "How we bridged the sim-to-real gap using foundation models and continual learning approaches that work in unstructured environments.",
      slug: "scaling-robotic-learning-simulation-production",
      imageUrl: "/lovable-uploads/64eeb563-e7dc-4367-b1ae-7e649cae6e56.webp",
    },
    {
      id: 3,
      title: "Error Recovery in Autonomous Systems",
      date: "April 8, 2025",
      summary:
        "Deep dive into Dyna's real-time error detection and recovery mechanisms that enable 99.4% success rates in commercial deployments.",
      slug: "error-recovery-autonomous-systems",
      imageUrl: "/lovable-uploads/64eeb563-e7dc-4367-b1ae-7e649cae6e56.webp",
    },
  ];

  const handleBlogClick = (post: (typeof blogPosts)[0]) => {
    if (post.externalUrl) {
      window.open(post.externalUrl, "_blank");
    } else {
      console.log(`Navigate to blog post: ${post.slug}`);
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Research - DYNA Robotics | Research</title>
        <meta
          name="description"
          content="Explore the technical breakthroughs and real-world engineering behind DYNA's foundation model. Learn about our vision-language-action systems trained directly in real environments, not simulation."
        />
        <meta
          name="keywords"
          content="robotics research, DYNA-1 model, vision-language-action, real-world training, robotic learning, foundation models, robotics engineering"
        />
        <meta
          property="og:title"
          content="Research - DYNA Robotics | Research"
        />
        <meta
          property="og:description"
          content="Technical breakthroughs behind DYNA's foundation model built for autonomy at scale. Advanced vision-language-action systems trained in real environments."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Research - DYNA Robotics | Research"
        />
        <meta
          name="twitter:description"
          content="Technical breakthroughs behind DYNA's foundation model built for autonomy at scale. Advanced vision-language-action systems trained in real environments."
        />
        <link rel="canonical" href="https://www.dyna.co/research" />
        {/* Preload critical images for faster loading */}
        <link
          rel="preload"
          as="image"
          href="/lovable-uploads/c2ef3d22-19b4-4693-9c17-ff0bcc54965f.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/lovable-uploads/827da4e4-f5f8-47d7-b968-b290cead8b90.webp"
          type="image/webp"
        />
      </Helmet>
      <Navbar />
      <main className="mb-16">
        {/* Social Media Links */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
            <div className="flex justify-end mb-8">
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/dynarobotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-transform duration-300 hover:scale-110"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-opacity duration-300 group-hover:opacity-80"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/dyna-robotics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-transform duration-300 hover:scale-110"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-opacity duration-300 group-hover:opacity-80"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden lg:block">
          {/* Header Section */}
          <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                {/* Research Title */}
                <div className="text-left">
                  <h1
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
                    Research
                  </h1>
                </div>

                {/* Stories Title */}
                {/* <div className="text-left">
                  <h1
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
                    Blog
                  </h1>
                </div> */}
              </div>
            </div>
          </section>

          {/* Subtitle Section */}
          <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <div className="">
                {/* Research Subtitle */}
                <div className="text-left">
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontSize: "clamp(14px, 4vw, 20px)",
                      fontWeight: "normal",
                      lineHeight: "1.6",
                      color: "white",
                    }}
                  >
                    Explore the technical breakthroughs and real-world
                    engineering behind DYNA's foundation model — built for
                    autonomy at scale.
                  </p>
                </div>

                {/* Stories Subtitle */}
                {/* <div className="text-left">
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontSize: "clamp(14px, 4vw, 20px)",
                      fontWeight: "normal",
                      lineHeight: "1.6",
                      color: "white",
                    }}
                  >
                    The people, funding, and real-world ambition behind DYNA.
                  </p>
                </div> */}
              </div>
            </div>
          </section>

          {/* Content Cards Section */}
          <section className="w-full py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Research Card */}
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                    onClick={() => handleBlogClick(blogPosts[0])}
                    style={{
                      height: "650px",
                      width: "100%",
                    }}
                  >
                    <img
                      src="/lovable-uploads/newresearch.png"
                      alt="DYNA Robot Research"
                      className="w-full h-[650px] transition-transform duration-500 group-hover:scale-105"
                      style={{
                        objectFit: "cover",
                      }}
                      fetchPriority="high"
                      decoding="async"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h2
                        style={{
                          color: "white",
                          margin: "0px",
                          fontSize: "clamp(20px, 5vw, 24px)",
                          fontWeight: "500",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        DYNA-1 Model
                      </h2>
                      <div
                        style={{
                          color: "white",
                          fontSize: "clamp(20px, 5vw, 24px)",
                          fontWeight: "normal",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        JUN 15 '25
                      </div>
                    </div>

                    <p
                      className="leading-relaxed mb-4"
                      style={{
                        color: "white",
                        fontSize: "clamp(14px, 4vw, 20px)",
                        fontWeight: "normal",
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                      }}
                    >
                      DYNA-1 is built on advanced vision-language-action systems
                      and trained directly in real environments — no simulation
                      shortcuts.
                    </p>

                    <button
                      onClick={() => navigate("/dyna-1/research")}
                      className="group inline-flex items-center gap-2 transition-all duration-300 hover:gap-3 text-white self-start"
                    >
                      <span
                        style={{
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                          fontSize: "clamp(14px, 4vw, 20px)",
                          textDecoration: "underline",
                          textUnderlineOffset: "4px",
                          textDecorationThickness: "1px",
                        }}
                      >
                        Read More
                      </span>
                      <div className="w-6 h-6 rounded-full border-white border flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                        <svg
                          width="12"
                          height="12"
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

                {/* Second Research Card - Dummy Content */}
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                    onClick={() => navigate("/dyna-2/research")}
                    style={{
                      height: "650px",
                      width: "100%",
                    }}
                  >
                    <img
                      src="/lovable-uploads/researchnew.PNG"
                      alt="DYNA Robot Multi-Task Learning"
                      className="w-full h-[650px] transition-transform duration-500 group-hover:scale-105"
                      style={{
                        objectFit: "cover",
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h2
                        style={{
                          color: "white",
                          margin: "0px",
                          fontSize: "clamp(20px, 5vw, 24px)",
                          fontWeight: "500",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        Multi-Task Generalization
                      </h2>
                      <div
                        style={{
                          color: "white",
                          fontSize: "clamp(20px, 5vw, 24px)",
                          fontWeight: "normal",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        AUG 22 '25
                      </div>
                    </div>

                    <p
                      className="leading-relaxed mb-4"
                      style={{
                        color: "white",
                        fontSize: "clamp(14px, 4vw, 20px)",
                        fontWeight: "normal",
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                      }}
                    >
                      Exploring how DYNA achieves zero-shot transfer across diverse manipulation tasks using unified policy representations.
                    </p>

                    <button
                      onClick={() => navigate("/dyna-2/research")}
                      className="group inline-flex items-center gap-2 transition-all duration-300 hover:gap-3 text-white self-start"
                    >
                      <span
                        style={{
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                          fontSize: "clamp(14px, 4vw, 20px)",
                          textDecoration: "underline",
                          textUnderlineOffset: "4px",
                          textDecorationThickness: "1px",
                        }}
                      >
                        Read More
                      </span>
                      <div className="w-6 h-6 rounded-full border-white border flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                        <svg
                          width="12"
                          height="12"
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

              {/* Second Research Card - Dummy Content (Mobile) */}
              <div className="flex flex-col mb-16">
                <div
                  className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                  onClick={() => navigate("/dyna-2/research")}
                  style={{
                    width: "100%",
                  }}
                >
                  <img
                    src="/lovable-uploads/researchnew.PNG"
                    alt="DYNA Robot Multi-Task Learning"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="mb-2">
                    <h2
                      style={{
                        color: "white",
                        margin: "0px",
                        fontSize: "clamp(20px, 5vw, 24px)",
                        fontWeight: "500",
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                      }}
                    >
                      Multi-Task Generalization
                    </h2>
                  </div>

                  <p
                    className="leading-relaxed mb-4"
                    style={{
                      color: "white",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontSize: "clamp(14px, 4vw, 20px)",
                    }}
                  >
                    Exploring how DYNA achieves zero-shot transfer across diverse manipulation tasks using unified policy representations.
                  </p>

                  <div
                    className="mb-4"
                    style={{
                      color: "white",
                      fontSize: "clamp(14px, 4vw, 20px)",
                      fontWeight: "normal",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                    }}
                  >
                    AUG 22 '25
                  </div>

                  <button
                    onClick={() => navigate("/dyna-2/research")}
                    className="group inline-flex items-center gap-2 transition-all duration-300 hover:gap-3 text-white self-start"
                  >
                    <span
                      className="text-sm font-medium text-white"
                      style={{
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                        textDecorationThickness: "1px",
                      }}
                    >
                      Read More
                    </span>
                    <div className="w-6 h-6 rounded-full border-white border flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                      <svg
                        width="12"
                        height="12"
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
          </section>
        </div>

        {/* Mobile Layout - Hidden on desktop */}
        <div className="block lg:hidden">
          {/* Research Section */}
          <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              {/* Research Title */}
              <div className="text-left mb-6">
                <h1
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
                  Research
                </h1>
              </div>

              {/* Research Subtitle */}
              <div className="text-left mb-8">
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                    fontSize: "clamp(14px, 4vw, 20px)",
                    fontWeight: "normal",
                    lineHeight: "1.6",
                    color: "white",
                  }}
                >
                  Explore the technical breakthroughs and real-world engineering
                  behind DYNA's foundation model — built for autonomy at scale.
                </p>
              </div>

              {/* Research Card */}
              <div className="flex flex-col mb-16">
                <div
                  className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                  onClick={() => handleBlogClick(blogPosts[0])}
                  style={{
                    width: "100%",
                  }}
                >
                  <img
                    src="/lovable-uploads/newresearch.png"
                    alt="DYNA Robot Research"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="mb-2">
                    <h2
                      style={{
                        color: "white",
                        margin: "0px",
                        fontSize: "clamp(20px, 5vw, 24px)",
                        fontWeight: "500",
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                      }}
                    >
                      DYNA-1 Model
                    </h2>
                  </div>

                  <p
                    className="leading-relaxed mb-4"
                    style={{
                      color: "white",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontSize: "clamp(14px, 4vw, 20px)",
                    }}
                  >
                    DYNA-1 is built on advanced vision-language-action systems
                    and trained directly in real environments — no simulation
                    shortcuts.
                  </p>

                  <div
                    className="mb-4"
                    style={{
                      color: "white",
                      fontSize: "clamp(14px, 4vw, 20px)",
                      fontWeight: "normal",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                    }}
                  >
                    JUN 15 '25
                  </div>

                  <button
                    onClick={() => navigate("/dyna-1/research")}
                    className="group inline-flex items-center gap-2 transition-all duration-300 hover:gap-3 text-white self-start"
                  >
                    <span
                      className="text-sm font-medium text-white"
                      style={{
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                        textDecorationThickness: "1px",
                      }}
                    >
                      Read More
                    </span>
                    <div className="w-6 h-6 rounded-full border-white border flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                      <svg
                        width="12"
                        height="12"
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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
