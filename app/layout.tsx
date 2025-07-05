import type { Metadata } from "next";
import { Space_Grotesk, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";


const agrandir = localFont({
  src: "../public/fonts/Agrandir-GrandHeavy.otf",
  display: "swap", // Optional: Controls font display behavior
});

// Primary sans-serif font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

// Secondary sans-serif font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

// Serif font for headings and accents
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "New Heights Brands",
  description: "Taking your brand to the New Heights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans bg-[#f8f8f2] text-gray-800">
        {children}
      </body>
    </html>
  );
}