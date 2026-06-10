import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import damayantiImg from "../assets/directors/damyanti-img.jpg";
import kishorImg from "../assets/directors/kishor-img.jpg";

const teamMembers = [
  {
    name: "Damayanti Paudel",
    role: "Chairman",
    image: damayantiImg,
  },
  {
    name: "Kishor Neupane",
    role: "Director",
    image: kishorImg,
  },
  {
    name: "Sanjiv Kumar Jha",
    role: "Director",
  },
];

const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative p-8 rounded-xl bg-white border-2 border-gray-200 shadow-lg hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/10 transition-all group text-center"
    >
      <div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full border-2 border-primary-500 shadow-md group-hover:scale-110 transition-transform">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-500 to-yellow-500 flex items-center justify-center text-white">
            <User className="w-12 h-12" />
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {member.name}
      </h3>
      <p className="text-primary-500 font-semibold text-lg">{member.role}</p>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider mb-4">
            Our Team
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our{" "}
            <span className="text-primary-500">Leadership</span>
          </h3>
          <p className="text-gray-600 text-lg">
            Guided by experienced leaders committed to driving sustainable energy solutions forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
