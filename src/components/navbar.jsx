import { useState } from "react";
import bg from "../assets/bg.svg";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // Optional: Use `lucide-react` icons or switch to SVGs

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="w-full max-w-[1944px] mx-auto px-4 sm:px-6 lg:px-12 py-4 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="AI Sellers Logo"
            className="h-[90px] w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 text-white font-poppins text-[16px] lg:text-[18px] font-bold">
          {["HOME", "SWIPE & TOOLS", "JV PAGE", "PRODUCT DEMO", "BONUS PAGE"].map(
            (link, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-purple-400 leading-[45px] text-center"
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="flex flex-col mt-4 gap-4 lg:hidden text-white font-poppins text-[16px] font-bold">
          {["HOME", "SWIPE & TOOLS", "JV PAGE", "PRODUCT DEMO", "BONUS PAGE"].map(
            (link, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-purple-400 text-center"
              >
                {link}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default NavBar;
