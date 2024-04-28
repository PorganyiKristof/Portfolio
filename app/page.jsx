import { Suspense } from "react";

import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchivementsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ParticlesBG from "./components/Particles";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import TopBar from "./components/TopBar";
import Spline3D from "./components/Spline3D";

export default function Home() {
  return (
    <main className="font-mono flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <Navbar />
      <TopBar />
      <ParticlesBG />
      <div className="container mx-auto px-12 py-8 mt-24">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <SkillsSection />
      </div>
      <div className="realtive w-screen">
        <div className=" absolute w-full h-full  overflow-hidden">
          <Spline3D />
        </div>
        <div className="container mx-auto px-12 py-8">
          <ProjectsSection />
        </div>
      </div>
      <EmailSection />
      <Footer />
    </main>
  );
}
