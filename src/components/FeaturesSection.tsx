import React from "react";

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-6 sm:py-10 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-black border border-black">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black text-white mr-2">05</span>
              <span>Features</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Section title */}
        <div className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight">
            A foundation model for dexterity — built for continual deployment, not demo-day success.
          </h2>
        </div>
        
        {/* Three feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1 */}
          <div className="flex flex-col">
            <div className="bg-gray-200 rounded-2xl aspect-[4/3] mb-6 flex items-center justify-center">
              <span className="text-gray-500">Placeholder Image</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Autonomy That Pays Off</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Deploy once, run continuously. DYNA-1 sustains long shifts without retraining or oversight — scaling throughput without scaling ops teams.
            </p>
          </div>
          
          {/* Box 2 */}
          <div className="flex flex-col">
            <div className="bg-gray-200 rounded-2xl aspect-[4/3] mb-6 flex items-center justify-center">
              <span className="text-gray-500">Placeholder Image</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Handles the Unexpected</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              DYNA-1 actively detects and recovers from rare failure states — avoiding downtime, escalations, and task resets mid-shift.
            </p>
          </div>
          
          {/* Box 3 */}
          <div className="flex flex-col">
            <div className="bg-gray-200 rounded-2xl aspect-[4/3] mb-6 flex items-center justify-center">
              <span className="text-gray-500">Placeholder Image</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Precision You Can Trust</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              DYNA-1 meets commercial-grade tolerances with tight execution — ensuring results are not just complete, but consistent and usable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
