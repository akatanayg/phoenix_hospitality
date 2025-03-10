import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";
import { Link } from "react-router-dom";
import { FaBed, FaWifi, FaTv, FaCoffee, FaShower, FaConciergeBell, FaDumbbell, FaLaptop } from "react-icons/fa";

const images = [
  "/c1.jpg",
  "/c3.jpg",
  "/c5.jpg",
  "/c3.jpg",
];

const DeluxeRoom = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade effect
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(false); // End fade effect after image changes
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FAF1EB] min-h-screen flex flex-col">
      <Navbar />
      <div className="relative w-full h-[300px]">
        <img src="/cbg.jpg" alt="Deluxe Room Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-6xl mx-auto px-6 py-16">
        <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-left text-[70px] font-extrabold text-black leading-[1.1] font-sans">
          Experience the Comfort of <br />
          <span className="bg-gradient-to-r from-[#1D976C] via-[#93F9B9] to-[#12C2E9] text-transparent bg-clip-text">
            <TypingEffect text="Deluxe Room" />
          </span>
        </motion.h1>

        <h2 className="text-4xl font-semibold text-gray-800 mt-6">Stay in Style & Comfort</h2>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Description</h2>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              Our Deluxe Rooms offer a blend of comfort and sophistication, featuring plush bedding, elegant interiors, and top-class amenities to ensure a luxurious stay.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">Amenities</h2>
            <ul className="text-lg text-gray-700 mt-4 space-y-2">
              <li className="flex items-center gap-3"><FaBed className="text-[#12C2E9]" size={20} /> King-size Bed with Premium Linens</li>
              <li className="flex items-center gap-3"><FaWifi className="text-[#12C2E9]" size={20} /> Free High-Speed Wi-Fi</li>
              <li className="flex items-center gap-3"><FaTv className="text-[#12C2E9]" size={20} /> Smart TV with Streaming Services</li>
              <li className="flex items-center gap-3"><FaLaptop className="text-[#12C2E9]" size={20} /> Spacious Work Desk</li>
              <li className="flex items-center gap-3"><FaCoffee className="text-[#12C2E9]" size={20} /> Mini Refrigerator & Coffee Maker</li>
              <li className="flex items-center gap-3"><FaShower className="text-[#12C2E9]" size={20} /> Luxurious Ensuite Bathroom with Rain Shower</li>
              <li className="flex items-center gap-3"><FaConciergeBell className="text-[#12C2E9]" size={20} /> 24/7 Room Service & Housekeeping</li>
              <li className="flex items-center gap-3"><FaDumbbell className="text-[#12C2E9]" size={20} /> Complimentary Fitness Center Access</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className="relative w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Deluxe Room"
                className={`w-full h-full object-cover transition-transform ease-in-out ${fade ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <Link to="/inquiry">
              <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(18, 194, 233, 0.8)" }} transition={{ duration: 0.3 }} className="mt-8 px-6 py-3 bg-[#12C2E9] text-white font-bold rounded-lg hover:bg-[#0D95C5] transition duration-300">
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

export default DeluxeRoom;
