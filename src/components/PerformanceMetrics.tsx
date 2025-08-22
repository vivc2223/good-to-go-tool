
import React, { useState, useEffect, useRef } from "react";

const PerformanceMetrics = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const metricsSlides = [
    [
      {
        value: "99.4%",
        description: "task success rate over 24 hours"
      },
      {
        value: "24 hrs",
        description: "continuous runtime without resets"
      }
    ],
    [
      {
        value: "60%of human speed",
        description: "in real-world use"
      },
      {
        value: "0 supervision",
        description: "no human intervention or resets required"
      }
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % metricsSlides.length;
        setAnimationKey(prev => prev + 1);
        return nextSlide;
      });
    }, 7000); // 7 seconds as requested
    
    return () => clearInterval(interval);
  }, [metricsSlides.length]);

  const CountUpNumber = ({ value, isActive }: { value: string, isActive: boolean }) => {
    const [displayValue, setDisplayValue] = useState("");
    const countUpRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
      if (!isActive) return;

      // Extract numeric part for count-up animation
      const numericMatch = value.match(/(\d+\.?\d*)/);
      if (!numericMatch) {
        setDisplayValue(value);
        return;
      }

      const targetNumber = parseFloat(numericMatch[1]);
      const prefix = value.substring(0, numericMatch.index);
      const suffix = value.substring((numericMatch.index || 0) + numericMatch[1].length);
      
      // Start from ~80% of target value as requested
      let current = Math.max(targetNumber * 0.8, 0);
      const increment = (targetNumber - current) / 15; // Faster animation, less than 0.7s
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          const displayNum = value.includes('.') ? 
            Math.floor(current * 10) / 10 : 
            Math.floor(current);
          setDisplayValue(`${prefix}${displayNum}${suffix}`);
        }
      }, 40); // Fast count-up, completes in ~0.6s

      countUpRef.current = timer;

      return () => {
        if (countUpRef.current) {
          clearInterval(countUpRef.current);
        }
      };
    }, [value, isActive, animationKey]);

    return <span>{displayValue}</span>;
  };

  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="performance">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-black border border-black">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black text-white mr-2">02</span>
              <span>Performance</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Section Header - aligned with content below */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight">
            This is what real-world autonomy looks like
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mt-4">
            DYNA bridges breakthrough research with real-world automation.
          </p>
        </div>

        {/* Two-column layout: Image + Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - DYNA Robot Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src="/lovable-uploads/22c16845-ca64-440d-8050-7b998cc79f16.png"
                alt="DYNA robot folding towels in laundry environment"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - Metrics Carousel */}
          <div className="order-1 lg:order-2 relative">
            <div className="flex items-start justify-between">
              {/* Metrics Content */}
              <div className="flex-1">
                <div 
                  key={animationKey}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 py-8 animate-fade-in"
                  style={{ 
                    animationDuration: "0.8s",
                    transform: "translateY(0)"
                  }}
                >
                  {metricsSlides[currentSlide].map((metric, metricIndex) => (
                    <div 
                      key={metricIndex} 
                      className="text-left opacity-0 animate-fade-in"
                      style={{ 
                        animationDelay: `${metricIndex * 0.15}s`,
                        animationDuration: "0.6s",
                        animationFillMode: "forwards",
                        transform: "translateY(10px)"
                      }}
                    >
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-3 leading-none">
                        <CountUpNumber value={metric.value} isActive={true} />
                      </div>
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xs">
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Vertical pagination dots - Top-aligned with metrics */}
              <div className="flex flex-col space-y-3 ml-6 mt-8">
                {metricsSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      currentSlide === index ? 'bg-black' : 'bg-gray-300'
                    }`}
                    onClick={() => {
                      setCurrentSlide(index);
                      setAnimationKey(prev => prev + 1);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
