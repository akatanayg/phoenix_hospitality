import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";

const sections = [
  {
    title: "Exterior",
    images: [
      "https://source.unsplash.com/500x300/?hotel,exterior",
      "https://source.unsplash.com/500x300/?resort,view",
      "https://source.unsplash.com/500x300/?villa,architecture",
      "https://source.unsplash.com/500x300/?hotel,sunset",
      "https://source.unsplash.com/500x300/?hotel,design",
    ],
  },
  {
    title: "Rooms",
    images: [
      "https://source.unsplash.com/500x300/?hotel,room",
      "https://source.unsplash.com/500x300/?bedroom,luxury",
      "https://source.unsplash.com/500x300/?hotel,suite",
      "https://source.unsplash.com/500x300/?hotel,comfort",
      "https://source.unsplash.com/500x300/?hotel,interior",
    ],
  },
  {
    title: "Lobby",
    images: [
      "https://source.unsplash.com/500x300/?hotel,lobby",
      "https://source.unsplash.com/500x300/?hotel,entrance",
      "https://source.unsplash.com/500x300/?hotel,reception",
      "https://source.unsplash.com/500x300/?hotel,lounge",
      "https://source.unsplash.com/500x300/?hotel,waiting",
    ],
  },
];

const GalleryPage = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Gallery";
  const typingSpeed = 150; // Speed of typing effect

  useEffect(() => {
    let i = 0;
    setTypedText(""); // Reset before starting

    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1)); // Properly update text
        i++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FAF1EB] min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <Navbar /> <br />
      <br />
      {/* Centered Heading with Typing Effect */}
      <motion.div
        className="w-full text-center mt-10 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="text-[50px] font-black text-black leading-tight"
          style={{ fontFamily: "sans-serif" }}
        >
          A glimpse into our <br />
          <span
            style={{
              background:
                "linear-gradient(to right, #FF5733, rgb(236, 45, 112), #8B0000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold", // Unbolded text
            }}
          >
            {typedText}
          </span>
        </h1>
      </motion.div>
      {/* Gallery Sections */}
      <div className="max-w-5xl w-full px-6">
        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            {/* Section Heading with Smaller Animated Underline */}
            <motion.h2
              className="text-3xl font-bold text-[#333] relative mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {section.title}
              <motion.div
                className="absolute bottom-[-5px] left-0 h-[2px] bg-[#E63946] w-[40px]"
                initial={{ width: "0px" }}
                animate={{ width: "40px" }}
                transition={{ duration: 1, delay: index * 0.3 }}
              />
            </motion.h2>

            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-4">
              {section.images.map((src, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  className="overflow-hidden rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={src}
                    alt={`${section.title} ${imgIndex + 1}`}
                    className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GalleryPage;
