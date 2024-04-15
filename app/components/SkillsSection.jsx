/* eslint-disable react/jsx-key */
"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { lazy, Suspense, useRef } from "react";

const SlideAnimateComponent = ({ children }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end start"],
  });
  const animateY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  return (
    <motion.div
      ref={ref}
      style={{ x: animateY }}
      className="text-2xl text-left py-8"
    >
      {children}
    </motion.div>
  );
};

const MoveSquares = () => {
  const arrays = Array(14).fill(
    Array(20).fill(
      <span className="animate-spin size-16 border-r-2 border-b-2 rounded-sm m-1 opacity-10 hover:opacity-100" />
    )
  );

  return (
    <div className="move flex flex-col m-auto w-full items-center absolute top-0 ">
      {arrays.map((row) => (
        <div className="move flex flex-row">{row.map((square) => square)}</div>
      ))}
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section className="skills min-h-screen my-8 text-white overflow-hidden relative">
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
      <MoveSquares />
    </section>
  );
}
