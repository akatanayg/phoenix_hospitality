import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";
import { useDarkMode } from "../DarkModeContext";

const testimonials = [
  {
    name: "John Doe",
    review: "This villa exceeded all my expectations! The service was excellent and the ambiance was just perfect.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emily Smith",
    review: "A truly magical experience. The pool, the view, and the hospitality made our stay unforgettable!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "David Johnson",
    review: "Absolutely stunning! The best getaway I've had in years. Will definitely visit again!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sophia Brown",
    review: "From the moment we arrived, we felt like royalty. Incredible service and stunning views!",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "James Wilson",
    review: "I loved the attention to detail and the warm hospitality. This place is a hidden gem!",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Olivia Martinez",
    review: "Perfect blend of luxury and comfort. Highly recommended for a peaceful retreat.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Michael Lee",
    review: "The food, the vibe, the view – everything was just perfect. I can't wait to return!",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Isabella Carter",
    review: "The most serene and luxurious vacation I have ever had. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Daniel Roberts",
    review: "The villa was immaculate, and the staff was incredibly hospitable. Five stars all the way!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Mia Thompson",
    review: "An unforgettable experience! The view from our room was breathtaking.",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Ethan Anderson",
    review: "I had the most relaxing weekend ever. Can't wait to return!",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Charlotte White",
    review: "The perfect escape from the busy city life. Peaceful, luxurious, and unforgettable!",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const typingText = "Testimonials";
const typingSpeed = 100;

const Testimonials = () => {
  const { darkMode } = useDarkMode();
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(typingText.slice(0, index));
      index++;
      if (index > typingText.length) clearInterval(interval);
    }, typingSpeed);
    

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#FAF1EB] text-black"
      }`}
    >
      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <br />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[50px] font-black text-center mt-20 leading-tight"
        style={{ fontFamily: "sans-serif" }}
      >
        What our customers say
        <br />
        <span
          style={{
            background: "linear-gradient(to right, #FF5733, rgb(236, 45, 112), #8B0000)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-5xl font-bold"
        >
          {displayedText}
        </span>
      </motion.h1>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-[800px] w-full px-4">
        {Array(3)
          .fill()
          .map((_, colIndex) => (
            <div key={colIndex} className="space-y-6">
              {testimonials.slice(colIndex * 4, colIndex * 4 + 4).map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl text-center border shadow-md bg-transparent flex flex-col items-center transition-transform w-[90%] md:w-full ${
                    darkMode ? "border-gray-600 bg-gray-800 text-white shadow-gray-700" : "border-gray-300 bg-white text-black"
                  }`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 20px rgba(255, 87, 51, 0.8)",
                    rotate: "1deg",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-4 border-2 border-[#FF5733]"
                  />
                  <p className={`text-lg font-semibold ${darkMode ? "text-gray-300" : "text-gray-800"}`}>"{testimonial.review}"</p>
                  <p className={`mt-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>- {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          ))}
      </div>

      {/* "And more....." Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 text-[40px] font-black text-center"
        style={{ fontFamily: "sans-serif" }}
      >
        and more.....
      </motion.p>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Testimonials;
