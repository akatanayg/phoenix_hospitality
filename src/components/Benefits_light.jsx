import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";

const amenities = [
  {
    title: "Gym",
    description: [
      "At Phoenix Hospitality, we understand the importance of staying active while traveling. Our on-site gym offers a convenient space for guests to maintain their fitness routine. Featuring a selection of essential fitness equipment, our gym allows you to work out at your own pace. Whether you're a fitness enthusiast or just looking to stay energized, our gym facility is designed to enhance your overall wellness experience, ensuring you feel refreshed and revitalized during your stay with us in Gurgaon."
    ],
    image: "/Gym.jpg",
  },
  {
    title: "Gravy Gram",
    description: [
      "Indulge in the flavors of India at Gravy Gram, our in-house restaurant, specializing in authentic North Indian cuisine with a diverse menu to suit every taste. Enjoy a warm and inviting atmosphere, perfect for both casual dining and business meals. Our chefs craft each dish with precision and passion, ensuring a truly satisfying dining experience. Let Gravy Gram be your go-to destination for a delicious meal in Gurgaon."
    ],
    image: "/Food 2.jpg",
  },
  {
    title: "Outdoor Lounge",
    description: [
      "Our outdoor lounge is a lovely spot to relax and socialize. Perfect for small gatherings or casual get-togethers, it offers a peaceful atmosphere that's just right for unwinding with friends or colleagues. Whether you're hosting a kitty party or simply enjoying some fresh air, this cozy space feels like a tranquil retreat. We've designed it to be a comfortable place to connect with others and make the most of your stay in Gurgaon."
    ],
    image: "/Reception Lounge.jpg",
  },
  {
    title: "Conference Room",
    description: [
      "Host your business meetings and events in style at our well-equipped conference room. Nestled in the vibrant hub of Gurgaon, our conference room provides a sophisticated setting equipped with modern amenities, ensuring productive meetings and presentations. Whether you're conducting a corporate meeting or a team workshop, our dedicated staff will ensure everything runs smoothly. Enjoy a productive and comfortable environment that fosters collaboration and success."
    ],
    image: "/a.jpg",
  },
];

const Amenities = () => {
  const { darkMode } = useDarkMode();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const autoSwitch = setInterval(() => {
      setCurrent((prev) => (prev + 1) % amenities.length);
    }, 5000);
    return () => clearInterval(autoSwitch);
  }, []);

  return (
    <section className={`w-full py-8 px-4 sm:px-6 md:px-16 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-[#FAF1EB] text-black"}`}>
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[50px] sm:text-[80px] font-extrabold uppercase leading-none tracking-[2px] md:tracking-[5px]">
            AMENITIES
          </h2>
          <p className={`font-medium mt-1 text-[14px] sm:text-[16px] ${darkMode ? "text-red-400" : "text-[#E63946]"}`}>
            Discover the range of facilities we offer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start md:items-stretch">
          <div className="col-span-5 flex flex-col">
            <div className="flex flex-wrap gap-4 md:gap-8">
              {amenities.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`text-[14px] sm:text-[16px] font-medium transition-all duration-300 whitespace-nowrap relative group ${
                    index === current
                      ? `font-bold underline decoration-2 ${darkMode ? "text-white decoration-red-400" : "text-black decoration-[#E63946]"}`
                      : "text-white-100 hover:text-white-700"
                  }`}
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}
            </div>

            <div className="mt-6 md:mt-[30px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6 }}
                  className={`text-[12px] sm:text-[14px] space-y-3 leading-relaxed text-justify ${darkMode ? "text-gray-300" : "text-[#555]"}`}
                >
                  <p>{amenities[current].description[0]}</p>
                  <p>{amenities[current].description[1]}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="col-span-7 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className={`relative w-[80%] max-w-[450px] h-[180px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-lg shadow-lg ${darkMode ? "shadow-gray-800" : "shadow-lg"}`}
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
