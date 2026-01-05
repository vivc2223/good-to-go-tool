import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TypewriterSection from "@/components/TypewriterSection";
import ScrollPinnedIndustries from "@/components/ScrollPinnedIndustries";
import ProductCarouselSection from "@/components/ProductCarouselSection";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import Newsletter from "@/components/Newsletter";

import Footer from "@/components/Footer";
import { useScrollEffects } from "@/hooks/useScrollEffects";
import Banner from "@/components/Banner";
import TopBanner from "@/components/TopBanner";

const Index = () => {
  useScrollEffects();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          DYNA Robotics - Commercial-Grade Robots for Real-World Automation
        </title>
        <meta
          name="description"
          content="DYNA-1 is our first commercial-grade robotic system running 24/7 in real environments with 99.4% success. Dual-arm robots for factories, restaurants, and laundromats - delivering continuous dexterity where reliability matters."
        />
        <meta
          name="keywords"
          content="robotics, automation, DYNA-1, commercial robots, factory automation, restaurant automation, dual-arm robots, real-world robotics"
        />
        <meta
          property="og:title"
          content="DYNA Robotics - Commercial-Grade Robots for Real-World Automation"
        />
        <meta
          property="og:description"
          content="DYNA-1 delivers 99.4% success across hundreds of daily tasks with compact dual arms, 2.5 kg payload, and 60% human speed in real environments."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DYNA Robotics - Commercial-Grade Robots for Real-World Automation"
        />
        <meta
          name="twitter:description"
          content="DYNA-1 delivers 99.4% success across hundreds of daily tasks with compact dual arms, 2.5 kg payload, and 60% human speed in real environments."
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <link rel="canonical" href="https://www.dyna.co/" />

        {/* Organization Schema - Establishes company identity for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DYNA Robotics",
            "alternateName": "Dyna",
            "url": "https://www.dyna.co",
            "logo": "https://www.dyna.co/logo.png",
            "description": "Commercial-grade robots for real-world automation, powered by foundation models and vision-language-action AI.",
            "sameAs": [
              "https://twitter.com/dynarobotics",
              "https://www.linkedin.com/company/dyna-robotics"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Business Inquiries",
              "email": "team@dynarobotics.ai"
            }
          })}
        </script>

        {/* WebSite Schema with SearchBox - Signals site structure to Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "DYNA Robotics",
            "url": "https://www.dyna.co",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.dyna.co/blog?search={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <TypewriterSection />
        <ScrollPinnedIndustries />
        <ProductCarouselSection />
        <Banner />
        {/* <ImageShowcaseSection /> */}
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
