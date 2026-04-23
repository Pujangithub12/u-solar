import React from "react";
import { motion } from "framer-motion";
import { 
  Sun, 
  Wrench, 
  ClipboardCheck, 
  BarChart3, 
  Hammer
} from "lucide-react";
import img1 from "../assets/image-1.jpeg";
import img2 from "../assets/image-2.jpeg";
import img5 from "../assets/image-5.jpeg";
import img6 from "../assets/image-6.jpeg";

const services = [
  {
    title: "Site Assessment",
    description: "Comprehensive evaluation of your property's solar potential and energy needs.",
    icon: ClipboardCheck,
    image: img1,
  },
  {
    title: "Installation",
    description: "Professional installation and commissioning by our certified expert technicians.",
    icon: Hammer,
    image: img2,
  },
  {
    title: "Maintenance",
    description: "Ongoing support and performance monitoring to ensure long-term system reliability.",
    icon: Wrench,
    image: img5,
  },
  {
    title: "Consulting",
    description: "Expert guidance on regulatory compliance, tax benefits, and ROI optimization.",
    icon: BarChart3,
    image: img6,
  },
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative p-8 rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 transition-all group min-h-[300px] flex flex-col justify-end"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Light Yellowish Tint */}
        <div className="absolute inset-0 bg-yellow-400/10 group-hover:bg-yellow-400/5 transition-colors duration-500"></div>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-gray-900/40 group-hover:from-primary-950/90 group-hover:via-primary-900/70 transition-colors duration-500"></div>
      </div>

      <div className="relative z-10">
        <div className="w-14 h-14 bg-primary-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-400 shadow-sm mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all">
          {Icon && <Icon className="w-7 h-7" />}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">{service.description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
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
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
