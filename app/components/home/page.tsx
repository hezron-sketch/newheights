"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e4e4d1] text-[var(--foreground)] px-6 py-12 transition-all duration-300">
      {/* Header Section */}
      <header
        className={`flex flex-col items-center gap-6 mb-12 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="transition-transform duration-300 hover:scale-105">
          <Image
            src="/drawing1.png"
            alt="New Heights Brands logo"
            width={420}
            height={410}
            priority
          />
        </div>

        <p
          className={`text-2xl text-black text-center max-w-md leading-relaxed transition-opacity duration-1000 ${
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
          } hover:scale-105 hover:shadow-xl`}
        >
          Get in Touch
        </a>
      </main>
    </div>
  );
}
