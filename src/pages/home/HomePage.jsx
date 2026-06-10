import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Services from "../../sections/Services";
import Projects from "../../sections/Projects";
import Team from "../../sections/Team";
import Contact from "../../sections/Contact";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
