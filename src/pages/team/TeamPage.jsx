import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Team from "../../sections/Team";

const TeamPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
