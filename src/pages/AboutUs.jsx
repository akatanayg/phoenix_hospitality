import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";
import {
  FaStar,
  FaUsers,
  FaBullseye,
  FaGlobe,
  FaSmile,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const images = ["/c1.jpg", "/c3.jpg", "/c5.jpg", "/c1.jpg"];

  return (
    <div className="bg-[#FAF1EB] min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <img
          src="/.jpg"
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-left text-[70px] font-extrabold text-black leading-[1.1] font-sans"
        >
          Get to Know <br />
          <span className="bg-gradient-to-r from-[#FF7E5F] via-[#FF3F81] to-[#FC6076] text-transparent bg-clip-text">
            <TypingEffect text="About Us" />
          </span>
        </motion.h1>

        {/* Our History Section */}
        <AnimatedSubheading text="Our History" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-lg text-gray-700 leading-relaxed"
        >
          <p>
            Our journey started with a simple idea—creating a space where
            comfort meets elegance. Over the years, we have built a reputation
            for delivering exceptional hospitality experiences.
          </p>

          <p>
            With a vision to redefine luxury and personalized service, we have
            carefully crafted every detail of our hotel to offer guests a unique
            and memorable stay. From world-class amenities to heartfelt service,
            we take pride in making every moment special.
          </p>

          <p>
            We believe in blending tradition with modernity, ensuring that every
            guest experiences a perfect balance of warmth and sophistication.
            Our dedication to excellence has made us a preferred choice for
            travelers seeking both comfort and luxury.
          </p>
        </motion.div>

        {/* Image Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <ImageCarousel images={images} />
        </motion.div>

        {/* Core Values Section */}
        <AnimatedSubheading text="Our Core Values" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <value.icon className="text-[#FC6076] text-4xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
              <p className="text-gray-600 mt-2 text-center">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Inquiry CTA */}
        <div className="flex justify-center mt-16">
          <Link to="/inquiry">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 10px rgba(252, 96, 118, 0.8)",
              }}
              transition={{ duration: 0.3 }}
              className="px-6 py-3 bg-[#FC6076] text-white font-bold rounded-lg hover:bg-[#FF3F81] transition duration-300"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
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

// Animated Subheading Component
const AnimatedSubheading = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mt-16"
  >
    <h2 className="text-4xl font-semibold text-gray-800">{text}</h2>
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1 }}
      className="w-20 h-1 bg-[#FC6076] mt-2 rounded-full"
    ></motion.div>
  </motion.div>
);

// Image Carousel Component with Continuous Scrolling
const ImageCarousel = ({ images }) => {
  return (
    <div className="relative w-[700px] overflow-hidden">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#FAF1EB] to-transparent pointer-events-none z-10"></div>

      {/* Right Fade */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#FAF1EB] to-transparent pointer-events-none z-10"></div>

      {/* Infinite Scrolling Carousel */}
      <motion.div
        className="flex space-x-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={src}
              alt={`Gallery image ${(idx % images.length) + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const values = [
  {
    title: "Excellence",
    description: "We strive to provide top-notch hospitality services.",
    icon: FaStar,
  },
  {
    title: "Customer Focus",
    description: "Ensuring a comfortable and memorable stay for our guests.",
    icon: FaUsers,
  },
  {
    title: "Integrity",
    description: "Honesty and transparency in all our services.",
    icon: FaBullseye,
  },
  {
    title: "Sustainability",
    description: "Committed to eco-friendly and responsible tourism.",
    icon: FaGlobe,
  },
  {
    title: "Happiness",
    description: "Creating joyful experiences for every guest.",
    icon: FaSmile,
  },
  {
    title: "Support",
    description: "24/7 assistance for all our guests.",
    icon: FaPhone,
  },
];

export default AboutUs;
