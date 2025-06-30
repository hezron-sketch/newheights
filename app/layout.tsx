import type { Metadata } from "next";
import { Space_Grotesk, Poppins, Inter } from "next/font/google";
import "./globals.css";

// Import fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"], // Customize as needed
});

// const poppins = Poppins({
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   weight: "100",
// });

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   weight: "500",
// });

export const metadata: Metadata = {
  title: "New Heights Brands",
  description: "Taking your brand to the new heights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
