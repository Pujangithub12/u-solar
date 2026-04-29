import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", hash: "home" },
  { name: "About", hash: "about" },
  { name: "Services", hash: "services" },
  { name: "Team", hash: "team" },
  { name: "Contact", hash: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === "/") {
      // Already on home page — just scroll to section
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // On a sub-page (e.g. /service/:slug) — navigate home then scroll
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-3 group"
        >
          <div className="bg-white p-0.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="U Solar Logo"
              className="w-12 h-12 object-cover scale-150"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-2xl tracking-tight text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]">
              U Solar
            </span>
            <span className="text-base font-semibold text-green-400">
              Janda Energy
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`/#${link.hash}`}
              onClick={(e) => handleNavClick(e, link.hash)}
              className={cn(
                "text-lg font-semibold transition-colors hover:text-primary-500",
                isScrolled ? "text-gray-700" : "text-white/95",
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg",
            isScrolled ? "text-gray-900" : "text-white",
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`/#${link.hash}`}
              onClick={(e) => handleNavClick(e, link.hash)}
              className="text-gray-700 font-bold text-xl py-3 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
