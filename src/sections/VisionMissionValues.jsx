import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Lightbulb,
  ShieldCheck,
  Leaf,
  Award,
  Users,
} from "lucide-react";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Embracing cutting-edge technology and creative problem-solving in every project.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Maintaining transparency, honesty, and ethical business practices at all times.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Prioritizing environmental responsibility in design, construction, and operations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Delivering high-quality, reliable, and bankable energy solutions.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Creating positive socio-economic impact for local communities and stakeholders.",
  },
];

const VisionMissionValues = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider mb-4">
            What Drives Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Vision, Mission & Core Values
          </h3>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
              <Eye className="w-7 h-7" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Vision</h4>
            <p className="text-gray-600 leading-relaxed">
              To be Nepal's most trusted and innovative renewable energy
              company, driving a clean energy future that powers communities,
              industries, and institutions sustainably.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Mission
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To deliver technically robust, financially viable, and
              environmentally responsible solar energy solutions that reduce
              dependence on conventional energy and contribute to Nepal's
              sustainable development goals.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div>
          <h4 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Core Values
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mx-auto mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h5 className="font-bold text-gray-900 mb-2">
                  {value.title}
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
