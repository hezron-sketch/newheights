import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { PortfolioItem } from "./types";
import { portfolioItems, categories } from "./constants";

interface PortfolioSectionProps {
  openLightbox: (imageUrl: string) => void;
  ref: React.RefObject<HTMLDivElement>;
}

export default function PortfolioSection({ openLightbox, ref }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section
        id="portfolio"
        //ref={portfolioRef}
        className="py-16 sm:py-24 px-4 sm:px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Our Portfolio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Discover our diverse range of branding and design projects that
              have helped clients stand out in competitive markets.
            </p>
          </motion.div>

          {/* Portfolio Filter */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-[#f5f5e9] p-1 sm:p-2 rounded-full max-w-full overflow-x-auto">
              {["All", "Branding", "Packaging", "Digital", "Print"].map(
                (category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                      category === selectedCategory
                        ? "bg-black text-white"
                        : "hover:bg-black/10"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Portfolio Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item.imageUrl)}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100 border border-gray-200 shadow-lg">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 mt-1 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#e4e444] text-black text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-black/30 rounded-full p-2 sm:p-3 backdrop-blur-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 sm:mt-20 bg-[#3baa0049] rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center order-2 lg:order-1">
                <span className="text-[#e4c444] font-bold mb-2 text-lg sm:text-base">
                  Featured Project
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  Bloom Cosmetics Rebrand
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Complete transformation of Bloom Cosmetics' brand identity
                  including logo, packaging, website, and marketing collateral.
                  The new design system increased brand recognition by 75% and
                  boosted online sales by 40% in the first quarter.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {[
                    "Brand Identity",
                    "Packaging",
                    "Web Design",
                    "Social Media",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-black text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="self-start bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
                  View Case Study
                </button>
              </div>
              <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] order-1 lg:order-2">
                <div className="absolute inset-0 flex items-center justify-center sm:p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/featured.jpg"
                      alt="Cosmetics"
                      fill
                      className="object-cover rounded-t-xl sm:rounded-t-xl"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-40 h-40 sm:w-64 sm:h-64 bg-[#e4e444] rounded-full mix-blend-multiply opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-44 h-44 sm:w-72 sm:h-72 bg-[#e4e444] rounded-full mix-blend-multiply opacity-20"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}