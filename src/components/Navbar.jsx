import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';
import logo from '../assets/logo.png';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
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
              href={link.href}
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
              href={link.href}
              className="text-gray-700 font-bold text-xl py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
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
