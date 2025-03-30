import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";
import { useDarkMode } from "../DarkModeContext";
import { Helmet } from "react-helmet-async";

const sections = [
  {
    title: "Exterior",
    images: [
      "Outdoor.png",
      "Front.jpg",
    ],
  },
  {
    title: "Rooms",
    images: [
      "Room Overview.jpg",
      "Room Bed 2.jpg",
      "Suit Lounge.png",
      "Room Overview Side.jpg",
      "Room Bed.jpg",
    ],
  },
  {
    title: "Lobby",
    images: [
      "Reception.jpg",
      "Lobby Stair 1.jpg",
      "Reception Lounge.jpg",
    ],
  },
];

const GalleryPage = () => {
  const { darkMode } = useDarkMode();
  const [typedText, setTypedText] = useState("");
  const fullText = "Gallery";
  const typingSpeed = 150; // Speed of typing effect

  useEffect(() => {
    let i = 0;
    setTypedText("");

    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gallery - Phoenix Hospitality</title>
        <meta
          name="description"
          content="Take a visual tour of Phoenix Hospitality with our gallery showcasing luxurious rooms, dining, and stunning hotel views."
        />
        <meta
          name="keywords"
          content="Phoenix Hospitality gallery, hotel photos, luxury hotel images, resort pictures"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Gallery - Phoenix Hospitality" />
        <meta
          property="og:description"
          content="Explore the luxurious ambiance of Phoenix Hospitality through our stunning gallery images."
        />
        <meta
          property="og:image"
          content="https://thephoenixhospitality.com/images/gallery-header.jpg"
        />
        <meta
          property="og:url"
          content="https://thephoenixhospitality.com/gallery"
        />
      </Helmet>
      <div
        className={`min-h-screen flex flex-col items-center transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-[#FAF1EB] text-black"
        }`}
      >
        {/* Navbar */}
        <Navbar /> <br /><br />
        <br />
        {/* Centered Heading with Typing Effect */}
        <motion.div
          className="w-full text-center mt-10 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="text-[50px] font-black leading-tight"
            style={{ fontFamily: "sans-serif" }}
          >
            A Glimpse into our <br />
            <span
              style={{
                background:
                  "linear-gradient(to right, #FF5733, rgb(236, 45, 112), #8B0000)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
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
              {/* Section Heading with Animated Underline */}
              <motion.h2
                className={`text-3xl font-bold relative mb-6 ${
                  darkMode ? "text-white" : "text-[#333]"
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {section.title}
                <motion.div
                  className={`absolute bottom-[-5px] left-0 h-[2px] ${
                    darkMode ? "bg-red-400" : "bg-[#E63946]"
                  } w-[40px]`}
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
                    className={`overflow-hidden rounded-lg shadow-md ${
                      darkMode ? "shadow-gray-800" : "shadow-lg"
                    }`}
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
    </>
  );
};

export default GalleryPage;
