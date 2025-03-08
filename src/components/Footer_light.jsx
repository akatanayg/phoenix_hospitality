import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full py-12 px-6 md:px-16 bg-[#FAF1EB] text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Column 1 - Logo + Short Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-4 text-center md:text-left"
        >
          <h3 className="text-3xl font-extrabold uppercase tracking-widest">Our Stay</h3>
          <p className="text-[14px] leading-[22px] text-[#555]">
            Experience luxury and comfort with our beautifully curated guesthouse.
            Nestled in nature, rich with history, and designed for your relaxation.
          </p>
        </motion.div>

        {/* Column 2 - Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-2 text-center md:text-left"
        >
          <h4 className="text-xl font-bold uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-1 text-[14px] text-[#555]">
            <li><a href="#about" className="hover:text-[#E63946] transition">About Us</a></li>
            <li><a href="#gallery" className="hover:text-[#E63946] transition">Gallery</a></li>
            <li><a href="#blogs" className="hover:text-[#E63946] transition">Blogs</a></li>
            <li><a href="#contact" className="hover:text-[#E63946] transition">Contact Us</a></li>
          </ul>
        </motion.div>

        {/* Column 3 - Contact Info & Google Maps */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-4 text-center md:text-left"
        >
          <h4 className="text-xl font-bold uppercase tracking-wide">Find Us</h4>
          <p className="text-[14px] text-[#555]">Veliki Preslav, Bulgaria</p>
          <a
            href="https://www.google.com/maps/place/Veliki+Preslav,+Bulgaria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#E63946] font-medium hover:underline"
          >
            <FaMapMarkerAlt className="text-[18px]" /> View on Google Maps
          </a>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="text-[#555] hover:text-[#E63946] transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-[#555] hover:text-[#E63946] transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-[#555] hover:text-[#E63946] transition">
              <FaTwitter size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-[12px] text-[#777]">
        © {new Date().getFullYear()} Our Stay Guesthouse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
