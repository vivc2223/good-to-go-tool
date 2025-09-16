
import React, { useEffect, useRef } from "react";
import { Check, Clock, Target, RefreshCw, Crosshair, Globe, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedText from "@/components/AnimatedText";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  // Define gradient overlays that connect second row to first row
  const getGradientOverlay = (index: number) => {
    switch (index) {
      case 3: // Task Precision - connects to High Consistency
        return "from-green-50 via-white to-blue-50";
      case 4: // Environment Adaptation - connects to Throughput Focus  
        return "from-blue-50 via-white to-purple-50";
      case 5: // Reward Model - connects to Reliable Recovery
        return "from-purple-50 via-white to-orange-50";
      default: // First row cards
        return "from-purple-50 via-white to-orange-50";
    }
  };
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card opacity-0 p-4 sm:p-6",
        `bg-gradient-to-br ${getGradientOverlay(index)}`,
        "border border-gray-100 rounded-2xl shadow-elegant",
        "lg:hover:shadow-elegant-hover lg:hover:scale-[1.02]",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const ResearchFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      icon: <div className="flex items-center"><Check className="w-3 h-3 mr-1" /><Clock className="w-3 h-3" /></div>,
      title: "High Consistency",
      description: "DYNA-1 sustains 99.4% success in 24-hour runs — with zero resets or intervention."
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Throughput Focus",
      description: "Designed for commercial speed, DYNA-1 performs dexterous tasks at 60% human pace."
    },
    {
      icon: <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Reliable Recovery",
      description: "DYNA-1 detects and resolves crumples, mispulls, and chaos in real time."
    },
    {
      icon: <Crosshair className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Task Precision",
      description: "DYNA-1 meets production-grade fold quality with sub-⅓ inch accuracy."
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Environment Adaptation",
      description: "DYNA-1 adapts to new environments out-of-box — no retraining required."
    },
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Reward Model",
      description: "Our RM segments streaming data to guide continual learning on deployment."
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
      <div className="section-container">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-white border border-black">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-black mr-2">04</span>
              <span>Research</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Section title */}
        <div className="text-left mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl robotics-heading mb-6 text-black">
            Backed by World-Class Research
          </h2>
          
          <AnimatedText
            text="We close the gap between frontier AI models and physical-world autonomy. DYNA-1 is built on advanced vision-language-action systems and trained directly in real environments — no simulation shortcuts"
            className="text-base sm:text-lg md:text-xl font-display leading-tight text-gray-600 max-w-4xl mb-8"
          />

        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-0 md:gap-0">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchFeatures;
