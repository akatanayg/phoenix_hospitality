import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";

const blogs = [
  {
    title: "Unveiling Hidden Gems: The Best Offbeat Travel Destinations",
    description: "Explore the most underrated travel spots that offer unique experiences and breathtaking views.",
    image: "/images/blog1.jpg",
    date: "March 9, 2025",
  },
  {
    title: "Luxury vs. Budget Stays: What's Worth Your Money?",
    description: "A deep dive into what makes a hotel worth the price and whether budget stays can match luxury.",
    image: "/images/blog2.jpg",
    date: "March 5, 2025",
  },
  {
    title: "Top 5 Hotel Hacks to Elevate Your Stay Experience",
    description: "From free upgrades to secret amenities, discover how to make the most of your hotel stay.",
    image: "/images/blog3.jpg",
    date: "March 1, 2025",
  },
  {
    title: "The Art of Packing: Travel Light, Stay Comfortable",
    description: "Master the art of packing efficiently while keeping style and comfort in mind.",
    image: "/images/blog4.jpg",
    date: "February 25, 2025",
  },
  {
    title: "How to Choose the Perfect Hotel for Your Next Trip",
    description: "Key factors to consider while booking a hotel for a memorable and hassle-free stay.",
    image: "/images/blog5.jpg",
    date: "February 18, 2025",
  },
  {
    title: "The Science Behind a Good Night’s Sleep in Hotels",
    description: "Explore how hotels design their rooms to ensure guests get the best sleep possible.",
    image: "/images/blog6.jpg",
    date: "February 10, 2025",
  },
];

const typingText = "Blogs";
const typingSpeed = 150;

const Blogs = () => {
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

  return (
    <div className="bg-[#FAF1EB] min-h-screen flex flex-col">
      <Navbar />
      <br />
      <br />
      <br />
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
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <p className="text-gray-500 text-sm">{blog.date}</p>
                <h2 className="text-2xl font-bold text-gray-900 mt-2">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <button className="mt-4 px-4 py-2 bg-[#E63946] text-white rounded-full text-sm hover:bg-[#C72F3C] transition duration-300">
                  Read More →
                </button>
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
