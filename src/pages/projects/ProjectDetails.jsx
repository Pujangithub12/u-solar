import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projectsData } from "../../data/projectsData";

const allProjects = Object.values(projectsData).flat();

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = allProjects.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Project not found</p>
          <Link
            to="/"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const renderField = (label, value, className = "") => (
    <div
      className={`flex justify-between items-center py-3 border-b border-gray-100 ${className}`}
    >
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="font-semibold text-gray-900">{value || "—"}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="text-white/80 hover:text-white mb-4 flex items-center gap-2 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {project.title}
            </h1>
            <p className="text-white/80 mt-2 text-lg">{project.location}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Project Description
            </h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {project.detailedDescription || "No description available."}
            </p>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-lg group"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Project Details
            </h3>

            {renderField("Client", project.client)}
            {renderField("Capacity", project.capacity)}
            {renderField("System Type", project.type)}
            {renderField("Location", project.location)}
            {renderField("Year", project.year)}
            {renderField("Panels", project.panels)}
            {renderField("Inverter", project.inverter)}
            {renderField("Savings", project.savings, "text-green-600")}
            {renderField("Status", project.status)}

            {/* Category Badge */}
            <div className="pt-3">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide">
                {project.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
