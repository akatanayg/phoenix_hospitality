import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";
import { Link } from "react-router-dom";
import {
  FaBed,
  FaWifi,
  FaTv,
  FaCoffee,
  FaShower,
  FaConciergeBell,
  FaDumbbell,
  FaLaptop,
} from "react-icons/fa";
import { useDarkMode } from "../DarkModeContext";

const images = [
  "/images/super-deluxe-1.jpg",
  "/images/super-deluxe-2.jpg",
  "/images/super-deluxe-3.jpg",
  "/images/super-deluxe-4.jpg",
];

const SuperDeluxeRoom = () => {
  const { darkMode } = useDarkMode();
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#FAF1EB] text-black"
      }`}
    >
      <Navbar />
      <div className="relative w-full h-[300px]">
        <img
          src="/images/super-deluxe-bg.jpg"
          alt="Super Deluxe Room Background"
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 ${
            darkMode ? "bg-gray-900 opacity-70" : "bg-black opacity-40"
          }`}
        ></div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-left text-[50px] md:text-[70px] font-extrabold leading-[1.1] font-sans"
        >
          Indulge in Luxury with <br />
          <span className="bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#B06AB3] text-transparent bg-clip-text">
            <TypingEffect text="Super Deluxe Room" />
          </span>
        </motion.h1>

        <h2
          className={`text-4xl font-semibold mt-6 ${
            darkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          A Stay Beyond Expectations
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10"
        >
          <div>
            <h2
              className={`text-3xl font-bold ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Description
            </h2>
            <p
              className={`text-lg mt-4 leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              The Super Deluxe Room offers an unparalleled experience of comfort
              and grandeur. Enjoy a spacious setting with plush furnishings,
              premium amenities, and breathtaking views.
            </p>

            <h2
              className={`text-3xl font-bold mt-8 ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              Amenities
            </h2>
            <ul className="text-lg mt-4 space-y-2">
              {[
                {
                  icon: FaBed,
                  text: "Extra-Large King Bed with Luxury Linens",
                },
                { icon: FaWifi, text: "Ultra-Fast Wi-Fi Connection" },
                { icon: FaTv, text: '55" 4K Smart TV with Premium Channels' },
                { icon: FaLaptop, text: "Spacious Executive Work Desk" },
                { icon: FaCoffee, text: "In-Room Espresso Machine" },
                {
                  icon: FaShower,
                  text: "Deluxe Bathroom with Jacuzzi & Rain Shower",
                },
                {
                  icon: FaConciergeBell,
                  text: "Personalized 24/7 Butler Service",
                },
                {
                  icon: FaDumbbell,
                  text: "Private Access to VIP Fitness & Spa",
                },
              ].map(({ icon: Icon, text }, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Icon className="text-[#DD2476]" size={20} />
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-700"}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-full h-[400px] rounded-lg shadow-lg overflow-hidden"
            >
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Super Deluxe Room"
                className={`w-full h-full object-cover transition-transform ease-in-out ${
                  fade ? "opacity-0 scale-105" : "opacity-100 scale-100"
                }`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <Link to="/inquiry">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 10px rgba(221, 36, 118, 0.8)",
                }}
                transition={{ duration: 0.3 }}
                className="mt-8 px-6 py-3 bg-[#DD2476] text-white font-bold rounded-lg hover:bg-[#B06AB3] transition duration-300"
              >
                Enquire Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
};

// Typing Animation Component
const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span>{displayedText}</span>;
};

export default SuperDeluxeRoom;
