import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import About from "../../sections/About";
import VisionMissionValues from "../../sections/VisionMissionValues";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <About />
        <VisionMissionValues />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
