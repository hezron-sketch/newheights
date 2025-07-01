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
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle scroll animations
  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: data.message });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || "Error sending message",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

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
      imageUrl: "/images/cosmetics-brand.jpg",
    },
    {
      id: 2,
      title: "Organic Tea Packaging",
      description: "Sustainable packaging design",
      category: "Packaging",
      imageUrl: "/images/tea-packaging.jpg",
    },
    {
      id: 3,
      title: "Tech Startup Website",
      description: "Modern web design & development",
      category: "Digital",
      imageUrl: "/images/tech-website.jpg",
    },
    {
      id: 4,
      title: "Coffee Brand Identity",
      description: "From logo to packaging system",
      category: "Branding",
      imageUrl: "/images/coffee-branding.jpg",
    },
    {
      id: 5,
      title: "Fashion Lookbook",
      description: "Editorial design & photography",
      category: "Print",
      imageUrl: "/images/fashion-lookbook.jpg",
    },
    {
      id: 6,
      title: "Restaurant Menu Design",
      description: "Culinary branding experience",
      category: "Print",
      imageUrl: "/images/restaurant-menu.jpg",
    },
    {
      id: 7,
      title: "Mobile Banking App",
      description: "UI/UX design for fintech",
      category: "Digital",
      imageUrl: "/images/mobile-app.jpg",
    },
    {
      id: 8,
      title: "Wine Label Collection",
      description: "Premium packaging design",
      category: "Packaging",
      imageUrl: "/images/wine-labels.jpg",
    },
    {
      id: 9,
      title: "Corporate Brand System",
      description: "Complete visual identity",
      category: "Branding",
      imageUrl: "/images/corporate-brand.jpg",
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

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

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
            ? "bg-black/20 backdrop-blur-sm shadow-lg border-b border-gray-100"
            : "bg-[#e4e4d1]/80 backdrop-blur-lg border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Image src="/images/logo.png" alt="Logo" height={40} width={40} />
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
                src="/images/logo.png"
                alt="New Heights Logo"
                width={300}
                height={300}
                // className="w-40 h-40 sm:w-48 sm:h-48 md:w-70 md:h-56"
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

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:gap-6"
            >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 sm:mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e4e444] text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 sm:mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e4e444] text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1 sm:mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e4e444] text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 sm:py-3 bg-black text-white font-bold rounded-lg transition-colors text-sm sm:text-base ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-gray-800"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status Message */}
              {submitStatus && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    submitStatus.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
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
                hpaulhezne@gmail.com
              </p>
              <p className="font-bold text-base sm:text-lg">+2547 0706 9007</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Branding */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                  <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
                </div>
                <span className="font-bold text-lg">New Heights</span>
              </div>
              <p className="text-gray-400 text-sm text-center md:text-left max-w-md">
                Elevating brands to new heights through creativity and strategy
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-4">
                {[
                  {
                    name: "Twitter",
                    url: "https://twitter.com/mtuhalf",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    url: "https://instagram.com/tpharmacy001",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    url: "https://linkedin.com/company/#",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Dribbble",
                    url: "https://dribbble.com/#",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zM12 2.163C6.663 2.163 2.163 6.663 2.163 12c0 .975.183 1.92.51 2.81.204.547.713.786 1.14.616 2.16-.67 6.527-2.14 9.336-2.142 2.54-.003 5.708.78 7.44 1.38.34.126.708-.04.822-.36.207-.586.293-1.225.293-1.83 0-5.337-4.337-9.673-9.673-9.673zm-3.71 17.613c-.24 0-.476-.12-.616-.317-.928-1.27-1.66-3.225-1.987-5.402-.36-2.387-.44-5.825.042-7.776.11-.44.584-.68 1.01-.545 3.203.89 6.82 3.14 8.208 3.8.43.18.6.69.39 1.09-.99 1.83-3.438 5.01-6.897 7.02-.17.08-.35.13-.53.13zm-3.93-7.525c-.172 0-.34-.09-.428-.248-.144-.25-.107-.57.086-.77.987-.99 3.13-2.57 5.062-3.12.34-.1.71.04.83.36.12.32-.03.69-.35.81-1.66.53-3.64 1.99-4.52 2.96-.07.07-.15.11-.23.11z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#e4e444] transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm">hpaulhezne@gmail.com</p>
                <p className="text-gray-400 text-sm">+2547 0706 9007</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} New Heights. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}