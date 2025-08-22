
import React from "react";

const StrategyHero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Fixed background image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/15f21653-9b5b-4142-89ca-af9b1115fbdb.png')",
          backgroundAttachment: "fixed"
        }}
      />
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-white mb-8">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
            Features
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            How We Build
            <br />
            Autonomy
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              A foundation model for dexterity — built for continual deployment, not demo-day success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyHero;
