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
import ScrollToTop from "./components/ScrollToTop";



// Main application component
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Services />
              <Team />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/service/:slug" element={
          <div className="min-h-screen">
            <Navbar />
            <ServiceDetail />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
