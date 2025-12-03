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

        <div className="hidden lg:block">
          <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
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
                    Blog
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <div className="">
                {/* Stories Subtitle */}
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
                    Insights and updates from the DYNA team.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-16">
                {/* Stories Card */}
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                    onClick={() =>
                      navigate("/blog/dyna-robotics-closes-120m-series-a")
                    }
                    style={{
                      height: "745px",
                      width: "100%",
                    }}
                  >
                    <img
                      src="/lovable-uploads/founders.jpg"
                      alt="DYNA Fundraising"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h2
                        className="leading-tight"
                        style={{
                          color: "white",
                          margin: "0px",
                          fontSize: "clamp(20px, 5vw, 24px)",
                          fontWeight: "500",
                          width: "70%",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        Dyna Robotics Closes $120M Series A: How We Think About
                        Scaling Robotic Foundation Models
                      </h2>
                      <div
                        style={{
                          color: "white",
                          fontWeight: "normal",
                          fontSize: "clamp(20px, 5vw, 24px)",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        SEP 15 '25
                      </div>
                    </div>

                    <p
                      className="leading-relaxed mb-4"
                      style={{
                        color: "white",
                        fontWeight: "normal",
                        fontSize: "clamp(14px, 4vw, 20px)",
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                      }}
                    >
                      DYNA raised $120M and unveiled five first principles for
                      scaling embodied AI, combining generalization,
                      distribution, ROI, data and iteration.
                    </p>

                    <button
                      onClick={() =>
                        navigate("/blog/dyna-robotics-closes-120m-series-a")
                      }
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
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced border border-white"
                    onClick={() => navigate("/dyna-2/research")}
                    style={{
                      height: "745px",
                      width: "100%",
                    }}
                  >
                    {/* <img
                      src="/lovable-uploads/founders.jpg"
                      alt="DYNA Fundraising"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    /> */}
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h2
                        className="leading-tight"
                        style={{
                          color: "white",
                          margin: "0px",
                          fontSize: "clamp(20px, 5vw, 24px)",
                          fontWeight: "500",
                          width: "70%",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Est, ex quis, necessitatibus cum suscipit
                      </h2>
                      <div
                        style={{
                          color: "white",
                          fontWeight: "normal",
                          fontSize: "clamp(20px, 5vw, 24px)",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        lorem
                      </div>
                    </div>

                    <p
                      className="leading-relaxed mb-4"
                      style={{
                        color: "white",
                        fontWeight: "normal",
                        fontSize: "clamp(14px, 4vw, 20px)",
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus, incidunt.
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
              </div>
            </div>
          </section>
          {/* Header Section */}
          <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
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
              <div className="">
                {/* Stories Subtitle */}
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
                    Press features and media coverage of DYNA
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-16">
                {/* Stories Card */}
                <div className="flex flex-col">
                  <div
                    className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                    onClick={() =>
                      window.open(
                        "https://fortune.com/2025/03/25/exclusive-instacart-smart-cart-startup-350m-google-deepmind-low-cost-robots/",
                        "_blank"
                      )
                    }
                    style={{
                      height: "650px",
                      width: "100%",
                    }}
                  >
                    <img
                      src="/lovable-uploads/founders-future.jpg"
                      alt="DYNA Founders"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-start justify-between  mb-2 h-28">
                      <h2
                        className=" leading-none"
                        style={{
                          color: "white",
                          margin: "0px",
                          fontSize: "clamp(20px, 5vw, 24px)",
                          fontWeight: "500",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        DYNA Founders & Fortune Feature
                      </h2>
                      <div
                        className=""
                        style={{
                          color: "white",
                          fontWeight: "normal",
                          fontSize: "clamp(20px, 5vw, 24px)",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        MAR 25 '25
                      </div>
                    </div>

                    <p
                      className="leading-relaxed mb-4 h-30"
                      style={{
                        color: "white",
                        fontWeight: "normal",
                        fontSize: "clamp(14px, 4vw, 20px)",
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                      }}
                    >
                      Exclusive: Instacart bought his self-checkout startup for
                      $350M. Now he's teaming with a Google DeepMind alum to
                      build low-cost robots.
                    </p>

                    <button
                      onClick={() =>
                        window.open(
                          "https://fortune.com/2025/03/25/exclusive-instacart-smart-cart-startup-350m-google-deepmind-low-cost-robots/",
                          "_blank"
                        )
                      }
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

                <div className="flex flex-col">
                  <div
                    className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                    onClick={() =>
                      window.open(
                        "https://www.prnewswire.com/news-releases/dyna-robotics-raises-120-million-to-advance-robotic-foundation-models-on-the-path-to-physical-artificial-general-intelligence-302556817.html",
                        "_blank"
                      )
                    }
                    style={{
                      height: "650px",
                      width: "100%",
                    }}
                  >
                    <img
                      src="/lovable-uploads/dyna-robot.jpg"
                      alt="DYNA Founders"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-start justify-between mb-2 h-28">
                      <h2
                        className="leading-tight"
                        style={{
                          width: "80%",
                          color: "white",
                          margin: "0px",
                          fontSize: "clamp(20px, 5vw, 24px)",
                          fontWeight: "500",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        Dyna Robotics Closes $120 Million To Advance Robotic
                        Foundation Models On The Path To Pysical Artificial
                        General Intelligence
                      </h2>
                      <div
                        style={{
                          color: "white",
                          fontWeight: "normal",
                          fontSize: "clamp(20px, 5vw, 24px)",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        SEP 15 '25
                      </div>
                    </div>

                    <p
                      className="leading-relaxed mb-4 h-30"
                      style={{
                        color: "white",
                        fontWeight: "normal",
                        fontSize: "clamp(14px, 4vw, 20px)",
                        fontFamily:
                          "UntitledSans, system-ui, -apple-system, sans-serif",
                      }}
                    >
                      DYNA raised $120M led by Robostrategy, CRV, and First
                      Round to scale embodied AI robots achieving 99%+
                      commercial performance.
                    </p>

                    <button
                      onClick={() =>
                        window.open(
                          "https://www.prnewswire.com/news-releases/dyna-robotics-raises-120-million-to-advance-robotic-foundation-models-on-the-path-to-physical-artificial-general-intelligence-302556817.html",
                          "_blank"
                        )
                      }
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
              </div>
            </div>
          </section>
        </div>

        {/* Mobile Layout - Hidden on desktop */}
        <div className="block lg:hidden">
          {/* Stories Section */}
          <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
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
                  Blog
                </h1>
              </div>

              {/* Stories Subtitle */}
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
                  Insights and updates from the DYNA team.
                </p>
              </div>

              <section className="w-full py-0">
                <div className="">
                  <div className="">
                    {/* Stories Card */}
                    <div className="flex flex-col mb-8">
                      <div
                        className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                        onClick={() =>
                          navigate("/blog/dyna-robotics-closes-120m-series-a")
                        }
                        style={{
                          // height: "650px",
                          width: "100%",
                        }}
                      >
                        <img
                          src="/lovable-uploads/founders.jpg"
                          alt="DYNA Fundraising"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                            Dyna Robotics Closes $120M Series A: How We Think
                            About Scaling Robotic Foundation Models
                          </h2>
                        </div>

                        <p
                          className="leading-relaxed mb-4"
                          style={{
                            color: "white",
                            fontWeight: "normal",
                            fontSize: "clamp(14px, 4vw, 20px)",
                            fontFamily:
                              "UntitledSans, system-ui, -apple-system, sans-serif",
                          }}
                        >
                          DYNA raised $120M and unveiled five first principles
                          for scaling embodied AI, combining generalization,
                          distribution, ROI, data and iteration.
                        </p>

                        <div
                          className="mb-4"
                          style={{
                            color: "white",
                            fontWeight: "normal",
                            fontSize: "clamp(14px, 4vw, 20px)",
                            fontFamily:
                              "UntitledSans, system-ui, -apple-system, sans-serif",
                          }}
                        >
                          SEP 15 '25
                        </div>

                        <button
                          onClick={() =>
                            navigate("/blog/dyna-robotics-closes-120m-series-a")
                          }
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

                    <div className="flex flex-col mb-8">
                      <div
                        className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced border border-white"
                        onClick={() => navigate("/dyna-2/research")}
                        style={{
                          // height: "650px",
                          width: "100%",
                        }}
                      >
                        {/* <img
                          src="/lovable-uploads/founders.jpg"
                          alt="DYNA Fundraising"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        /> */}
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Est, ex quis, necessitatibus cum suscipit
                          </h2>
                        </div>

                        <p
                          className="leading-relaxed mb-4"
                          style={{
                            color: "white",
                            fontWeight: "normal",
                            fontSize: "clamp(14px, 4vw, 20px)",
                            fontFamily:
                              "UntitledSans, system-ui, -apple-system, sans-serif",
                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellendus, incidunt.
                        </p>

                        <div
                          className="mb-4"
                          style={{
                            color: "white",
                            fontWeight: "normal",
                            fontSize: "clamp(14px, 4vw, 20px)",
                            fontFamily:
                              "UntitledSans, system-ui, -apple-system, sans-serif",
                          }}
                        >
                          lorem
                        </div>

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
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
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
                    fontSize: "clamp(14px, 4vw, 20px)",
                    fontWeight: "normal",
                    lineHeight: "1.6",
                    color: "white",
                  }}
                >
                  Press features and media coverage of DYNA
                </p>
              </div>

              {/* Stories Card */}
              <div className="flex flex-col">
                <div
                  className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                  onClick={() =>
                    window.open(
                      "https://fortune.com/2025/03/25/exclusive-instacart-smart-cart-startup-350m-google-deepmind-low-cost-robots/",
                      "_blank"
                    )
                  }
                >
                  <img
                    src="/lovable-uploads/founders-future.jpg"
                    alt="DYNA Founders"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                      DYNA Founders & Fortune Feature
                    </h2>
                  </div>

                  <p
                    className="leading-relaxed mb-4"
                    style={{
                      color: "white",
                      fontSize: "clamp(14px, 4vw, 20px)",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                    }}
                  >
                    Exclusive: Instacart bought his self-checkout startup for
                    $350M. Now he's teaming with a Google DeepMind alum to build
                    low-cost robots.
                  </p>

                  <div
                    className="mb-4"
                    style={{
                      color: "white",
                      fontWeight: "normal",
                      fontSize: "clamp(14px, 4vw, 20px)",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                    }}
                  >
                    MAR 25 '25
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        "https://fortune.com/2025/03/25/exclusive-instacart-smart-cart-startup-350m-google-deepmind-low-cost-robots/",
                        "_blank"
                      )
                    }
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
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <div
                className="relative group cursor-pointer overflow-hidden mb-4 hover-lift-enhanced"
                onClick={() =>
                  window.open(
                    "https://www.prnewswire.com/news-releases/dyna-robotics-raises-120-million-to-advance-robotic-foundation-models-on-the-path-to-physical-artificial-general-intelligence-302556817.html",
                    "_blank"
                  )
                }
                style={{
                  // height: "650px",
                  width: "100%",
                }}
              >
                <img
                  src="/lovable-uploads/dyna-robot.jpg"
                  alt="DYNA Founders"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    Dyna Robotics Closes $120 Million How We Scale Robotic
                    Foundation Model On The Path To Pysical Artificial General
                    Intelligence
                  </h2>
                </div>

                <p
                  className="leading-relaxed mb-4"
                  style={{
                    color: "white",
                    fontWeight: "normal",
                    fontSize: "clamp(14px, 4vw, 20px)",
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                  }}
                >
                  Dyna Robotics secures $120M in Series A funding from
                  world-class investors to accelerate embodied AI and scale
                  deployment-first robotics.
                </p>

                <div
                  className="mb-4"
                  style={{
                    color: "white",
                    fontWeight: "normal",
                    fontSize: "clamp(14px, 4vw, 20px)",
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                  }}
                >
                  SEP 22 '25
                </div>

                <button
                  onClick={() =>
                    window.open(
                      "https://www.prnewswire.com/news-releases/dyna-robotics-raises-120-million-to-advance-robotic-foundation-models-on-the-path-to-physical-artificial-general-intelligence-302556817.html",
                      "_blank"
                    )
                  }
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
          </section>
        </div>
      </main>
    </div>
  );
};

export default Blog;
