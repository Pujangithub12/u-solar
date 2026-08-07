import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const tabs = [
  { id: "commercial", label: "Commercial" },
  { id: "industrial", label: "Industrial" },
  { id: "utility", label: "Utility Scale" },
  { id: "transmission", label: "Transmission & Substation" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("commercial");
  const navigate = useNavigate();

  const projects = projectsData[activeTab] || [];

  const handleViewDetails = (project) => {
    navigate(`/projects/${project.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful solar installations across
            Nepal. From commercial rooftops to utility-scale solar farms, we
            deliver reliable renewable energy solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex bg-white rounded-lg shadow-sm p-1.5 border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-6 py-2.5 rounded-md text-sm font-bold transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-green-600 text-white shadow-md"
                      : "text-gray-500 hover:text-green-600 hover:bg-green-50"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {project.capacity}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm font-medium">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {project.location}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.detailedDescription.substring(0, 120) + "..."}
                </p>

                {/* View Details Button */}
                <button
                  onClick={() => handleViewDetails(project)}
                  className="w-full mt-2 bg-green-600 text-white py-2.5 px-4 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  View Details
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects available in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
