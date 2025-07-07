// import { forwardRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { FormData } from "./types";

// interface ContactSectionProps {
//   activeSection: string;
// }

// const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
//   ({ activeSection }, ref) => {
//     const [formData, setFormData] = useState<FormData>({
//       name: "",
//       email: "",
//       message: "",
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitStatus, setSubmitStatus] = useState<{
//       success: boolean;
//       message: string;
//     } | null>(null);

//     const handleChange = (
//       e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => {
//       const { name, value } = e.target;
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//       e.preventDefault();
//       setIsSubmitting(true);
//       setSubmitStatus(null);

//       try {
//         const response = await fetch("/api/contact", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           setSubmitStatus({
//             success: true,
//             message: "Message sent successfully!",
//           });
//           setFormData({ name: "", email: "", message: "" });
//         } else {
//           setSubmitStatus({
//             success: false,
//             message: data.message || "Error sending message",
//           });
//         }
//       } catch (error) {
//         setSubmitStatus({
//           success: false,
//           message: "Network error. Please try again.",
//         });
//       } finally {
//         setIsSubmitting(false);
//       }
//     };

//     return (
//       <section
//         id="contact"
//         ref={ref}
//         className="py-16 sm:py-24 px-4 sm:px-6 bg-[#e4e444] flex items-center justify-center"
//       >
//         <AnimatePresence>
//           <motion.div
//             key={activeSection === "contact" ? "contact-active" : "contact"}
//             initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             transition={{ type: "spring", damping: 15, stiffness: 200 }}
//             className="w-full max-w-xl mx-auto p-6 sm:p-8 bg-white text-gray-900 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
//           >
//             <motion.h2
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center"
//             >
//               Let's Elevate Your Brand
//             </motion.h2>

//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col gap-4 sm:gap-6"
//             >
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium mb-1 sm:mb-2"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e4e444] text-sm sm:text-base"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-1 sm:mb-2"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e4e444] text-sm sm:text-base"
//                   placeholder="john@example.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-1 sm:mb-2"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e4e444] text-sm sm:text-base"
//                   placeholder="Tell us about your project..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full py-2 sm:py-3 bg-black text-white font-bold rounded-lg transition-colors text-sm sm:text-base ${
//                   isSubmitting
//                     ? "opacity-70 cursor-not-allowed"
//                     : "hover:bg-gray-800"
//                 }`}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </button>

//               {submitStatus && (
//                 <div
//                   className={`p-3 rounded-lg text-sm ${
//                     submitStatus.success
//                       ? "bg-green-100 text-green-800"
//                       : "bg-red-100 text-red-800"
//                   }`}
//                 >
//                   {submitStatus.message}
//                 </div>
//               )}
//             </form>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               className="mt-6 sm:mt-8 text-center"
//             >
//               <p className="text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">
//                 Prefer to talk directly?
//               </p>
//               <p className="font-bold text-base sm:text-lg">
//                 hpaulhezne@gmail.com
//               </p>
//               <p className="font-bold text-base sm:text-lg">+2547 0706 9007</p>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </section>
//     );
//   }
// );

// ContactSection.displayName = "ContactSection";
// export default ContactSection;


"use client";
import { forwardRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ContactSectionProps {
  activeSection: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
  ({ activeSection }, ref) => {
    const [formData, setFormData] = useState<FormData>({
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
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSubmitStatus({
          success: true,
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        setSubmitStatus({
          success: false,
          message: "Network error. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section
        id="contact"
        ref={ref}
        className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#f5f7fa] to-[#e4ecfb] flex items-center justify-center"
      >
        <AnimatePresence>
          <motion.div
            key={activeSection === "contact" ? "contact-active" : "contact"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#e4c444] to-[#f2d56a] p-6 sm:p-8">
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl sm:text-3xl font-medium text-gray-900 text-center"
                >
                  Let's Create Together
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-800 text-center mt-2"
                >
                  Share your vision and we'll bring it to life
                </motion.p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 flex flex-col gap-5"
              >
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e4c444]/50 focus:border-transparent text-base placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e4c444]/50 focus:border-transparent text-base placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e4c444]/50 focus:border-transparent text-base placeholder-gray-400"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3.5 bg-gray-900 text-white font-medium rounded-xl transition-colors mt-2 ${
                    isSubmitting
                      ? "opacity-80 cursor-not-allowed"
                      : "hover:bg-gray-800"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex justify-center items-center">
                      <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`p-3 rounded-lg text-center ${
                        submitStatus.success
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {submitStatus.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pb-6 sm:pb-8 px-6 sm:px-8 text-center border-t border-gray-100"
              >
                <p className="text-gray-600 mb-1 text-sm">
                  Prefer direct communication?
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-3">
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium text-gray-900">
                      hpaulhezne@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="font-medium text-gray-900">
                      +2547 0706 9007
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    );
  }
);

ContactSection.displayName = "ContactSection";
export default ContactSection;