import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext"; // Import global dark mode state
import { TypeAnimation } from "react-type-animation"; // Import typing animation

const HeroSection = () => {
  const { darkMode } = useDarkMode(); // Get dark mode state directly

  return (
    <div
      className={`relative min-h-screen w-full flex items-center justify-center pt-[50px] p-6 md:p-10 md:pt-0 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#faf1eb] text-black"
      }`}
    >
      <AnimatePresence>
        {darkMode && (
          <motion.div
            key="dark-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-[-1]"
          />
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Mobile Heading - Below Navbar */}
        <motion.h1
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[50px] top-[30px] leading-[55px] font-black uppercase z-20 tracking-[3px] text-center md:hidden mt-20"
        >
          PHOENIX <br />
          hospitality
        </motion.h1>

        {/* Left Section */}
        <div className="flex flex-col justify-center mt-2 md:mt-40 text-center md:text-left px-4 md:px-0">
          <motion.div
            className={`mt-6 text-lg md:text-xl font-semibold ${
              darkMode ? "text-red-400" : "text-[#E63946]"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="block"> <br />
              Experience Comfort, Care, and Connection
            </p>
            <TypeAnimation
              sequence={[
                " in Every Moment at Phoenix Hospitality", // Typing starts here
              ]}
              speed={50} // Typing speed
              cursor={false} // No blinking cursor
              wrapper="p"
              className="block"
            />
          </motion.div>

          <div
            className={`mt-4 text-sm md:text-base ${
              darkMode ? "text-gray-300" : "text-[#333333]"
            }`}
          >
            <p>
              Experience the best of Gurgaon at Phoenix Hospitality. We
              prioritize your comfort with warm hospitality, modern amenities,
              and a convenient location near DLF Phase II.
            </p>
            <p className="mt-2">
              Savor delicious meals at Gravy Gram - our in-house Cloud Kitchen
              and unwind in our cozy atmosphere. Whether for business or
              leisure, we invite you to experience the best of Gurgaon with us.
            </p>
          </div>

          <div className="mt-6 flex justify-center md:justify-start">
            <Link to="/inquiry">
              <button
                className={`uppercase font-semibold text-sm tracking-wide px-6 py-3 rounded-md shadow transition ${
                  darkMode
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-[#E63946] text-white hover:bg-[#C92E3B]"
                }`}
              >
                Enquire Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center md:items-end justify-center mt-2 md:mt-0">
          {/* Desktop Heading - Back to Original Position */}
          <motion.h1
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block absolute top-[10px] left-[-600px] text-[100px] leading-[107px] font-black uppercase z-20 tracking-[5px]"
          >
            PHOENIX <br />
          </motion.h1>
          <motion.h1
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block absolute top-[100px] left-[-600px] text-[100px] leading-[107px] font-black uppercase z-20 tracking-[10px]"
          >
            hospitality
          </motion.h1>

          <motion.img
            src="/c3.jpg"
            alt="Vertical Scenic"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="w-[90%] md:w-[80%] h-[250px] md:h-[500px] object-cover relative z-10 shadow-lg"
          />

          <motion.img
            src="/image2.png"
            alt="Indoor Cafe"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-[70%] md:w-[65%] h-[150px] md:h-[250px] object-cover absolute top-[60%] md:top-[55%] right-auto md:right-[190px] z-20 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
