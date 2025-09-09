import Navbar from "@/components/Navbar";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Blog - DYNA Robotics | Blog</title>
        <meta
          name="description"
          content="Explore the technical breakthroughs and real-world engineering behind DYNA's foundation model. Learn about our vision-language-action systems trained directly in real environments, not simulation."
        />
        <meta
          name="keywords"
          content="robotics research, DYNA-1 model, vision-language-action, real-world training, robotic learning, foundation models, robotics engineering"
        />
        <meta property="og:title" content="Blog - DYNA Robotics | Blog" />
        <meta
          property="og:description"
          content="Technical breakthroughs behind DYNA's foundation model built for autonomy at scale. Advanced vision-language-action systems trained in real environments."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - DYNA Robotics | Blog" />
        <meta
          name="twitter:description"
          content="Technical breakthroughs behind DYNA's foundation model built for autonomy at scale. Advanced vision-language-action systems trained in real environments."
        />
        <link rel="canonical" href="https://www.dyna.co/blog" />
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
        <div className="hidden lg:block">
          {/* Header Section */}
          <section className="w-full pt-24">
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
                    Blog
                  </h1>
                </div>

                {/* Stories Title */}
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
                    Stories
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Research Subtitle */}
                <div className="text-left">
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontSize: "clamp(16px, 5vw, 20px)",
                      fontWeight: "normal",
                      lineHeight: "1.6",
                      color: "white",
                    }}
                  >
                    News, insights, and updates from the DYNA team.
                  </p>
                </div>

                {/* Stories Subtitle */}
                <div className="text-left">
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontSize: "clamp(16px, 5vw, 20px)",
                      fontWeight: "normal",
                      lineHeight: "1.6",
                      color: "white",
                    }}
                  >
                    Press features and coverage about DYNA in the world.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Research Card */}
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
                      src="/lovable-uploads/research.jpg"
                      alt="DYNA Robot Research"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                          fontSize: "clamp(16px, 5vw, 20px)",
                          fontWeight: "normal",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        DYNA-2 Model
                      </h2>
                      <div
                        style={{
                          color: "white",
                          fontSize: "clamp(16px, 5vw, 20px)",
                          fontWeight: "normal",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        SEP 16 '25
                      </div>
                    </div>

                    <p
                      className="leading-relaxed mb-4"
                      style={{
                        color: "white",
                        fontSize: "clamp(16px, 5vw, 20px)",
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                      }}
                    >
                      News, insights, and updates from the DYNA team.
                    </p>

                    <button
                      onClick={() => navigate("/dyna-2/research")}
                      className="group inline-flex items-center gap-2 transition-all duration-300 hover:gap-3 text-white self-start"
                    >
                      <span
                        style={{
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                          fontSize: "clamp(16px, 5vw, 20px)",
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

                {/* Stories Card */}
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                    onClick={() => navigate("/fundraising")}
                    style={{
                      height: "650px",
                      width: "100%",
                    }}
                  >
                    <img
                      src="/lovable-uploads/research.jpg"
                      alt="DYNA Founders"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                          fontSize: "clamp(16px, 5vw, 20px)",
                          fontWeight: "normal",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        DYNA Founders & Fortune Feature
                      </h2>
                      <div
                        style={{
                          color: "white",
                          fontWeight: "normal",
                          fontSize: "clamp(16px, 5vw, 20px)",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        MAR 25 '25
                      </div>
                    </div>

                    <p
                      className="leading-relaxed mb-4"
                      style={{
                        color: "white",
                        fontWeight: "normal",
                        fontSize: "clamp(16px, 5vw, 20px)",
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                      }}
                    >
                      Exclusive: Instacart bought his self-checkout startup for
                      $350M. Now he's teaming with a Google DeepMind alum to
                      build low-cost robots.
                    </p>

                    <button
                      onClick={() => navigate("/fundraising")}
                      className="group inline-flex items-center gap-2 transition-all duration-300 hover:gap-3 text-white self-start"
                    >
                      <span
                        style={{
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                          fontSize: "clamp(16px, 5vw, 20px)",
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
          {/* Blog Section */}
          <section className="w-full pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              {/* Blog Title */}
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
                  Blog
                </h1>
              </div>

              {/* Blog Subtitle */}
              <div className="text-left mb-8">
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                    fontSize: "clamp(16px, 5vw, 20px)",
                    fontWeight: "normal",
                    lineHeight: "1.6",
                    color: "white",
                  }}
                >
                  News, insights, and updates from the DYNA team.
                </p>
              </div>

              {/* Blog Card */}
              <div className="flex flex-col mb-16">
                <div
                  className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                  onClick={() => navigate("/dyna-2/research")}
                  style={{
                    width: "100%",
                  }}
                >
                  <img
                    src="/lovable-uploads/research.jpg"
                    alt="DYNA Robot Research"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h2
                      className="text-base"
                      style={{
                        color: "white",
                        margin: "0px",
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                      }}
                    >
                      DYNA-2 Model
                    </h2>
                    <div
                      className="text-xs font-light"
                      style={{
                        color: "white",
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                      }}
                    >
                      SEP 16 '25
                    </div>
                  </div>

                  <p
                    className="leading-relaxed mb-4"
                    style={{
                      color: "white",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontSize: "clamp(16px, 5vw, 20px)",
                    }}
                  >
                    News, insights, and updates from the DYNA team.
                  </p>

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

              {/* Stories Title */}
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
                  Stories
                </h1>
              </div>

              {/* Stories Subtitle */}
              <div className="text-left mb-8">
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                    fontSize: "clamp(16px, 5vw, 20px)",
                    fontWeight: "normal",
                    lineHeight: "1.6",
                    color: "white",
                  }}
                >
                  Press features and coverage about DYNA in the world.
                </p>
              </div>

              {/* Stories Card */}
              <div className="flex flex-col">
                <div
                  className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                  onClick={() => navigate("/fundraising")}
                  style={{
                    width: "100%",
                  }}
                >
                  <img
                    src="/lovable-uploads/research.jpg"
                    alt="DYNA Founders"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h2
                      className="text-base"
                      style={{ color: "white", margin: "0px" }}
                    >
                      DYNA Founders & Fortune Feature
                    </h2>
                    <div
                      className="text-xs font-light"
                      style={{ color: "white" }}
                    >
                      MAR 25 '25
                    </div>
                  </div>

                  <p
                    className="leading-relaxed mb-4"
                    style={{
                      color: "white",
                      fontSize: "clamp(16px, 5vw, 20px)",
                    }}
                  >
                    Exclusive: Instacart bought his self-checkout startup for
                    $350M. Now he's teaming with a Google DeepMind alum to build
                    low-cost robots.
                  </p>

                  <button
                    onClick={() => navigate("/fundraising")}
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
    </div>
  );
};

export default Blog;
