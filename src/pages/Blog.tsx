import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: "Dyna Robotics Closes $120M Series A: How We Think About Scaling Robotic Foundation Models",
      date: "SEP 15 '25",
      imageUrl: "/lovable-uploads/founders.jpg",
      imageAlt: "DYNA Fundraising",
      navigateTo: "/blog/dyna-robotics-closes-120m-series-a",
    },
  ];

  const storyPosts = [
    {
      title: "Exclusive: Instacart bought his self-checkout startup for $350M. Now he's teaming with a Google DeepMind alum to build low-cost robots",
      date: "MAR 25 '25",
      imageUrl: "/lovable-uploads/founders-future.jpg",
      imageAlt: "DYNA Founders",
      externalUrl: "https://fortune.com/2025/03/25/exclusive-instacart-smart-cart-startup-350m-google-deepmind-low-cost-robots/",
    },
    {
      title: "Dyna Robotics Closes $120 Million To Advance Robotic Foundation Models On The Path To Physical Artificial General Intelligence",
      date: "SEP 15 '25",
      imageUrl: "/lovable-uploads/dyna-robot.jpg",
      imageAlt: "DYNA Robot",
      externalUrl: "https://www.prnewswire.com/news-releases/dyna-robotics-raises-120-million-to-advance-robotic-foundation-models-on-the-path-to-physical-artificial-general-intelligence-302556817.html",
    },
    {
      title: "How Monster Laundry Scaled Its Laundromat Operations with DYNA",
      date: "OCT 10 '25",
      imageUrl: "/lovable-uploads/monster-laundry-thumbnail.png",
      imageAlt: "Monster Laundry with DYNA robots",
      navigateTo: "/blog/monster-laundry",
    },
  ];

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

        {/* Insights & Coverage Section */}
        <section className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="text-left">
              <h1
                className="leading-tight"
                style={{
                  fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
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
        </section>

        <section className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="text-left">
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "clamp(14px, 4vw, 20px)",
                  fontWeight: "normal",
                  lineHeight: "1.6",
                  color: "white",
                }}
              >
                Insights and updates from the DYNA team
              </p>
            </div>
          </div>
        </section>

        {/* All Posts Grid - 2 columns */}
        <section className="w-full py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              {[...blogPosts, ...storyPosts].map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  date={post.date}
                  imageUrl={post.imageUrl}
                  imageAlt={post.imageAlt}
                  navigateTo={post.navigateTo}
                  externalUrl={'externalUrl' in post ? post.externalUrl : undefined}
                />
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Blog;
