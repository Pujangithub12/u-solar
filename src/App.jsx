import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/home/HomePage";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectDetails from "./pages/ProjectDetails";
import Login from "./pages/auth/Login";
import ScrollToTop from "./components/common/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";

// Main application component
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
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
    </AuthProvider>
  );
}

export default App;
