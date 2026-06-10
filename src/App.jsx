import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectDetails from "./pages/ProjectDetails";
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./sections/Projects";
import { AuthProvider } from "./context/AuthContext";

// Main application component
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen">
                <Navbar />
                <main>
                  <Hero />
                  <About />
                  <Services />
                  <Projects />
                  <Team />
                  <Contact />
                </main>
                <Footer />
              </div>
            }
          />
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
