import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";
import { useDarkMode } from "../DarkModeContext";

const faqs = [
  {
    question: "How do I book a room?",
    answer:
      "You can book a room by directly contacting us at [+91 number] or by sending an inquiry through our website. Our team will be happy to assist you with your booking.",
  },
  {
    question: "Is there a gym or fitness center?",
    answer:
      "Yes, we provide a fully equipped gym for our guests.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in is typically at 12 PM, and check-out is at 11 AM. However, we can accommodate early check-in or late check-out based on availability.",
  },
  {
    question: "Is breakfast included in the stay?",
    answer: "Breakfast can be arranged upon request at an additional cost.",
  },
  {
    question: "Do you offer any special packages or discounts?",
    answer:
      "Yes, we offer special packages for corporate bookings and events. Please contact us directly to inquire about our customized offers and discounts tailored to your needs.",
  },
];

const FAQPage = () => {
  const { darkMode } = useDarkMode();
  const [openIndex, setOpenIndex] = useState(null);
  const [typedText, setTypedText] = useState("");
  const typingText = "Questions!";
  const typingSpeed = 100; // Speed of typing effect (milliseconds per letter)

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(typingText.slice(0, index));
      index++;
      if (index > typingText.length) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#FAF1EB] text-black"
      }`}
    >
      {/* Navbar */}
      <Navbar /> <br />
      <br />

      {/* FAQ Content */}
      <div className="flex flex-col items-center p-6 md:p-12 flex-grow">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[50px] font-black text-center mb-6"
          style={{ fontFamily: "sans-serif" }}
        >
          Frequently asked <br />
          <span
            style={{
              background:
                "linear-gradient(to right, #FF5733,rgb(236, 45, 112), #8B0000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            {typedText}
          </span>
        </motion.h1>

        {/* Subtext */}
        <p
          className={`text-xl font-semibold text-center max-w-2xl ${
            darkMode ? "text-red-400" : "text-[#E63946]"
          }`}
        >
          Everything you need to know before booking your stay.
        </p>

        {/* FAQs Section */}
        <div className="mt-10 max-w-4xl w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`border-b pb-4 ${
                darkMode ? "border-gray-600" : "border-gray-300"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left flex justify-between items-center py-4 text-lg font-semibold transition ${
                  darkMode ? "text-white" : "text-[#333333]"
                }`}
              >
                {faq.question}
                <span className={darkMode ? "text-red-400" : "text-[#E63946]"}>
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={
                  openIndex === index
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.3 }}
                className={`text-base ${
                  darkMode ? "text-gray-300" : "text-[#555]"
                }`}
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQPage;
