import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Sun, Wrench, ClipboardCheck, BarChart3, Hammer, HardHat, Compass } from "lucide-react";
import img1 from "../assets/image-1.jpeg";
import img2 from "../assets/image-2.jpeg";
import img3 from "../assets/image-3.jpeg";
import img4 from "../assets/image-4.jpeg";
import img5 from "../assets/image-5.jpeg";
import img6 from "../assets/image-6.jpeg";

const serviceData = {
  "site-assessment": {
    title: "Site Assessment",
    icon: ClipboardCheck,
    image: img1,
    description: "Comprehensive evaluation of your property's solar potential and energy needs.",
    fullDescription: "Our expert team conducts a thorough analysis of your property's orientation, shading, roof structure, and energy consumption patterns to determine the optimal solar solution for your needs.",
    features: [
      "Detailed roof structure analysis",
      "Shading assessment using advanced tools",
      "Energy consumption pattern evaluation",
      "Solar irradiance measurement",
      "Property orientation optimization",
      "Customized recommendation report"
    ],
    benefits: [
      "Accurate energy production estimates",
      "Optimal system sizing",
      "Cost-effective solutions",
      "Maximized ROI"
    ]
  },
  "system-design": {
    title: "System Design",
    icon: Compass,
    image: img3,
    description: "Custom engineering and design of solar systems tailored to your energy requirements.",
    fullDescription: "We create customized solar system designs using advanced modeling software, ensuring optimal panel placement, inverter selection, and battery storage integration for maximum efficiency.",
    features: [
      "3D modeling and simulation",
      "Panel layout optimization",
      "Inverter selection and sizing",
      "Battery storage integration",
      "Electrical system design",
      "Grid connection planning"
    ],
    benefits: [
      "Maximum energy production",
      "Aesthetically pleasing installation",
      "Future-proof design",
      "Compliance with all regulations"
    ]
  },
  "installation": {
    title: "Installation",
    icon: Hammer,
    image: img2,
    description: "Professional installation and commissioning by our certified expert technicians.",
    fullDescription: "Our certified technicians handle every aspect of the installation process, from mounting the panel array to configuring the inverter and connecting your system to the grid.",
    features: [
      "Professional panel mounting",
      "Inverter configuration",
      "Grid connection setup",
      "System testing and commissioning",
      "Safety compliance verification",
      "Performance optimization"
    ],
    benefits: [
      "Certified expert installation",
      "Minimal disruption to your property",
      "Fast turnaround time",
      "Full warranty coverage"
    ]
  },
  "construction": {
    title: "Construction",
    icon: HardHat,
    image: img4,
    description: "Expert construction services ensuring durable and safe solar infrastructure setup.",
    fullDescription: "We provide comprehensive construction services including structural reinforcement, mounting system installation, and electrical conduit routing to ensure a solid foundation for your solar investment.",
    features: [
      "Structural reinforcement",
      "Mounting system installation",
      "Electrical conduit routing",
      "Foundation preparation",
      "Weatherproofing solutions",
      "Quality assurance checks"
    ],
    benefits: [
      "Long-lasting infrastructure",
      "Enhanced safety standards",
      "Weather-resistant installation",
      "Professional craftsmanship"
    ]
  },
  "maintenance": {
    title: "Maintenance",
    icon: Wrench,
    image: img5,
    description: "Ongoing support and performance monitoring to ensure long-term system reliability.",
    fullDescription: "Our maintenance programs include regular cleaning, performance inspections, panel degradation checks, and inverter servicing to keep your system running at peak efficiency.",
    features: [
      "Regular panel cleaning",
      "Performance inspections",
      "Panel degradation checks",
      "Inverter servicing",
      "System monitoring",
      "Preventive maintenance"
    ],
    benefits: [
      "Extended system lifespan",
      "Consistent energy production",
      "Early issue detection",
      "Warranty preservation"
    ]
  },
  "consulting": {
    title: "Consulting",
    icon: BarChart3,
    image: img6,
    description: "Expert guidance on regulatory compliance, tax benefits, and ROI optimization.",
    fullDescription: "We provide comprehensive consulting services to help you navigate government incentives, tax credits, net metering programs, and financing options to maximize your return on investment.",
    features: [
      "Government incentive guidance",
      "Tax credit optimization",
      "Net metering program enrollment",
      "Financing option analysis",
      "ROI calculation and projection",
      "Regulatory compliance assistance"
    ],
    benefits: [
      "Maximized financial returns",
      "Simplified paperwork",
      "Expert navigation of regulations",
      "Personalized financial planning"
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-gray-900/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <Link
              to="/services"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
            <div className="w-20 h-20 bg-primary-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-400 mx-auto mb-6">
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{service.fullDescription}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Sun className="w-6 h-6 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        
      </div>
    </div>
  );
};

export default ServiceDetail;
