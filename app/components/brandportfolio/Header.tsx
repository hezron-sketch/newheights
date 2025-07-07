// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Header({
//   activeSection,
//   isScrolling,
//   mobileMenuOpen,
//   setMobileMenuOpen,
//   handleNavClick,
// }: {
//   activeSection: string;
//   isScrolling: boolean;
//   mobileMenuOpen: boolean;
//   setMobileMenuOpen: (open: boolean) => void;
//   handleNavClick: (id: string) => void;
// }) {
//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "portfolio", label: "Portfolio" },
//     { id: "testimonials", label: "Testimonials" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
//         isScrolling
//           ? "bg-black/20 backdrop-blur-sm shadow-lg border-b border-gray-100"
//           : "bg-[#e4e4d1]/80 backdrop-blur-lg border-b border-gray-100"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex items-center gap-2"
//         >
//           <Image src="/images/logo.png" alt="Logo" height={40} width={40} />
//           <span className="font-bold text-xl tracking-tight">New Heights</span>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex gap-8">
//           {navItems.map((item) => (
//             <motion.button
//               key={item.id}
//               onClick={() => handleNavClick(item.id)}
//               className={`text-sm font-medium transition-colors ${
//                 activeSection === item.id
//                   ? "text-[#e4c444] underline underline-offset-4 decoration-2"
//                   : "text-gray-700 hover:text-gray-900"
//               }`}
//             >
//               {item.label}
//             </motion.button>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {mobileMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {mobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           exit={{ opacity: 0, height: 0 }}
//           className="md:hidden mt-4"
//         >
//           <div className="flex flex-col gap-4 pb-4">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavClick(item.id)}
//                 className={`text-left py-2 px-4 rounded-lg ${
//                   activeSection === item.id
//                     ? "bg-[#e4c444]/10 text-[#e4c444]"
//                     : "text-gray-700"
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </nav>
//   );
// }


import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Header({
  activeSection,
  isScrolling,
  mobileMenuOpen,
  setMobileMenuOpen,
  handleNavClick,
}: {
  activeSection: string;
  isScrolling: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  handleNavClick: (id: string) => void;
}) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Work" },
    { id: "testimonials", label: "Clients" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 py-3 px-4 sm:px-6 transition-all duration-300 ${
        isScrolling
          ? "bg-white/10 backdrop-blur-sm shadow-sm"
          : "bg-white/30 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo with subtle animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="relative w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden">
            <Image src="/images/logo.png" alt="Logo" height={24} width={24} />
          </div>
          <span className="font-medium text-lg tracking-tight">New Heights Brands</span>
        </motion.div>

        {/* Desktop Navigation with creative indicator */}
        <div className="hidden md:flex relative">
          <div className="flex gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}

                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-1 left-1/2 w-4 h-0.5 bg-gray-900 -translate-x-1/2"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Creative Mobile Menu Button */}
        <motion.button
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 45 },
            closed: { rotate: 0 },
          }}
        >
          <motion.span
            className="w-6 h-0.5 bg-gray-700 mb-1.5"
            variants={{
              open: { rotate: 45, y: 7, width: "1.5rem" },
              closed: { rotate: 0, y: 0, width: "1.5rem" },
            }}
          />
          <motion.span
            className="w-4 h-0.5 bg-gray-700"
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gray-700 mt-1.5"
            variants={{
              open: { rotate: -45, y: -7, width: "1.5rem" },
              closed: { rotate: 0, y: 0, width: "1.5rem" },
            }}
          />
        </motion.button>
      </div>

      {/* Modern Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    handleNavClick(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-3 px-4 rounded-lg ${
                    activeSection === item.id
                      ? "bg-gray-50 text-gray-900"
                      : "text-gray-600"
                  }`}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gray-900"
                        layoutId="mobileActive"
                      />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}