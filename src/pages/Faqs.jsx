import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar_light";
import Footer from "../components/Footer_light";

const faqs = [
  {
    question: "What amenities are included in the villa?",
    answer:
      "The villa includes a private pool, fully-equipped kitchen, spacious living areas, WiFi, and daily housekeeping services.",
  },
  {
    question: "Can I book the entire villa for private events?",
    answer:
      "Yes, you can book the entire villa for events like family gatherings, corporate retreats, and celebrations.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in is from 3 PM onwards, and check-out is by 11 AM. Early check-in and late check-out are subject to availability.",
  },
  {
    question: "Is breakfast included in the stay?",
    answer: "Breakfast can be arranged upon request at an additional cost.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellations made at least 7 days before arrival will receive a full refund. Cancellations made within 7 days will be partially refunded.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FAF1EB] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar /> <br /><br />

      {/* FAQ Content */}
      <div className="flex flex-col items-center p-6 md:p-12 flex-grow">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[100px] leading-[107px] font-black uppercase text-black text-center tracking-[5px] mb-6"
        >
          PHOENIX <br /> hospitality
        </motion.h1>

        {/* Subtext */}
        <p className="text-xl font-semibold text-[#E63946] text-center max-w-2xl">
          Everything you need to know before booking your stay.
        </p>

        {/* FAQs Section */}
        <div className="mt-10 max-w-4xl w-full space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center py-4 text-lg font-semibold text-[#333333] transition"
              >
                {faq.question}
                <span className="text-[#E63946]">{openIndex === index ? "-" : "+"}</span>
              </button>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={openIndex === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#555] text-base"
              >
                {faq.answer}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQPage;
