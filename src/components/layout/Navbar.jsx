import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
import logo from "../../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 bg-white shadow-sm",
        isScrolled ? "bg-white/90 backdrop-blur-md" : "bg-white",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="bg-white p-0.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="U Solar Logo"
              className="w-12 h-12 object-cover scale-150"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[1.25rem] font-bold text-green-800 tracking-wide font-sans group-hover:text-green-700 transition-colors duration-300">
              U Solar
            </span>
            <span className="text-xs font-normal text-green-600 tracking-[0.15em] uppercase">
              Janda Energy
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                cn(
                  "text-lg font-semibold transition-all hover:text-green-600 relative pb-1",
                  isActive
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-700",
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "font-bold text-xl py-3 border-b-2 transition-colors",
                  isActive
                    ? "text-green-600 border-green-600"
                    : "text-gray-700 border-gray-100",
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
