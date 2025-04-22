// components/Navbar.tsx
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent shadow-lg backdrop-blur-md py-4 px-8 z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Company Name */}
        <div className="text-3xl font-bold text-white tracking-wide">
          HireVerse
        </div>

        {/* Right: Navbar Links */}
        <div className="flex space-x-6 text-white font-medium">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-pink-400 transition duration-300"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="offerings"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-pink-400 transition duration-300"
          >
            About
          </ScrollLink>
          <Link
            to="/contact"
            className="cursor-pointer hover:text-pink-400 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="cursor-pointer hover:text-pink-400 transition duration-300"
          >
            LogIn
          </Link>
        </div>
      </div>
    </nav>
  );
};
