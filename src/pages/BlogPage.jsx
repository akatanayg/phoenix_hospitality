import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";
import { useDarkMode } from "../DarkModeContext";
import { FaArrowLeft } from "react-icons/fa";

// Blog data with flexible structure
const blogs = [
  {
    id: "unveiling-hidden-gems",
    title:
      "Bleisure for Everyone: Redefining Travel with Comfort and Affordability",
    content: [
      {
        type: "paragraph",
        data: "The distinction between work and leisure is evolving, allowing for a more balanced lifestyle. Enter 'bleisure' travel - a trend that combines business trips with leisure activities, allowing professionals to maximize their time and enhance their overall well-being. While luxury hotels have long catered to this trend, affordable leisure hotels are now stepping up to offer budget-friendly options for the modern bleisure traveler.",
      },
      { type: "subheading", data: "What is Bleisure Travel?" },
      {
        type: "paragraph",
        data: "Bleisure travel involves extending a business trip to include leisure activities or adding business components to a leisure trip. It's about making the most of travel opportunities to explore new destinations, experience different cultures, and recharge before returning to the grind.",
      },
      {
        type: "subheading",
        data: "Why Phoenix Hospitality is Ideal for Bleisure Travel?",
      },
      {
        type: "paragraph",
        data: "Phoenix Hospitality stands out as an excellent choice for bleisure travelers due to its strategic location, comfortable accommodations, and personalized service. Situated in the heart of Gurgaon, our guest house offers easy access to major business hubs and attractions, making it perfect for both work and play. Our amenities, including a gym and in-house dining at Gravy Gram, ensure that guests can seamlessly transition between work and relaxation. Whether you're attending meetings or exploring local sights, Phoenix Hospitality provides a warm and welcoming environment that supports your bleisure needs.",
      },
      { type: "subheading", data: "Benefits of Bleisure Travel:" },
      {
        type: "paragraph",
        data: "Bleisure travel offers numerous benefits, including enhanced employee satisfaction and productivity. By extending business trips to include leisure activities, travelers can unwind and recharge, leading to improved job performance and overall well-being. This trend also presents opportunities for hotels to increase occupancy rates and revenue by offering tailored packages that combine business amenities with leisure perks.",
      },
      {
        type: "subheading",
        data: "Tips for Planning a Successful Bleisure Trip:",
      },
      {
        type: "list",
        data: [
          "Communicate with your employer: Ensure your employer is aware of your plans and that any additional costs are clearly defined.",
          "Plan your itinerary: Balance work commitments with leisure activities to make the most of your time.",
          "Book accommodations in advance: Secure affordable accommodations in convenient locations to minimize travel time and maximize your experience.",
          "Pack accordingly: Pack both business attire and leisure wear to be prepared for all activities.",
          "Stay connected: Utilize Wi-Fi and other technology to stay connected with work while enjoying your leisure time.",
        ],
      },
      {
        type: "paragraph",
        data: "Bleisure travel is revolutionizing the way we approach work-life balance, and affordable leisure hotels are making this trend accessible to a wider audience. By combining business with leisure, travelers can enhance their overall well-being and create memorable experiences.",
      },
    ],
    date: "March 9, 2025",
    author: "John Doe",
  },
  {
    id: "luxury-vs-budget",
    title: "Why Choose Phoenix Hospitality for Your Stay in Gurgaon?",
    content: [
      {
        type: "paragraph",
        data: "Located in the heart of DLF Phase II, Gurgaon,  Phoenix Hospitality offers a unique blend of comfort, convenience, and value, making it an ideal choice for both business travelers seeking a corporate stay in Gurgaon and tourists looking for budget friendly stays in Gurgaon.",
      },
      {
        type: "paragraph",
        data: "Here are some compelling reasons why you should consider this hotel for your next stay in Gurgaon:",
      },
      {
        type: "subheading",
        data: "Strategic Location",
      },
      {
        type: "paragraph",
        data: "Phoenix Hospitality is situated in a prime location, just a minute's walk from DLF Phase II and a short distance from major business hubs like DLF Cyber City. This proximity ensures that corporate guests can easily access key offices and meeting venues, making it one of the best places to stay in Gurgaon for business travelers. For leisure travelers, popular attractions such as Gurgaon Central Mall, DLF Cyber Hub and Leisure Valley Public Park are also within easy reach.",
      },
      {
        type: "subheading",
        data: "Comfortable Accommodations",
      },
      {
        type: "paragraph",
        data: "The hotel features modern, well-appointed rooms designed to provide a comfortable stay. Each room is equipped with air conditioning and a flat-screen TV with satellite channels, making it an excellent choice for those seeking budget hotels in Gurgaon without compromising on quality.",
      },
      {
        type: "subheading",
        data: "Amenities",
      },
      {
        type: "paragraph",
        data: "Guests at  Phoenix Hospitality can enjoy complimentary WiFi with high-speed internet, daily housekeeping, a continental breakfast available each morning (for a surcharge), and access to a gym facility. The hotel also provides luggage storage, allowing you to explore Gurgaon without worrying about your belongings.",
      },
      {
        type: "subheading",
        data: "In-House Dining : Gravy Gram",
      },
      {
        type: "paragraph",
        data: "Phoenix Hospitality takes pride in its in-house dining facility, Gravy Gram. Known for its flavorful and diverse menu, Gravy Gram offers a delightful culinary experience for guests. Whether you're craving classic Indian dishes, comforting continental meals, or quick snacks, the restaurant caters to a variety of tastes and preferences. Perfect for both casual dining and business lunches, Gravy Gram ensures that every meal is prepared with care and served with professionalism.",
      },
      {
        type: "subheading",
        data: "Professional Staff and Services",
      },
      {
        type: "paragraph",
        data: "The hotel's staff is renowned for their professionalism and hospitality. From the front desk to housekeeping, every member of the team is dedicated to ensuring that your stay is pleasant and memorable. Services like room service and dry cleaning are also available for your convenience.",
      },
      {
        type: "subheading",
        data: "Event Spaces",
      },
      {
        type: "paragraph",
        data: "Phoenix Hospitality is equipped with a conference room, making it a suitable choice for corporate events and meetings. Additionally, the hotel offers outdoor space ideal for hosting small-sized events and kitty parties, complete with barbecue facilities. This makes it a great venue for intimate gatherings and celebrations in Gurgaon.",
      },
      {
        type: "subheading",
        data: "Value for Money",
      },
      {
        type: "paragraph",
        data: "Whether you're booking a corporate stay or just looking for a place to stay in Gurgaon, this hotel provides everything you need for a comfortable and enjoyable experience.The hotel offers a competitive price point without compromising on quality, making it an excellent choice for travelers seeking affordable hotels in Gurgaon without sacrificing comfort or service.",
      },
    ],
    date: "March 5, 2025",
    author: "Emily Smith",
  },
  {
    id: "hotel-hacks",
    title:
      "Why Phoenix Hospitality is Your Ideal Choice for Long Stays in Gurgaon?",
    content: [
      {
        type: "paragraph",
        data: "When planning an extended stay in Gurgaon, selecting the right accommodation is crucial for ensuring comfort, convenience, and value. While traditional hotels offer short-term solutions, Phoenix Hospitality stands out as an exceptional option for those seeking a home away from home. "
      },
      {
        type: "paragraph",
        data: "Here’s why Phoenix Hospitality is the ideal choice for long stays in Gurgaon:"
      },
      {
        type: "subheading",
        data: "Home-Like Comfort and Convenience"
      },
      {
        type: "paragraph",
        data: "Phoenix Hospitality provides a warm and inviting atmosphere, designed to make you feel at home. Unlike typical hotel rooms, our accommodations offer spacious layouts and comfortable furnishings, providing a relaxing environment for extended stays."
      },
      {
        type: "subheading",
        data: "Cost-Effective Solution"
      },
      {
        type: "paragraph",
        data: "Opting for a long stay at Phoenix Hospitality can be more cost-effective than traditional hotels. With competitive long-term rates, you can enjoy premium amenities and services without exceeding your budget."
      },
      {
        type: "subheading",
        data: "Prime Location in Gurgaon"
      },
      {
        type: "paragraph",
        data: "Located in the heart of DLF Phase II, Gurgaon, Phoenix Hospitality offers easy access to major business hubs, entertainment centers, and essential amenities. Whether you're here for work or leisure, our strategic location ensures you're never far from where you need to be."
      },
      {
        type: "subheading",
        data: "Personalized Service and Hospitality"
      },
      {
        type: "paragraph",
        data: "At Phoenix Hospitality, we pride ourselves on delivering personalized service to every guest. Our dedicated staff is committed to ensuring your stay is comfortable and memorable, catering to your specific needs and preferences."
      },
      {
        type: "subheading",
        data: "Fully Equipped for Extended Living"
      },
      {
        type: "paragraph",
        data: "Our accommodations are designed to meet the needs of long-term guests. With amenities such as complimentary Wi-Fi, in-house dining options at Gravy Gram, and access to a gym facility, Phoenix Hospitality offers everything you need for a seamless and enjoyable stay."
      },
      {
        type: "subheading",
        data: "A Community Away From Home"
      },
      {
        type: "paragraph",
        data: "Staying at Phoenix Hospitality means becoming part of a welcoming community. Connect with fellow guests, share experiences, and create lasting memories in a supportive and friendly environment."
      },
      {
        type: "paragraph",
        data: "Choosing Phoenix Hospitality for your long stay in Gurgaon means opting for comfort, convenience, and value. Experience the difference and make Phoenix Hospitality your home  away from home."
      },
    ]
  }
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
      <Navbar /> <br />
      <br />
      <br />
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

        {/* Dynamic Blog Content */}
        <div className="mt-6 space-y-6 text-lg leading-relaxed">
          {blog.content.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {item.data}
                </motion.p>
              );
            } else if (item.type === "subheading") {
              return (
                <motion.h2
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-2xl font-semibold text-white"
                >
                  {item.data}
                </motion.h2>
              );
            } else if (item.type === "list") {
              return (
                <motion.ul
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="list-disc list-inside space-y-2"
                >
                  {item.data.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </motion.ul>
              );
            }
            return null;
          })}
        </div>
        <motion.hr
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 border-t border-white-400/50 w-1/2 mx-auto"
      /> <br /><br />
      </motion.div>
      <Footer />
    </div>
  );
};

export default BlogPage;
