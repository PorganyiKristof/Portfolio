"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const SlideAnimateComponent = ({ children }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end start"],
  });
  const animateY = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
  return (
    <motion.div
      ref={ref}
      style={{ x: animateY }}
      className="text-3xl text-left py-8"
    >
      {children}
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section className="skills min-h-screen my-8 text-white overflow-hidden">
      <div className="md:hidden">
        <SlideAnimateComponent>
          <div className="font-bold w-full text-center">My Main Skills</div>
        </SlideAnimateComponent>
      </div>
      <div className="hidden md:block">
        <SlideAnimateComponent>
          <div className="font-bold text-4xl">My Main Skills</div>
        </SlideAnimateComponent>
      </div>
      <SlideAnimateComponent>React</SlideAnimateComponent>
      <SlideAnimateComponent>Next Js 13</SlideAnimateComponent>
      <SlideAnimateComponent>TailwindCSS</SlideAnimateComponent>
      <SlideAnimateComponent>Node Js</SlideAnimateComponent>
      <SlideAnimateComponent>React Native</SlideAnimateComponent>
      <SlideAnimateComponent>R3F / Drei</SlideAnimateComponent>
      <SlideAnimateComponent>Framer Motion</SlideAnimateComponent>
      <SlideAnimateComponent>Facebook Ads Manager</SlideAnimateComponent>
      <SlideAnimateComponent>Meta Business Suit</SlideAnimateComponent>
    </section>
  );
}
