import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";
import { useDarkMode } from "../DarkModeContext";

const Inquiry = () => {
  const { darkMode } = useDarkMode();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numRooms, setNumRooms] = useState(1);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [message, setMessage] = useState("");
  const fullText = "Enquire Now!";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    setTypedText("");
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`relative min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#f8f9fa] text-black"
      }`}
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-[400px] bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/enbg_1.jpg')" }}
      >
        <div className={`absolute inset-0 ${darkMode ? "bg-gray-900 opacity-70" : "bg-white opacity-50"}`}></div>
      </div>

      {/* Navbar */}
      <Navbar />
      <br />
      <br />
      <br />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-6xl mx-auto px-6 py-16"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-left text-[55px] md:text-[75px] font-extrabold leading-[1.1]"
        >
          GET IN TOUCH WITH US! <br />
          <span className="bg-gradient-to-r from-[#FF5733] via-[#EC2D70] to-[#8B0000] text-transparent bg-clip-text">
            {typedText}
          </span>
        </motion.h1>

        {/* Inquiry Form */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <p className="text-lg font-medium">
              <br />
              <br />
              <br />
              <br />
              <br />
              Experience the finest hospitality with our comfortable and luxurious rooms.
            </p>
            <p className="text-lg font-medium">For inquiries, contact us 24/7:</p>
            <p className={`text-xl font-bold flex items-center gap-2 ${darkMode ? "text-red-400" : "text-[#E63946]"}`}>
              📞 +91 98765 43210
            </p>
            <p className={`text-xl font-bold flex items-center gap-2 ${darkMode ? "text-red-400" : "text-[#E63946]"}`}>
              📞 +91 91234 56789
            </p>
          </div>

          {/* Inquiry Fields */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={`p-6 border-2 shadow-lg rounded-xl ${
              darkMode ? "border-gray-600 bg-gray-800 text-white shadow-gray-700" : "border-gray-300 bg-white text-black"
            }`}
          >
            <h2 className="text-lg font-semibold text-center mb-4">Fill in details</h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className={`px-4 py-2 rounded-lg border focus:outline-none ${
                  darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-transparent"
                }`}
              />

              <input
                type="email"
                placeholder="Email Address"
                className={`px-4 py-2 rounded-lg border focus:outline-none ${
                  darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-transparent"
                }`}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className={`px-4 py-2 rounded-lg border focus:outline-none ${
                  darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-transparent"
                }`}
              />

              {/* Date Pickers */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="text-sm">Check-in Date</label>
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    minDate={new Date()}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-transparent"
                    }`}
                    calendarClassName="custom-datepicker"
                  />
                </div>

                <div className="w-1/2">
                  <label className="text-sm">Check-out Date</label>
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    minDate={checkInDate ? new Date(checkInDate.getTime() + 86400000) : new Date()}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-transparent"
                    }`}
                    disabled={!checkInDate}
                    calendarClassName="custom-datepicker"
                  />
                </div>
              </div>

              {/* Message Box */}
              <textarea
                placeholder="Enter your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`px-4 py-2 rounded-lg border h-[100px] resize-none focus:outline-none ${
                  darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-transparent"
                }`}
              ></textarea>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-3 font-bold rounded-lg transition duration-300 ${
                  darkMode ? "bg-red-500 text-white hover:bg-red-600" : "bg-[#E63946] text-white hover:bg-[#C72F3C]"
                }`}
              >
                Submit Inquiry
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Inquiry;
