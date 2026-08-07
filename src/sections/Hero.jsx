import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Zap } from "lucide-react";
import heroBg1 from "../assets/shared-img/image-4.jpeg";
import heroBg2 from "../assets/shared-img/image-5.jpeg";
import heroBg3 from "../assets/shared-img/image-6.jpeg";

const backgroundImages = [heroBg1, heroBg2, heroBg3];

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "99%", label: "System Uptime" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[650px] flex items-center pt-32 pb-12 overflow-hidden bg-slate-950"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Hero Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Green-tinted overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/50 to-green-950/20" />
        <div className="absolute inset-0 bg-primary-950/10" />
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary-400 w-8"
                : "bg-white/40 hover:bg-white/70 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-400/20 backdrop-blur px-4 py-2 rounded-full text-amber-300 text-sm font-semibold mb-8">
            <Sun className="w-4 h-4" />
            <span>Nepal's Trusted Solar Energy Partner</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.05] mb-6">
            Harness the{" "}
            <span className="bg-gradient-to-r from-primary-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Power of the Sun
            </span>
          </h1>

          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            U Solar designs, builds, and maintains end-to-end solar power
            systems for homes, businesses, and utility-scale projects across
            Nepal — cutting energy costs while powering a cleaner future.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-primary-600 to-emerald-600 hover:from-primary-500 hover:to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-primary-900/40 transition-all"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="border border-white/15 hover:border-white/30 hover:bg-white/5 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all"
            >
              View Our Projects
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-primary-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating stat card */}
        <div className="hidden lg:flex absolute bottom-0 right-6 bg-white rounded-2xl shadow-2xl p-5 items-center gap-4 w-64">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-emerald-600 flex items-center justify-center text-white shrink-0">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">
              50+ MWp
            </div>
            <div className="text-slate-500 text-sm">Installed Capacity</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
