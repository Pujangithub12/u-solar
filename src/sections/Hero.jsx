import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import heroBg from "../assets/image-6.jpeg";
import heroSmallImg from "../assets/image-4.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-950/40 backdrop-brightness-75"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="pt-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 px-4 py-2 rounded-full text-yellow-400 text-sm font-bold mb-8 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
            <Zap className="w-4 h-4 fill-current" />
            <span>Powering a Greener Future</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Switch to <span className="text-primary-500">Solar Energy</span>{" "}
            Today
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 leading-relaxed font-light">
            U Solar is a renewable energy company focused on providing
            end-to-end solar power solutions for residential, commercial, and
            industrial clients. The company specializes in converting
            conventional electricity systems into sustainable solar energy
            systems, helping reduce energy costs and environmental impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href="#contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
            >
              Consultation Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-2xl border-t border-white/10 pt-4 mb-8">
            <div className="flex flex-col items-start">
              <div className="text-3xl font-bold text-yellow-400 mb-1 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">
                100+
              </div>
              <div className="text-gray-400 text-sm">Projects Done</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-3xl font-bold text-yellow-400 mb-1 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">
                50+
              </div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-3xl font-bold text-yellow-400 mb-1 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">
                99%
              </div>
              <div className="text-gray-400 text-sm">Efficiency</div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square w-full max-w-[450px] border-2 border-yellow-400/50 shadow-yellow-400/20">
            <img
              src={heroSmallImg}
              alt="Solar Panels Installation"
              className="w-full h-full object-cover"
            />
            {/* Inner Glow Overlay */}
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_rgba(250,204,21,0.2)] pointer-events-none"></div>
          </div>
          {/* Outer Glow Effect */}
          <div className="absolute -inset-4 bg-yellow-400/10 blur-3xl -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
