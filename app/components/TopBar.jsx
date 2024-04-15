"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function TopBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 h-1 z-50 bg-primary-600 w-full origin-right"
    />
  );
}
