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
  FaConciergeBell,
  FaCreditCard,
  FaBroom,
  FaHandsWash,
} from "react-icons/fa";
import { useDarkMode } from "../DarkModeContext";
import { FaBowlRice } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const images = ["/c1.jpg", "/c3.jpg", "/c5.jpg", "/c3.jpg"];

const DeluxeRoom = () => {
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
    <>
      <Helmet>
        <title>Deluxe Room - Phoenix Hospitality</title>
        <meta
          name="description"
          content="Experience comfort and sophistication in our Deluxe Room at Phoenix Hospitality. Book now for a luxurious stay in Gurgaon."
        />
        <meta
          name="keywords"
          content="Deluxe Room, Phoenix Hospitality, luxury hotel, Gurgaon stay, best hotel in DLF Phase II"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Deluxe Room - Phoenix Hospitality" />
        <meta
          property="og:description"
          content="Enjoy a premium experience in our Deluxe Room with top-class amenities. Book now!"
        />
        <meta
          property="og:image"
          content="https://thephoenixhospitality.com/images/deluxe-room.jpg"
        />
        <meta
          property="og:url"
          content="https://thephoenixhospitality.com/deluxeroom"
        />
      </Helmet>
      <div
        className={`min-h-screen flex flex-col transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-[#FAF1EB] text-black"
        }`}
      >
        <Navbar />
        <div className="relative w-full h-[300px]">
          <img
            src="/c1.jpg"
            alt="Deluxe Room at Phoenix Hospitality"
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
            Experience the Comfort of <br />
            <span className="bg-gradient-to-r from-[#1D976C] via-[#93F9B9] to-[#12C2E9] text-transparent bg-clip-text">
              <TypingEffect text="Deluxe Room" />
            </span>
          </motion.h1>

          <h2
            className={`text-4xl font-semibold mt-6 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            Stay in Style & Comfort
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
                Our Deluxe Rooms offer a blend of comfort and sophistication,
                featuring plush bedding, elegant interiors, and top-class
                amenities to ensure a luxurious stay.
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
                  { icon: FaBed, text: "King-size Bed with Premium Linens" },
                  { icon: FaWifi, text: "Free High-Speed Wi-Fi" },
                  { icon: FaTv, text: "Multi-Channels Color TV" },
                  { icon: FaBowlRice, text: "Complimentary Breakfast" },
                  { icon: FaCoffee, text: "Mini Refrigerator & Coffee Maker" },
                  { icon: FaHandsWash, text: "Laundry Services" },
                  { icon: FaConciergeBell, text: "Room Service" },
                  { icon: FaBroom, text: "Housekeeping" },
                  {
                    icon: FaCreditCard,
                    text: "All major credit cards accepted",
                  },
                ].map(({ icon: Icon, text }, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icon className="text-[#12C2E9]" size={20} />
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
                  alt="Deluxe Room"
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
                    boxShadow: "0px 0px 10px rgba(18, 194, 233, 0.8)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 px-6 py-3 bg-[#12C2E9] text-white font-bold rounded-lg hover:bg-[#0D95C5] transition duration-300"
                >
                  Enquire Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.section>

        <Footer />
      </div>
    </>
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
