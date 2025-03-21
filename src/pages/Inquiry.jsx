import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";
import { useDarkMode } from "../DarkModeContext";
import { createClient } from "@supabase/supabase-js";

const Inquiry = () => {
  const { darkMode } = useDarkMode();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numRooms, setNumRooms] = useState(1);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const fullText = "Enquire Now!";

  const [typedText, setTypedText] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const supabaseUrl = "https://ggyhxnroyusijbjhcfap.supabase.co";
  const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdneWh4bnJveXVzaWpiamhjZmFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMTAwMjcsImV4cCI6MjA1NzY4NjAyN30.ayiA8ax3cj93dOXBBtj2sha0jnnjYPu4jM3DaTtPQxk";

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
  const maxWords = 300;
  const wordCount = message
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const handleMessageChange = (e) => {
    const words = e.target.value.trim().split(/\s+/);
    if (words.length <= maxWords) {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = async () => {
    // Basic validation
    let newErrors = {};
    if (!name) newErrors.name = "Full name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!phone) newErrors.phone = "Phone number is required.";
    if (!checkInDate) newErrors.checkInDate = "Check-in date is required.";
    if (!message) newErrors.message = "Message cannot be empty.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.from("inquiries").insert([
        {
          name,
          email,
          phone,
          checkInDate: checkInDate ? checkInDate.toISOString() : null,
          checkOutDate: checkOutDate ? checkOutDate.toISOString() : null,
          numRooms,
          numAdults,
          numChildren,
          message,
        },
      ]);

      if (error) {
        console.error("🚨 Error inserting data:", error);
        alert(`Error submitting inquiry: ${error.message}`);
      } else {
        console.log("✅ Inquiry submitted successfully!", data);
        setShowSuccessModal(true); // ✅ Show success modal
        setTimeout(() => setShowSuccessModal(false), 3000); // ✅ Hide after 3 sec

        // Clear form fields after submission
        setName("");
        setEmail("");
        setPhone("");
        setCheckInDate(null);
        setCheckOutDate(null);
        setNumRooms(1);
        setNumAdults(1);
        setNumChildren(0);
        setMessage("");
        setErrors({});
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        <div
          className={`absolute inset-0 ${
            darkMode ? "bg-gray-900 opacity-70" : "bg-white opacity-50"
          }`}
        ></div>
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
              Have questions or need assistance? We're here to help! Fill out
              the form below with your details, and our team will get back to
              you promptly. Whether you're looking for information about our
              accommodations, special packages, or planning an event, we’re just
              a message away.
            </p>
            <p className="text-lg font-medium">
              For inquiries, contact us 24/7:
            </p>
            <p
              className={`text-xl font-bold flex items-center gap-2 ${
                darkMode ? "text-red-400" : "text-[#E63946]"
              }`}
            >
              📞 +91 85868 77995
            </p>
            <p
              className={`text-xl font-bold flex items-center gap-2 ${
                darkMode ? "text-red-400" : "text-[#E63946]"
              }`}
            >
              📞 +91 96502 08395
            </p>
          </div>

          {/* Inquiry Fields */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={`p-6 border-2 shadow-lg rounded-xl ${
              darkMode
                ? "border-gray-600 bg-gray-800 text-white shadow-gray-700"
                : "border-gray-300 bg-white text-black"
            }`}
          >
            <h2 className="text-lg font-semibold text-center mb-4">
              Fill in details
            </h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => {
                  const value = e.target.value;
                  setName(value);

                  // ✅ Validate: Minimum 3 characters, only letters and spaces allowed
                  if (!/^[a-zA-Z\s]+$/.test(value)) {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      name: "Only letters are allowed.",
                    }));
                  } else if (value.length < 3) {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      name: "Name must be at least 3 characters long.",
                    }));
                  } else {
                    setErrors((prevErrors) => ({ ...prevErrors, name: "" })); // ✅ Clears error if valid
                  }
                }}
                onFocus={() =>
                  setErrors((prevErrors) => ({ ...prevErrors, name: "" }))
                } // ✅ Clears error on focus
                className={`px-4 py-2 rounded-lg border focus:outline-none ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300 bg-transparent"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);

                  // ✅ Validate: Basic email pattern check
                  const emailRegex =
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  if (!emailRegex.test(value)) {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      email: "Enter a valid email address.",
                    }));
                  } else {
                    setErrors((prevErrors) => ({ ...prevErrors, email: "" })); // ✅ Clears error if valid
                  }
                }}
                onFocus={() =>
                  setErrors((prevErrors) => ({ ...prevErrors, email: "" }))
                } // ✅ Clears error on focus
                className={`px-4 py-2 rounded-lg border focus:outline-none ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300 bg-transparent"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value;

                  // ✅ Allow only digits (0-9)
                  if (!/^\d*$/.test(value)) return; // Prevents non-numeric input

                  setPhone(value);

                  // ✅ Validate: Must be exactly 10 digits
                  if (value.length !== 10) {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      phone: "Phone number must be 10 digits.",
                    }));
                  } else {
                    setErrors((prevErrors) => ({ ...prevErrors, phone: "" })); // ✅ Clears error if valid
                  }
                }}
                onFocus={() =>
                  setErrors((prevErrors) => ({ ...prevErrors, phone: "" }))
                } // ✅ Clears error on focus
                className={`px-4 py-2 rounded-lg border focus:outline-none ${
                  darkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300 bg-transparent"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              {/* Date Pickers */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="text-sm">Check-in Date</label>
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    onFocus={() =>
                      setErrors((prevErrors) => ({
                        ...prevErrors,
                        checkInDate: "",
                      }))
                    }
                    minDate={new Date()}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      darkMode
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300 bg-transparent"
                    }`}
                    calendarClassName={darkMode ? "dark-datepicker" : ""} // ✅ Apply dark mode styles
                  />
                  {errors.checkInDate && (
                    <p className="text-red-500 text-sm">{errors.checkInDate}</p>
                  )}
                </div>

                <div className="w-1/2">
                  <label className="text-sm">Check-out Date</label>
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    minDate={
                      checkInDate
                        ? new Date(checkInDate.getTime() + 86400000)
                        : new Date()
                    }
                    className={`w-full px-4 py-2 rounded-lg border ${
                      darkMode
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-gray-300 bg-transparent"
                    }`}
                    disabled={!checkInDate}
                    calendarClassName={darkMode ? "dark-datepicker" : ""} // ✅ Apply dark mode styles
                  />
                  {errors.checkOutDate && (
                    <p className="text-red-500 text-sm">
                      {errors.checkOutDate}
                    </p>
                  )}
                </div>
              </div>

              {/* Rooms, Adults, Children Section (Horizontal Layout) */}
              <div className="flex justify-around items-center gap-6 mt-4">
                {[
                  {
                    label: "Rooms",
                    state: numRooms,
                    setter: setNumRooms,
                    min: 1,
                    max: 5,
                  },
                  {
                    label: "Adults",
                    state: numAdults,
                    setter: setNumAdults,
                    min: 1,
                    max: 10,
                  },
                  {
                    label: "Children",
                    state: numChildren,
                    setter: setNumChildren,
                    min: 0,
                    max: 5,
                  },
                ].map(({ label, state, setter, min, max }) => (
                  <div key={label} className="flex flex-col items-center">
                    <span className="text-md font-medium mb-2">{label}</span>
                    <span className="text-lg font-bold">{state}</span>
                    <div className="flex mt-2 gap-2">
                      <button
                        onClick={() => setter(state > min ? state - 1 : min)}
                        className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                      >
                        -
                      </button>
                      <button
                        onClick={() => setter(state < max ? state + 1 : max)}
                        className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Box with Word Count */}
              <div className="relative">
                <textarea
                  placeholder="Enter your message..."
                  value={message}
                  onChange={handleMessageChange}
                  onFocus={() =>
                    setErrors((prevErrors) => ({ ...prevErrors, message: "" }))
                  } // ✅ Clears error on focus
                  className={`px-4 py-2 rounded-lg border h-[100px] resize-none focus:outline-none w-full ${
                    darkMode
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300 bg-transparent"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}

                <span className="absolute bottom-2 right-3 text-xs text-gray-400">
                  {wordCount} / {maxWords} words
                </span>
              </div>
              {errors.form && (
                <p className="text-red-500 text-sm text-center">
                  {errors.form}
                </p>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleSubmit}
                disabled={loading}
                className={`px-6 py-3 font-bold rounded-lg transition duration-300 ${
                  darkMode
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-[#E63946] text-white hover:bg-[#C72F3C]"
                }`}
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black w-96 p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-xl font-bold">✅ Inquiry Submitted!</h2>
            <p className="text-gray-600 mt-3 text-lg">
              We'll get back to you soon.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Inquiry;
