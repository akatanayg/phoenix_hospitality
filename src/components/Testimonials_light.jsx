import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Testimonials Data - You can add more if you want
const testimonials = [
  {
    quote:
      "The guesthouse is a charming villa built in the Ottoman period and has stayed in the owner’s family for over a century. She takes excellent care of the place, and takes her duty to guests seriously.",
    name: "Richard",
    location: "USA",
  },
  {
    quote:
      "Staying here felt like stepping into a living piece of history. The blend of heritage and comfort is absolutely unique.",
    name: "Amelia",
    location: "UK",
  },
  {
    quote:
      "From the delicious breakfast to the warm hospitality, everything was perfect. I can’t wait to come back!",
    name: "Mehmet",
    location: "Turkey",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#FAF1EB] w-full py-16 px-4 sm:px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-12 relative">
        {/* Heading with Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-[36px] sm:text-[50px] md:text-[80px] leading-none font-extrabold uppercase text-black tracking-[5px]">
            TESTIMONIALS
          </h2>
          <p className="text-[#E63946] text-[18px] sm:text-[22px] font-medium mt-3 max-w-2xl">
            What our guests say about their unforgettable experiences.
          </p>
        </motion.div>

        {/* Decorative Quotes */}
        <motion.span
          initial={{ opacity: 0, x: -50, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-4 left-4 text-[#E63946] text-[100px] sm:text-[140px] font-serif opacity-30 select-none"
        >
          &ldquo;
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: 50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-4 right-4 text-[#E63946] text-[100px] sm:text-[140px] font-serif opacity-30 select-none rotate-180"
        >
          &rdquo;
        </motion.span>

        {/* Testimonial Text Block - Automatically Changes */}
        <div className="relative max-w-3xl mx-auto mt-8 sm:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="space-y-5"
            >
              {/* Quote Text */}
              <p className="text-[#111] text-[18px] sm:text-[22px] leading-relaxed italic">
                {testimonials[currentIndex].quote}
              </p>

              {/* Author Details */}
              <div className="text-left">
                <p className="text-black font-bold text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-[#777] text-sm">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
