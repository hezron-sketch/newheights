// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState, useRef } from "react";
// import { PortfolioItem } from "./types";
// import { portfolioItems, categories } from "./constants";

// interface PortfolioSectionProps {
//   openLightbox: (imageUrl: string) => void;
//   ref: React.RefObject<HTMLDivElement>;
// }

// export default function PortfolioSection({
//   openLightbox,
//   ref,
// }: PortfolioSectionProps) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [hoveredItem, setHoveredItem] = useState<number | null>(null);
//   const filterRef = useRef<HTMLDivElement>(null);

//   const filteredItems =
//     selectedCategory === "All"
//       ? portfolioItems
//       : portfolioItems.filter((item) => item.category === selectedCategory);

//   // Scroll filter into view on mobile
//   const handleFilterClick = (category: string) => {
//     setSelectedCategory(category);
//     setActiveFilter(category);

//     if (window.innerWidth < 640 && filterRef.current) {
//       const button = Array.from(filterRef.current.children).find(
//         (child) => child.textContent === category
//       ) as HTMLElement;

//       if (button) {
//         button.scrollIntoView({
//           behavior: "smooth",
//           block: "nearest",
//           inline: "center",
//         });
//       }
//     }
//   };

//   return (
//     <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-10 sm:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
//             Our Portfolio
//           </h2>
//           <div className="w-20 h-1 bg-[#e4c444] mx-auto mb-6"></div>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl">
//             Discover our diverse range of branding and design projects that have
//             helped clients stand out in competitive markets.
//           </p>
//         </motion.div>

//         {/* Enhanced Portfolio Filter */}
//         <div className="flex justify-center mb-10 sm:mb-14">
//           <div
//             ref={filterRef}
//             className="inline-flex justify-start sm:justify-center gap-2 bg-[#f8f8f2] p-2 rounded-full max-w-full overflow-x-auto scrollbar-hide"
//           >
//             {[...categories].map((category) => (
//               <motion.button
//                 key={category}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${
//                   category === selectedCategory
//                     ? "bg-[#e4c444] text-white shadow-md"
//                     : "bg-white text-gray-700 hover:bg-gray-100"
//                 }`}
//                 onClick={() => handleFilterClick(category)}
//               >
//                 {category}
//               </motion.button>
//             ))}
//           </div>
//         </div>

//         {/* Portfolio Statistics */}
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 sm:mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//         >
//           <div className="bg-[#f8f8f2] p-4 sm:p-6 rounded-2xl text-center">
//             <div className="text-3xl sm:text-4xl font-bold text-[#e4c444]">
//               150+
//             </div>
//             <div className="text-gray-600 mt-1">Projects</div>
//           </div>
//           <div className="bg-[#f8f8f2] p-4 sm:p-6 rounded-2xl text-center">
//             <div className="text-3xl sm:text-4xl font-bold text-[#e4c444]">
//               98%
//             </div>
//             <div className="text-gray-600 mt-1">Client Satisfaction</div>
//           </div>
//           <div className="bg-[#f8f8f2] p-4 sm:p-6 rounded-2xl text-center">
//             <div className="text-3xl sm:text-4xl font-bold text-[#e4c444]">
//               12
//             </div>
//             <div className="text-gray-600 mt-1">Industries</div>
//           </div>
//           <div className="bg-[#f8f8f2] p-4 sm:p-6 rounded-2xl text-center">
//             <div className="text-3xl sm:text-4xl font-bold text-[#e4c444]">
//               7
//             </div>
//             <div className="text-gray-600 mt-1">Years Experience</div>
//           </div>
//         </motion.div>

//         {/* Portfolio Gallery */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {filteredItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group cursor-pointer"
//               onClick={() => openLightbox(item.imageUrl)}
//               onMouseEnter={() => setHoveredItem(item.id)}
//               onMouseLeave={() => setHoveredItem(null)}
//             >
//               <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100 border border-gray-200 shadow-lg transition-transform duration-300 group-hover:shadow-xl">
//                 <div className="relative w-full h-full">
//                   <Image
//                     src={item.imageUrl}
//                     alt={item.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 sm:p-6">
//                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="text-xl sm:text-2xl font-bold text-white">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-200 mt-2 text-base">
//                       {item.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2 mt-3">
//                       {item.tags?.map((tag: string) => (
//                         <span
//                           key={tag}
//                           className="bg-[#e4c444]/90 text-black text-xs font-medium px-2 py-1 rounded"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute top-4 right-4 bg-[#e4c444] text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
//                   {item.category}
//                 </div>
//                 <div
//                   className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
//                     hoveredItem === item.id ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <motion.div
//                     className="bg-black/30 rounded-full p-3 backdrop-blur-sm"
//                     initial={{ scale: 0.8 }}
//                     animate={{ scale: 1 }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 300,
//                       damping: 15,
//                     }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-white"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                       />
//                     </svg>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Enhanced Featured Project */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="mt-16 sm:mt-24 bg-gradient-to-br from-[#e4e4d1] to-[#bff8a7] rounded-3xl overflow-hidden shadow-xl"
//         >
//           <div className="flex flex-col lg:flex-row">
//             <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center order-2 lg:order-1 lg:w-1/2">
//               <span className="text-[#e4c444] font-bold mb-3 text-4xl">
//                 Featured Project
//               </span>
//               <h3 className="text-3xl sm:text-4xl font-bold mb-5 text-gray-800">
//                 Bloom Cosmetics Rebrand
//               </h3>
//               <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//                 Complete transformation of Bloom Cosmetics' brand identity
//                 including logo, packaging, website, and marketing collateral.
//                 The new design system increased brand recognition by 75% and
//                 boosted online sales by 40% in the first quarter.
//               </p>

