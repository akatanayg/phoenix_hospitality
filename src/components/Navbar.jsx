import React from "react";
const Navbar = () => (
  <nav className="bg-transparent absolute top-0 left-0 w-full z-50">
    <div className="grid grid-cols-3 items-center w-full px-10 py-4">

    <div className="ml-8 flex-shrink-0"> 
          <img src="/logo.png" alt="Logo" className="h-20" />
        </div>

      <div className="flex-1 flex justify-center space-x-14 text-black font-bold text-lg style={{ fontFamily: 'Poppins, sans-serif' }}">
      <a href="/" className="hover: class-white">
          Home
        </a>
        <a href="/about" className="hover:text-gray-300 whitespace-nowrap">
          About Us
        </a>
        <a href="/rooms" className="hover:text-gray-300">
          Rooms
        </a>
      <a href="/gallery" className="hover:text-gray-300">
          Gallery
        </a>
        <a href="/resources" className="hover:text-gray-300">
          Resources
        </a>
      </div>
      <div className="ml-auto mr-10" >
          <a href="#" className="text-black font-bold text-2xl text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</a>
        </div>
      
    </div>
  </nav>
);

export default Navbar;
