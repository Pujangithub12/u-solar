import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sun,
  Wrench,
  ClipboardCheck,
  BarChart3,
  Hammer,
  HardHat,
  Compass,
  ArrowRight,
} from "lucide-react";
import img1 from "../assets/shared-img/image-1.jpeg";
import img2 from "../assets/shared-img/image-2.jpeg";
import img3 from "../assets/shared-img/image-3.jpeg";
import img4 from "../assets/shared-img/image-4.jpeg";
import img5 from "../assets/shared-img/image-5.jpeg";
import img6 from "../assets/shared-img/image-6.jpeg";

const services = [
  {
    title: "Site Assessment",
    description:
      "Comprehensive evaluation of your property's solar potential and energy needs.",
    icon: ClipboardCheck,
    image: img1,
  },
  {
    title: "System Design",
    description:
      "Custom engineering and design of solar systems tailored to your energy requirements.",
    icon: Compass,
    image: img3,
  },
  {
    title: "Installation",
    description:
      "Professional installation and commissioning by our certified expert technicians.",
    icon: Hammer,
    image: img2,
  },
  {
    title: "Construction",
    description:
      "Expert construction services ensuring durable and safe solar infrastructure setup.",
    icon: HardHat,
    image: img4,
  },
  {
    title: "Maintenance",
    description:
      "Ongoing support and performance monitoring to ensure long-term system reliability.",
    icon: Wrench,
    image: img5,
  },
  {
    title: "Consulting",
    description:
      "Expert guidance on regulatory compliance, tax benefits, and ROI optimization.",
    icon: BarChart3,
    image: img6,
  },
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  const slug = service.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={`/service/${slug}`}
        className="group flex flex-col h-full bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
        </div>

        {/* Floating icon badge */}
        <div className="relative px-8">
          <div className="absolute -top-7 w-14 h-14 rounded-2xl bg-primary-600 text-white shadow-lg shadow-primary-600/30 flex items-center justify-center">
            {Icon && <Icon className="w-7 h-7" />}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-8 pt-10 pb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6 flex-1">
            {service.description}
          </p>
          <span className="inline-flex items-center gap-2 text-primary-600 font-semibold">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider mb-4 inline-flex items-center gap-2">
            <Sun className="w-4 h-4" />
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{" "}
            <span className="text-primary-500">Solar Solutions</span> for Every
            Need
          </h3>
          <p className="text-gray-600 text-lg">
            From initial site assessment to ongoing maintenance, we provide
            end-to-end solar power solutions that ensure long-term performance
            and efficiency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