//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 <div>
//                   <div className="text-2xl font-bold text-[#e4c444]">75%</div>
//                   <div className="text-gray-600">Brand Recognition</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-[#e4c444]">40%</div>
//                   <div className="text-gray-600">Sales Increase</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-[#e4c444]">12</div>
//                   <div className="text-gray-600">Product Lines</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-[#e4c444]">6</div>
//                   <div className="text-gray-600">Months Project</div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-3 mb-8">
//                 {[
//                   "Brand Identity",
//                   "Packaging",
//                   "Web Design",
//                   "Social Media",
//                   "Product Photography",
//                   "Marketing Strategy",
//                 ].map((tag) => (
//                   <span
//                     key={tag}
//                     className="bg-[#e4c444]/20 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex flex-wrap gap-4">
//                 <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
//                   View Case Study
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//                 <button className="text-gray-700 hover:text-black font-medium flex items-center gap-2 transition-colors">
//                   Client Testimonial
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             <div className="relative min-h-[400px] lg:min-h-[600px] order-1 lg:order-2 lg:w-1/2">
//               <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
//                 <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
//                   <Image
//                     src="/images/featured.jpg"
//                     alt="Cosmetics"
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                 </div>
//               </div>

//               <div className="absolute top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#e4c444]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//               <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#e4c444]/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

//               <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg max-w-xs">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-200">
//                     <Image
//                       src="/images/jpg.jpg"
//                       alt="{testimonial.name}"
//                       width={64}
//                       height={64}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <div className="font-bold">Mercy Wairimu</div>
//                     <div className="text-sm text-gray-600">
//                       CEO, Bloom Cosmetics
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 italic">
//                   "The rebrand completely transformed our business. Customer
//                   engagement is at an all-time high!"
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Client Logos Section */}
//         <motion.div
//           className="mt-20 sm:mt-28"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <h3 className="text-center text-2xl sm:text-3xl font-bold mb-10 text-gray-700">
//             Trusted by Industry Leaders
//           </h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
//             {[...Array(5)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="flex justify-center"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-16 sm:w-40 sm:h-20" />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState, useRef } from "react";
// import { PortfolioItem } from "./types";
// import { portfolioItems, categories } from "./constants";

// interface PortfolioSectionProps {
//   openLightbox: (imageUrl: string) => void;
//   ref: React.RefObject<HTMLDivElement>;
// }

// export default function PortfolioSection({
//   openLightbox,
//   ref,
// }: PortfolioSectionProps) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [hoveredItem, setHoveredItem] = useState<number | null>(null);
//   const filterRef = useRef<HTMLDivElement>(null);

//   const filteredItems =
//     selectedCategory === "All"
//       ? portfolioItems
//       : portfolioItems.filter((item) => item.category === selectedCategory);

//   const handleFilterClick = (category: string) => {
//     setSelectedCategory(category);
//     if (window.innerWidth < 640 && filterRef.current) {
//       const button = Array.from(filterRef.current.children).find(
//         (child) => child.textContent === category
//       ) as HTMLElement;
//       button?.scrollIntoView({
//         behavior: "smooth",
//         block: "nearest",
//         inline: "center",
//       });
//     }
//   };

//   return (
//     <section id="portfolio" ref={ref} className="py-20 px-4 sm:px-6 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
//             Selected Works
//           </h2>
//           <div className="w-16 h-1 bg-[#e4c444] rounded-full mx-auto mb-6"></div>
//           <p className="text-gray-500 max-w-2xl mx-auto text-lg">
//             Minimalist design solutions that elevate brands
//           </p>
//         </motion.div>

