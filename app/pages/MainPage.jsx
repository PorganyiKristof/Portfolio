import React from "react";
import { Suspense } from "react";

import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchivementsSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

import Spline3D from "../components/Spline3D";
import PageLayout from "./PageLayout";

export default function MainPage() {
  return (
    <PageLayout>
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
    </PageLayout>
  );
}
