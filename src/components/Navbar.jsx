
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => (
  <nav className="w-full bg-transparent fixed top-0 ">
    <div className="flex justify-between items-center px-8 py-4">
      <div className="space-x-6 hidden md:flex">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <img src={logo} alt="Logo" className="h-12" />
      <div className="md:hidden">☰</div>
    </div>
  </nav>
);

export default Navbar;
            