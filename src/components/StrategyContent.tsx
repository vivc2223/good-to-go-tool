import React from "react";
import { useUniversalScrollReveal } from '@/hooks/useUniversalScrollReveal';

const StrategyContent = () => {
  const { elementRef: heroRef, style: heroStyle } = useUniversalScrollReveal();
  const { elementRef: techRef, style: techStyle } = useUniversalScrollReveal();
  const { elementRef: businessRef, style: businessStyle } = useUniversalScrollReveal();
  const { elementRef: teamRef, style: teamStyle } = useUniversalScrollReveal();
  const { elementRef: customersRef, style: customersStyle } = useUniversalScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 sm:py-32" ref={heroRef} style={heroStyle}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground max-w-5xl">
            Building robots that work in the real world with advanced autonomy.
          </h1>
        </div>
      </section>

      {/* Horizontal divider */}
      <div className="border-b border-border"></div>

      {/* Our Technology Section */}
      <section className="py-20 sm:py-24" ref={techRef} style={techStyle}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Our Technology
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Text */}
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                  Pioneering solutions for the automation-defined workflows of tomorrow.
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  The next generation of robotic automation will depend less on advances in hardware design than on advances in software engineering and AI. Unlike traditional robotics companies who focus primarily on hardware, DYNA's core system is a autonomous learning platform that serves as the foundation for our suite of capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal divider */}
      <div className="border-b border-border"></div>

      {/* Our Business Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Our Business
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Building cutting-edge technology at speed.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                DYNA is a robotics company. Unlike most robotics companies, we don't wait for our customers to tell us what they need. We identify problems, privately fund our R&D and sell finished products off the shelf. Ideas are turned into deployed capabilities in months, not years, saving businesses and operators money along the way.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg">
                <img 
                  src="/lovable-uploads/a9fd0de7-da08-4024-b61e-d8334d84fa77.png" 
                  alt="DYNA engineer working on robotics development" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal divider */}
      <div className="border-b border-border"></div>

      {/* Our Team Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-lg">
                <img 
                  src="/lovable-uploads/a9fd0de7-da08-4024-b61e-d8334d84fa77.png" 
                  alt="DYNA robotics workspace" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="space-y-6">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Our Team
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                The brightest minds working on real-world robotics
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our team brings together the smartest Silicon Valley engineers with operators who have worked in real-world environments and have first-hand knowledge of automation challenges.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our engineers are experts in AI, robotics, advanced sensors, computer vision, manufacturing automation, and real-time systems. Industry veterans make up more than 30% of our team and use their operational experience to ensure our products meet the needs of workers in real environments.
                </p>
              </div>
              
              <div className="pt-4">
                <button className="inline-flex items-center text-foreground hover:text-muted-foreground transition-colors group">
                  <span className="text-lg font-medium border-b border-foreground group-hover:border-muted-foreground">
                    Discover Opportunities at DYNA
                  </span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal divider */}
      <div className="border-b border-border"></div>

      {/* Our Customers Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Our Customers
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Partnering with Leading Industries & Service Providers
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We support operations across hospitality, manufacturing, logistics, and healthcare sectors, working with leading service providers, restaurant chains, hotels, and industrial facilities around the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategyContent;