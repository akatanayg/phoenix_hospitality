//DARK THEME


import React from "react";
import { motion } from "framer-motion";
import {
  FaConciergeBell,
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
} from "react-icons/fa";

const cardData = [
  {
    icon: <FaConciergeBell size={32} />,
    title: "24/7 Service",
    description: "Round-the-clock service ensuring all your needs are met.",
  },
  {
    icon: <FaWifi size={32} />,
    title: "Free Wi-Fi",
    description:
      "Stay connected with high-speed internet access throughout your stay.",
  },
  {
    icon: <FaSwimmingPool size={32} />,
    title: "Luxury Pool",
    description:
      "Relax and unwind in our temperature-controlled swimming pool.",
  },
  {
    icon: <FaUtensils size={32} />,
    title: "Gourmet Dining",
    description: "Savor gourmet cuisine crafted by top chefs.",
  },
];

const Benefits = () => {
  return (
    <section
      className="relative w-full pt-16 pb-16 px-4 md:px-16 bg-cover bg-center shadow-2xl"
      style={{ backgroundImage: "url('/aboutusbg_4.png')" }}
    >
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
        {/* Left - Cards Grid */}
        <div className="relative grid grid-cols-2 gap-6 md:gap-8 w-full max-w-md mx-auto md:max-w-none">
          {/* Center Cross Lines */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-1 h-full bg-orange-500 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
            <div className="h-1 w-full bg-orange-500 animate-pulse"></div>
          </div>

          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-xl border border-gray-400 shadow-xl p-6 flex flex-col items-center space-y-4 hover:shadow-orange-500/50 transition-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-4 rounded-full bg-orange-500 text-black">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-center text-xs text-gray-300">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right - Heading + Description */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4 w-full">
          <motion.h2
            className="text-orange-500"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "normal",
              lineHeight: "1.1",
              letterSpacing: "-1px",
              position: "relative",
              display: "inline-block",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-6xl sm:text-6xl md:text-6xl">Benefits</span>
            <motion.div
              className="h-[3px] bg-orange-500 absolute right-0 bottom-[-8px]"
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <motion.p
            className="text-white max-w-xs sm:max-w-md text-xs sm:text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Experience a range of exceptional benefits that redefine your stay,
            blending luxury, authenticity, and timeless comfort.
          </motion.p>
        </div>
      </div>

      {/* Bottom Bulge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 md:h-24"
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
    </section>
  );
};

export default Benefits;
