import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-between px-4 md:px-16"
      style={{ backgroundImage: "url(/aboutusbg_3.png)" }} // Update with your actual background image
    >
      {/* Left Side - Text Section */}
      <div
        className="relative z-10 max-w-lg space-y-4 transform -translate-y-16"
        style={{ marginLeft: "120px" }}
      >
        {/* Heading with underline animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-2"
        >
          <h2 className="text-5xl md:text-7xl text-orange-500 uppercase font-sans tracking-wider">
            About Us
          </h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-32 h-[2px] bg-orange-500"
          />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-white text-sm md:text-lg leading-relaxed font-sans"
        >
          Experience luxury and elegance at Phoenix Residency, where comfort
          meets culture. Situated in the heart of the city, we offer a retreat
          that blends modern amenities with authentic local charm.
        </motion.p>
      </div>

      {/* Right Side - Cards Section */}
      <div
        className="relative z-10 flex flex-col items-center justify-center"
        style={{ marginRight: "180px" }}
      >
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="relative w-full max-w-sm bg-white/20 backdrop-blur-lg border-2 border-gray-400 rounded-xl shadow-2xl p-4 md:p-6 space-y-4 text-black mt-8"
        >
          <h3 className="text-lg md:text-xl font-semibold text-center">
            Discover Our Legacy
          </h3>
          <div className="w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-lg border-2 border-white shadow-lg">
            <img
              src="/about-us-photo.jpg"
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs md:text-sm text-center">
            Serving guests with passion since 1990, combining luxury,
            hospitality, and culture in every moment.
          </p>
        </motion.div>

        {/* Overlapping Card - Slightly Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="absolute -top-12 right-[-30px] w-40 md:w-48 bg-white/20 backdrop-blur-lg border-2 border-gray-400 rounded-xl shadow-xl p-3 space-y-2 text-black"
        >
          <h4 className="text-sm md:text-base font-semibold text-center">
            Our Commitment
          </h4>
          <div className="w-full h-32 md:h-40 overflow-hidden rounded-lg border-2 border-white shadow-lg">
            <img
              src="/commitment-photo.jpg"
              alt="Commitment"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-center">
            Dedicated to creating memorable stays for all our guests.
          </p>
        </motion.div>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>
    </section>
  );
};

export default AboutUs;
