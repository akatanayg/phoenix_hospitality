import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaBed,
  FaBookOpen,
  FaQuestionCircle,
  FaImages,
  FaCommentDots,
  FaPenNib,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const menuLinks = [
    { label: "Home", href:"/" },
    { label: "About Us", href: "/AboutUs_light" },
    {
      label: "Rooms",
      submenu: [
        {
          icon: <FaBed />,
          title: "Deluxe Room",
          subtext: "Cozy and comfortable stay",
          link: "/DeluxeRoom_light",
        },
        {
          icon: <FaBed />,
          title: "Super Deluxe Room",
          subtext: "Luxury with elegance",
          link: "/SuperDeluxeRoom_light",
        },
        {
          icon: <FaBed />,
          title: "Suite Room",
          subtext: "Experience ultimate luxury",
          link: "/SuitRoom_light",
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
          link: "/faq", //
        },
        {
          icon: <FaCommentDots />,
          title: "Testimonials",
          subtext: "What our guests say",
          link: "/Testimonials_light",
        },
        {
          icon: <FaImages />,
          title: "Gallery",
          subtext: "See our property",
          link: "/Gallery_light",
        },
        {
          icon: <FaPenNib />,
          title: "Blogs",
          subtext: "Travel stories & tips",
          link: "/Blogs_light",
        },
      ],
    },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 h-[90px] bg-transparent z-50">
      {/* Logo */}
      <div
        className="h-[60px] flex items-center"
        style={{ marginLeft: "80px" }}
      >
        <img
          src="/logo.png"
          alt="Phoenix Logo"
          className="h-full object-contain"
        />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-10 text-black font-medium text-base tracking-wide">
        {menuLinks.map((link) => (
          <li key={link.label} className="relative group cursor-pointer">
            {link.submenu ? (
              <div className="group relative">
                <span className="cursor-pointer relative after:block after:h-[2px] after:w-full after:scale-x-0 after:bg-[#E63946] after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  {link.label}
                </span>
                {/* Submenu Dropdown */}
                <div className="absolute top-full left-0 w-[280px] bg-white shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="text-lg font-bold text-[#E63946] mb-2">
                    {link.label}
                  </h3>
                  {link.submenu.map((item, index) => (
                    <Link
                      key={index}
                      to={
                        item.link
                          ? item.link
                          : `#${item.title.replace(/\s+/g, "").toLowerCase()}`
                      }
                      className="flex items-center space-x-3 py-2 border-b last:border-none hover:bg-[#FAF1EB] transition duration-300"
                    >
                      <div className="text-[#E63946] text-xl">{item.icon}</div>
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.subtext}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <a
                href={link.href}
                className="relative after:block after:h-[2px] after:w-full after:scale-x-0 after:bg-[#E63946] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop Contact Button */}
      <button
        className="hidden md:block bg-[#E63946] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#d6303f] transition duration-300"
        style={{ marginRight: "20px" }}
      >
        Contact Us
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-3xl text-black">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#FAF1EB] flex flex-col justify-center items-center z-50">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 text-4xl text-[#E63946]"
          >
            <FaTimes />
          </button>

          <ul className="text-center space-y-8">
            {menuLinks.map((link) => (
              <li key={link.label} className="text-2xl font-bold text-black">
                {link.submenu ? (
                  <div className="flex flex-col items-center space-y-3">
                    <span className="text-[#E63946]">{link.label}</span>
                    <div className="space-y-2">
                      {link.submenu.map((item, index) => (
                        <Link
                          key={index}
                          to={
                            item.link
                              ? item.link
                              : `#${item.title
                                  .replace(/\s+/g, "")
                                  .toLowerCase()}`
                          }
                          className="flex items-center space-x-3 text-lg text-gray-700 hover:text-[#E63946] transition duration-300"
                          onClick={toggleMobileMenu}
                        >
                          <span className="text-[#E63946]">{item.icon}</span>
                          <div className="flex flex-col items-start">
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-500">
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
                    className="hover:text-[#E63946] transition duration-300"
                    onClick={toggleMobileMenu}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}

            {/* Contact Us Button (Mobile View) */}
            <li className="pt-6">
              <a
                href="#contact"
                className="bg-[#E63946] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#d6303f] transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
