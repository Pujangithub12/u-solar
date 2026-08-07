import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from "./pages/services/ServicesPage";
import ServiceDetail from "./pages/services/ServiceDetail";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectDetails from "./pages/projects/ProjectDetails";
import TeamPage from "./pages/team/TeamPage";
import ContactPage from "./pages/contact/ContactPage";

// Main application component
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/projects/:id"
          element={
            <div className="min-h-screen">
              <Navbar />
              <ProjectDetails />
              <Footer />
            </div>
          }
        />
        <Route
          path="/service/:slug"
          element={
            <div className="min-h-screen">
              <Navbar />
              <ServiceDetail />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
