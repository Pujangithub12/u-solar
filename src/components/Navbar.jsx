import React, { useState, useEffect } from "react";
import { Menu, X, LogOut, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { cn } from "../utils/cn";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", hash: "home" },
  { name: "About", hash: "about" },
  { name: "Services", hash: "services" },
  { name: "Projects", hash: "projects" },
  { name: "Team", hash: "team" },
  { name: "Contact", hash: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isAdmin } = useAuth();

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 bg-white shadow-sm",
        isScrolled ? "bg-white/90 backdrop-blur-md" : "bg-white",
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
            <span className="text-[1.25rem] font-bold text-green-800 tracking-wide font-sans group-hover:text-green-700 transition-colors duration-300">
              U Solar
            </span>
            <span className="text-xs font-normal text-green-600 tracking-[0.15em] uppercase">
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
                "text-lg font-semibold transition-colors hover:text-green-600 text-gray-700",
              )}
            >
              {link.name}
            </a>
          ))}

          {/* Auth Button */}
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-100">
                <User size={16} />
                <span className="text-sm font-semibold">
                  {isAdmin ? "Admin" : "User"}
                </span>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-semibold transition-colors"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md active:scale-95"
            >
              Login
            </button>
          )}
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
            <a
              key={link.name}
              href={`/#${link.hash}`}
              onClick={(e) => handleNavClick(e, link.hash)}
              className="text-gray-700 font-bold text-xl py-3 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}

          {user ? (
            <button
              onClick={logout}
              className="flex items-center gap-3 text-red-600 font-bold text-xl py-4"
            >
              <LogOut size={24} />
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/login");
              }}
              className="flex items-center gap-3 text-green-600 font-bold text-xl py-4"
            >
              <User size={24} />
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
