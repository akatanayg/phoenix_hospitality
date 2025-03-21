import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";
import { useDarkMode } from "../DarkModeContext";

const blogs = [
  {
    id: "unveiling-hidden-gems",
    title: "Bleisure for Everyone: Redefining Travel with Comfort and Affordability",
    description:
      "Explore the most underrated travel spots that offer unique experiences and breathtaking views.",
    image: "/images/blog1.jpg",
    date: "March 9, 2025",
    author: "John Doe",
  },
  {
    id: "luxury-vs-budget",
    title: "Why Choose Phoenix Hospitality for Your Stay in Gurgaon",
    description:
      "A deep dive into what makes a hotel worth the price and whether budget stays can match luxury.",
    image: "/images/blog2.jpg",
    date: "March 5, 2025",
    author: "Jane Smith",
  },
  {
    id: "hotel-hacks",
    title: "Why Phoenix Hospitality is Your Ideal Choice for Long Stays in Gurgaon",
    description:
      "From free upgrades to secret amenities, discover how to make the most of your hotel stay.",
    image: "/images/blog3.jpg",
    date: "March 1, 2025",
    author: "Emily Brown",
  },
  {
    id: "hotel-history",
    title: "The Ultimate Guide to Planning a Stress-Free Stay in Gurgaon",
    description:
      "Learn about Gurgaon, a bustling city near New Delhi, offers a mix of business hubs, leisure spots, and cultural attractions.",
    image: "/images/blog4.jpg",
    date: "February 20, 2025",
    author: "Michael Carter",
  },
  {
    id: "wellness-travel",
    title: "How Phoenix Hospitality Caters to Business Travelers: A Perfect Stay for Professionals",
    description:
      "It is designed with professionals in mind, offering everything you need for a seamless and stress-free stay.",
    image: "/images/blog5.jpg",
    date: "February 10, 2025",
    author: "Sophia Lee",
  },
  {
    id: "choosing-perfect-hotel",
    title: "Why Boutique Hotels Are the Future of Hospitality: A Look at Phoenix Hospitality",
    description:
      "The hospitality industry is undergoing a transformation, with boutique hotels emerging as a preferred choice for modern travelers.",
    image: "/images/blog6.jpg",
    date: "January 28, 2025",
    author: "David Wilson",
  },
];

const typingText = "Blogs";
const typingSpeed = 150;

const Blogs = () => {
  const { darkMode } = useDarkMode();
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(typingText.slice(0, index + 1));
      index++;
      if (index === typingText.length) clearInterval(interval);
    }, typingSpeed);
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
      <Navbar /><br /><br />
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
          className="text-left text-[50px] md:text-[70px] font-extrabold leading-[1.1] font-sans"
        >
          Stay Curious, Stay Inspired! <br />
          <span className="bg-gradient-to-r from-[#FF5733] via-[#EC2D70] to-[#8B0000] text-transparent bg-clip-text">
            {displayText}
          </span>
        </motion.h1>

        {/* Blogs Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`relative rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white"
              }`}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p
                  className={`text-sm italic ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {blog.date}
                </p>
                <h2
                  className={`text-2xl font-bold mt-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {blog.title}
                </h2>
                <p
                  className={`mt-2 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {blog.description}
                </p>
                <Link to={`/blog/${blog.id}`}>
                  <button className="mt-4 px-4 py-2 rounded-full text-sm transition duration-300 bg-red-500 text-white hover:bg-red-600">
                    Read More →
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Blogs;
