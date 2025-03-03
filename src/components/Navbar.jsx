
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


// import React, { useState } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleDropdownToggle = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   return (
//     <nav className="w-full bg-black text-[#F17B00] fixed top-0 left-0 z-50 h-[60px] flex items-center">
//       <div className="container mx-auto flex justify-between items-center px-6">
//         {/* Logo */}
//         <div className="text-2xl font-bold tracking-wider">
//           <img src="/logo.png" alt="Logo" className="h-12 md:h-16 ml-2" />
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-6 text-xl font-medium">
//           <a href="#home" className="hover:underline">Home</a>
//           <a href="#about" className="hover:underline">About Us</a>
          
//           <div className="relative group">
//             <a href="#rooms" className="hover:underline cursor-pointer">
//               Rooms
//             </a>
//             {/* Submenu for Rooms (on hover) */}
//             <div className="absolute left-0 top-full hidden group-hover:block bg-black text-[#F17B00] w-48 shadow-lg">
//               <a href="#deluxe" className="block px-4 py-2 hover:bg-[#F17B00] hover:text-black">Deluxe Room</a>
//               <a href="#suite" className="block px-4 py-2 hover:bg-[#F17B00] hover:text-black">Suite Room</a>
//             </div>
//           </div>

//           <a href="#gallery" className="hover:underline">Gallery</a>

//           <div className="relative group">
//             <a href="#resources" className="hover:underline cursor-pointer">
//               Resources
//             </a>
//             {/* Submenu for Resources (on hover) */}
//             <div className="absolute left-0 top-full hidden group-hover:block bg-black text-[#F17B00] w-48 shadow-lg">
//               <a href="#faqs" className="block px-4 py-2 hover:bg-[#F17B00] hover:text-black">FAQ's</a>
//               <a href="#blogs" className="block px-4 py-2 hover:bg-[#F17B00] hover:text-black">Blogs</a>
//               <a href="#gallery" className="block px-4 py-2 hover:bg-[#F17B00] hover:text-black">Gallery</a>
//               <a href="#testimonials" className="block px-4 py-2 hover:bg-[#F17B00] hover:text-black">Testimonials</a>
//             </div>
//           </div>
//         </div>

//         {/* Contact Us */}
//         <div className="hidden md:block text-xl font-medium">
//           <a href="#contact" className="hover:underline">Contact Us</a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={toggleMenu}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Full Screen Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-full bg-black text-[#F17B00] transition-transform duration-500 ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         } flex flex-col justify-center items-center space-y-4 text-xl font-medium z-40`}
//       >
//         <a href="#home" className="py-3 w-full text-center border-b border-[#F17B00]" onClick={toggleMenu}>Home</a>
//         <a href="#about" className="py-3 w-full text-center border-b border-[#F17B00]" onClick={toggleMenu}>About Us</a>

//         {/* Rooms with Dropdown */}
//         <div className="w-full">
//           <div
//             className="py-3 w-full text-center border-b border-[#F17B00] flex justify-center items-center gap-2 cursor-pointer"
//             onClick={() => handleDropdownToggle('rooms')}
//           >
//             Rooms <ChevronDown size={20} />
//           </div>
//           {activeDropdown === 'rooms' && (
//             <div className="flex flex-col bg-black">
//               <a href="#deluxe" className="py-2 border-b border-[#F17B00]" onClick={toggleMenu}>Deluxe Room</a>
//               <a href="#suite" className="py-2 border-b border-[#F17B00]" onClick={toggleMenu}>Suite Room</a>
//             </div>
//           )}
//         </div>

//         <a href="#gallery" className="py-3 w-full text-center border-b border-[#F17B00]" onClick={toggleMenu}>Gallery</a>

//         {/* Resources with Dropdown */}
//         <div className="w-full">
//           <div
//             className="py-3 w-full text-center border-b border-[#F17B00] flex justify-center items-center gap-2 cursor-pointer"
//             onClick={() => handleDropdownToggle('resources')}
//           >
//             Resources <ChevronDown size={20} />
//           </div>
//           {activeDropdown === 'resources' && (
//             <div className="flex flex-col bg-black">
//               <a href="#faqs" className="py-2 border-b border-[#F17B00]" onClick={toggleMenu}>FAQ's</a>
//               <a href="#blogs" className="py-2 border-b border-[#F17B00]" onClick={toggleMenu}>Blogs</a>
//               <a href="#gallery" className="py-2 border-b border-[#F17B00]" onClick={toggleMenu}>Gallery</a>
//               <a href="#testimonials" className="py-2 border-b border-[#F17B00]" onClick={toggleMenu}>Testimonials</a>
//             </div>
//           )}
//         </div>

