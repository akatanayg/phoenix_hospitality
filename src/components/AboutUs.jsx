import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const images = ["/image1.jpg", "/image2.png", "/c1.jpg", "/c3.jpg"];

  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/aboutusbg_3.png)" }}
    >
      {/* Top Bulge - Curved Black */}
      <div className="absolute -top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 md:h-24 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            className="fill-black"
            d="M0,32L48,26.7C96,21,192,11,288,21.3C384,32,480,64,576,80C672,96,768,96,864,85.3C960,75,1056,53,1152,53.3C1248,53,1344,75,1392,85.3L1440,96L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-screen px-6 md:px-16 text-white">
        {/* Left Side - Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 flex flex-col justify-center">
          {/* Heading with Half Animated Underline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <h2
              className=" text-5xl md:text-6xl font-sans text-orange-500 relative inline-block"
              style={{ fontFamily: "sans-serif" }}
            >
              About Us
              <motion.span
                className="absolute left-0 bottom-0 h-[3px] bg-orange-500"
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </h2>
          </motion.div>

          {/* Subtext (shorter width now) */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-lg leading-relaxed font-sans mx-auto md:mx-0 max-w-sm md:max-w-md"
          >
            Experience luxury and elegance at Phoenix Residency, where comfort
            meets culture. Situated in the heart of the city, we offer a retreat
            that blends modern amenities with authentic local charm.
          </motion.p>
        </div>

        {/* Right Side - Image Grid Section */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 md:gap-3">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-xl border border-orange-500 p-1 w-full h-32 sm:h-36 md:h-44 group bg-white/10 backdrop-blur-lg"
            >
              {/* Image */}
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={`About Us ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 pointer-events-none rounded-xl group-hover:shadow-[0_0_30px_10px_rgba(255,123,0,0.8)] transition-shadow duration-500 ease-out"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Overlay Fade (optional) */}
      <div className="absolute inset-0 bg-black/40"></div>
    </section>
  );
};

export default AboutUs;
