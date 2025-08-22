
import React, { useEffect, useRef } from "react";
import { Shield, Target, RotateCcw, Ruler, Globe, Brain } from "lucide-react";

interface UseCaseCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  index: number;
  icon?: React.ReactNode;
}

const UseCaseCard = ({ title, subtitle, description, imageUrl, index, icon }: UseCaseCardProps) => {
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
  
  return (
    <div 
      ref={cardRef}
      className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 opacity-0"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold uppercase">{title}</h3>
            {icon && <div className="text-white">{icon}</div>}
          </div>
          <p className="text-sm mb-3 opacity-90">{subtitle}</p>
          {description && <p className="text-xs mb-4 opacity-80">{description}</p>}
        </div>
      </div>
    </div>
  );
};

const RealWorldDeployment = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const useCases = [
    {
      title: "High Consistency",
      subtitle: "DYNA-1 sustains 99.4% success in 24-hour runs — with zero resets or intervention.",
      description: "",
      imageUrl: "/background-section1.png",
      icon: <Shield className="w-4 h-4" />
    },
    {
      title: "THROUGHPUT FOCUS",
      subtitle: "Designed for commercial speed, DYNA-1 performs dexterous tasks at 60% human pace.",
      description: "",
      imageUrl: "/background-section2.png",
      icon: <Target className="w-4 h-4" />
    },
    {
      title: "RELIABLE RECOVERY",
      subtitle: "DYNA-1 detects and resolves crumples, mispulls, and chaos in real time.",
      description: "",
      imageUrl: "/background-section3.png",
      icon: <RotateCcw className="w-4 h-4" />
    },
    {
      title: "TASK PRECISION",
      subtitle: "DYNA-1 meets production-grade fold quality with <⅓ inch accuracy.",
      description: "",
      imageUrl: "/background-section1.png",
      icon: <Ruler className="w-4 h-4" />
    },
    {
      title: "ENVIRONMENT ADAPTATION",
      subtitle: "DYNA-1 adapts to new environments out-of-box — no retraining required.",
      description: "",
      imageUrl: "/background-section2.png",
      icon: <Globe className="w-4 h-4" />
    },
    {
      title: "REWARD MODEL",
      subtitle: "Our RM segments streaming data to guide continual learning on deployment.",
      description: "",
      imageUrl: "/background-section3.png",
      icon: <Brain className="w-4 h-4" />
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
    <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="deployment" ref={sectionRef}>
      <div className="section-container">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>Features</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Intro text with gradient styling - left aligned */}
        <div className="text-left mb-10 sm:mb-16">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display leading-tight bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent max-w-4xl">
            A foundation model for dexterity — built for continual deployment, not demo-day success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={useCase.title}
              title={useCase.title}
              subtitle={useCase.subtitle}
              description={useCase.description}
              imageUrl={useCase.imageUrl}
              index={index}
              icon={useCase.icon}
            />
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-left mt-10 sm:mt-16">
          <button className="inline-flex items-center justify-center group text-sm font-medium text-black border border-gray-300 rounded-full px-6 py-3 hover:bg-black hover:text-white transition-all duration-300">
            Read DYNA-1 Research
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealWorldDeployment;
