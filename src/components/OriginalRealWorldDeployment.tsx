
import React, { useEffect, useRef } from "react";

interface UseCaseCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  index: number;
}

const UseCaseCard = ({ title, subtitle, description, imageUrl, index }: UseCaseCardProps) => {
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
          <h3 className="text-xl font-bold uppercase mb-2">{title}</h3>
          <p className="text-sm mb-3 opacity-90">{subtitle}</p>
          {description && <p className="text-xs mb-4 opacity-80">{description}</p>}
        </div>
      </div>
    </div>
  );
};

const OriginalRealWorldDeployment = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const useCases = [
    {
      title: "RESTAURANT",
      subtitle: "Autonomous napkin folding in upscale service environments.",
      description: "24/7 reliability. Zero supervision.",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "LAUNDRY",
      subtitle: "Shirt folding across sizes and fabrics.",
      description: "No supervision. No retraining.",
      imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "FACTORY",
      subtitle: "Industrial assembly and quality control.",
      description: "Continuous operation at scale.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "CATERING",
      subtitle: "Cup-filling pipeline with tool use, precise sequencing, and no-retry pressure.",
      description: "",
      imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "HEALTHCARE",
      subtitle: "Support tasks requiring fine-motor precision and trust.",
      description: "Sterile environment adaptability.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "[REDACTED CLIENT]",
      subtitle: "Undisclosed pilot with major hospitality group.",
      description: "High-throughput table service automation.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
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
    <section className="py-12 sm:py-16 md:py-20 relative bg-white" id="original-deployment" ref={sectionRef}>
      <div className="section-container">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
              <span>Real-World Deployment</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Intro text */}
        <div className="text-left mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Real-World Deployment
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl">
            DYNA-1 is already operating across diverse industries, proving autonomous robotics works beyond the lab.
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginalRealWorldDeployment;
