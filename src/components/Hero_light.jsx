import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const redSubtext =
  "8 bedrooms villa with a private pool. Perfect for family gatherings, parties and team buildings.";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [animationComplete, setAnimationComplete] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    let currentIndex = 0;
    setTypedText("");

    const interval = setInterval(() => {
      setTypedText((prev) => prev + redSubtext[currentIndex]);
      currentIndex++;

      if (currentIndex === redSubtext.length) {
        clearInterval(interval);
        setAnimationComplete(true);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Update localStorage and body class when theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`relative min-h-[calc(100vh+150px)] w-full flex items-center justify-center pt-[80px] p-6 md:p-10 md:pt-0 transition-all duration-500 ${
        darkMode ? "bg-black" : "bg-[#FAF1EB]"
      }`}
    >
      {/* Dark Mode Gradient Overlay */}
      <AnimatePresence>
        {darkMode && (
          <motion.div
            key="dark-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 z-[-1]"
          />
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-13 right-6 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg dark:bg-gray-200 dark:text-black"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="hidden md:grid max-w-6xl w-full grid-cols-2 gap-6 relative">
        {/* Left Section */}
        <div className="flex flex-col justify-center mt-40">
          <p className="mt-6 text-xl font-semibold text-[#E63946] min-h-[28px]">
            {typedText || (animationComplete ? redSubtext : "")}
          </p>

          <div
            className={`mt-4 grid grid-cols-2 gap-6 text-base ${
              darkMode ? "text-gray-300" : "text-[#333333]"
            }`}
          >
            <p>
              Located in Veliki Preslav, 12 km from Shumen, Mutafova Guest House
              offers rooms with free WiFi and a common lounge area with a
              fireplace. Free public parking is possible in front of the house.
            </p>
            <p>
              Guests can find a small museum on the premises of the house with a
              workshop. Breakfast can also be arranged for guests upon request
              and at a surcharge.
            </p>
          </div>

          <div className="mt-6">
            <Link to="/inquiry">
              <button className="bg-[#E63946] text-white uppercase font-semibold text-sm tracking-wide px-6 py-3 rounded-md shadow hover:bg-[#C92E3B] transition">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-end justify-center">
          <motion.h1
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={`absolute top-[-60px] left-[-600px] text-[100px] leading-[107px] font-black uppercase z-20 tracking-[5px] ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            PHOENIX <br />
          </motion.h1>
          <motion.h1
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={`absolute top-[20px] left-[-600px] text-[100px] leading-[107px] font-black uppercase z-20 tracking-[10px] ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            hospitality
          </motion.h1>

          <motion.img
            src="/c3.jpg"
            alt="Vertical Scenic"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="w-[80%] h-[500px] object-cover relative z-10 -mt-[60px]"
          />

          <motion.img
            src="/image2.png"
            alt="Indoor Cafe"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-[65%] h-[250px] object-cover absolute top-[55%] right-[190px] z-20 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



// import React, { useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const redSubtext = "8 bedrooms villa with a private pool. Perfect for family gatherings, parties and team buildings.";

// // Image Pool - Add your images here
// const imagePool = [
//     "/c3.jpg",
//     "/image2.png",
//     "/c5.jpg",
//     "/c1.jpg",
//     "/c5.jpg",
//     "/image1.jpg"
// ];

// const circleRadius = 120;
// const duration = 8; // Slower circle movement (8 seconds per loop)
// const imageSwapInterval = 5; // Change image every 5 seconds

// const generateCirclePath = (steps = 100) => {
//     return Array.from({ length: steps }, (_, i) => {
//         const angle = (i / steps) * 2 * Math.PI;
//         return {
//             x: Math.cos(angle) * circleRadius,
//             y: Math.sin(angle) * circleRadius
//         };
//     });
// };

// const circlePath = generateCirclePath();

// const HeroSection = () => {
//     const [typedText, setTypedText] = useState('');
//     const [animationComplete, setAnimationComplete] = useState(false);

//     const [imageIndex1, setImageIndex1] = useState(0);
//     const [imageIndex2, setImageIndex2] = useState(1);

//     const controls1 = useAnimation();
//     const controls2 = useAnimation();

//     // Typing effect
//     useEffect(() => {
//         let currentIndex = 0;
//         setTypedText('');
//         const interval = setInterval(() => {
//             setTypedText((prev) => prev + redSubtext[currentIndex]);
//             currentIndex++;
//             if (currentIndex === redSubtext.length) {
//                 clearInterval(interval);
//                 setAnimationComplete(true);
//             }
//         }, 50);
//         return () => clearInterval(interval);
//     }, []);

//     // Circular motion loop
//     useEffect(() => {
//         const loopAnimation = async () => {
//             while (true) {
//                 for (let i = 0; i < circlePath.length; i++) {
//                     await Promise.all([
//                         controls1.start({
//                             x: circlePath[i].x,
//                             y: circlePath[i].y,
//                             transition: { duration: duration / circlePath.length, ease: "linear" }
//                         }),
//                         controls2.start({
//                             x: circlePath[(i + circlePath.length / 2) % circlePath.length].x,
//                             y: circlePath[(i + circlePath.length / 2) % circlePath.length].y,
//                             transition: { duration: duration / circlePath.length, ease: "linear" }
//                         })
//                     ]);
//                 }
//             }
//         };
//         loopAnimation();
//     }, [controls1, controls2]);

//     // Swap images every few seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setImageIndex1((prev) => (prev + 1) % imagePool.length);
//             setImageIndex2((prev) => (prev + 1) % imagePool.length);
//         }, imageSwapInterval * 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="relative bg-[#FAF1EB] min-h-[calc(100vh+150px)] w-full flex items-center justify-center pt-[80px] p-6 md:p-10 md:pt-0">
//             <div className="hidden md:grid max-w-6xl w-full grid-cols-2 gap-6 relative">
//                 <div className="flex flex-col justify-center mt-40">
//                     <p className="mt-6 text-xl font-semibold text-[#E63946] min-h-[28px]">
//                         {typedText || (animationComplete ? redSubtext : '')}
//                     </p>
//                     <div className="mt-4 grid grid-cols-2 gap-6 text-base text-[#333333]">
//                         <p>
//                             Located in Veliki Preslav, 12 km from Shumen, Mutafova Guest House offers rooms with free WiFi and a common lounge area with a fireplace. Free public parking is possible in front of the house.
//                         </p>
//                         <p>
//                             Guests can find a small museum on the premises of the house with a workshop. Breakfast can also be arranged for guests upon request and at a surcharge.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Image container with circular motion + swapping */}
//                 <div className="relative flex flex-col items-end justify-center overflow-visible">
//                     <motion.h1
//                         initial={{ x: -300, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 1 }}
//                         className="absolute top-[-20px] left-[-600px] text-[100px] leading-[107px] font-black uppercase text-black z-20 tracking-[5px]"
//                     >
//                         PHOENIX <br /> GUEST HOUSE
//                     </motion.h1>

//                     {/* Image 1 (Leading Image) */}
//                     <motion.div
//                         animate={controls1}
//                         className="absolute w-[80%] h-[500px]  overflow-hidden z-10"
//                     >
//                         <motion.img
//                             key={imageIndex1}
//                             src={imagePool[imageIndex1]}
//                             alt="Rotating Image 1"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 1 }}
//                             className="w-full h-full object-cover"
//                         />
//                     </motion.div>

//                     {/* Image 2 (Following Image) */}
//                     <motion.div
//                         animate={controls2}
//                         className="absolute w-[65%] h-[250px]  overflow-hidden z-20 shadow-lg"
//                     >
//                         <motion.img
//                             key={imageIndex2}
//                             src={imagePool[imageIndex2]}
//                             alt="Rotating Image 2"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 1 }}
//                             className="w-full h-full object-cover"
//                         />
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Mobile Layout (same as before, images static here if needed) */}
//             <div className="md:hidden flex flex-col items-center text-center w-full relative">
//                 <motion.h1
//                     initial={{ y: -100, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 1 }}
//                     className="text-[40px] leading-[42px] font-black uppercase text-black tracking-[5px] mb-6"
//                 >
//                     PHOENIX <br /> GUEST HOUSE
//                 </motion.h1>

//                 <p className="mt-4 text-lg font-semibold text-[#E63946] min-h-[28px]">
//                     {typedText || (animationComplete ? redSubtext : '')}
//                 </p>
//                 <p className="mt-4 text-sm text-[#333333]">
//                     Located in Veliki Preslav, 12 km from Shumen, Mutafova Guest House offers rooms with free WiFi and a common lounge area with a fireplace. Free public parking is possible in front of the house.
//                 </p>
//                 <p className="mt-2 text-sm text-[#333333]">
//                     Guests can find a small museum on the premises of the house with a workshop. Breakfast can also be arranged for guests upon request and at a surcharge.
//                 </p>

//                 <div className="w-full flex flex-col items-center mt-6 space-y-4">
//                     <img src={imagePool[0]} className="w-[90%] h-auto object-cover rounded-[30px]" />
//                     <img src={imagePool[1]} className="w-[85%] h-auto object-cover shadow-lg rounded-[30px]" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;
