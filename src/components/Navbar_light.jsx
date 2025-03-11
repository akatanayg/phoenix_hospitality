import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaBed,
  FaQuestionCircle,
  FaImages,
  FaCommentDots,
  FaPenNib,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/aboutus" },
    {
      label: "Rooms",
      submenu: [
        {
          icon: <FaBed />,
          title: "Deluxe Room",
          subtext: "Cozy and comfortable stay",
          link: "/deluxeroom",
        },
        {
          icon: <FaBed />,
          title: "Super Deluxe Room",
          subtext: "Luxury with elegance",
          link: "/superdeluxeroom",
        },
        {
          icon: <FaBed />,
          title: "Suite Room",
          subtext: "Experience ultimate luxury",
          link: "/suiteroom",
        },
      ],
    },
    {
      label: "Resources",
      submenu: [
        {
          icon: <FaQuestionCircle />,
          title: "FAQ's",
          subtext: "Frequently asked questions",
          link: "/faq",
        },
        {
          icon: <FaCommentDots />,
          title: "Testimonials",
          subtext: "What our guests say",
          link: "/testimonials",
        },
        {
          icon: <FaImages />,
          title: "Gallery",
          subtext: "See our property",
          link: "/gallery",
        },
        {
          icon: <FaPenNib />,
          title: "Blogs",
          subtext: "Travel stories & tips",
          link: "/blogs",
        },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 h-[90px] z-50 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#faf1eb] text-black"
      } ${isScrolled ? "shadow-md" : ""}`}
    >
      {/* Logo with Homepage Link */}
      <Link to="/" className="h-[75px] flex items-center md:ml-[80px]">
        <img
          src="/logo.png"
          alt="Phoenix Logo"
          className="h-full object-contain"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 font-medium text-base tracking-wide">
        {menuLinks.map((link) => (
          <li
            key={link.label}
            className="relative group cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {link.submenu ? (
              <div className="group relative">
                <span className="cursor-pointer relative hover:text-[#E63946] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#E63946] after:transition-all after:duration-300 group-hover:after:w-full">
                  {link.label}
                </span>
                <div
                  className={`absolute top-full left-0 w-[280px] shadow-lg rounded-lg p-4 hidden group-hover:block z-50 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-md bg-opacity-80 ${
                    darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                  }`}
                >
                  <h3 className="text-lg font-bold text-[#E63946] mb-2">
                    {link.label}
                  </h3>
                  {link.submenu.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center space-x-3 py-2 border-b last:border-none relative hover:text-[#E63946] transition-colors duration-300"
                    >
                      <div className="text-[#E63946] text-xl">{item.icon}</div>
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p
                          className={`text-xs ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {item.subtext}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <a
                href={link.href}
                className="relative hover:text-[#E63946] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#E63946] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle - Positioned 10px left of Contact Us */}
      <button
        onClick={toggleDarkMode}
        className="hidden md:flex items-center justify-between w-14 h-7 rounded-full transition-all duration-300 ease-in-out shadow-md hover:scale-105 active:scale-95
    bg-gray-300 dark:bg-gray-800 dark:shadow-yellow-400/30 relative mr-[-380px]"
      >
        {/* Toggle Ball */}
        <div
          className={`absolute top-[2px] left-[2px] w-6 h-6 flex items-center justify-center rounded-full shadow-md transform transition-all duration-300 ease-in-out
      ${
        darkMode
          ? "translate-x-full bg-yellow-400 text-gray-900 shadow-yellow-400/50 rotate-[360deg]"
          : "bg-white text-gray-600 shadow-gray-400/50 rotate-0"
      }`}
        >
          {darkMode ? <FaMoon size={14} /> : <FaSun size={14} />}
        </div>
      </button>

      {/* Contact Us Button */}
      <Link to="/inquiry" className="h-[60px] flex items-center md:ml-[80px]">
        <button
          className="hidden md:block bg-[#E63946] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#d6303f] transition duration-300"
          style={{ marginRight: "20px" }}
        >
          Contact Us
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        {/* Mobile Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`relative right-[35px] w-14 h-7 flex items-center rounded-full transition-all duration-300 ease-in-out shadow-md hover:scale-105 active:scale-95
    ${
      darkMode
        ? "bg-gray-700 shadow-yellow-400/30"
        : "bg-gradient-to-r from-gray-200 to-gray-300 shadow-gray-400/30"
    }
  `}
        >
          {/* Toggle Ball */}
          <div
            className={`absolute left-1 w-6 h-6 flex items-center justify-center rounded-full shadow-lg transform transition-all duration-300 ease-in-out
      ${
        darkMode
          ? "translate-x-7 bg-yellow-400 text-gray-900 shadow-yellow-400/50 rotate-[360deg]"
          : "bg-white text-gray-600 shadow-gray-400/50 rotate-0"
      }`}
          >
            {darkMode ? <FaMoon size={14} /> : <FaSun size={14} />}
          </div>
        </button>

        <button onClick={toggleMobileMenu} className="text-3xl">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full overflow-y-auto flex flex-col items-start p-8 z-50 ${
            darkMode ? "bg-gray-900 text-white" : "bg-[#FAF1EB] text-black"
          }`}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 text-4xl text-[#E63946]"
          >
            <FaTimes />
          </button>
          <ul className="space-y-5 w-full">
            {menuLinks.map((link) => (
              <li key={link.label} className="text-2xl font-bold pl-1">
                {link.submenu ? (
                  <>
                    <span className="block mb-2">{link.label}</span>
                    <ul className="space-y-4 pl-5">
                      {link.submenu.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.link}
                            className="flex flex-col items-start space-y-1 text-lg"
                            onClick={toggleMobileMenu}
                          >
                            <span className="text-xl text-[#E63946]">
                              {item.icon}
                            </span>
                            <span>{item.title}</span>
                            <span className="text-sm text-gray-400">
                              {item.subtext}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="hover:text-[#E63946]"
                    onClick={toggleMobileMenu}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Us Button in Mobile Menu */}
          <button
            onClick={toggleMobileMenu}
            className="mt-8 bg-[#E63946] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#d6303f] transition duration-300 w-full"
          >
            <Link to="/inquiry" className="w-full h-full flex justify-center">
              Contact Us
            </Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
