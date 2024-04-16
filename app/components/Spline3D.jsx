"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export default function Spline3D() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 10%", "end start"],
  });
  const moveYanimation = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      ref={ref}
      className="hidden md:block h-screen absolute left-1/4 md:left-1/3 w-full -top-28 "
      style={{ y: moveYanimation }}
    >
      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.0.94/build/spline-viewer.js"
        async
      ></script>
      <spline-viewer
        loading-anim-type="spinner-big-light"
        url="https://prod.spline.design/XFMX2ehpNdVYuDmI/scene.splinecode"
      ></spline-viewer>
    </motion.div>
  );
}
