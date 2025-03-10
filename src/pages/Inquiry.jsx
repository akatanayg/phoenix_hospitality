import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";

const Inquiry = () => {
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

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image & Color */}
      <div
        className="absolute top-0 left-0 w-full h-[400px] bg-cover bg-center opacity-50 "
        style={{ backgroundImage: "url('/enbg_1.jpg')" }}
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>
      </div>

      {/* Background Color below Image */}
      <div className="absolute top-[400px] left-0 w-full h-full bg-[#f8f9fa]"></div>

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
        {/* Heading (not moved down) */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-left text-[55px] md:text-[75px] font-extrabold text-black leading-[1.1]"
        >
          GET IN TOUCH WITH US! <br />
          <span className="bg-gradient-to-r from-[#FF5733] via-[#EC2D70] to-[#8B0000] text-transparent bg-clip-text">
            {typedText}
          </span>
        </motion.h1>

        {/* Content moved down by 20px */}
        <div className="mt-10">
          {/* Inquiry Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {/* Contact Details */}
            <div className="flex flex-col gap-4 text-gray-700">
              <p className="text-lg font-medium">
                <br />
                <br />
                <br />
                <br />
                <br />
                Experience the finest hospitality with our comfortable and
                luxurious rooms.
              </p>
              <p className="text-lg font-medium">
                For inquiries, contact us 24/7:
              </p>
              <p className="text-xl font-bold text-[#E63946] flex items-center gap-2">
                📞 +91 98765 43210
              </p>
              <p className="text-xl font-bold text-[#E63946] flex items-center gap-2">
                📞 +91 91234 56789
              </p>
            </div>

            {/* Inquiry Fields */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="p-6 bg-white border-2 border-gray-300 shadow-lg rounded-xl"
            >
              <h2 className="text-lg font-semibold text-center mb-4 text-gray-800">
                Fill in details
              </h2>

              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:border-[#E63946] w-full bg-transparent"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:border-[#E63946] w-full bg-transparent"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:border-[#E63946] w-full bg-transparent"
                />

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="text-gray-600 text-sm">
                      Check-in Date
                    </label>
                    <DatePicker
                      selected={checkInDate}
                      onChange={(date) => setCheckInDate(date)}
                      minDate={new Date()}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-transparent"
                      calendarClassName="custom-datepicker"
                    />
                  </div>

                  <div className="w-1/2">
                    <label className="text-gray-600 text-sm">
                      Check-out Date
                    </label>
                    <DatePicker
                      selected={checkOutDate}
                      onChange={(date) => setCheckOutDate(date)}
                      minDate={
                        checkInDate
                          ? new Date(checkInDate.getTime() + 86400000)
                          : new Date()
                      }
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-transparent"
                      disabled={!checkInDate}
                      calendarClassName="custom-datepicker"
                    />
                  </div>
                </div>

                {/* Rooms & Guests */}
                <div className="flex justify-between gap-4">
                  {[
                    {
                      label: "Rooms",
                      state: numRooms,
                      setter: setNumRooms,
                      max: 5,
                    },
                    {
                      label: "Adults",
                      state: numAdults,
                      setter: setNumAdults,
                      max: 12,
                    },
                    {
                      label: "Children",
                      state: numChildren,
                      setter: setNumChildren,
                      max: 10,
                    },
                  ].map(({ label, state, setter, max }) => (
                    <div key={label} className="flex flex-col items-center">
                      <p className="text-sm text-gray-600">{label}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setter(state > 0 ? state - 1 : 0)}
                          className="px-2 py-1 bg-[#E63946] text-white rounded-full w-8 h-8 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold">{state}</span>
                        <button
                          onClick={() => setter(state < max ? state + 1 : max)}
                          className="px-2 py-1 bg-[#E63946] text-white rounded-full w-8 h-8 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <textarea
                  placeholder="Enter your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 h-[100px] resize-none bg-transparent"
                ></textarea>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-[#E63946] text-white font-bold rounded-lg hover:bg-[#C72F3C] transition duration-300"
                >
                  Submit Inquiry
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Inquiry;
