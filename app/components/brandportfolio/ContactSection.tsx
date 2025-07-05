import { forwardRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FormData } from "./types";

interface ContactSectionProps {
  activeSection: string;
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
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus({
            success: true,
            message: "Message sent successfully!",
          });
          setFormData({ name: "", email: "", message: "" });
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

    return (
      <section
        id="contact"
        ref={ref}
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
    );
  }
);

ContactSection.displayName = "ContactSection";
export default ContactSection;
