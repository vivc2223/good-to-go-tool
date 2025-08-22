
import React from "react";
import { Target, RefreshCw, CheckCircle } from "lucide-react";

const CTASection = () => {
  const steps = [
    {
      icon: (
        <div className="w-32 h-32">
          <img 
            src="/lovable-uploads/22272944-a2d9-4ccb-9a8f-b5cc0a4ed0fc.png" 
            alt="Align on Use Case" 
            className="w-full h-full object-contain bg-transparent"
          />
        </div>
      ),
      title: "Align on Use Case",
      description: "We meet to define your high-impact task and success metrics."
    },
    {
      icon: (
        <div className="w-32 h-32">
          <img 
            src="/lovable-uploads/9b67e30c-d1b6-4dad-a44b-3967e5eb94bd.png" 
            alt="DYNA Robotic Arm" 
            className="w-full h-full object-contain bg-transparent"
          />
        </div>
      ),
      title: "Site Integration", 
      description: "DYNA is installed in your workspace and calibrated to your task, infrastructure, and layout."
    },
    {
      icon: (
        <div className="w-32 h-32">
          <img 
            src="/lovable-uploads/089e0845-d108-49b4-8c44-ccd7283bc1bd.png" 
            alt="On-Site Adaptation" 
            className="w-full h-full object-contain bg-transparent"
          />
        </div>
      ),
      title: "On-Site Adaptation",
      description: "DYNA runs in your environment, improving through real-world feedback and our continual training loop."
    },
    {
      icon: (
        <div className="w-32 h-32">
          <img 
            src="/lovable-uploads/533fcc3f-6e3e-4341-ae10-3c6de2327a7f.png" 
            alt="Full Autonomy" 
            className="w-full h-full object-contain bg-transparent"
          />
        </div>
      ),
      title: "Full Autonomy",
      description: "DYNA executes with high success rates, no supervision, and production-grade quality."
    }
  ];

  return (
    <section id="deployment" className="bg-white py-16 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black text-white mr-2">05</span>
            <span>Deployment</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Header - matching SeeItRunSection format */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight mb-4">
            Launch DYNA in 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-700">
            Just plug and perform — DYNA is built for real-world autonomy from day one.
          </p>
        </div>

        {/* Steps Grid - left aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-left">
              {/* Icon - no border/background */}
              <div className="flex justify-start mb-6">
                <div className="text-green-700">
                  {step.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button - Left Aligned */}
        <div className="flex justify-start">
          <button className="bg-black text-white border-2 border-black px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-black active:scale-95 shadow-lg hover:shadow-xl">
            Explore our research
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
