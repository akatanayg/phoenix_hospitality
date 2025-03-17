import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useDarkMode } from "../DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer
      className={`relative w-full py-12 px-6 md:px-16 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#FAF1EB] text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Column 1 - Logo + Short Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-4 text-center md:text-left"
        >
          <h3 className="text-xl font-bold uppercase tracking-wide">
            Our Stay
          </h3>
          <p
            className={`text-[14px] leading-[22px] ${
              darkMode ? "text-gray-300" : "text-[#555]"
            }`}
          >
            Experience Comfort, Care, and Connection in Every Moment at Phoenix
            Hospitality. <br /><br />Located in the heart of DLF Phase II, Gurgaon, Phoenix
            Hospitality offers a convenient stay for both business and leisure
            travelers. Our proximity to key business districts and attractions
            ensures that guests can easily explore all that Gurgaon has to offer
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
          <h4 className="text-xl font-bold uppercase tracking-wide">
            Quick Links <br /><br />
          </h4>

          {/* Grid Layout for Two Columns */}
          <ul
            className={`grid grid-cols-2 gap-4 text-[14px] ${
              darkMode ? "text-gray-300" : "text-[#555]"
            }`}
          >
            <li>
              <a href="/aboutus" className="hover:text-red-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-red-400 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="/blogs" className="hover:text-red-400 transition">
                Blogs
              </a>
            </li>
            <li>
              <a href="/inquiry" className="hover:text-red-400 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/deluxeroom" className="hover:text-red-400 transition">
                Rooms
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-red-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/testimonials" className="hover:text-red-400 transition">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-red-400 transition">
                Home
              </a>
            </li>
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
          <p
            className={`text-[14px] ${
              darkMode ? "text-gray-300" : "text-[#555]"
            }`}
          >
            28, M-1, Mushedpur, DLF Phase 2, Sector 25, Gurugram, Sarhol,
            Haryana 122002
          </p>
          {/* Google Maps Iframe */}
          <div className="mt-4">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.0465101556238!2d77.07694297535284!3d28.486619375744826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193d7e17653f%3A0x680cd570f0c5d620!2sFabHotel%20Phoenix%20Hospitality%20-%20Hotel%20in%20DLF%20Phase%202%2C%20Gurgaon!5e1!3m2!1sen!2sin!4v1742201686965!5m2!1sen!2sin"
              width="100%"
              height="130"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="#"
              className={`transition ${
                darkMode
                  ? "text-gray-400 hover:text-red-400"
                  : "text-[#555] hover:text-[#E63946]"
              }`}
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className={`transition ${
                darkMode
                  ? "text-gray-400 hover:text-red-400"
                  : "text-[#555] hover:text-[#E63946]"
              }`}
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className={`transition ${
                darkMode
                  ? "text-gray-400 hover:text-red-400"
                  : "text-[#555] hover:text-[#E63946]"
              }`}
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className={`transition ${
                darkMode
                  ? "text-gray-400 hover:text-red-400"
                  : "text-[#555] hover:text-[#E63946]"
              }`}
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`mt-10 text-center text-[12px] ${
          darkMode ? "text-gray-500" : "text-[#777]"
        }`}
      >
        © {new Date().getFullYear()} Phoenix Hospitality. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
