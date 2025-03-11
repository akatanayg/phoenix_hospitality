import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";

const images = [
  "/c1.jpg",
  "/c3.jpg",
  "/c5.jpg",
  "/c3.jpg",
  "/c1.jpg",
  "/c3.jpg",
];
const infiniteImages = [...images, ...images];

const Gallery = () => {
  const { darkMode } = useDarkMode();
  const carouselRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { ease: "linear", duration: 15, repeat: Infinity },
    });
  }, [controls]);

  return (
    <section
      className={`w-full py-16 px-4 sm:px-6 md:px-16 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#FAF1EB] text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto relative flex flex-col space-y-8">
        {/* Heading Block (Right-aligned) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full flex justify-end"
        >
          <div className="text-right">
            <h2 className="text-[36px] sm:text-[50px] md:text-[80px] font-extrabold uppercase tracking-[5px]">
              Gallery
            </h2>
            <p
              className={`text-[18px] sm:text-[22px] font-medium mt-3 max-w-sm ml-auto ${
                darkMode ? "text-red-400" : "text-[#E63946]"
              }`}
            >
              A glimpse into the beauty and charm of our property.
            </p>
          </div>
        </motion.div>

        {/* Carousel Wrapper with Fades */}
        <div className="relative w-full overflow-hidden">
          {/* Left Fade */}
          <div
            className={`absolute left-0 top-0 h-full w-16 pointer-events-none z-10 ${
              darkMode
                ? "bg-gradient-to-r from-gray-900 to-transparent"
                : "bg-gradient-to-r from-[#FAF1EB] to-transparent"
            }`}
          ></div>

          {/* Right Fade */}
          <div
            className={`absolute right-0 top-0 h-full w-16 pointer-events-none z-10 ${
              darkMode
                ? "bg-gradient-to-l from-gray-900 to-transparent"
                : "bg-gradient-to-l from-[#FAF1EB] to-transparent"
            }`}
          ></div>

          {/* Infinite Scrolling Carousel */}
          <motion.div
            ref={carouselRef}
            animate={controls}
            className="flex space-x-4"
          >
            {infiniteImages.map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={src}
                  alt={`Gallery image ${(idx % images.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
