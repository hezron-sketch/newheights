"use client";
import Image from "next/image";
import { useEffect, useState, useCallback, SetStateAction } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [currentToolIndex, setCurrentToolIndex] = useState(0);

  // Branded tools for the carousel
  const brandedTools = [
    {
      id: 1,
      name: "Brand Strategy Toolkit",
      description: "Comprehensive framework for developing brand strategies",
      color: "#FF6B6B",
    },
    {
      id: 2,
      name: "Visual Identity Generator",
      description: "Create cohesive visual identities for any brand",
      color: "#4ECDC4",
    },
    {
      id: 3,
      name: "Social Media Planner",
      description: "Plan and schedule social media content effectively",
      color: "#FFD166",
    },
    {
      id: 4,
      name: "Audience Insights Dashboard",
      description: "Understand your audience with powerful analytics",
      color: "#6A0572",
    },
  ];

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    
    const carouselInterval = setInterval(() => {
      setCurrentToolIndex((prevIndex) => 
        prevIndex === brandedTools.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(carouselInterval);
    };
  }, [brandedTools.length]);

  // Manual navigation
  const goToTool = useCallback((index: SetStateAction<number>) => {
    setCurrentToolIndex(index);
  }, []);

  const nextTool = useCallback(() => {
    setCurrentToolIndex((prevIndex) => 
      prevIndex === brandedTools.length - 1 ? 0 : prevIndex + 1
    );
  }, [brandedTools.length]);

  const prevTool = useCallback(() => {
    setCurrentToolIndex((prevIndex) => 
      prevIndex === 0 ? brandedTools.length - 1 : prevIndex - 1
    );
  }, [brandedTools.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e4e4d1] text-[#333] px-6 py-12 transition-all duration-300">
      {/* Header Section */}
      <header
        className={`flex flex-col items-center gap-6 mb-12 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black">
          New Heights Brands
        </h1>
        
        <div className="w-full max-w-3xl">
          {/* Carousel Container */}
          <div className="relative h-80 overflow-hidden rounded-xl shadow-xl">
            {brandedTools.map((tool, index) => (
              <div
                key={tool.id}
                className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-500 ${
                  index === currentToolIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ backgroundColor: tool.color }}
              >
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center max-w-md">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-2">{tool.name}</h2>
                  <p className="text-white/90">{tool.description}</p>
                </div>
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button
              onClick={prevTool}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-300"
              aria-label="Previous tool"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTool}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-300"
              aria-label="Next tool"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {brandedTools.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTool(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentToolIndex ? "bg-black scale-125" : "bg-gray-300"
                }`}
                aria-label={`Go to tool ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <p
          className={`text-xl md:text-2xl text-black text-center max-w-2xl leading-relaxed transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Elevating your brand to new heights with creativity, strategy, and
          innovation.
        </p>
      </header>

      {/* Main Call to Action */}
      <main className="flex flex-col items-center justify-center w-full flex-1">
        <a
          href="#contact"
          className={`inline-block rounded-full bg-black text-white font-bold text-xl px-8 py-3 mt-4 shadow-lg transition-all duration-300 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          } hover:scale-110 hover:shadow-xl cursor-pointer`}
        >
          Get in Touch
        </a>
      </main>
    </div>
  );
}