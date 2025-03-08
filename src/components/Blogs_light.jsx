import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 + blogs.length) % blogs.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="bg-[#FAF1EB] w-full py-16 px-4 sm:px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Heading, Subtext, Text & Button */}
        <div className="space-y-8 text-left">
          {/* Heading & Subtext */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-[36px] sm:text-[50px] md:text-[80px] leading-none font-extrabold uppercase text-black tracking-[5px]">
              Blogs
            </h2>
            <p className="text-[#E63946] text-[18px] sm:text-[22px] font-medium leading-relaxed">
              Dive into stories, experiences, and inspirations from our heritage home.
            </p>
          </motion.div>

          {/* Text Box */}
          <div className="text-[#555] text-[16px] leading-relaxed space-y-4">
            <p>
              Our blog is a reflection of the unique tales our property holds. From the heritage architecture that speaks of a glorious past to the little moments of joy our guests experience here, every post brings you closer to our world.
            </p>
            <p>
              Whether it’s seasonal festivals celebrated with grandeur, culinary journeys led by our chefs, or stories of the town itself — our blog is your window into this timeless sanctuary.
            </p>
          </div>

          {/* Read All Blogs Button */}
          <div className="pt-4">
            <a
              href="#"
              className="inline-block bg-[#E63946] text-white py-3 px-6 rounded-full font-medium tracking-wide hover:bg-[#D62828] transition duration-300"
            >
              Read All Blogs
            </a>
          </div>
        </div>

        {/* Right Column - Blog Carousel */}
        <div className="relative mt-8">
          {/* Arrows Positioned Outside */}
          <button
            onClick={prevSlide}
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-[#E63946] text-white p-3 rounded-full shadow-lg hover:bg-[#D62828] transition z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-[#E63946] text-white p-3 rounded-full shadow-lg hover:bg-[#D62828] transition z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Track */}
          <div
            className="overflow-hidden rounded-xl shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex space-x-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex / 2) * 100}%)`,
              }}
            >
              {blogs.map((blog, index) => (
                <motion.div
                  key={index}
                  className="relative w-[calc(50%-12px)] h-[400px] rounded-xl shadow-xl overflow-hidden cursor-pointer group flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-5 transition-all duration-500 group-hover:bg-opacity-60">
                    <h3 className="text-white text-[20px] font-bold">{blog.title}</h3>
                    <p className="text-white text-sm mt-1 opacity-80">{blog.description}</p>
                    <span className="text-white text-xs mt-2 opacity-60">{blog.date}</span>
                  </div>
                  {/* Pulse Hover Border */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0 border-4 border-transparent group-hover:border-[#E63946] rounded-xl pointer-events-none"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </section>
  );
};

export default BlogsCarousel;
