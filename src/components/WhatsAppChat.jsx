import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Smooth Transitions
import { MessageCircle, Send, X } from "lucide-react"; // ✅ Icons
import { useDarkMode } from "../DarkModeContext"; // ✅ Dark Mode Support

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useDarkMode();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`${
              darkMode
                ? "bg-gray-900 bg-opacity-90 border-gray-700 text-white"
                : "bg-[#faf1eb] bg-opacity-90 border-gray-300 text-gray-900"
            } w-80 p-4 rounded-xl shadow-xl border backdrop-blur-md mb-3`} // ✅ Glassmorphism Effect
          >
            {/* Header Section */}
            <div className="flex justify-between items-center pb-3 border-b border-gray-500">
              <h3 className="text-lg font-semibold">Chat with Us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-red-500 transition-transform transform hover:scale-110"
              >
                <X size={20} />
              </button>
            </div>

            {/* Message Section */}
            <p className="text-sm mt-3">
              Reach out to our team on <span className="font-bold">WhatsApp</span>.
            </p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210" // ✅ Replace with actual number
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-transform transform hover:scale-105 shadow-md"
            >
              <Send className="mr-2" size={18} /> Chat Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button (Now stays on the right when open) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }} // ✅ Click Animation
        className="bg-red-600 hover:bg-red-700 text-white p-5 rounded-full shadow-lg transition-transform transform hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </motion.button>
    </div>
  );
}
