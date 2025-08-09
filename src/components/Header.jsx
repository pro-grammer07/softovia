import { useState } from "react";
import { styles } from "../styles";
import { Button } from "./Button";
import logo from "../assets/Vector.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full top-0 px-4 py-4 lg:px-8 sticky bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-4 cursor-pointer">
          <img src={logo} alt="Softovia Logo" className="h-12 w-16" />
          <span className="text-blue-500 text-3xl font-semibold tracking-wide">
            SOFTOVIA
          </span>
        </div>

        {/* Hamburger button (always visible on mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="w-10 h-1 bg-gray-800"></span>
          <span className="w-10 h-1 bg-gray-800"></span>
          <span className="w-10 h-1 bg-gray-800"></span>
        </button>

        {/* Nav links (desktop always shown, mobile toggled) */}
        <nav
          className={`
            ${menuOpen ? "hidden" : "flex"} 
            flex-col md:flex md:flex-row 
            absolute md:static top-full left-0 md:top-auto md:left-auto 
            w-full md:w-auto bg-white md:bg-transparent 
            shadow-md md:shadow-none 
            space-y-6 md:space-y-0 md:space-x-8 
            p-6 md:p-0
          `}
        >
          <span className={styles.navLinkText}>Our Work</span>
          <span className={styles.navLinkText}>Our Team</span>
          <Button variant="default" className="w-full md:w-40 h-12">
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
