import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sun,
  Wrench,
  ClipboardCheck,
  BarChart3,
  Hammer,
  HardHat,
  Compass,
  ChevronDown,
} from "lucide-react";
import img1 from "../assets/image-1.jpeg";
import img2 from "../assets/image-2.jpeg";
import img3 from "../assets/image-3.jpeg";
import img4 from "../assets/image-4.jpeg";
import img5 from "../assets/image-5.jpeg";
import img6 from "../assets/image-6.jpeg";

const services = [
  {
    title: "Site Assessment",
    description:
      "Comprehensive evaluation of your property's solar potential and energy needs.",
    icon: ClipboardCheck,
    image: img1,
    details:
      "Our expert team conducts a thorough analysis of your property's orientation, shading, roof structure, and energy consumption patterns to determine the optimal solar solution for your needs.",
  },
  {
    title: "System Design",
    description:
      "Custom engineering and design of solar systems tailored to your energy requirements.",
    icon: Compass,
    image: img3,
    details:
      "We create customized solar system designs using advanced modeling software, ensuring optimal panel placement, inverter selection, and battery storage integration for maximum efficiency.",
  },
  {
    title: "Installation",
    description:
      "Professional installation and commissioning by our certified expert technicians.",
    icon: Hammer,
    image: img2,
    details:
      "Our certified technicians handle every aspect of the installation process, from mounting the panel array to configuring the inverter and connecting your system to the grid.",
  },
  {
    title: "Construction",
    description:
      "Expert construction services ensuring durable and safe solar infrastructure setup.",
    icon: HardHat,
    image: img4,
    details:
      "We provide comprehensive construction services including structural reinforcement, mounting system installation, and electrical conduit routing to ensure a solid foundation for your solar investment.",
  },
  {
    title: "Maintenance",
    description:
      "Ongoing support and performance monitoring to ensure long-term system reliability.",
    icon: Wrench,
    image: img5,
    details:
      "Our maintenance programs include regular cleaning, performance inspections, panel degradation checks, and inverter servicing to keep your system running at peak efficiency.",
  },
  {
    title: "Consulting",
    description:
      "Expert guidance on regulatory compliance, tax benefits, and ROI optimization.",
    icon: BarChart3,
    image: img6,
    details:
      "We provide comprehensive consulting services to help you navigate government incentives, tax credits, net metering programs, and financing options to maximize your return on investment.",
  },
];

const ServiceCard = ({ service, index, isExpanded, onToggle }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      // CHANGE 1: Added 'hover:border-primary-500' for the green outline
      className="relative rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg transition-all duration-300 group self-start bg-white hover:border-primary-500"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          onToggle(index);
        }}
        className={`relative p-8 min-h-[300px] flex flex-col justify-end cursor-pointer transition-all duration-300 ${
          isExpanded
            ? "bg-gray-900"
            : "hover:shadow-2xl hover:shadow-primary-500/10"
        }`}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isExpanded ? "" : "group-hover:scale-110"
            }`}
            style={{ willChange: "transform" }}
          />

          {/* Existing Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-gray-900/40"></div>

          {/* CHANGE 2: Added Green Tint Overlay */}
          {/* This div is invisible by default (opacity-0) and shows green tint on hover */}
          <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <div
              className={`w-14 h-14 bg-primary-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-400 shadow-sm mb-6 transition-all ${
                isExpanded
                  ? "bg-primary-500 text-white"
                  : "group-hover:bg-primary-500 group-hover:text-white"
              }`}
            >
              {Icon && <Icon className="w-7 h-7" />}
            </div>
          </div>
          <h3
            className={`text-2xl font-bold mb-4 transition-colors ${
              isExpanded
                ? "text-yellow-400"
                : "text-white group-hover:text-yellow-400"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`leading-relaxed transition-colors ${
              isExpanded ? "text-white" : "text-gray-300 group-hover:text-white"
            }`}
          >
            {service.description}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-gray-50 relative z-20"
          >
            <div className="p-8 border-t border-gray-200">
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.details}
              </p>
              <Link
                to={`/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors"
              >
                Read more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider mb-4">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{" "}
            <span className="text-primary-500">Solar Solutions</span> for Every
            Need
          </h3>
          <p className="text-gray-600 text-lg">
            From initial site assessment to ongoing maintenance, we provide
            end-to-to solar power solutions that ensure long-term performance
            and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