//         <a href="#contact" className="py-3 w-full text-center border-b border-[#F17B00]" onClick={toggleMenu}>Contact Us</a>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const icons = {
    home: '/icons/home.png',
    about: '/icons/about.png',
    deluxe: '/icons/bed.png',
    suite: '/icons/bed.png',
    gallery: '/icons/gallery.png',
    contact: '/icons/contact.png',
    faqs: '/icons/faq.png',
    blogs: '/icons/blog.png',
    testimonials: '/icons/review.png'
  };

  return (
    <nav className="w-full bg-black text-[#F17B00] fixed top-0 left-0 z-50 h-[70px] flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo - Bigger without stretching navbar */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-[60px] md:h-[70px] object-contain" />
        </div>

        {/* Desktop Links - Evenly distributed */}
        <div className="hidden md:flex justify-between items-center flex-grow text-xl font-medium">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About Us</a>

          {/* Rooms Dropdown */}
          <div className="relative group">
            <button className="hover:underline flex items-center gap-1">
              Rooms <ChevronDown size={18} />
            </button>
            <div className="absolute hidden group-hover:block bg-black rounded-xl mt-1 shadow-xl overflow-hidden">
              <a href="#deluxe" className="flex items-center gap-3 px-6 py-3 hover:bg-[#F17B00] hover:text-white">
                <img src={icons.deluxe} alt="Deluxe" className="h-5 w-5" /> Deluxe Room
              </a>
              <a href="#suite" className="flex items-center gap-3 px-6 py-3 hover:bg-[#F17B00] hover:text-white">
                <img src={icons.suite} alt="Suite" className="h-5 w-5" /> Suite Room
              </a>
            </div>
          </div>

          <a href="#gallery" className="hover:underline">Gallery</a>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="hover:underline flex items-center gap-1">
              Resources <ChevronDown size={18} />
            </button>
            <div className="absolute hidden group-hover:block bg-black rounded-xl mt-1 shadow-xl overflow-hidden">
              <a href="#faqs" className="flex items-center gap-3 px-6 py-3 hover:bg-[#F17B00] hover:text-white">
                <img src={icons.faqs} alt="FAQs" className="h-5 w-5" /> FAQ's
              </a>
              <a href="#blogs" className="flex items-center gap-3 px-6 py-3 hover:bg-[#F17B00] hover:text-white">
                <img src={icons.blogs} alt="Blogs" className="h-5 w-5" /> Blogs
              </a>
              <a href="#gallery" className="flex items-center gap-3 px-6 py-3 hover:bg-[#F17B00] hover:text-white">
                <img src={icons.gallery} alt="Gallery" className="h-5 w-5" /> Gallery
              </a>
              <a href="#testimonials" className="flex items-center gap-3 px-6 py-3 hover:bg-[#F17B00] hover:text-white">
                <img src={icons.testimonials} alt="Testimonials" className="h-5 w-5" /> Testimonials
              </a>
            </div>
          </div>

          {/* Contact - Slightly shifted left */}
          <a href="#contact" className="hover:underline ml-6">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 bg-black text-[#FFB067] z-40 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col justify-start items-start h-full p-6 pt-20 space-y-6">
          <a href="#home" className="flex items-center gap-3 text-2xl" onClick={() => setIsOpen(false)}>
            <img src={icons.home} alt="Home" className="h-6 w-6" /> Home
          </a>
          <a href="#about" className="flex items-center gap-3 text-2xl" onClick={() => setIsOpen(false)}>
            <img src={icons.about} alt="About Us" className="h-6 w-6" /> About Us
          </a>

          {/* Rooms Dropdown for Mobile */}
          <div className="w-full">
            <p className="text-2xl">Rooms</p>
            <div className="mt-2 pl-6 space-y-3">
              <a href="#deluxe" className="flex items-center gap-3 text-xl" onClick={() => setIsOpen(false)}>
                <img src={icons.deluxe} alt="Deluxe" className="h-5 w-5" /> Deluxe Room
              </a>
              <a href="#suite" className="flex items-center gap-3 text-xl" onClick={() => setIsOpen(false)}>
                <img src={icons.suite} alt="Suite" className="h-5 w-5" /> Suite Room
              </a>
            </div>
          </div>

          <a href="#gallery" className="flex items-center gap-3 text-2xl" onClick={() => setIsOpen(false)}>
            <img src={icons.gallery} alt="Gallery" className="h-6 w-6" /> Gallery
          </a>

          {/* Resources Dropdown for Mobile */}
          <div className="w-full">
            <p className="text-2xl">Resources</p>
            <div className="mt-2 pl-6 space-y-3">
              <a href="#faqs" className="flex items-center gap-3 text-xl" onClick={() => setIsOpen(false)}>
                <img src={icons.faqs} alt="FAQs" className="h-5 w-5" /> FAQ's
              </a>
              <a href="#blogs" className="flex items-center gap-3 text-xl" onClick={() => setIsOpen(false)}>
                <img src={icons.blogs} alt="Blogs" className="h-5 w-5" /> Blogs
              </a>
              <a href="#gallery" className="flex items-center gap-3 text-xl" onClick={() => setIsOpen(false)}>
                <img src={icons.gallery} alt="Gallery" className="h-5 w-5" /> Gallery
              </a>
              <a href="#testimonials" className="flex items-center gap-3 text-xl" onClick={() => setIsOpen(false)}>
                <img src={icons.testimonials} alt="Testimonials" className="h-5 w-5" /> Testimonials
              </a>
            </div>
          </div>

          <a href="#contact" className="flex items-center gap-3 text-2xl" onClick={() => setIsOpen(false)}>
            <img src={icons.contact} alt="Contact Us" className="h-6 w-6" /> Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
