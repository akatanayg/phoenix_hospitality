import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-8 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">About Phoenix Hospitality</h3>
          <p className="text-sm text-gray-400">
            Established in 1982, Phoenix Hospitality is one of India's leading
            providers of diverse and quality accommodation solutions.
          </p>
        </div>

        {/* Useful Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Picture Gallery</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        {/* FAQs */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">FAQ’s</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Partner with us</a>
            </li>
            <li>
              <a href="#">Partner's login</a>
            </li>
          </ul>
        </div>

        {/* Newsletter and Map */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 flex-1 bg-white text-black focus:outline-none"
            />
            <button className="bg-orange-500 text-white p-3 flex items-center justify-center">
              <FaPaperPlane />
            </button>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-4">
            <iframe
              title="Location"
              className="w-full h-40 md:h-32 lg:h-48 border-none"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Ahuja+Residences"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        {/* Social Media */}
        <div className="flex space-x-4">
          <a href="#" className="p-2 bg-gray-800 rounded-full text-orange-500">
            <FaFacebookF />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full text-orange-500">
            <FaInstagram />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full text-orange-500">
            <FaYoutube />
          </a>
          <a href="#" className="p-2 bg-gray-800 rounded-full text-orange-500">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center md:text-left">
          All Rights Reserved &copy; Copyright 2025 Phoenix Hospitality Limited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
