import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API_URL = "http://localhost:5000/api";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("commercial");
  const [activeCountry, setActiveCountry] = useState("Nepal");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const navigate = useNavigate();
  const { user, getToken, isAdmin } = useAuth();

  const countries = [
    { id: "Nepal", label: "Nepal" },
    { id: "India", label: "India" },
  ];

  const tabs = [
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
    { id: "utility", label: "Utility Scale" },
  ];

  // Fetch projects from API instead of static data
  useEffect(() => {
    fetchProjects();
  }, [activeTab, activeCountry]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${API_URL}/projects?category=${activeTab}&country=${activeCountry}`,
      );
      if (!res.ok) throw new Error("Failed to load projects");
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error(err);
      // Fallback to static data if API fails
      const { projectsData } = await import("../data/projectsData");
      const staticData = projectsData[activeTab] || [];
      // Filter static data by country if possible, or just show all if no country field
      setProjects(
        staticData.filter((p) => !p.country || p.country === activeCountry),
      );
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (url) => {
    if (!url) return "";
    // If it's already a full URL (like Cloudinary), return it
    if (url.startsWith("http")) return url;
    // Fallback for local uploads (if any left)
    if (url.startsWith("/uploads")) {
      return `http://localhost:5000${url}`;
    }
    return url;
  };

  const handleViewDetails = (project) => {
    navigate(`/projects/${project.id}`);
    window.scrollTo(0, 0);
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;

    try {
      const token = getToken();
      const res = await fetch(`${API_URL}/projects/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to delete project");
      }

      setProjects((prev) => prev.filter((p) => p.id !== id));
      alert("Project deleted successfully");
    } catch (err) {
      alert(err.message);
    }
  };

  // ─── ADD PROJECT HANDLER ──────────────────────────────────
  const handleAddProject = async (formData) => {
    try {
      const token = getToken();
      if (!token) {
        alert("Please log in as admin to add projects");
        return;
      }

      const res = await fetch(`${API_URL}/projects`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, // FormData for file uploads
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to add project");
      }

      const newProject = await res.json();
      setProjects((prev) => [...prev, newProject]);
      setShowAddModal(false);
      alert("Project added successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Add Button */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful solar installations across Nepal
            and India. From commercial rooftops to utility-scale solar farms, we
            deliver reliable renewable energy solutions.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 relative">
          {/* Country Selector */}
          <div className="flex bg-white rounded-lg shadow-sm p-1.5 border border-gray-200">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => setActiveCountry(country.id)}
                className={`
                  px-6 py-2.5 rounded-md text-sm font-bold transition-all duration-300
                  ${
                    activeCountry === country.id
                      ? "bg-gray-900 text-white shadow-md"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }
                `}
              >
                {country.label}
              </button>
            ))}
          </div>

          {/* Category Tabs */}
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

          {/* Add Button - Aligned with filters, only for admin */}
          {isAdmin && (
            <button
              onClick={() => setShowAddModal(true)}
              className="md:absolute md:right-0 bg-green-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors flex items-center gap-2 shadow-md"
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Project
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="text-gray-500 mt-4">Loading projects...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={getImageUrl(project.image_url || project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop";
                    }}
                  />
                  {isAdmin && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteProject(project.id);
                      }}
                      className="absolute top-4 left-4 bg-red-600/90 text-white p-2 rounded-lg hover:bg-red-700 transition-all shadow-lg active:scale-95 group/del"
                      title="Delete Project"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  )}
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
                    {project.description ||
                      (project.detailed_description
                        ? project.detailed_description.substring(0, 120) + "..."
                        : "No description available.")}
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
        )}

        {/* Empty State */}
        {!loading && projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects available in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Add Project Modal */}
      {showAddModal && (
        <AddProjectModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddProject}
          category={activeTab}
          defaultCountry={activeCountry}
        />
      )}
    </section>
  );
};

// ─── ADD PROJECT MODAL COMPONENT ────────────────────────────
const AddProjectModal = ({ onClose, onSave, category, defaultCountry }) => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    capacity: "",
    type: "Rooftop Installation",
    year: new Date().getFullYear(),
    client: "",
    panels: "",
    inverter: "",
    savings: "",
    status: "Completed",
    description: "",
    detailed_description: "",
    category: category,
    country: defaultCountry || "Nepal",
  });
  const [mainImage, setMainImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMainImageChange = (e) => {
    if (e.target.files[0]) setMainImage(e.target.files[0]);
  };

  const handleGalleryChange = (e) => {
    setGalleryImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData();

    // Append all text fields
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    // Append main image
    if (mainImage) {
      data.append("image", mainImage);
    }

    // Append gallery images
    galleryImages.forEach((img) => {
      data.append("gallery", img);
    });

    await onSave(data);
    setSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl flex justify-between items-center z-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Add New Project
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 flex-1">
            {/* Form */}
            <form
              id="addProjectForm"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="e.g., Vishnu Sadan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="e.g., Pingalasthan Road, Kathmandu"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Capacity *
                  </label>
                  <input
                    type="text"
                    name="capacity"
                    required
                    value={formData.capacity}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="e.g., 150 kWp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    System Type *
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                  >
                    <option>Rooftop Installation</option>
                    <option>Ground Mount</option>
                    <option>Carport Solar</option>
                    <option>Hybrid System</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Year
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Client
                  </label>
                  <input
                    type="text"
                    name="client"
                    value={formData.client}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="e.g., Vishnu Group"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Panels
                  </label>
                  <input
                    type="text"
                    name="panels"
                    value={formData.panels}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="e.g., 420 x 540W Mono PERC"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Inverter
                  </label>
                  <input
                    type="text"
                    name="inverter"
                    value={formData.inverter}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="e.g., 3 x 50kW Sungrow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Annual Savings
                  </label>
                  <input
                    type="text"
                    name="savings"
                    value={formData.savings}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="e.g., NPR 2.8M/year"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                  >
                    <option>Completed</option>
                    <option>Under Construction</option>
                    <option>Planned</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="Nepal">Nepal</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>

              {/* Descriptions */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Short Description
                  </label>
                  <textarea
                    name="description"
                    rows={2}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Brief description for the card..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Detailed Description
                  </label>
                  <textarea
                    name="detailed_description"
                    rows={4}
                    value={formData.detailed_description}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Full project description for details page..."
                  />
                </div>
              </div>

              {/* Image Uploads */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Main Project Image *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMainImageChange}
                      required
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition-all cursor-pointer"
                    />
                  </div>
                  {mainImage && (
                    <p className="mt-2 text-sm text-green-600 font-medium flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {mainImage.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Gallery Images (Multiple)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleGalleryChange}
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition-all cursor-pointer"
                    />
                  </div>
                  {galleryImages.length > 0 && (
                    <p className="mt-2 text-sm text-green-600 font-medium flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {galleryImages.length} images selected
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Footer Actions */}
          <div className="bg-gray-50 px-6 py-4 rounded-b-2xl border-t border-gray-200 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-white transition-all shadow-sm"
            >
              Cancel
            </button>
            <button
              form="addProjectForm"
              type="submit"
              disabled={submitting}
              className="flex-[2] px-4 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Saving Project...
                </>
              ) : (
                <>
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Save Project
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