//         {/* Filter */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex justify-center mb-12"
//         >
//           <div
//             ref={filterRef}
//             className="inline-flex space-x-2 bg-gray-50 p-1 rounded-full"
//           >
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => handleFilterClick(category)}
//                 className={`px-4 py-2 text-sm rounded-full transition-all ${
//                   category === selectedCategory
//                     ? "bg-white text-gray-900 shadow-sm"
//                     : "text-gray-500 hover:text-gray-700"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Portfolio Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group"
//               onMouseEnter={() => setHoveredItem(item.id)}
//               onMouseLeave={() => setHoveredItem(null)}
//             >
//               <div
//                 className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-50 cursor-pointer"
//                 onClick={() => openLightbox(item.imageUrl)}
//               >
//                 <Image
//                   src={item.imageUrl}
//                   alt={item.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//                     <h3 className="text-xl font-medium text-white">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-200 mt-1 text-sm">
//                       {item.category}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Hover Indicator */}
//                 {hoveredItem === item.id && (
//                   <motion.div
//                     className="absolute inset-0 flex items-center justify-center"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                   >
//                     <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                         />
//                       </svg>
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Featured Project */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="mt-20 bg-[#e5eee1] rounded-3xl overflow-hidden"
//         >
//           <div className="flex flex-col lg:flex-row">
//             <div className="p-8 md:p-12 lg:w-1/2">
//               <div className="flex items-center mb-4">
//                 <div className="w-3 h-3 rounded-full bg-[#e4c444] mr-2"></div>
//                 <span className="text-sm font-medium text-gray-500">
//                   Featured
//                 </span>
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
//                 Bloom Cosmetics Rebrand
//               </h3>
//               <p className="text-gray-500 mb-6 leading-relaxed">
//                 A complete brand transformation that increased recognition by
//                 75% and boosted sales by 40% in Q1.
//               </p>

//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 {[
//                   { value: "75%", label: "Recognition" },
//                   { value: "40%", label: "Sales Growth" },
//                   { value: "12", label: "Product Lines" },
//                   { value: "6", label: "Months" },
//                 ].map((stat, i) => (
//                   <div key={i} className="bg-[#83ce63] p-4 rounded-xl">
//                     <div className="text-xl font-medium text-gray-900">
//                       {stat.value}
//                     </div>
//                     <div className="text-sm text-gray-500">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>

//               <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
//                 View Case Study
//               </button>
//             </div>

//             <div className="lg:w-1/2 relative min-h-[400px]">
//               <div className="absolute inset-0 flex items-center justify-center p-8">
//                 <div className="relative w-full h-full rounded-2xl overflow-hidden">
//                   <Image
//                     src="/images/featured.jpg"
//                     alt="Featured Project"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Clients */}
//         <motion.div
//           className="mt-24 text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h3 className="text-xl font-medium text-gray-500 mb-8">
//             Trusted by innovative brands
//           </h3>
//           <div className="grid grid-cols-3 sm:grid-cols-5 gap-8">
//             {[...Array(5)].map((_, i) => (
//               <div key={i} className="flex justify-center">
//                 <div className="bg-gray-200 rounded-xl w-full h-16 sm:h-20"></div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "Nova SaaS Dashboard",
    category: "SaaS",
    imageUrl: "/images/saas-dashboard.png",
    description: "Clean analytics interface for financial data visualization",
  },
  {
    id: 2,
    title: "Lumina Mobile App",
    category: "Mobile",
    imageUrl: "/images/mobile-app.jpg",
    description: "Fitness tracking with minimalist user experience",
  },
  {
    id: 3,
    title: "Aether Design System",
    category: "Design",
    imageUrl: "/images/design-system.png",
    description: "Component library for consistent digital products",
  },
  {
    id: 4,
    title: "Edge Commerce API",
    category: "Development",
    imageUrl: "/images/api-code.png",
    description: "High-performance e-commerce backend solution",
  },
  {
    id: 5,
    title: "Polaris Brand Identity",
    category: "Branding",
    imageUrl: "/images/tech-startup.jpg",
    description: "Visual language for tech startup",
  },
  {
    id: 6,
    title: "Horizon Web Platform",
    category: "Web",
    imageUrl: "/images/dashb.jpeg",
    description: "Content management with intuitive admin",
  },
];

const categories = [
  "All",
  "SaaS",
  "Mobile",
  "Web",
  "Design",
  "Branding",
  "Development",
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filterRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);

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
          <div className="flex flex-col lg:flex-row bg-gradient-to-r from-blue-200/50 to-blue-500/80">
            <div className="p-8 md:p-12 lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-5 h-5 rounded-full bg-[#e4c444] mr-3"></div>
                <span className="text-sm font-medium text-gray-500">
                  Showcase
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
                Nova SaaS Platform
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Enterprise dashboard that reduced user onboarding time by 65%
                through intuitive design.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "65%", label: "Onboarding" },
                  { value: "3.2x", label: "Engagement" },
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
                className="bg-blue-900 text-white px-6 py-3 rounded-xl text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Study
              </motion.button>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <Image
                src="/images/saas-dashboard.png"
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