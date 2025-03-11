import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";
import { useDarkMode } from "../DarkModeContext";
import { FaArrowLeft } from "react-icons/fa";

// Blog data (same structure as Blogs.jsx)
const blogs = [
  {
    id: "unveiling-hidden-gems",
    title: "Unveiling Hidden Gems: The Best Offbeat Travel Destinations",
    content:
      "Discovering offbeat travel destinations allows travelers to experience unique cultures, untouched landscapes, and breathtaking sceneries. Some hidden gems include the Phong Nha caves in Vietnam, the serene beauty of Bhutan’s valleys, and the mesmerizing Plitvice Lakes in Croatia. These places provide an escape from the usual tourist crowds, offering a more authentic and peaceful adventure.",
    date: "March 9, 2025",
    author: "John Doe",
  },
  {
    id: "luxury-vs-budget",
    title: "Luxury vs. Budget Stays: What's Worth Your Money?",
    content:
      "Traveling on a budget doesn’t mean compromising comfort. Many budget stays provide excellent services at a fraction of the price. However, luxury hotels offer unparalleled experiences, from gourmet dining to world-class spas. Choosing between them depends on personal preferences, priorities, and the kind of experience you seek.",
    date: "March 5, 2025",
    author: "Emily Smith",
  },
  {
    id: "hotel-hacks",
    title: "Top 5 Hotel Hacks to Elevate Your Stay Experience",
    content:
      "Did you know you can request a free room upgrade simply by being polite? Other travel hacks include using a binder clip to keep curtains shut and requesting extra amenities at check-in. Hotels often have hidden perks that many guests don’t take advantage of!",
    date: "March 1, 2025",
    author: "Michael Brown",
  },
  {
    id: "hotel-history",
    title: "The History Behind Our Boutique Hotel",
    content:
      "Our boutique hotel has a rich history dating back to the early 1900s. Originally built as a colonial guest house, it has transformed over the years into a luxurious retreat while preserving its architectural charm. Every corner of our hotel tells a story of the past, making each stay a unique experience.",
    date: "February 20, 2025",
    author: "Sophia Williams",
  },
  {
    id: "wellness-travel",
    title: "Wellness Travel: How to Relax and Recharge on Your Trip",
    content:
      "Traveling can be stressful, but prioritizing wellness can transform your experience. Incorporating mindfulness, yoga, and spa treatments into your journey ensures relaxation and rejuvenation. Choosing destinations that promote wellness can significantly impact your overall well-being.",
    date: "February 10, 2025",
    author: "David Johnson",
  },
  {
    id: "choosing-perfect-hotel",
    title: "A Guide to Choosing the Perfect Hotel for Your Vacation",
    content:
      "Finding the perfect hotel requires balancing location, budget, and amenities. Travelers should research reviews, compare prices, and check for hidden fees before booking. Prioritizing what matters most—whether it’s comfort, location, or luxury—ensures a stress-free and enjoyable stay.",
    date: "January 28, 2025",
    author: "Olivia Martin",
  },
];

const BlogPage = () => {
  const { blogId } = useParams();
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  // Find the blog based on the URL parameter
  const blog = blogs.find((b) => b.id === blogId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={() => navigate("/blogs")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#FAF1EB] text-black"
      }`}
    >
      <Navbar /> <br /><br /><br />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition mb-6"
        >
          <FaArrowLeft /> Back to Blogs
        </button>

        {/* Blog Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          {blog.title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="bg-gradient-to-r from-[#FF5733] via-[#EC2D70] to-[#8B0000] text-transparent bg-clip-text">
            {blog.title.split(" ").slice(-1)}
          </span>
        </motion.h1>

        {/* Date & Author */}
        <div className="flex justify-between items-center mt-4 text-gray-500 italic">
          <p>{blog.date}</p>
          <p>{blog.author}</p>
        </div>

        {/* Blog Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-lg leading-relaxed"
        >
          {blog.content}
        </motion.p>
      </motion.div>
      <Footer />
    </div>
  );
};

export default BlogPage;
