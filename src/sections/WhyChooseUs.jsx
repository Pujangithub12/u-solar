import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Wrench,
  Handshake,
  MapPin,
  ShieldCheck,
  LayoutGrid,
} from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "Sister company of JDNE with a combined portfolio of over 45 MWp solar capacity and 6 transmission line projects across Nepal.",
  },
  {
    icon: Wrench,
    title: "Technical Expertise",
    description:
      "End-to-end capabilities: DFS, engineering design, procurement, installation, testing, commissioning, and O&M.",
  },
  {
    icon: Handshake,
    title: "Strong Partnerships",
    description:
      "Working with globally recognized technology partners including Jinko Solar, JA Solar, Huawei, Fimer, and NEA.",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    description:
      "Deep understanding of Nepal's regulatory environment, grid infrastructure, and renewable energy policies.",
  },
  {
    icon: ShieldCheck,
    title: "Bankable Solutions",
    description:
      "Projects designed to international standards, supporting project finance and investor confidence.",
  },
  {
    icon: LayoutGrid,
    title: "Diverse Portfolio",
    description:
      "Experience spanning utility-scale ground-mounted, C&I rooftop, transmission lines, and substation bays.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider mb-4">
            Our Advantage
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Usolar Janda Energy
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
                <reason.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
