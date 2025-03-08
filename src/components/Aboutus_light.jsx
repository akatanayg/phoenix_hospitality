import React from "react";
import { motion } from "framer-motion";

const AboutUsLight = () => {
  return (
    <section className="bg-[#FAF1EB] w-full py-16 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto relative grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-start">
        {/* Left Side - Text and Images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-[50px] md:text-[80px] leading-none font-extrabold uppercase text-black tracking-[5px]">
            ABOUT US
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#333333] text-[15px] leading-[22px]">
            <p>
              A flat screen TV with satellite channels is featured in each of the rooms. Some units include a seating area for your convenience. A coffee machine is also available. A shared self-catered kitchen is at guests’ disposal, as well as a lounge with a fireplace and a work desk.
            </p>
            <p>
              Guests can find a small museum on the premises of the house with a workshop. Breakfast can also be arranged for guests upon request and at a surcharge.
            </p>
            <p>
              Veliki Preslav Archaeological Reserve can be reached within 6 km from Mutafova Guest House. The center of the town is 3 km away, where a restaurant can be found. A grocery shop is available 500m away.
            </p>
            <p className="mt-0">
              This property is also rated for the best value in Veliki Preslav! Guests are getting more for their money when compared to other properties in the city.
              <br />
              <br />
              <span className="text-[#E63946] font-semibold cursor-pointer">
                Look on the map
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
            {["/c1.jpg", "/c5.jpg", "/c3.jpg", "/c5.jpg", "/c3.jpg"].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`about image ${index + 1}`}
                className="w-[80px] md:w-[100px] h-[100px] md:h-[120px] object-cover"
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Circle Image + Testimonial Block */}
        <div className="relative flex flex-col items-center md:items-end justify-start">
          {/* Circular Image (Original One Restored) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] overflow-hidden rounded-full shadow-2xl relative md:-left-[115px]"
          >
            <img
              src="/image1.jpg"
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
              <p className="relative text-[18px] md:text-[22px] leading-[28px] md:leading-[32px] text-[#E63946] font-semibold">
                <span className="absolute hidden md:block -top-12 -left-8 text-[180px] leading-[100px] text-[#E63946] opacity-20">
                  &ldquo;
                </span>
                The guesthouse is a charming villa built in the Ottoman period and has stayed in the owner's family for over a century. She takes excellent care of the place, and takes her duty to guests very seriously.
              </p>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className="mt-4"
              >
                <p className="text-black font-bold text-[16px] md:text-[18px]">
                  Richard
                </p>
                <p className="text-[#666666] text-[14px]">USA</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsLight;
