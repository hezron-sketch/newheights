"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Playfair_Display, Inter, Sacramento } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
const inter = Inter({ subsets: ["latin"], weight: "200" });
const sacramento = Sacramento({ subsets: ["latin"], weight: "400" });

interface HeroSectionProps {
  animateToContact: (e: React.MouseEvent) => void;
  portfolioRef: React.RefObject<HTMLDivElement>;
}

export default function HeroSection({
  animateToContact,
  portfolioRef,
}: HeroSectionProps) {
  const [currentToolIndex, setCurrentToolIndex] = useState(0);

  function setActiveSection(section: string) {
    console.log(`Active section: ${section}`);
  }

  // Branded tools with minimalist icons and descriptions
  const brandedTools = [
    {
      id: 1,
      name: "Branded Merchandise",
      description:
        "Transform everyday items into powerful brand ambassadors with custom cups, apparel, and accessories",
      imageUrl: "/images/carousel/cup.png",
    },
    {
      id: 2,
      name: "Apparel Branding",
      description:
        "Create memorable uniforms and branded clothing that reflects your company's identity and values",
      imageUrl: "/images/carousel/shirt.png",
    },
    {
      id: 3,
      name: "Safety & Visibility Gear",
      description:
        "Design high-visibility safety equipment and reflectors that keep your team safe while promoting your brand",
      imageUrl: "/images/carousel/plain-reflectors.png",
    },
    {
      id: 4,
      name: "Business Cards & Stationery",
      description:
        "Make lasting first impressions with professionally designed business cards and corporate stationery",
      imageUrl: "/images/carousel/card.png",
    },
  ];

  // Auto-advance the carousel
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentToolIndex((prevIndex) =>
        prevIndex === brandedTools.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(carouselInterval);
  }, [brandedTools.length]);

  // Manual navigation
  const goToTool = useCallback((index: number) => {
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
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-3 py-6 sm:px-6 sm:py-16 bg-[#e4e4d1]"
    >
      {/* Carousel Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-4xl mb-6 sm:mb-10"
      >
        <div className="relative h-[250px] sm:h-[400px] overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Centered background text */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <span className={`${sacramento.className} font-bold text-5xl sm:text-7xl md:text-9xl text-black/10 tracking-wider`}>
              Branding.
            </span>
          </div>

          {/* Carousel container with horizontal sliding */}
          <div className="relative w-full h-full overflow-hidden">
            {brandedTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                className="absolute inset-0 w-full h-full"
                initial={{ x: (index - currentToolIndex) * 100 + "%" }}
                animate={{ x: (index - currentToolIndex) * 100 + "%" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={tool.imageUrl}
                    alt={tool.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, 80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e4e4d1]/5" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 bg-gradient-to-t from-[#e4e4d1]/30 to-transparent">
                    <h2
                      className={`${playfair.className} text-lg backdrop-blur-lg bg-white/50 sm:text-2xl md:text-3xl font-bold mb-1 text-[#e4c444]`}
                    >
                      {tool.name}
                    </h2>
                    <p
                      className={`${inter.className} text-xs sm:text-sm backdrop-blur-lg bg-white/30 md:text-base text-gray-700 font-medium`}
                    >
                      {tool.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Responsive Navigation Arrows */}
          <button
            onClick={prevTool}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-1 sm:p-2 transition-all duration-300 z-20 shadow-md"
            aria-label="Previous tool"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTool}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-1 sm:p-2 transition-all duration-300 z-20 shadow-md"
            aria-label="Next tool"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
          {brandedTools.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTool(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentToolIndex
                  ? "bg-[#e4c444] scale-150"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to tool ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-col items-center gap-4 sm:gap-6 max-w-3xl w-full mt-6 sm:mt-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800"
        >
          Elevating Brands to{" "}
          <span className="text-[#e4c444]">New Heights</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-sm sm:text-base md:text-lg text-center text-gray-600 max-w-2xl leading-relaxed px-3 sm:px-4"
        >
          We craft distinctive brand identities and visual experiences that
          resonate with your audience and drive growth.
        </motion.p>
      </motion.header>

      {/* Responsive Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0 }}
        className="flex flex-col items-center gap-3 sm:gap-4 mt-6 sm:mt-10"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#333",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={animateToContact}
          className="inline-block rounded-full bg-gray-800 text-white font-bold px-5 py-2 sm:px-6 sm:py-3 shadow-sm text-sm sm:text-base md:text-lg transition-colors"
        >
          Get in Touch
        </motion.button>
        <motion.button
          onClick={() => {
            setActiveSection("portfolio");
            portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-gray-600 hover:text-gray-800 font-medium flex items-center gap-1 sm:gap-2 text-xs sm:text-sm transition-colors"
        >
          Explore our work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
