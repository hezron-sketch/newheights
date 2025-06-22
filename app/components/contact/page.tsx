

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function BrandPortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(window.scrollTimer);
      window.scrollTimer = setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on nav items
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Animate to contact form
  const animateToContact = (e: React.MouseEvent) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    setActiveSection("contact");

    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Open lightbox
  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  // Portfolio items with image URLs
  const portfolioItems = [
    {
      id: 1,
      title: "Bloom Cosmetics Rebrand",
      description: "Complete brand identity refresh",
      category: "Branding",
      imageUrl: "/cosmetics-brand.jpg",
    },
    {
      id: 2,
      title: "Organic Tea Packaging",
      description: "Sustainable packaging design",
      category: "Packaging",
      imageUrl: "/tea-packaging.jpg",
    },
    {
      id: 3,
      title: "Tech Startup Website",
      description: "Modern web design & development",
      category: "Digital",
      imageUrl: "/tech-website.jpg",
    },
    {
      id: 4,
      title: "Coffee Brand Identity",
      description: "From logo to packaging system",
      category: "Branding",
      imageUrl: "/coffee-branding.jpg",
    },
    {
      id: 5,
      title: "Fashion Lookbook",
      description: "Editorial design & photography",
      category: "Print",
      imageUrl: "/fashion-lookbook.jpg",
    },
    {
      id: 6,
      title: "Restaurant Menu Design",
      description: "Culinary branding experience",
      category: "Print",
      imageUrl: "/restaurant-menu.jpg",
    },
    {
      id: 7,
      title: "Mobile Banking App",
      description: "UI/UX design for fintech",
      category: "Digital",
      imageUrl: "/mobile-app.jpg",
    },
    {
      id: 8,
      title: "Wine Label Collection",
      description: "Premium packaging design",
      category: "Packaging",
      imageUrl: "/wine-labels.jpg",
    },
    {
      id: 9,
      title: "Corporate Brand System",
      description: "Complete visual identity",
      category: "Branding",
      imageUrl: "/corporate-brand.jpg",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Bloom Cosmetics",
      content:
        "New Heights completely transformed our brand identity. Their team delivered a stunning visual system that perfectly captures our essence and has increased our engagement by 200%.",
      avatar: "/jpg",
    },
    {
      id: 2,
      name: "Michael Torres",
      company: "TechNova",
      content:
        "The packaging design work exceeded our expectations. Not only is it beautiful, but it's also practical and has significantly boosted our shelf presence. Couldn't be happier!",
      avatar: "/ava",
    },
    {
      id: 3,
      name: "Emma Richardson",
      company: "GreenLife Organics",
      content:
        "Working with New Heights was a game-changer for our social media strategy. Their creative graphics and cohesive branding have helped us double our followers in just three months.",
      avatar: "/avat",
    },
  ];

  return (
    <div className="min-h-screen bg-[#e4e4d1] text-[#1a1a1a]">
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white text-4xl bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                &times;
              </button>
              <div className="relative w-full h-full min-h-[60vh]">
                <Image
                  src={lightboxImage}
                  alt="Enlarged portfolio image"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
          isScrolling
            ? "bg-black/20 backdrop-blur-sm shadow-sm"
            : "bg-[#e4e4d1]/80 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Image src="/logo.png" alt="Logo" height={40} width={40} />
            <span className="font-bold text-xl tracking-tight">
              New Heights
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#e4c444] underline underline-offset-4 decoration-2"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col gap-4 pb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 px-4 rounded-lg ${
                    activeSection === item.id
                      ? "bg-[#e4c444]/10 text-[#e4c444]"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-24"
      >
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center gap-6 mb-8 sm:mb-12 max-w-3xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 rounded-full blur-xl opacity-10 animate-pulse"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="New Heights Logo"
                width={300}
                height={300}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-70 md:h-56"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
          >
            Elevating Brands to{" "}
            <span className="text-[#e4c444]">New Heights</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg sm:text-xl text-center text-gray-700 max-w-2xl leading-relaxed px-4"
          >
            We craft distinctive brand identities and visual experiences that
            resonate with your audience and drive growth.
          </motion.p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col items-center gap-4 mt-4"
        >
          <motion.button
            onClick={animateToContact}
            whileHover={{ scale: 1.05, backgroundColor: "#000000" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-full bg-black text-white font-bold px-6 py-2 sm:px-8 sm:py-3 shadow-lg text-base sm:text-lg"
          >
            Get in Touch
          </motion.button>
          <motion.button
            onClick={() => {
              setActiveSection("portfolio");
              portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2 text-sm sm:text-base"
            whileHover={{ y: -3 }}
          >
            Explore our work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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

      {/* Portfolio Section */}
      <section
        id="portfolio"
        ref={portfolioRef}
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
                      category === "All"
                        ? "bg-black text-white"
                        : "hover:bg-black/10"
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Portfolio Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
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
                      src="/featured.jpg"
                      alt="Cosmetics"
                      fill
                      className="object-cover rounded-xl sm:rounded-t-xl"
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

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={testimonialsRef}
        className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f5f5e9]"
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
              Client Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Hear from brands that have reached new heights with our creative
              solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
                <div className="flex mt-3 sm:mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 text-[#e4e444]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="py-16 sm:py-24 px-4 sm:px-6 bg-[#e4e444] flex items-center justify-center"
      >
        <AnimatePresence>
          <motion.div
            key={activeSection === "contact" ? "contact-active" : "contact"}
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 15, stiffness: 200 }}
            className="w-full max-w-xl mx-auto p-6 sm:p-8 bg-white text-gray-900 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center"
            >
              Let's Elevate Your Brand
            </motion.h2>

            <form className="flex flex-col gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 sm:mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e4e444] text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 sm:mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e4e444] text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1 sm:mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e4e444] text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <button
                  type="submit"
                  className="w-full py-2 sm:py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  Send Message
                </button>
              </motion.div>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 sm:mt-8 text-center"
            >
              <p className="text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">
                Prefer to talk directly?
              </p>
              <p className="font-bold text-base sm:text-lg">
                info@newheightsbrands.com
              </p>
              <p className="font-bold text-base sm:text-lg">+2547 0706 9007</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10  rounded-full flex items-center justify-center">
              <Image src="/logo.png" alt="Logo" height={40} width={40} />
             
            </div>
          </div>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">
            Elevating brands to new heights through creativity and strategy
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 sm:mb-6">
            {["Twitter", "Instagram", "LinkedIn", "Dribbble"].map(
              (platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-400 hover:text-[#e4e444] transition-colors text-sm sm:text-base"
                >
                  {platform}
                </a>
              )
            )}
          </div>
          
        </div>
      </footer>
    </div>
  );
}