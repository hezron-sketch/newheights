
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { PortfolioItem } from "./types";
import { portfolioItems, categories } from "./constants";

 interface PortfolioSectionProps {
  openLightbox: (imageUrl: string) => void;
  ref: React.RefObject<HTMLDivElement>;
}

export default function PortfolioSection({
  openLightbox,
}: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeFilter, setActiveFilter] = useState("All");
  const filterRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  // const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0.8]);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  
  // Scroll filter into view on mobile
  const handleFilterClick = (category: string) => {
    setSelectedCategory(category);
    setActiveFilter(category);

    if (window.innerWidth < 640 && filterRef.current) {
      const button = Array.from(filterRef.current.children).find(
        (child) => child.textContent === category
      ) as HTMLElement;

      if (button) {
        button.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };
  return (
    <section
      className="py-40 min-h-[120vh] px-4 sm:px-6 border border-white relative overflow-hidden bg-gray-100"
      ref={sectionRef}
      id="portfolio"
    >
      {/* Enhanced Parallax Background Layers */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#e4c444]/40 blur-2xl -z-20"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#f8b400]/30 blur-2xl -z-20"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 w-[350px] h-[350px] rounded-full bg-[#83ce63]/30 blur-2xl -z-20"
        style={{ y: y3 }}
      />
      {/* Existing Parallax Gradient Layers */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: y1 }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,_rgba(228,196,68,0.3),transparent_40%)]"></div>
      </motion.div>
      <motion.div className="absolute inset-0 -z-10" style={{ y: y2 }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_70%,_rgba(228,196,68,0.2),transparent_50%)]"></div>
      </motion.div>
      <motion.div className="absolute inset-0 -z-10" style={{ y: y3 }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(228,196,68,0.15),transparent_60%)]"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
            Our Digital Craft
          </h2>
          <div className="w-16 h-1 bg-[#e4c444] rounded-full mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Purposeful digital products built with precision
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div
            ref={filterRef}
            className="inline-flex space-x-2 bg-gray-50 p-1 rounded-full"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  category === selectedCategory
                    ? "bg-white border border-gray-200 text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              id="explore"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow border-gray-200"
            >
              {/* Image section (5/7 of height) */}
              <div className="relative h-[calc(5/7*100%)] min-h-[200px] bg-gray-50">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Optional overlay (can be removed if not needed) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Text section (fixed 2/7 of height) */}
              <div className="h-[calc(2/7*100%)] p-4 sm:p-5 flex flex-col justify-center border-t border-gray-100">
                <h3 className="font-medium text-gray-900 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 rounded-3xl shadow-md hover:shadow-lg overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {/* Content */}
          <div className="flex flex-col lg:flex-row bg-gradient-to-r from-green-200/50 to-green-800/80">
            <div className="p-8 md:p-12 lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 rounded-full bg-[#e4c444] mr-3"></div>
                <span className="text-sm font-medium text-gray-500">
                  Showcase
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
                Alure Cosmetics
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Branded products increasing sales and awareness by 65%
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "65%", label: "Product sales" },
                  { value: "3.2x", label: "Awareness" },
                  { value: "12", label: "Modules" },
                  { value: "9", label: "Months" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/70"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-xl font-medium text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="bg-green-900 text-white px-6 py-3 rounded-xl text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Study
              </motion.button>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <Image
                src="/images/featured.jpg"
                alt="Nova SaaS Platform"
                fill
                className="object-cover rounded-xl-r"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}