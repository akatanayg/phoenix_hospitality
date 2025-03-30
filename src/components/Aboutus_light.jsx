import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";
import { Link } from "react-router-dom"; 

const AboutUs = () => {
  const { darkMode } = useDarkMode(); // Get dark mode state directly

  return (
    <section
      className={`w-full py-16 px-6 md:px-16 overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#FAF1EB] text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto relative grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-start">
        {/* Left Side - Text and Images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-[50px] md:text-[80px] leading-none font-extrabold uppercase tracking-[5px]">
            ABOUT US
          </h2>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 text-[15px] leading-[22px] ${
              darkMode ? "text-gray-300" : "text-[#333]"
            }`}
          >
            <p>
            Inspired by the phoenix, a mythical bird that rises from the ashes and comes back stronger, we take guest feedback seriously and continuously improve to enhance your experience. Known for its meticulous vision, the phoenix reflects our commitment to paying attention to every detail, ensuring your stay is seamless and memorable.

            </p>
            <p>
            Located in the heart of DLF Phase II, Gurgaon, Phoenix Hospitality offers a convenient stay for both business and leisure travelers. Our proximity to key business districts and attractions ensures that guests can easily explore all that Gurgaon has to offer.


            </p>
            <p>
            Our mission is to provide a warm, welcoming environment where every guest feels valued and cared for. We believe that hospitality is not just about offering a place to stay, but about crafting moments that leave lasting impressions

            </p>
            <p className="mt-0">
              This property is rated for the best value in DLF Phase II!
              Guests are getting more for their money compared to other
              properties.
              <br />
              <br />
              <span
                className={`text-[#E63946] font-semibold cursor-pointer hover:underline ${
                  darkMode ? "text-red-400" : ""
                }`}
              >
                <Link to="/aboutus">Read More</Link>
              </span>
            </p>
          </div>

          {/* Image Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex gap-4 justify-center md:justify-start"
          >
            {["/Suit Lounge.png", "/Room Overview.jpg", "/Room Bed.jpg", "/Gym.jpg", "/Reception.jpg"].map(
              (src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`about image ${index + 1}`}
                  className={`w-[80px] md:w-[100px] h-[100px] md:h-[120px] object-cover rounded-lg shadow-lg ${
                    darkMode ? "shadow-gray-800" : "shadow-gray-500"
                  }`}
                />
              )
            )}
          </motion.div>
        </motion.div>

        {/* Right Side - Circle Image + Testimonial Block */}
        <div className="relative flex flex-col items-center md:items-end justify-start">
          {/* Circular Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] overflow-hidden rounded-full shadow-2xl relative md:-left-[115px]"
          >
            <img
              src="/Front.jpg"
              alt="about circle"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Testimonial Block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="relative mt-[30px] md:mt-[50px] w-full text-center md:text-left md:pr-[20px] md:ml-[20px]"
          >
            <div className="bg-transparent text-left max-w-[500px] ml-auto">
              <p
                className={`relative text-[18px] md:text-[22px] leading-[28px] md:leading-[32px] font-semibold ${
                  darkMode ? "text-red-400" : "text-[#E63946]"
                }`}
              >
                <span
                  className={`absolute hidden md:block -top-12 -left-8 text-[180px] leading-[100px] opacity-20 ${
                    darkMode ? "text-red-400" : "text-[#E63946]"
                  }`}
                >
                  &ldquo;
                </span>
                The guesthouse is a charming villa built in the Ottoman period
                and has stayed in the owner's family for over a century. She
                takes excellent care of the place, and takes her duty to guests
                very seriously.
              </p>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className="mt-4"
              >
                <p className="font-bold text-[16px] md:text-[18px]">Richard</p>
                <p
                  className={`text-[14px] ${
                    darkMode ? "text-gray-400" : "text-[#666]"
                  }`}
                >
                  USA
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
