import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getIcon = (name) => (
    <img
      src={`/public/${name}.svg`}
      alt={name}
      className="w-6 h-6"
      style={{
        filter:
          "invert(42%) sepia(96%) saturate(850%) hue-rotate(-10deg) brightness(103%) contrast(103%)",
      }}
    />
  );

  const links = [
    { name: "Home", link: "#home", icon: "home" },
    { name: "About Us", link: "#about", icon: "about" },
    { name: "Gallery", link: "#gallery", icon: "gallery" },
  ];

  const rooms = [
    { name: "Deluxe Room", link: "#deluxe", icon: "deluxe", subtext: "Comfort & elegance" },
    { name: "Super Deluxe Room", link: "#super-deluxe", icon: "super", subtext: "Luxury & style" },
    { name: "Suite Room", link: "#suite", icon: "suite", subtext: "Premium experience" },
  ];

  const resources = [
    { name: "FAQ's", link: "#faqs", icon: "faqs", subtext: "Frequently asked questions" },
    { name: "Blogs", link: "#blogs", icon: "blogs", subtext: "Our latest updates" },
    { name: "Testimonials", link: "#testimonials", icon: "testimonials", subtext: "What guests say" },
  ];

  const renderMegaMenu = (title, items) => (
    <div className="absolute left-[-150px] grid grid-cols-2 w-[500px] bg-transparent rounded-xl mt-2 backdrop-blur-lg bg-opacity-80 p-4 gap-4 border border-orange-500">
      <p className="col-span-2 font-bold text-lg text-orange-500 border-b border-orange-500 pb-2">
        {title}
      </p>
      {items.map(({ name, link, icon, subtext }) => (
        <a
          key={name}
          href={link}
          className="flex items-start gap-3 p-3 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-black transition duration-200"
        >
          {getIcon(icon)}
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-white group-hover:text-gray-400">{subtext}</p>
          </div>
        </a>
      ))}
    </div>
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 h-[90px] flex items-center bg-black">
      <div className="container mx-auto flex justify-between items-center px-6 relative">
        {/* Logo (Positioning logic based on screen size) */}
        <img
          src="/logo.png"
          alt="Logo"
          className="h-[60px] md:h-[120px] object-contain"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: isMobile ? "0px" : "30px",  // Mobile: flush left, Desktop: 30px from left
            marginLeft: isMobile ? "0px" : "0px",
          }}
        />

        {/* Desktop Links */}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-[40px] text-lg font-medium text-orange-500 relative left-[90px]">
          {links.map(({ name, link }) => (
            <a key={name} href={link} className="group relative">
              {name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Rooms Menu */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("rooms")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center gap-2 text-orange-500">
              Rooms
              <ChevronDown size={18} className={hoveredMenu === "rooms" ? "rotate-180" : ""} />
            </button>
            {hoveredMenu === "rooms" && renderMegaMenu("Explore Our Rooms", rooms)}
          </div>

          {/* Resources Menu */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("resources")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center gap-2 text-orange-500">
              Resources
              <ChevronDown size={18} className={hoveredMenu === "resources" ? "rotate-180" : ""} />
            </button>
            {hoveredMenu === "resources" && renderMegaMenu("Explore Our Resources", resources)}
          </div>
        </div>

        {/* Contact Button - Desktop */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-3 rounded-full bg-orange-500 border-2 border-orange-500 text-black font-bold uppercase tracking-wider hover:bg-[#F17B00] hover:text-white transition duration-300"
        >
          Contact Us
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 absolute right-6 top-1/2 transform -translate-y-1/2"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={32} className="text-orange-500" /> : <Menu size={32} className="text-orange-500" />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`fixed inset-0 bg-black text-orange-500 z-40 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-6 right-6">
          <button onClick={toggleMenu}>
            <X size={36} className="text-orange-500" />
          </button>
        </div>

        <div className="flex flex-col justify-start items-start h-full pt-20 pl-6 space-y-6">
          {links.map(({ name, link, icon }) => (
            <a key={name} href={link} className="text-2xl flex items-center gap-3" onClick={toggleMenu}>
              {getIcon(icon)} {name}
            </a>
          ))}

          <p className="text-2xl">Rooms</p>
          <div className="pl-6 space-y-3">
            {rooms.map(({ name, link, icon }) => (
              <a key={name} href={link} className="text-xl flex items-center gap-3" onClick={toggleMenu}>
                {getIcon(icon)} {name}
              </a>
            ))}
          </div>

          <p className="text-2xl">Resources</p>
          <div className="pl-6 space-y-3">
            {resources.map(({ name, link, icon }) => (
              <a key={name} href={link} className="text-xl flex items-center gap-3" onClick={toggleMenu}>
                {getIcon(icon)} {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
