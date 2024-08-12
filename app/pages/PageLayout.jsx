import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import ParticlesBG from "../components/Particles";
import Footer from "../components/Footer";
import EmailSection from "../components/EmailSection";

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <TopBar />
      <div className="z-10">{children}</div>
      <ParticlesBG />

      <EmailSection />
      <Footer />
    </>
  );
}
