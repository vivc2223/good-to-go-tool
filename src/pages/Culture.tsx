import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import CultureContent from "@/components/CultureContent";
import Footer from "@/components/Footer";
import { useScrollEffects } from "@/hooks/useScrollEffects";

const Culture = () => {
  useScrollEffects();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Culture - DYNA Robotics | Innovation-Driven Team Building the Future
        </title>
        <meta
          name="description"
          content="Discover DYNA's culture of innovation, collaboration, and excellence. Join our team of engineers, researchers, and visionaries building the future of commercial robotics."
        />
        <meta
          name="keywords"
          content="DYNA culture, robotics team, innovation culture, engineering careers, robotics company culture, tech innovation"
        />
        <meta
          property="og:title"
          content="Culture - DYNA Robotics | Innovation-Driven Team Building the Future"
        />
        <meta
          property="og:description"
          content="DYNA's culture of innovation, collaboration, and excellence. Join our team building the future of commercial robotics."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Culture - DYNA Robotics | Innovation-Driven Team Building the Future"
        />
        <meta
          name="twitter:description"
          content="DYNA's culture of innovation, collaboration, and excellence. Join our team building the future of commercial robotics."
        />
      </Helmet>
      <Navbar />
      <main>
        <CultureContent />
      </main>
      <Footer />
    </div>
  );
};

export default Culture;
