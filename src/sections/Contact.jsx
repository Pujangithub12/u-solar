import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const phoneNumber = "9765545315"; // Use mobile number, strip non-digits
      const text = `Hello U Solar Janda Energy, I'd like to enquire about your solar services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary-600 font-bold uppercase tracking-wider mb-4">
              Contact Us
            </h2>
            <h3 className="text-4xl font-bold mb-8">
              Get in Touch for a <span className="text-primary-500">Free</span>{" "}
              Consultation
            </h3>
            <p className="text-gray-600 text-lg mb-12">
              Ready to make the switch to solar? Our experts are here to help
              you every step of the way. Reach out to us for any queries.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-2xl flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Our Location</h4>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    8th Floor, Trade Tower, Thapathali, Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-2xl flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone Number</h4>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    +977-01-5111032
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    +977-9844009664
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-2xl flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email Address</h4>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    Usolarjanda1234@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_0_20px_rgba(0,0,0,0.05)] relative overflow-hidden group transition-all duration-500"
          >
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-all"></div>

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-tight">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full bg-gray-50 border-2 ${
                      errors.name ? "border-red-500" : "border-gray-100"
                    } rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-tight">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full bg-gray-50 border-2 ${
                      errors.email ? "border-red-500" : "border-gray-100"
                    } rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-tight">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+977-9844009664"
                    className={`w-full bg-gray-50 border-2 ${
                      errors.phone ? "border-red-500" : "border-gray-100"
                    } rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-tight">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry about solar installation"
                    className={`w-full bg-gray-50 border-2 ${
                      errors.subject ? "border-red-500" : "border-gray-100"
                    } rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-tight">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className={`w-full bg-gray-50 border-2 ${
                    errors.message ? "border-red-500" : "border-gray-100"
                  } rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 font-medium">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-yellow-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-primary-600/20 hover:shadow-yellow-500/30 hover:-translate-y-1"
              >
                SEND MESSAGE <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
