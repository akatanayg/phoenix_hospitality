
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



import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-[#D35400] text-white shadow-md relative top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wider">
          <img src="/logo.png" alt="Logo" className="h-14 md:h-20 ml-2" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-lg ">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#rooms" className="hover:underline">Rooms</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#resources" className="hover:underline">Resources</a>
        </div>

        {/* Contact Us (Separately Aligned) */}
        <div className="hidden md:block text-lg  ml-8">
          <a href="#contact" className="hover:underline">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-[#D35400]">
          <a href="#home" className="block py-2 px-6 text-lg ">Home</a>
          <a href="#about" className="block py-2 px-6 text-lg ">About Us</a>
          <a href="#rooms" className="block py-2 px-6 text-lg " >Rooms</a>
          <a href="#gallery" className="block py-2 px-6 text-lg " >Gallery</a>
          <a href="#resources" className="block py-2 px-6 text-lg " >Resources</a>
          <a href="#contact" className="block py-2 px-6 text-lg " >Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
