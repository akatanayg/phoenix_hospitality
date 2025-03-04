// import React, { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       const aboutSection = document.getElementById('about');
//       if (!aboutSection) return;
//       setScrolled(window.scrollY >= aboutSection.offsetTop - 75);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navBgClass = scrolled ? 'bg-black' : 'bg-black bg-opacity-30';
//   const linkColorClass = scrolled ? 'text-[#F17B00]' : 'text-white';
//   const submenuLinkColorClass = scrolled ? 'text-[#F17B00]' : 'text-white';

//   const svgIcon = (name) => (
//     <svg width="18" height="18" fill="#F17B00" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="9" cy="9" r="8" stroke="none" />
//       <text x="50%" y="50%" dy=".35em" textAnchor="middle" fontSize="12" fill="black">{name}</text>
//     </svg>
//   );

//   return (
//     <nav className={`w-full fixed top-0 left-0 z-50 h-[75px] flex items-center transition-all duration-300 ${navBgClass}`}>
//       <div className="container mx-auto flex justify-between items-center px-6 relative">
//         {/* Logo */}
//         <img src="/logo.png" alt="Logo" className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[100px] md:h-[230px] object-contain" />

//         {/* Desktop Links */}
//         <div className={`hidden md:flex flex-grow justify-center items-center space-x-6 text-lg font-medium ${linkColorClass}`}>
//           <a href="#home" className="hover:underline">Home</a>
//           <a href="#about" className="hover:underline">About Us</a>

//           {/* Rooms Dropdown */}
//           <div className="relative group">
//             <button className="hover:underline flex items-center gap-1">
//               Rooms <ChevronDown size={18} />
//             </button>
//             <div className="absolute hidden group-hover:block bg-black rounded-xl mt-1 shadow-xl overflow-hidden w-60">
//               <a href="#deluxe" className={`flex items-center gap-3 px-5 py-3 hover:bg-[#F17B00] hover:text-white ${submenuLinkColorClass}`}>
//                 {svgIcon('D')} Deluxe Room
//               </a>
//               <a href="#suite" className={`flex items-center gap-3 px-5 py-3 hover:bg-[#F17B00] hover:text-white ${submenuLinkColorClass}`}>
//                 {svgIcon('S')} Suite Room
//               </a>
//             </div>
//           </div>

//           <a href="#gallery" className="hover:underline">Gallery</a>

//           {/* Resources Dropdown */}
//           <div className="relative group">
//             <button className="hover:underline flex items-center gap-1">
//               Resources <ChevronDown size={18} />
//             </button>
//             <div className="absolute hidden group-hover:block bg-black rounded-xl mt-1 shadow-xl overflow-hidden w-72">
//               <a href="#faqs" className={`flex items-center gap-3 px-5 py-3 hover:bg-[#F17B00] hover:text-white ${submenuLinkColorClass}`}>
//                 {svgIcon('F')} FAQ's
//               </a>
//               <a href="#blogs" className={`flex items-center gap-3 px-5 py-3 hover:bg-[#F17B00] hover:text-white ${submenuLinkColorClass}`}>
//                 {svgIcon('B')} Blogs
//               </a>
//               <a href="#gallery" className={`flex items-center gap-3 px-5 py-3 hover:bg-[#F17B00] hover:text-white ${submenuLinkColorClass}`}>
//                 {svgIcon('G')} Gallery
//               </a>
//               <a href="#testimonials" className={`flex items-center gap-3 px-5 py-3 hover:bg-[#F17B00] hover:text-white ${submenuLinkColorClass}`}>
//                 {svgIcon('T')} Testimonials
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Contact Us */}
//         <a href="#contact" className={`hidden md:block text-lg font-medium hover:underline absolute ${linkColorClass}`}
//            style={{ right: '130px' }}>
//           Contact Us
//         </a>

//         {/* Mobile Menu Button (Right Aligned) */}
//         <button className="md:hidden z-50 absolute right-6 top-1/2 transform -translate-y-1/2" onClick={toggleMenu}>
//           {isOpen ? <X size={32} className="text-[#F17B00]" /> : <Menu size={32} className="text-[#F17B00]" />}
//         </button>
//       </div>

//       {/* Mobile Fullscreen Menu */}
//       <div className={`fixed inset-0 bg-black text-[#FFB067] z-40 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         {/* Close button (right aligned) */}
//         <div className="absolute top-6 right-6">
//           <button onClick={toggleMenu}><X size={36} className="text-[#F17B00]" /></button>
//         </div>

