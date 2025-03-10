import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";
import { Link } from "react-router-dom";
import { FaBed, FaWifi, FaTv, FaCoffee, FaShower, FaConciergeBell, FaDumbbell, FaLaptop } from "react-icons/fa";

const images = [
  "/images/super-deluxe-1.jpg",
  "/images/super-deluxe-2.jpg",
  "/images/super-deluxe-3.jpg",
  "/images/super-deluxe-4.jpg",
];

const SuperDeluxeRoom_light = () => {
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

  return (
    <div className="bg-[#FAF1EB] min-h-screen flex flex-col">
      <Navbar />
      <div className="relative w-full h-[300px]">
        <img src="/images/super-deluxe-bg.jpg" alt="Super Deluxe Room Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-6xl mx-auto px-6 py-16">
        <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-left text-[70px] font-extrabold text-black leading-[1.1] font-sans">
          Indulge in Luxury with <br />
          <span className="bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#B06AB3] text-transparent bg-clip-text">
            <TypingEffect text="Super Deluxe Room" />
          </span>
        </motion.h1>

        <h2 className="text-4xl font-semibold text-gray-800 mt-6">A Stay Beyond Expectations</h2>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Description</h2>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              The Super Deluxe Room offers an unparalleled experience of comfort and grandeur. Enjoy a spacious setting with plush furnishings, premium amenities, and breathtaking views.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">Amenities</h2>
            <ul className="text-lg text-gray-700 mt-4 space-y-2">
              <li className="flex items-center gap-3"><FaBed className="text-[#DD2476]" size={20} /> Extra-Large King Bed with Luxury Linens</li>
              <li className="flex items-center gap-3"><FaWifi className="text-[#DD2476]" size={20} /> Ultra-Fast Wi-Fi Connection</li>
              <li className="flex items-center gap-3"><FaTv className="text-[#DD2476]" size={20} /> 55" 4K Smart TV with Premium Channels</li>
              <li className="flex items-center gap-3"><FaLaptop className="text-[#DD2476]" size={20} /> Spacious Executive Work Desk</li>
              <li className="flex items-center gap-3"><FaCoffee className="text-[#DD2476]" size={20} /> In-Room Espresso Machine</li>
              <li className="flex items-center gap-3"><FaShower className="text-[#DD2476]" size={20} /> Deluxe Bathroom with Jacuzzi & Rain Shower</li>
              <li className="flex items-center gap-3"><FaConciergeBell className="text-[#DD2476]" size={20} /> Personalized 24/7 Butler Service</li>
              <li className="flex items-center gap-3"><FaDumbbell className="text-[#DD2476]" size={20} /> Private Access to VIP Fitness & Spa</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className="relative w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Super Deluxe Room"
                className={`w-full h-full object-cover transition-transform ease-in-out ${fade ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <Link to="/inquiry">
              <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(221, 36, 118, 0.8)" }} transition={{ duration: 0.3 }} className="mt-8 px-6 py-3 bg-[#DD2476] text-white font-bold rounded-lg hover:bg-[#B06AB3] transition duration-300">
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

export default SuperDeluxeRoom_light;
