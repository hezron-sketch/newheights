"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      className={`z-50 w-full text-center text-sm bg-black text-gray-400 py-8 border-t border-black transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      &copy; {new Date().getFullYear()} New Heights Brands. All rights reserved.
    </footer>
  );
}