//         <div className="flex flex-col justify-start items-start h-full pt-20 pl-6 space-y-6">
//           <a href="#home" className="text-2xl flex items-center gap-3" onClick={toggleMenu}>
//             {svgIcon('H')} Home
//           </a>
//           <a href="#about" className="text-2xl flex items-center gap-3" onClick={toggleMenu}>
//             {svgIcon('A')} About Us
//           </a>
//           <p className="text-2xl">Rooms</p>
//           <div className="pl-6 space-y-3">
//             <a href="#deluxe" className="text-xl flex items-center gap-3" onClick={toggleMenu}>
//               {svgIcon('D')} Deluxe Room
//             </a>
//             <a href="#suite" className="text-xl flex items-center gap-3" onClick={toggleMenu}>
//               {svgIcon('S')} Suite Room
//             </a>
//           </div>
//           <a href="#gallery" className="text-2xl flex items-center gap-3" onClick={toggleMenu}>
//             {svgIcon('G')} Gallery
//           </a>
//           <p className="text-2xl">Resources</p>
//           <div className="pl-6 space-y-3">
//             <a href="#faqs" className="text-xl flex items-center gap-3" onClick={toggleMenu}>
//               {svgIcon('F')} FAQ's
//             </a>
//             <a href="#blogs" className="text-xl flex items-center gap-3" onClick={toggleMenu}>
//               {svgIcon('B')} Blogs
//             </a>
//             <a href="#gallery" className="text-xl flex items-center gap-3" onClick={toggleMenu}>
//               {svgIcon('G')} Gallery
//             </a>
//             <a href="#testimonials" className="text-xl flex items-center gap-3" onClick={toggleMenu}>
//               {svgIcon('T')} Testimonials
//             </a>
//           </div>
//           <a href="#contact" className="text-2xl flex items-center gap-3" onClick={toggleMenu}>
//             {svgIcon('C')} Contact Us
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    { name: "Deluxe Room", link: "#deluxe", icon: "deluxe" },
    { name: "Super Deluxe Room", link: "#super-deluxe", icon: "super" },
    { name: "Suite Room", link: "#suite", icon: "suite" },
  ];

  const resources = [
    { name: "FAQ's", link: "#faqs", icon: "faqs" },
    { name: "Blogs", link: "#blogs", icon: "blogs" },
    { name: "Testimonials", link: "#testimonials", icon: "testimonials" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 h-[75px] flex items-center bg-black">
      <div className="container mx-auto flex justify-between items-center px-6 relative">
        <img
          src="/logo.png"
          alt="Logo"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[100px] md:h-[230px] object-contain"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex flex-grow justify-center items-center space-x-[40px] text-lg font-medium text-[#F17B00] relative left-[60px]">
          {links.map(({ name, link }) => (
            <a key={name} href={link} className="group relative">
              {name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F17B00] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Rooms Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 group">
              Rooms <ChevronDown size={18} />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F17B00] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div className="absolute hidden group-hover:block bg-black rounded-xl mt-1 shadow-xl overflow-hidden w-60 text-[#F17B00]">
              {rooms.map(({ name, link, icon }) => (
                <a
                  key={name}
                  href={link}
                  className="flex items-center gap-3 px-6 py-4 hover:bg-[#F17B00] hover:text-black"
                >
                  {getIcon(icon)} {name}
                </a>
              ))}
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 group">
              Resources <ChevronDown size={18} />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F17B00] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div className="absolute hidden group-hover:block bg-black rounded-xl mt-1 shadow-xl overflow-hidden w-72 text-[#F17B00]">
              {resources.map(({ name, link, icon }) => (
                <a
                  key={name}
                  href={link}
                  className="flex items-center gap-3 px-6 py-4 hover:bg-[#F17B00] hover:text-black"
                >
                  {getIcon(icon)} {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Us Button */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-3 rounded-full bg-black border-2 border-[#F17B00] text-[#F17B00] font-bold uppercase tracking-wider hover:bg-[#F17B00] hover:text-white transition duration-300"
        >
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 absolute right-6 top-1/2 transform -translate-y-1/2"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X size={32} className="text-[#F17B00]" />
          ) : (
            <Menu size={32} className="text-[#F17B00]" />
          )}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-black text-[#F17B00] z-40 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-6 right-6">
          <button onClick={toggleMenu}>
            <X size={36} className="text-[#F17B00]" />
          </button>
        </div>

        <div className="flex flex-col justify-start items-start h-full pt-20 pl-6 space-y-6">
          {links.map(({ name, link, icon }) => (
            <a
              key={name}
              href={link}
              className="text-2xl flex items-center gap-3"
              onClick={toggleMenu}
            >
              {getIcon(icon)} {name}
            </a>
          ))}

          <p className="text-2xl">Rooms</p>
          <div className="pl-6 space-y-3">
            {rooms.map(({ name, link, icon }) => (
              <a
                key={name}
                href={link}
                className="text-xl flex items-center gap-3"
                onClick={toggleMenu}
              >
                {getIcon(icon)} {name}
              </a>
            ))}
          </div>

          <p className="text-2xl">Resources</p>
          <div className="pl-6 space-y-3">
            {resources.map(({ name, link, icon }) => (
              <a
                key={name}
                href={link}
                className="text-xl flex items-center gap-3"
                onClick={toggleMenu}
              >
                {getIcon(icon)} {name}
              </a>
            ))}
          </div>

          {/* Contact Us (no icon) */}
          <a
            href="#contact"
            className="text-2xl font-bold uppercase tracking-wider border-2 border-[#F17B00] px-6 py-3 rounded-full hover:bg-[#F17B00] hover:text-black transition duration-300"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
