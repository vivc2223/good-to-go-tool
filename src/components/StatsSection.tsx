
import React from "react";

const StatsSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Why Customers Choose DYNA title */}
        <div className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight">
            Why Customers Choose DYNA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl">
          {/* Column 1 - DYNA Robot Arm */}
          <div className="text-left">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/488a8ed6-17b9-4b37-90d6-28de5423f613.png" 
                alt="DYNA robot arm" 
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Launch in 3 Simple Steps
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Buy. Train. Deploy.
            </p>
          </div>

          {/* Column 2 - Dollar Sign */}
          <div className="text-left">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/28249b5f-3055-482b-ba1c-fdc175bdbc9a.png" 
                alt="Dollar sign" 
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Zero Upfront Cost
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Generate ROI from Day 1
            </p>
          </div>

          {/* Column 3 - Bar Chart */}
          <div className="text-left">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/5632a4c7-d819-407e-9fba-1b4a5f3b6aae.png" 
                alt="Bar chart with upward trend" 
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Proven Performance
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              99% Quality Yield Rate. 150% Full-Shift Throughput.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
