import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDarkMode } from "../DarkModeContext";

const blogs = [
  {
    image: "/c1.jpg",
    title: "Experience Timeless Luxury",
    description: "Discover the hidden gems of our heritage property, blending history with modern comforts.",
    date: "March 5, 2025",
  },
  {
    image: "/c3.jpg",
    title: "A Taste of Local Flavors",
    description: "Explore the authentic cuisine crafted from locally sourced ingredients, served with elegance.",
    date: "February 28, 2025",
  },
  {
    image: "/c5.jpg",
    title: "Serene Spaces to Unwind",
    description: "From lush gardens to charming courtyards, our property offers tranquility like no other.",
    date: "February 15, 2025",
  },
  {
    image: "/c1.jpg",
    title: "Our Story: From Past to Present",
    description: "Learn about the rich history behind this beautiful property and how it evolved over time.",
    date: "January 30, 2025",
  },
];

const BlogsCarousel = () => {
  const { darkMode } = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className={`w-full py-12 px-4 sm:px-6 md:px-16 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-[#FAF1EB] text-black"}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h2 className="text-[40px] sm:text-[50px] md:text-[80px] font-extrabold uppercase tracking-[5px]">
              Blogs
            </h2>
            <p className={`text-[16px] sm:text-[20px] md:text-[22px] font-medium leading-relaxed ${darkMode ? "text-red-400" : "text-[#E63946]"}`}>
              Dive into stories, experiences, and inspirations from our heritage home.
            </p>
          </motion.div>

          {/* Read All Blogs Button */}
          <div className="pt-4">
            <a
              href="/blogs"
              className={`inline-block py-3 px-6 rounded-full font-medium tracking-wide transition duration-300 ${darkMode ? "bg-red-500 text-white hover:bg-red-600" : "bg-[#E63946] text-white hover:bg-[#D62828]"}`}
            >
              Read All Blogs
            </a>
          </div>
        </div>

        {/* Right Column - Blog Carousel */}
        <div className="relative mt-6 md:mt-8">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-2 sm:left-[-40px] md:left-[-60px] top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full shadow-lg transition z-10 ${
              darkMode ? "bg-red-500 text-white hover:bg-red-600" : "bg-[#E63946] text-white hover:bg-[#D62828]"
            }`}
          >
            <ChevronLeft size={20} sm:size={24} />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-2 sm:right-[-40px] md:right-[-60px] top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full shadow-lg transition z-10 ${
              darkMode ? "bg-red-500 text-white hover:bg-red-600" : "bg-[#E63946] text-white hover:bg-[#D62828]"
            }`}
          >
            <ChevronRight size={20} sm:size={24} />
          </button>

          {/* Blog Cards - Mobile Adjustments */}
          <div className="overflow-hidden rounded-xl shadow-xl" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="flex space-x-4 sm:space-x-6 transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {blogs.map((blog, index) => (
                <motion.div
                  key={index}
                  className="relative w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-12px)] h-[350px] sm:h-[400px] rounded-xl shadow-lg overflow-hidden cursor-pointer group flex-shrink-0"
                >
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 sm:p-5 transition-all duration-500 group-hover:bg-opacity-60">
                    <h3 className="text-white text-[18px] sm:text-[20px] font-bold">{blog.title}</h3>
                    <p className="text-white text-xs sm:text-sm mt-1 opacity-80">{blog.description}</p>
                    <span className="text-white text-[10px] sm:text-xs mt-2 opacity-60">{blog.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsCarousel;
