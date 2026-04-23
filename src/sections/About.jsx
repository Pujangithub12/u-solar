import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "../assets/image-3.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={aboutImg}
                alt="Solar Engineers"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary-600 text-white p-10 rounded-3xl hidden md:block">
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-sm font-medium opacity-90">
                Years of Professional
                <br />
                Experience
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-primary-600 font-bold uppercase tracking-wider mb-4">
              About Our Company
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Leading the Charge in{" "}
              <span className="text-primary-500">Sustainable</span> Energy
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              U Solar is a renewable energy company focused on providing
              end-to-end solar power solutions for residential, commercial, and
              industrial clients. The company specializes in converting
              conventional electricity systems into sustainable solar energy
              systems, helping reduce energy costs and environmental impact.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Cost Reduction",
                "Eco-Friendly Solutions",
                "24/7 Technical Support",
                "High Quality Panels",
                "Quick Installation",
                "Tax Benefits Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center lg:justify-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
