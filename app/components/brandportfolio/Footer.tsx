// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-black text-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="flex flex-col items-center md:items-start">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
//                 <Image
//                   src="/images/logo.png"
//                   alt="Logo"
//                   width={40}
//                   height={40}
//                 />
//               </div>
//               <span className="font-bold text-lg">New Heights</span>
//             </div>
//             <p className="text-gray-400 text-sm text-center md:text-left max-w-md">
//               Elevating brands to new heights through creativity and strategy
//             </p>
//           </div>

//           <div className="flex flex-col items-center md:items-end gap-4">
//             <div className="flex gap-4">
//               {[
//                 {
//                   name: "Twitter",
//                   url: "https://twitter.com/mtuhalf",
//                   icon: (
//                     <svg
//                       className="w-5 h-5"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                     </svg>
//                   ),
//                 },
//                 {
//                   name: "Instagram",
//                   url: "https://instagram.com/_new.heights_",
//                   icon: (
//                     <svg
//                       className="w-5 h-5"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
//                     </svg>
//                   ),
//                 },
//                 {
//                   name: "LinkedIn",
//                   url: "https://linkedin.com/company/#",
//                   icon: (
//                     <svg
//                       className="w-5 h-5"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   ),
//                 },
//                 {
//                   name: "Dribbble",
//                   url: "https://dribbble.com/#",
//                   icon: (
//                     <svg
//                       className="w-5 h-5"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zM12 2.163C6.663 2.163 2.163 6.663 2.163 12c0 .975.183 1.92.51 2.81.204.547.713.786 1.14.616 2.16-.67 6.527-2.14 9.336-2.142 2.54-.003 5.708.78 7.44 1.38.34.126.708-.04.822-.36.207-.586.293-1.225.293-1.83 0-5.337-4.337-9.673-9.673-9.673zm-3.71 17.613c-.24 0-.476-.12-.616-.317-.928-1.27-1.66-3.225-1.987-5.402-.36-2.387-.44-5.825.042-7.776.11-.44.584-.68 1.01-.545 3.203.89 6.82 3.14 8.208 3.8.43.18.6.69.39 1.09-.99 1.83-3.438 5.01-6.897 7.02-.17.08-.35.13-.53.13zm-3.93-7.525c-.172 0-.34-.09-.428-.248-.144-.25-.107-.57.086-.77.987-.99 3.13-2.57 5.062-3.12.34-.1.71.04.83.36.12.32-.03.69-.35.81-1.66.53-3.64 1.99-4.52 2.96-.07.07-.15.11-.23.11z" />
//                     </svg>
//                   ),
//                 },
//               ].map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-[#e4e444] transition-colors"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>

//             <div className="text-center md:text-right">
//               <p className="text-gray-400 text-sm">hpaulhezne@gmail.com</p>
//               <p className="text-gray-400 text-sm">+2547 0706 9007</p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 pt-8 border-t border-gray-800 text-center">
//           <p className="text-gray-500 text-sm">
//             &copy; {new Date().getFullYear()} New Heights. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/mtuhalf",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com/_new.heights_",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect strokeWidth={1.5} width={20} height={20} x={2} y={2} rx={5} />
          <circle strokeWidth={1.5} cx={12} cy={12} r={4.5} />
          <circle fill="currentColor" cx={18} cy={6} r={1} />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/#",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={1.5}
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
          />
          <rect strokeWidth={1.5} width={4} height={12} x={2} y={9} />
          <circle strokeWidth={1.5} cx={4} cy={4} r={2} />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/#",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={1.5}
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"
          />
          <path
            strokeWidth={1.5}
            d="M8.5 4.5a15 15 0 015 2M4 12a14.9 14.9 0 002 6.5M12 20a15 15 0 006-2M19.5 8.5a15 15 0 01-5-2"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 bg-[#0a0a0a] text-gray-300 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="opacity-90"
                />
              </div>
              <span className="font-medium text-xl text-white">New Heights Brands</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs mb-8 leading-relaxed">
              Crafting digital experiences that elevate brands to new heights
              through design and technical precision.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">hpaulhezne@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm">+2547 0706 9007</span>
              </div>
            </div>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {["Home", "Work", "Clients", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-6">
              Connect
            </h3>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-800 hover:border-gray-600 transition-colors"
                  whileHover={{ y: -5, backgroundColor: "#1a1a1a" }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="border-t border-gray-900 pt-6">
              <p className="text-xs text-gray-500">
                Subscribe to our newsletter for design insights
              </p>
              <div className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-600"
                />
                <button className="bg-white text-black text-sm px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Horizon Studio. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}