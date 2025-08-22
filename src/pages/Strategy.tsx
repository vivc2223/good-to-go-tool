import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import StrategyContent from "@/components/StrategyContent";
import Footer from "@/components/Footer";
import { useScrollEffects } from "@/hooks/useScrollEffects";

const Strategy = () => {
  useScrollEffects();

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage:
          "url(/lovable-uploads/6c8b9037-35c9-4e2d-b1bd-b1d6cf6eb408.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Helmet>
        <title>Strategy - DYNA Robotics | Real-World Robotics at Scale</title>
        <meta
          name="description"
          content="Discover DYNA's strategic approach to commercial robotics. Learn how we're scaling real-world automation solutions across industries with our foundation model technology."
        />
        <meta
          name="keywords"
          content="robotics strategy, commercial automation, robotics scaling, DYNA strategy, industrial robotics, automation deployment"
        />
        <meta
          property="og:title"
          content="Strategy - DYNA Robotics | Real-World Robotics at Scale"
        />
        <meta
          property="og:description"
          content="DYNA's strategic approach to commercial robotics and scaling real-world automation solutions across industries."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Strategy - DYNA Robotics | Real-World Robotics at Scale"
        />
        <meta
          name="twitter:description"
          content="DYNA's strategic approach to commercial robotics and scaling real-world automation solutions across industries."
        />
      </Helmet>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <StrategyContent />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Strategy;
