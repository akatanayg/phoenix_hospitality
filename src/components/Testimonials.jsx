import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "An unforgettable experience! The hospitality and ambiance were simply top-notch. Highly recommended for anyone visiting the city.",
    name: "Rohit Sharma",
    date: "January 2025",
    image: "/person1.jpg",
  },
  {
    text: "Loved the luxury and attention to detail. Every corner of the hotel felt like art. Will definitely visit again!",
    name: "Priya Kapoor",
    date: "December 2024",
    image: "/person2.jpg",
  },
  {
    text: "The staff went above and beyond to make us feel at home. Fantastic experience!",
    name: "Amit Verma",
    date: "November 2024",
    image: "/person3.jpg",
  },
  {
    text: "Perfect blend of luxury and culture. Our stay was nothing short of magical.",
    name: "Simran Kaur",
    date: "October 2024",
    image: "/person4.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative w-full py-16 bg-cover bg-center bg-black overflow-hidden">
      {/* Heading + Subtext */}
      <div className="text-center space-y-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl text-orange-500 font-sans relative inline-block"
          style={{
            fontWeight: "normal",
            letterSpacing: "-1px",
            lineHeight: "1.1",
          }}
        >
          Testimonials
          <motion.div
            className="h-[3px] bg-orange-500 absolute left-1/2 -translate-x-1/2 bottom-[-8px]"
            initial={{ width: 0 }}
            whileInView={{ width: "75%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />
        </motion.h2>
        <p className="text-white text-sm max-w-xl mx-auto">
          Hear from our happy guests who have experienced the elegance, warmth,
          and unmatched hospitality of Phoenix Residency.
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative max-w-4xl mx-auto overflow-hidden">
        {/* Cards Wrapper (Horizontal Scroll) */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="relative bg-white/10 backdrop-blur-lg border border-orange-500/50 rounded-2xl p-6 sm:p-8 w-80 flex flex-col justify-between text-white h-72 md:h-80 opacity-90 shadow-[0_0_30px_5px_rgba(255,102,0,0.6)]"
              >
                {/* Testimonial Text */}
                <p className="italic text-lg leading-snug overflow-hidden text-ellipsis text-balance">
                  {testimonial.text.length > 180
                    ? `${testimonial.text.slice(0, 180)}...`
                    : testimonial.text}
                </p>

                {/* Name, Date & Image */}
                <div className="flex flex-col items-end space-y-1 mt-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 font-semibold">
                      {testimonial.name}
                    </span>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                    />
                  </div>
                  <span className="text-xs text-gray-300">
                    {testimonial.date}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-black p-2 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-black p-2 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default Testimonials;
