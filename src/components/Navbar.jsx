import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="grid grid-cols-3 items-center w-full px-10 py-4">
        <div className="ml-6 flex-shrink-0">
          <img src="/logo.png" alt="Logo" className="h-24 w-auto" />
        </div>

        <div
          className="flex-1 flex justify-center space-x-14 text-black text-lg"
          style={{ fontFamily: "'Averia Serif Libre', serif" }}
        >
          <a href="/" className="hover: class-white">
            Home
          </a>
          <a href="/about" className="hover:text-white-300 whitespace-nowrap">
            About Us
          </a>
          <a href="/rooms" className="hover:text-white-300">
            Rooms
          </a>
          <a href="/gallery" className="hover:text-white-300">
            Gallery
          </a>
          <a href="/resources" className="hover:text-white-300">
            Resources
          </a>
        </div>
        <div className="ml-auto mr-10">
          <a
            href="#"
            className="text-black text-2xl text-lg hover:text-white-300"
            style={{ fontFamily: "'Averia Serif Libre', serif" }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
