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
  },
  {
    id: "hotel-history",
    title:
      "The Ultimate Guide to Planning a Stress-Free Stay in Gurgaon",
    content: [
      {
        type: "paragraph",
        data: "Gurgaon, a bustling city near New Delhi, offers a mix of business hubs, leisure spots, and cultural attractions. Whether you're visiting for work or relaxation, here’s how to plan a stress-free stay in this vibrant city: "
      },
      {
        type: "subheading",
        data: "1. Choose the Right Accommodation"
      },
      {
        type: "paragraph",
        data: "Opt for boutique hotels like Phoenix Hospitality for personalized service, comfortable rooms, and convenient amenities such as Wi-Fi and room service. Its prime location ensures easy access to business districts and local attractions."
      },
      {
        type: "subheading",
        data: "2. Plan Your Transportation"
      },
      {
        type: "paragraph",
        data: "Getting around Gurgaon is easy with multiple options:"
      },
      {
        type: "list",
        data: [
          "Metro: Efficient connectivity to major areas like Cyber City and MG Road.",
          "Car Rentals: Affordable and quick for exploring nearby attractions.",
          "Public Transport: Buses and trains are cost-effective for daily commutes.",
        ],
      },
      {
        type: "subheading",
        data: "3. Explore Local Attractions"
      },
      {
        type: "paragraph",
        data: "Gurgaon boasts a variety of leisure activities:"
      },
      {
        type: "list",
        data: [
          "CyberHub: Perfect for dining, entertainment, and shopping",
          "Sultanpur Bird Sanctuary: Ideal for nature lovers seeking tranquility.",
          "Ambience Mall: A popular spot for shopping and dining.",
        ],
      },
      {
        type: "subheading",
        data: "4. Indulge in Relaxation and Wellness"
      },
      {
        type: "paragraph",
        data: "Unwind at our serene outdoor lounge, perfect for small gatherings or relaxation. We also host BBQ nights, offering a delightful way to connect with fellow travelers or enjoy a casual evening under the stars."
      },
      {
        type: "subheading",
        data: "5. Shop and Dine Like a Local"
      },
      {
        type: "paragraph",
        data: "Explore malls like Ambience Mall or visit Banjara Market for unique finds. For dining, enjoy a delightful experience at Gravy Gram, our in-house restaurant offering a diverse menu with local flavors. Gravy Gram provides a convenient and satisfying dining option right at your doorstep."
      },
      {
        type: "subheading",
        data: "6. Best Time to Visit Gurgaon"
      },
      {
        type: "paragraph",
        data: "Plan your trip between November and February for pleasant weather perfect for sightseeing or relaxing walks."
      },
      {
        type: "paragraph",
        data: "Additional Tips for a Stress-Free Stay:"
      },
      {
        type: "list",
        data: [
          "Stay Connected: Ensure your phone is fully charged and consider purchasing a local SIM card for easy communication if travelling internationally.",
          "Plan Ahead: Book restaurants and attractions in advance to avoid last-minute hassles.",
          "Explore Local Markets: Visit local markets like Sadar Bazaar for affordable shopping and authentic street food.",
        ],
      },
      {
        type: "paragraph",
        data: "With thoughtful planning and the right choices, your stay in Gurgaon can be both productive and rejuvenating. Let Phoenix Hospitality enhance your experience with its exceptional service and comfort!"
      },
    ]
  },
  {
    id: "wellness-travel",
    title:
      "How Phoenix Hospitality Caters to Business Travelers: A Perfect Stay for Professionals",
    content: [
      {
        type: "paragraph",
        data: "In the fast-paced world of business travel, finding accommodations that balance comfort, convenience, and productivity is essential. Phoenix Hospitality in Gurgaon is designed with professionals in mind, offering everything you need for a seamless and stress-free stay. Here’s how we cater to business travelers:"
      },
      {
        type: "subheading",
        data: "1. Prime Location for Easy Connectivityn"
      },
      {
        type: "paragraph",
        data: "Phoenix Hospitality is strategically located in Gurgaon, close to major business hubs like Cyber City and Udyog Vihar. With easy access to metro stations, corporate offices, and the airport, our location ensures you spend less time commuting and more time focusing on what matters"
      },
      {
        type: "subheading",
        data: "2. Work-Friendly Spaces"
      },
      {
        type: "paragraph",
        data: "Our rooms are thoughtfully designed with ergonomic workspaces and high-speed Wi-Fi, allowing you to stay productive without interruptions. Whether you need to prepare for a meeting or catch up on emails, we provide the perfect environment for work."
      },
      {
        type: "subheading",
        data: "3. Meeting and Event Support"
      },
      {
        type: "paragraph",
        data: "Planning a team meeting or a small corporate event? Phoenix Hospitality offers versatile spaces, including a fully equipped conference room, to ensure your gathering is a success. From setting up the space to providing catering services, we handle all the details so you can focus on your agenda. Our conference room is designed to accommodate professional meetings with modern amenities, high-speed Wi-Fi, and seamless support for presentations or discussions."
      },
      {
        type: "subheading",
        data: "4. Relaxation After Work"
      },
      {
        type: "paragraph",
        data: "We understand that business trips can be demanding. That’s why we offer a serene outdoor lounge where you can unwind after a long day. Enjoy BBQ nights or simply relax in a peaceful setting that helps you recharge for the next day."
      },
      {
        type: "subheading",
        data: "5. In-House Dining at Gravy Gram"
      },
      {
        type: "paragraph",
        data: "Forget the hassle of searching for restaurants after a busy day. Our in-house restaurant, Gravy Gram, serves delicious meals with a variety of options to suit every palate. Whether it’s breakfast before an early meeting or dinner after a long day, we’ve got you covered."
      },
      {
        type: "subheading",
        data: "6. Personalized Service"
      },
      {
        type: "paragraph",
        data: "At Phoenix Hospitality, we pride ourselves on providing personalized service tailored to your needs as a professional traveler. From flexible check-in/check-out options to assisting with transportation arrangements, our team is here to make your stay as smooth as possible."
      },
      {
        type: "subheading",
        data: "7. Special Packages for Corporate Stays"
      },
      {
        type: "paragraph",
        data: "We offer exclusive packages for corporate bookings and long stays, ensuring affordability without compromising on quality. Reach out to us directly through our inquiry page [attach link] to learn more about our tailored solutions for businesses."
      },
      {
        type: "paragraph",
        data: "Phoenix Hospitality is more than just a place to stay - it’s your partner in creating a productive and comfortable business trip experience. Let us take care of the details so you can focus on achieving your goals during your time in Gurgaon"
      },
    ]
  },
  {
    id: "choosing-perfect-hotel",
    title:
      "Why Boutique Hotels Are the Future of Hospitality: A Look at Phoenix Hospitality",
    content: [
      {
        type: "paragraph",
        data: "The hospitality industry is undergoing a transformation, with boutique hotels emerging as a preferred choice for modern travelers. These establishments offer a unique blend of personalized service, stylish design, and local charm that sets them apart from traditional hotel chains. Phoenix Hospitality in Gurgaon is a shining example of how boutique hotels are redefining the guest experience. Here’s why boutique hotels like Phoenix Hospitality are the future of hospitality:"
      },
      {
        type: "subheading",
        data: "1. Personalized Service That Feels Like Home"
      },
      {
        type: "paragraph",
        data: "Boutique hotels excel in providing tailored experiences, and Phoenix Hospitality is no exception. With fewer rooms than large hotel chains, we focus on understanding and catering to each guest’s unique needs. From flexible check-in options to customized room preferences, our attentive staff ensures that every stay feels personal and welcoming."
      },
      {
        type: "subheading",
        data: "2. Thoughtful Design"
      },
      {
        type: "paragraph",
        data: "Unlike standardized chain hotels, boutique hotels prioritize individuality and character in their design. At Phoenix Hospitality, our interiors reflect a blend of modern aesthetics with Indian heritage, creating a unique and inviting ambiance for every guest. Every detail, from the furniture to the décor, is thoughtfully curated to enhance your stay."
      },
      {
        type: "subheading",
        data: "3. A Strong Connection to Local Culture"
      },
      {
        type: "paragraph",
        data: "Boutique hotels often serve as a gateway to the local culture, and Phoenix Hospitality embraces this philosophy. Our property not only reflects the vibrant spirit of Gurgaon but also offers guests insights into the city’s unique character. Whether it’s through locally inspired cuisine at our in-house restaurant, Gravy Gram, or recommendations for nearby attractions, we ensure an authentic experience."
      },
      {
        type: "subheading",
        data: "4. A Focus on Community and Gathering Spaces"
      },
      {
        type: "paragraph",
        data: "Boutique hotels foster a sense of community by offering intimate spaces where guests can connect and unwind. At Phoenix Hospitality, our outdoor lounge provides the perfect setting for casual gatherings or quiet relaxation after a busy day. We also host BBQ nights to bring guests together in a warm and friendly environment."
      },
      {
        type: "subheading",
        data: "5. Ideal for Business Travelers" 
      },
      {
        type: "paragraph",
        data: "Phoenix Hospitality seamlessly blends boutique charm with business convenience. Our fully equipped conference room caters to professionals seeking a productive space for meetings or events. Combined with high-speed Wi-Fi and work-friendly rooms, we provide an ideal environment for corporate travelers."
      },
      {
        type: "subheading",
        data: "6. The Future is Boutique: Why Travelers Prefer Us"
      },
      {
        type: "paragraph",
        data: "Today’s travelers value experiences over standardization, making boutique hotels the go-to choice for those seeking something special. At Phoenix Hospitality, we embody this trend by offering personalized care, unique design, and an authentic connection to Gurgaon’s culture - all while maintaining affordability."
      },
      {
        type: "paragraph",
        data: "Boutique hotels like Phoenix Hospitality are reshaping the hospitality landscape by prioritizing individuality and guest satisfaction over mass-market appeal. Whether you’re traveling for business or leisure, our property offers a refreshing alternative to traditional accommodations. Experience the future of hospitality with us - where every stay is as unique as you are!"
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
