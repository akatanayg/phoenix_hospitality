import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Gallery Images - Replace with your actual images
const images = [
  "/c1.jpg",
  "/c3.jpg",
  "/c5.jpg",
  "/c3.jpg",
  "/c1.jpg",
  "/c3.jpg",
];

// Duplicate images to create the seamless loop
const infiniteImages = [...images, ...images];

const Gallery = () => {
  const carouselRef = useRef(null);
  const controls = useAnimation();

  // Start infinite scroll animation
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { ease: "linear", duration: 15, repeat: Infinity },
    });
  }, [controls]);

  return (
    <section className="bg-[#FAF1EB] w-full py-16 px-4 sm:px-6 md:px-16 overflow-hidden">
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
            <h2 className="text-[36px] sm:text-[50px] md:text-[80px] leading-none font-extrabold uppercase text-black tracking-[5px]">
              Gallery
            </h2>
            <p className="text-[#E63946] text-[18px] sm:text-[22px] font-medium mt-3 max-w-sm ml-auto">
              A glimpse into the beauty and charm of our property.
            </p>
          </div>
        </motion.div>

        {/* Carousel Wrapper with Fades */}
        <div className="relative w-full overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#FAF1EB] to-transparent pointer-events-none z-10"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#FAF1EB] to-transparent pointer-events-none z-10"></div>

          {/* Infinite Scrolling Carousel */}
          <div className="w-full overflow-hidden">
            <motion.div
              ref={carouselRef}
              animate={controls}
              className="flex space-x-4"
            >
              {infiniteImages.map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] rounded-lg overflow-hidden shadow-xl"
                >
                  <img
                    src={src}
                    alt={`Gallery image ${idx % images.length + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
