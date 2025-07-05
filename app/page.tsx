"use client";
import { useState, useEffect, useRef } from "react";
import {
  Header,
  HeroSection,
  PortfolioSection,
  Footer,
  LightBox,
} from "@/app/components/brandportfolio";
import ContactSection from "./components/brandportfolio/ContactSection";
import TestimonialsSection from "./components/brandportfolio/TestimonialsSection";

export default function BrandPortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const contactRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
      scrollTimerRef.current = setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const animateToContact = (e: React.MouseEvent) => {
    setActiveSection("contact");
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-[#e4e4d1] text-[#1a1a1a]">
      <LightBox
        isOpen={lightboxOpen}
        imageUrl={lightboxImage}
        onClose={closeLightbox}
      />

      <Header
        activeSection={activeSection}
        isScrolling={isScrolling}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
      />

      <HeroSection
        animateToContact={animateToContact}
        portfolioRef={portfolioRef as React.RefObject<HTMLDivElement>}
      />

      <PortfolioSection ref={portfolioRef as React.RefObject<HTMLDivElement>} openLightbox={openLightbox} />

      <TestimonialsSection ref={testimonialsRef} />

      <ContactSection ref={contactRef} activeSection={activeSection} />

      <Footer />
    </div>
  );
}