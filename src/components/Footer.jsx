import React from "react";
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", hash: "home" },
  { name: "About", hash: "about" },
  { name: "Services", hash: "services" },
  { name: "Contact", hash: "contact" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-0.5 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={logo}
                  alt="U Solar Logo"
                  className="w-10 h-10 object-cover scale-150"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-yellow-500">
                U Solar <span className="text-sm font-semibold text-gray-400">Janda Energy</span>
              </span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Leading provider of end-to-end solar power solutions in Nepal,
              helping you transition to a sustainable future.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-500 hover:border-primary-500 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`/#${link.hash}`}
                    onClick={(e) => handleNavClick(e, link.hash)}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
              Office Details
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10 group-hover:text-primary-500 transition-colors shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="pt-2">
                  8th Floor, Trade Tower, Thapathali, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10 group-hover:text-primary-500 transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <a
                  href="mailto:Usolarjanda1234@gmail.com"
                  className="hover:text-primary-500 transition-colors"
                >
                  Usolarjanda1234@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10 group-hover:text-primary-500 transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href="tel:+977-01-5111032"
                  className="hover:text-primary-500 transition-colors"
                >
                  +977-01-5111032
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10 group-hover:text-primary-500 transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href="tel:+977-9844009664"
                  className="hover:text-primary-500 transition-colors"
                >
                  +977-9844009664
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} U Solar Janda Energy Pvt Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
