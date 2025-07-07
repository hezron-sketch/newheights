// import { forwardRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Testimonial } from "./types";
// import { testimonials } from "./constants";

// const TestimonialsSection = forwardRef<HTMLDivElement>((_, ref) => {
//   return (
//     <section
//       id="testimonials"
//       ref={ref}
//       className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f5f5e9]"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-10 sm:mb-16"
//         >
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
//             Client Testimonials
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
//             Hear from brands that have reached new heights with our creative
//             solutions.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg"
//             >
//               <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
//                 <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-200">
//                   <Image
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                     width={64}
//                     height={64}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-base sm:text-lg">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-gray-600 text-xs sm:text-sm">
//                     {testimonial.company}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-gray-700 italic text-sm sm:text-base">
//                 "{testimonial.content}"
//               </p>
//               <div className="flex mt-3 sm:mt-4">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 sm:h-5 sm:w-5 text-[#e4e444]"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// });

// TestimonialsSection.displayName = "TestimonialsSection";
// export default TestimonialsSection;


"use client";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Brian Murangiri",
    company: "NovaTech",
    content:
      "Their minimalist approach transformed our brand identity beyond expectations. The attention to detail is unmatched.",
    avatar: "/images/avat.jpg",
  },
  {
    id: 2,
    name: "Jeremiah Kahindi",
    company: "Lumina Design",
    content:
      "Working with this team elevated our digital presence. Their clean design aesthetic perfectly captured our vision.",
    avatar: "/images/ava.jpg",
  },
  {
    id: 3,
    name: "Abdimajid Hussein",
    company: "Edge Solutions",
    content:
      "The precision in their technical execution is impressive. They delivered exactly what we needed with minimal fuss.",
    avatar: "/images/jpg.jpg",
  },
];

const TestimonialsSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-16 sm:py-24 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-3">
            Client Voices
          </h2>
          <div className="w-16 h-0.5 bg-[#e4c444] rounded-full mx-auto mb-5"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            What industry leaders say about our approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-2xl p-6 sm:p-7 flex flex-col h-full"
            >
              <div className="mb-4 flex items-center">
                <div className="flex space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e4c444]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-6 flex-grow italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";
export default TestimonialsSection;