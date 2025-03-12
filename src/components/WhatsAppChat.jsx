import { useState } from "react";
import { motion } from "framer-motion"; // ✅ For Animations
import { MessageCircle, Send } from "lucide-react"; // ✅ New Icons
import { useDarkMode } from "../DarkModeContext"; // ✅ Access Dark Mode

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useDarkMode(); // ✅ Get dark mode state

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Box */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className={`${
            darkMode ? "bg-gray-900 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
          } w-80 sm:w-64 p-4 rounded-xl shadow-xl border`}
        >
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
            >
              ✖
            </button>
          </div>
          <p className="text-sm mt-2">Chat with our team on WhatsApp</p>
          <a
            href="https://wa.me/919876543210" // ✅ Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-transform transform hover:scale-105"
          >
            <Send className="mr-2" size={20} /> {/* ✅ New icon added */}
            Phoenic Hospitality <br />
          </a>
        </motion.div>
      )}

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.8 }} // ✅ Click Animation
        className="bg-red-600 hover:bg-red-700 text-white p-5 rounded-full shadow-lg text-2xl transition-transform transform hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </motion.button>
    </div>
  );
}
