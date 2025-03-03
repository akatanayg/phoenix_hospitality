
// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     return (
//         <nav className="w-full flex justify-between items-center px-4 md:px-8 lg:px-16 py-4 absolute top-0 left-0 z-50 text-white">
//             {/* Logo */}
//             <img src="/logo.png" alt="Logo" className="h-14 md:h-20 ml-2" />

//             {/* Desktop Links */}
//             <div className="hidden md:flex flex-1 justify-center space-x-8 text-lg">
//                 <a href="#">Home</a>
//                 <a href="#">About Us</a>
//                 <a href="#">Rooms</a>
//                 <a href="#">Gallery</a>
//                 <a href="#">Resources</a>
//             </div>

//             {/* Contact Us */}
//             <div className="hidden md:block">
//                 <a href="#" className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
//                     Contact Us
//                 </a>
//             </div>

//             {/* Mobile Menu Button */}
//             <button className="md:hidden" onClick={toggleMenu}>
//                 {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>

//             {/* Mobile Menu Drawer */}
//             <div className={`fixed top-0 left-0 h-full w-3/4 bg-black text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}>
//                 <div className="flex justify-end p-4">
//                     <button onClick={toggleMenu}><X size={28} /></button>
//                 </div>
//                 <nav className="flex flex-col space-y-6 text-lg mt-8 px-6">
//                     <a href="#" onClick={toggleMenu}>Home</a>
//                     <a href="#" onClick={toggleMenu}>About Us</a>
//                     <a href="#" onClick={toggleMenu}>Rooms</a>
//                     <a href="#" onClick={toggleMenu}>Gallery</a>
//                     <a href="#" onClick={toggleMenu}>Resources</a>
//                     <a href="#" className="mt-6 px-4 py-2 border border-white rounded-lg text-center" onClick={toggleMenu}>
//                         Contact Us
//                     </a>
//                 </nav>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="w-full bg-black text-[#F17B00] fixed top-0 left-0 z-50">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <div className="text-3xl font-bold tracking-wider">
//           <img src="/logo.png" alt="Logo" className="h-14 md:h-20 ml-2" />
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-8 text-lg ">
//           <a href="#home" className="hover:underline">Home</a>
//           <a href="#about" className="hover:underline">About Us</a>
//           <a href="#rooms" className="hover:underline">Rooms</a>
//           <a href="#gallery" className="hover:underline">Gallery</a>
//           <a href="#resources" className="hover:underline">Resources</a>
//         </div>

//         {/* Contact Us (Separately Aligned) */}
//         <div className="hidden md:block text-lg  ml-8">
//           <a href="#contact" className="hover:underline">Contact Us</a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={toggleMenu}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Links */}
//       {isOpen && (
//         <div className="md:hidden bg-[#D35400]">
//           <a href="#home" className="block py-2 px-6 text-lg ">Home</a>
//           <a href="#about" className="block py-2 px-6 text-lg ">About Us</a>
//           <a href="#rooms" className="block py-2 px-6 text-lg " >Rooms</a>
//           <a href="#gallery" className="block py-2 px-6 text-lg " >Gallery</a>
//           <a href="#resources" className="block py-2 px-6 text-lg " >Resources</a>
//           <a href="#contact" className="block py-2 px-6 text-lg " >Contact Us</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;

      const aboutTop = aboutSection.offsetTop;
      if (window.scrollY >= aboutTop - 75) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBgClass = scrolled ? 'bg-black' : 'bg-transparent';

  return (
    <nav className={`w-full text-[#F17B00] fixed top-0 left-0 z-50 h-[75px] flex items-center transition-all duration-300 ${navBgClass}`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <img src="/logo.png" alt="Logo" className="h-[65px] md:h-[75px] object-contain" />

        <div className="hidden md:flex flex-grow justify-center items-center space-x-6 text-lg font-medium">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About Us</a>
          <div className="relative group">
            <button className="hover:underline flex items-center gap-1">Rooms <ChevronDown size={18} /></button>
            <div className="absolute hidden group-hover:block bg-black rounded-xl mt-1 shadow-xl overflow-hidden">
              <a href="#deluxe" className="flex items-center gap-3 px-5 py-3 hover:bg-[#F17B00] hover:text-white">Deluxe Room</a>
              <a href="#suite" className="flex items-center gap-3 px-5 py-3 hover:bg-[#F17B00] hover:text-white">Suite Room</a>
            </div>
          </div>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <div className="relative group">
            <button className="hover:underline flex items-center gap-1">Resources <ChevronDown size={18} /></button>
            <div className="absolute hidden group-hover:block bg-black rounded-xl mt-1 shadow-xl overflow-hidden">
              <a href="#faqs" className="flex items-center gap-3 px-5 py-3 hover:bg-[#F17B00] hover:text-white">FAQ's</a>
              <a href="#blogs" className="flex items-center gap-3 px-5 py-3 hover:bg-[#F17B00] hover:text-white">Blogs</a>
              <a href="#gallery" className="flex items-center gap-3 px-5 py-3 hover:bg-[#F17B00] hover:text-white">Gallery</a>
              <a href="#testimonials" className="flex items-center gap-3 px-5 py-3 hover:bg-[#F17B00] hover:text-white">Testimonials</a>
            </div>
          </div>
        </div>

        <a href="#contact" className="hidden md:block text-lg font-medium hover:underline absolute right-[30px]">Contact Us</a>

        <button className="md:hidden z-50" onClick={toggleMenu}>
          {isOpen ? <X size={32} className="text-[#F17B00]" /> : <Menu size={32} className="text-[#F17B00]" />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 bg-black text-[#FFB067] z-40 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute top-6 right-6">
          <button onClick={toggleMenu}><X size={36} className="text-[#F17B00]" /></button>
        </div>
        <div className="flex flex-col justify-start items-start h-full pt-20 pl-6 space-y-6">
          <a href="#home" className="text-2xl" onClick={toggleMenu}>Home</a>
          <a href="#about" className="text-2xl" onClick={toggleMenu}>About Us</a>
          <p className="text-2xl">Rooms</p>
          <div className="pl-6 space-y-3">
            <a href="#deluxe" className="text-xl" onClick={toggleMenu}>Deluxe Room</a>
            <a href="#suite" className="text-xl" onClick={toggleMenu}>Suite Room</a>
          </div>
          <a href="#gallery" className="text-2xl" onClick={toggleMenu}>Gallery</a>
          <p className="text-2xl">Resources</p>
          <div className="pl-6 space-y-3">
            <a href="#faqs" className="text-xl" onClick={toggleMenu}>FAQ's</a>
            <a href="#blogs" className="text-xl" onClick={toggleMenu}>Blogs</a>
            <a href="#gallery" className="text-xl" onClick={toggleMenu}>Gallery</a>
            <a href="#testimonials" className="text-xl" onClick={toggleMenu}>Testimonials</a>
          </div>
          <a href="#contact" className="text-2xl" onClick={toggleMenu}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
