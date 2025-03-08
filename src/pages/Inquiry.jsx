import React, { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";

const Inquiry = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const today = new Date();

  const isDateDisabled = (date) => date < today; // Disable past dates

  const handleDateChange = (date) => {
    if (!checkInDate || (checkInDate && checkOutDate)) {
      // If check-in is not set or both dates are set, reset selection
      setCheckInDate(date);
      setCheckOutDate(null);
    } else if (!checkOutDate && date > checkInDate) {
      // Allow check-out selection only after check-in
      setCheckOutDate(date);
    }
  };

  const handleClearDates = () => {
    setCheckInDate(null);
    setCheckOutDate(null);
  };

  return (
    <div className="bg-[#FAF1EB] min-h-screen flex flex-col">
      <Navbar />
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-left text-[60px] md:text-[100px] font-extrabold uppercase text-black tracking-[5px] leading-[1.1]"
        >
          Make <br /> An Enquiry
        </motion.h1>

        {/* Inquiry Sections */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-row gap-2 mt-10 max-w-[1200px] mx-auto"
        >
          {/* Left Section - Note & Phone Numbers */}
          <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <p className="text-lg font-medium text-gray-700">
              Feel free to reach out for inquiries or bookings.
            </p>
            <p className="text-xl font-bold text-[#E63946] mt-2">
              📞 +91 98765 43210
            </p>
            <p className="text-xl font-bold text-[#E63946]">📞 +91 91234 56789</p>
          </div>

          {/* Vertical Line Divider with Animation */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden md:block border-l-4 border-[#E63946] mx-2"
            style={{
              transformOrigin: "center center",
              transform: "scaleY(1)",
              height: "100%",
            }}
          ></motion.div>

          {/* Right Section (Input Fields) - Moved to the second column */}
          <div className="flex flex-col gap-4">
            {/* Check-in & Check-out */}
            <div className="flex flex-col gap-2">
              <DatePicker
                selected={checkInDate}
                onChange={handleDateChange}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={today}
                placeholderText="Select Check-in Date"
                className="px-4 py-2 rounded-lg border border-gray-400 text-center bg-transparent text-gray-700 w-full"
              />
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => {
                  if (checkInDate && date > checkInDate) {
                    setCheckOutDate(date);
                  }
                }}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate}
                placeholderText="Select Check-out Date"
                className="px-4 py-2 rounded-lg border border-gray-400 text-center bg-transparent text-gray-700 w-full"
              />
            </div>

            {/* Number of Rooms */}
            <motion.select
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="px-4 py-2 rounded-lg border border-gray-400 text-center bg-transparent text-gray-700"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Room{num > 1 ? "s" : ""}
                </option>
              ))}
            </motion.select>

            {/* Message Box */}
            <motion.textarea
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              placeholder="Enter your message..."
              className="px-4 py-2 rounded-lg border border-gray-400 bg-transparent text-gray-700 h-[100px] resize-none"
            ></motion.textarea>

            {/* Submit Button (Glowing Effect) */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 10px rgba(230, 57, 70, 0.8)",
              }}
              className="px-6 py-3 bg-[#E63946] text-white font-bold rounded-lg hover:bg-[#C72F3C] transition duration-300"
            >
              Submit Inquiry
            </motion.button>
          </div>

          {/* Middle Section (Calendar) - Moved to the third column */}
          <div className="relative flex flex-col items-center mt-[80px]">
            <div className="absolute top-0 right-0">
              <button
                onClick={handleClearDates}
                className="text-sm text-[#E63946] font-bold hover:underline"
              >
                Clear Dates
              </button>
            </div>
            <div className="custom-calendar transform translate-x-[-50px] scale-[1.2]">
              <DatePicker
                selected={checkInDate}
                onChange={handleDateChange}
                selectsRange={false}
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={today}
                highlightDates={
                  checkInDate && checkOutDate
                    ? [{ start: checkInDate, end: checkOutDate }]
                    : checkInDate
                    ? [checkInDate]
                    : []
                }
                filterDate={isDateDisabled}
                inline
                className="w-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Inquiry;
