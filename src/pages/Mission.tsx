import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import MissionContent from "@/components/MissionContent";
import Footer from "@/components/Footer";
import { useScrollEffects } from "@/hooks/useScrollEffects";

const Mission = () => {
  useScrollEffects();

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage:
          "url(/lovable-uploads/a9fd0de7-da08-4024-b61e-d8334d84fa77.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Helmet>
        <title>
          Mission - DYNA Robotics | Empowering Human Potential Through
          Automation
        </title>
        <meta
          name="description"
          content="Learn about DYNA's mission to empower human potential through reliable robotics automation. We're building the future where robots handle repetitive tasks so humans can focus on what matters most."
        />
        <meta
          name="keywords"
          content="robotics mission, automation vision, human empowerment, DYNA mission, robotics purpose, future of work"
        />
        <meta
          property="og:title"
          content="Mission - DYNA Robotics | Empowering Human Potential Through Automation"
        />
        <meta
          property="og:description"
          content="DYNA's mission to empower human potential through reliable robotics automation - building the future where robots handle repetitive tasks."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mission - DYNA Robotics | Empowering Human Potential Through Automation"
        />
        <meta
          name="twitter:description"
          content="DYNA's mission to empower human potential through reliable robotics automation - building the future where robots handle repetitive tasks."
        />
        <link rel="canonical" href="https://www.dyna.co/mission" />
      </Helmet>
      {/* Medium overlay for text readability while showing image */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <MissionContent />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Mission;
