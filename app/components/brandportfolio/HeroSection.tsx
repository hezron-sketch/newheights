"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-inter",
});

interface HeroSectionProps {
  animateToContact: (e: React.MouseEvent) => void;
  portfolioRef: React.RefObject<HTMLDivElement>;
}

export default function HeroSection({
  animateToContact,
  portfolioRef,
}: HeroSectionProps) {
  // Service offerings with minimalist icons
  const services = [
    {
      id: 1,
      title: "SaaS Solutions",
      description: "Cloud-based applications with subscription models",
      icon: "/icons/services.svg",
    },
    {
      id: 2,
      title: "Web & Mobile",
      description: "Responsive experiences across all devices",
      icon: "/icons/dev.svg",
    },
    {
      id: 3,
      title: "API Development",
      description: "Robust integration services for connectivity",
      icon: "/icons/api.svg",
    },
    {
      id: 4,
      title: "Visual Design",
      description: "Minimalist aesthetics for brand identity",
      icon: "/icons/design.svg",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-8 bg-[#e4e4d1]"
    >
      {/* Text Content */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-6 max-w-3xl w-full mb-12 sm:mb-16"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black leading-tight`}
        >
          New Heights Brands,{" "}
          <span className="text-yellow-800">Digital Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={`${inter.className} text-base sm:text-lg text-center text-gray-500 max-w-2xl leading-relaxed font-light`}
        >
          We create purposeful digital experiences that transform lives and businesses.
        </motion.p>
      </motion.header>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="w-full max-w-5xl mb-12 sm:mb-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div key={service.id}
              whileHover={{ y: -8 }}
              className="bg-white/30 rounded-xl p-6 flex flex-col items-center hover:border-white hover:bg-white/70 text-center border border-gray-200 transition-all duration-300"
            >
              {typeof service.icon === "string" ? (
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                />
              ) : (
                service.icon
              )}
              <h3
                className={`${playfair.className} text-xl font-bold mb-3 text-gray-900`}
              >
                {service.title}
              </h3>
              <p
                className={`${inter.className} text-sm text-gray-500 font-light`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
            backgroundColor: "#111",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={animateToContact}
          className="inline-block rounded-full bg-gray-800 text-white font-bold px-5 py-2 sm:px-6 sm:py-3 shadow-sm text-sm sm:text-base md:text-lg transition-colors"
        >
          Get in Touch
        </motion.button>
        <motion.button
          onClick={() => {
            // setActiveSection("portfolio"); // This line was removed as per the new_code
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