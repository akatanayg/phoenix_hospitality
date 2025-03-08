import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const amenities = [
  {
    title: "Main Hall",
    description: [
      "Our spacious main hall is perfect for events, gatherings, and relaxation. It features elegant décor and modern audio-visual facilities to make every occasion special.",
      "Whether you're hosting a family celebration, a corporate event, or just seeking a quiet spot to unwind, the hall adapts to your needs effortlessly."
    ],
    image: "/c1.jpg",
  },
  {
    title: "Rooms",
    description: [
      "Comfortable, airy rooms with modern amenities offer a cozy retreat after a long day. Each room is designed to provide ultimate comfort with scenic views.",
      "Enjoy premium bedding, top-class service, and the charm of our warm hospitality throughout your stay."
    ],
    image: "/c3.jpg",
  },
  {
    title: "Garden",
    description: [
      "Step into our lush green gardens, where the scent of fresh flowers and the serenity of nature welcome you.",
      "Perfect for morning walks, yoga sessions, or simply unwinding with a book, the garden is your personal escape into tranquility."
    ],
    image: "/c5.jpg",
  },
  {
    title: "Pool",
    description: [
      "Dive into relaxation at our sparkling pool. Whether you're swimming laps or lounging poolside, the scenic surroundings make it a rejuvenating experience.",
      "Poolside seating allows you to soak in the sun, sip on your favorite drink, and let your worries float away."
    ],
    image: "/c3.jpg",
  },
  {
    title: "Spa",
    description: [
      "Rejuvenate your senses at our luxury spa, where a wide range of treatments are tailored to refresh your body and mind.",
      "From deep-tissue massages to refreshing facials, let expert hands guide you to relaxation."
    ],
    image: "/c5.jpg",
  },
];

const Amenities = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const autoSwitch = setInterval(() => {
      setCurrent((prev) => (prev + 1) % amenities.length);
    }, 5000);
    return () => clearInterval(autoSwitch);
  }, []);

  const handleClick = (index) => setCurrent(index);

  return (
    <section className="w-full bg-[#FAF1EB] py-8 px-4 sm:px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Heading + Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[50px] sm:text-[80px] font-extrabold uppercase leading-none text-black tracking-[2px] md:tracking-[5px]"><br />
            AMENITIES
          </h2>
          <p className="text-[#E63946] font-medium mt-1 text-[14px] sm:text-[16px]">
            Discover the range of facilities we offer
          </p><br />
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start md:items-stretch">
          {/* Left Side - Links + Text */}
          <div className="col-span-5 flex flex-col">
            {/* Links (Forced to Top with larger gap) */}
            <div className="flex flex-wrap justify-center gap-12 md:justify-start">
              {amenities.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleClick(index)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`text-[14px] sm:text-[16px] font-medium transition-all duration-300 ${
                    index === current
                      ? "text-black font-bold underline decoration-[#E63946] underline-offset-4 decoration-2"
                      : "text-[#888] hover:text-black"
                  }`}
                >
                  {item.title}
                </motion.button>
              ))}
            </div>

            {/* Text (30px below links) */}
            <div className="mt-6 md:mt-[30px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6 }}
                  className="text-[12px] sm:text-[14px] text-[#555] space-y-3 leading-relaxed"
                >
                  <p>{amenities[current].description[0]}</p>
                  <p>{amenities[current].description[1]}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* Right Side - Shortened Image with Gap */}
          <div className="col-span-7 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="relative w-[80%] max-w-[450px] h-[180px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={amenities[current].image}
                  alt={amenities[current].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
