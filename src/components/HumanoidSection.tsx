
import React, { useEffect, useState } from "react";

const HumanoidSection = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animatingDigits, setAnimatingDigits] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const metrics = [
    {
      value: "99.4%",
      description: "task success rate over 24 hours"
    },
    {
      value: "~60%",
      description: "of human speed in real-world use"
    },
    {
      value: "24 hrs",
      description: "continuous runtime without resets"
    },
    {
      value: "Zero",
      description: "supervision or interventions required"
    }
  ];

  const animateDigits = (targetValue: string) => {
    setIsAnimating(true);
    setAnimatingDigits([]);
    
    const characters = targetValue.split('');
    const totalDuration = 400; // 0.4 seconds total - super fast
    const delayPerChar = totalDuration / characters.length;
    
    characters.forEach((char, index) => {
      setTimeout(() => {
        setAnimatingDigits(prev => [...prev, char]);
        
        // If this is the last character, mark animation as complete
        if (index === characters.length - 1) {
          setTimeout(() => setIsAnimating(false), 50);
        }
      }, index * delayPerChar);
    });
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        const nextMetric = (activeMetric + 1) % metrics.length;
        animateDigits(metrics[nextMetric].value);
        setActiveMetric(nextMetric);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused, activeMetric, metrics.length]);

  // Initialize first metric animation
  useEffect(() => {
    animateDigits(metrics[0].value);
  }, []);

  return (
    <section className="w-full py-24 bg-white" id="performance">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="mb-16">
          <div className="pulse-chip mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
            <span>Performance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            See what DYNA-1 can do
          </h2>
          
          {/* Left-aligned intro text that fits on one line */}
          <div className="text-left mb-8">
            <p className="text-base sm:text-lg md:text-xl font-display leading-tight text-gray-600 whitespace-nowrap max-w-full">
              DYNA bridges breakthrough research with real-world automation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Robot Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img 
              src="/lovable-uploads/6bed1792-98ed-4ef0-97c3-be88bf92d49f.png"
              alt="DYNA-1 robot working with towels in a commercial setting" 
              className="w-full h-full object-cover transition-transform duration-[8000ms] hover:scale-105"
              style={{ aspectRatio: "4/3" }}
            />
          </div>

          {/* Right Column - KPI Display with Vertical Dots */}
          <div className="relative flex items-center">
            {/* Metrics Display */}
            <div 
              className="flex-1 pr-8"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative h-32 overflow-hidden">
                <div 
                  className="absolute inset-0 transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${activeMetric * 100}%)` }}
                >
                  {metrics.map((metric, index) => (
                    <div key={index} className="h-32 flex flex-col justify-center">
                      <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 min-h-[72px] flex items-center overflow-hidden">
                        {index === activeMetric ? (
                          <span className="flex">
                            {animatingDigits.map((char, charIndex) => (
                              <span
                                key={charIndex}
                                className="inline-block animate-[slideUpReveal_0.1s_ease-out_forwards]"
                                style={{ 
                                  animationDelay: `${(charIndex * (400 / metric.value.length))}ms`,
                                  transform: 'translateY(100%)',
                                  opacity: '0'
                                }}
                              >
                                {char}
                              </span>
                            ))}
                          </span>
                        ) : (
                          metric.value
                        )}
                      </div>
                      <div className={`text-lg md:text-xl text-gray-600 leading-relaxed transition-opacity duration-300 ${
                        index === activeMetric && !isAnimating ? 'opacity-100' : 'opacity-70'
                      }`}>
                        {metric.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vertical Indicator Dots */}
            <div className="flex flex-col space-y-3">
              {metrics.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeMetric ? 'bg-pulse-500 h-6' : 'bg-gray-300'
                  }`}
                  onClick={() => {
                    setActiveMetric(index);
                    animateDigits(metrics[index].value);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slideUpReveal {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default HumanoidSection;
