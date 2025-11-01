import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import CareersHero from "@/components/careers/CareersHero";
import Footer from "@/components/Footer";
import JobListings from "@/components/careers/JobListings";

const Careers = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Careers - DYNA Robotics | Join the Future of Commercial Robotics
        </title>
        <meta
          name="description"
          content="Join DYNA Robotics and help build the future of commercial automation. Explore engineering, research, and business opportunities with our innovative robotics team."
        />
        <meta
          name="keywords"
          content="robotics jobs, DYNA careers, engineering jobs, robotics engineer, automation careers, tech careers, startup jobs"
        />
        <meta
          property="og:title"
          content="Careers - DYNA Robotics | Join the Future of Commercial Robotics"
        />
        <meta
          property="og:description"
          content="Join DYNA Robotics and help build the future of commercial automation. Explore opportunities with our innovative robotics team."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Careers - DYNA Robotics | Join the Future of Commercial Robotics"
        />
        <meta
          name="twitter:description"
          content="Join DYNA Robotics and help build the future of commercial automation. Explore opportunities with our innovative robotics team."
        />
        <link rel="canonical" href="https://www.dyna.co/careers" />
      </Helmet>
      <Navbar />
      <main>
        <CareersHero />
        <JobListings />
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
