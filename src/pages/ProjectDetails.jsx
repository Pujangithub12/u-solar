import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API_URL from "../config";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, getToken, isAdmin, loading: authLoading } = useAuth();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Memoized fetch function to avoid dependency issues
  const fetchProject = useCallback(async () => {
    if (!id) return;
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${API_URL}/projects/${id}`);
      if (!res.ok) throw new Error("Failed to load project");
      const data = await res.json();
      setProject(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  // Fetch when id is available and auth is loaded
  useEffect(() => {
    if (!authLoading && id) {
      fetchProject();
    }
  }, [id, authLoading, fetchProject]);

  // ─── EDIT HANDLERS ────────────────────────────────────────
  const startEdit = (field, currentValue) => {
    setEditingField(field);
    setEditValue(currentValue || "");
  };

  const saveField = async (field) => {
    try {
      const token = getToken();
      if (!token) {
        alert("Please log in as admin to edit");
        return;
      }

      // Map frontend field names to backend field names if needed
      const backendField =
        field === "description" ? "detailed_description" : field;

      const res = await fetch(`${API_URL}/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ [backendField]: editValue }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Save failed");
      }

      await fetchProject();
      setEditingField(null);
      setEditValue("");
    } catch (err) {
      alert(err.message);
    }
  };

  const cancelEdit = () => {
    setEditingField(null);
    setEditValue("");
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

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <button
            onClick={fetchProject}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Project not found</p>
      </div>
    );
  }

  const isAdminUser = isAdmin;

  // Helper: Render inline-editable field
  const renderField = (label, field, value, className = "") => {
    const isEditing = editingField === field;

    return (
      <div
        className={`flex justify-between items-center py-3 border-b border-gray-100 group ${className}`}
      >
        <span className="text-gray-500 text-sm">{label}</span>

        {isEditing ? (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="px-2 py-1 border rounded text-sm w-48 focus:ring-2 focus:ring-green-500 focus:outline-none"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") saveField(field);
                if (e.key === "Escape") cancelEdit();
              }}
            />
            <button
              onClick={() => saveField(field)}
              className="text-green-600 hover:text-green-700 p-1"
              title="Save"
            >
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
            <button
              onClick={cancelEdit}
              className="text-red-500 hover:text-red-600 p-1"
              title="Cancel"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span
              className={`font-semibold ${field === "savings" ? "text-green-600" : "text-gray-900"}`}
            >
              {value || "—"}
            </span>
            {isAdminUser && (
              <button
                onClick={() => startEdit(field, value)}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 hover:text-blue-700 p-1"
                title={`Edit ${label}`}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={getImageUrl(project.image_url || project.image)}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop";
          }}
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
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Project Description
              </h2>
              {isAdminUser && editingField !== "description" && (
                <button
                  onClick={() =>
                    startEdit(
                      "description",
                      project.detailed_description || project.description,
                    )
                  }
                  className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1 transition-colors"
                >
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
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Edit
                </button>
              )}
            </div>

            {editingField === "description" ? (
              <div className="space-y-3">
                <textarea
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => saveField("description")}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-semibold transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {project.detailed_description ||
                  project.description ||
                  "No description available."}
              </p>
            )}
          </div>

          {/* Gallery */}
          {project.gallery_urls && project.gallery_urls.length > 0 && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery_urls.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-lg group"
                  >
                    <img
                      src={getImageUrl(img)}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
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

            {renderField("Client", "client", project.client)}
            {renderField("Capacity", "capacity", project.capacity)}
            {renderField("System Type", "type", project.type)}
            {renderField("Location", "location", project.location)}
            {renderField("Year", "year", project.year)}
            {renderField("Panels", "panels", project.panels)}
            {renderField("Inverter", "inverter", project.inverter)}
            {renderField(
              "Savings",
              "savings",
              project.savings,
              "text-green-600",
            )}
            {renderField("Status", "status", project.status)}

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
