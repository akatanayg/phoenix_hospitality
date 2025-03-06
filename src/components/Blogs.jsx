import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CustomPrevButton = () => (
  <div className="swiper-button-prev-custom">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-orange-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
);

const CustomNextButton = () => (
  <div className="swiper-button-next-custom">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-orange-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

const blogs = [
  {
    image: "/image1.jpg",
    description: "Discover our latest offers and discounts. Limited time only!",
    link: "/blogs/latest-offers",
  },
  {
    image: "/c1.jpg",
    description: "5 tips to enhance your stay at our luxury rooms.",
    link: "/blogs/stay-tips",
  },
  {
    image: "/c3.jpg",
    description: "Top amenities to look for when booking a hotel.",
    link: "/blogs/top-amenities",
  },
];

const RecentBlogs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headingRef = React.useRef(null);
  const isInView = useInView(headingRef, { once: true });

  return (
    <section
      className="relative w-full py-16 bg-cover bg-center bg-black"
      style={{ backgroundImage: "url('/aboutusbg_4.png')" }}
    >
      {/* Top-Left Bulge */}
      <div className="absolute top-0 left-0 w-full h-[60px] -translate-y-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="black"
            d="M0,160L80,154.7C160,149,320,139,480,128C640,117,800,107,960,117.3C1120,128,1280,160,1360,176L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Bottom Bulge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            className="fill-black"
            d="M0,32L48,26.7C96,21,192,11,288,21.3C384,32,480,64,576,80C672,96,768,96,864,85.3C960,75,1056,53,1152,53.3C1248,53,1344,75,1392,85.3L1440,96L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
      </div>

      {/* Section Content */}
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-left space-y-4 mb-12">
          <motion.h2
            ref={headingRef}
            className="text-orange-500 relative inline-block"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-6xl sm:text-6xl">Recent Blogs</span>
            <motion.div
              className="h-[3px] bg-orange-500 absolute left-0 bottom-[-8px]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.h2>
          <motion.p
            className="text-white max-w-xs sm:max-w-md text-xs sm:text-sm leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore handpicked stories, expert tips, and exciting updates,
            curated for your perfect stay.
          </motion.p>
        </div>

        {/* Blog Cards */}
        {isMobile ? (
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="w-full"
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
            >
              {blogs.map((blog, index) => (
                <SwiperSlide key={index}>
                  <motion.a
                    href={blog.link}
                    className="w-full rounded-xl overflow-hidden relative group cursor-pointer transition-all hover:shadow-[0_0_15px_5px_rgba(255,165,0,0.7)]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <img
                      src={blog.image}
                      alt={`Blog ${index + 1}`}
                      className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <p className="text-white mt-3 text-sm p-3 text-center font-medium bg-transparent group-hover:bg-black/80 transition-colors duration-500">
                      {blog.description}
                    </p>
                  </motion.a>
                </SwiperSlide>
              ))}
            </Swiper>
            <CustomPrevButton />
            <CustomNextButton />
          </div>
        ) : (
          <div className="flex justify-center gap-6 flex-wrap">
            {blogs.map((blog, index) => (
              <motion.a
                key={index}
                href={blog.link}
                className="w-[300px] rounded-xl overflow-hidden relative group cursor-pointer transition-all hover:shadow-[0_0_15px_5px_rgba(255,165,0,0.7)]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={blog.image}
                  alt={`Blog ${index + 1}`}
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <p className="text-white mt-3 text-sm p-3 text-center font-medium bg-transparent group-hover:bg-black/80 transition-colors duration-500">
                  {blog.description}
                </p>
              </motion.a>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-12">
          <a
            href="/blogs"
            className="bg-orange-500 text-black px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:text-white hover:scale-105 transition-all duration-300"
          >
            Read More
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default RecentBlogs;
