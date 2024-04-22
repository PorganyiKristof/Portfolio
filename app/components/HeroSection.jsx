"use client";
import Image from "next/image";
import React, { useState } from "react";
import TypeAnimationComponent from "./AnimateTypeComponent";
import { AnimatePresence, motion } from "framer-motion";
import EmailPopUp from "./EmailPopUp";

export default function HeroSection() {
  const [popup, setPopup] = useState(false);
  return (
    <section className="hero-section">
      <div className="grid grid-cols-1 md:grid-cols-12 lg:mb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" xl:ml-20 md:ml-4 col-span-8 place-self-center text-center md:text-left md:justify-self-start"
        >
          <h1 className="text-white mb-12 sm:mb-4 lg:mb-12 xl:mb-4 xs:bg-red-200 text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold lg:leading-normal h-[2em]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-800 via-primary-400-600 to-secondary-500 hover:bg-slate-300 ">
              Hello, I&apos;m
            </span>
            <br />
            <div className="animate-text">
              <TypeAnimationComponent />
            </div>
          </h1>
          <p className="text-slate-300 text-base md:text-lg w-5/6 m-auto md:m-0 lg:text-xl mb-4">
            I&apos;m a developer hailing from Hungary, and I&apos;ve already
            made waves by crafting a successful brand in 2024. My hunger for
            learning is insatiable, and I&apos;m constantly diving into new
            realms of knowledge to stay ahead in the game.
          </p>
          <div className="mt-4">
            <button
              onClick={() => setPopup(true)}
              href="#about"
              className="px-6 py-3  w-full sm:w-fit rounded-full mr-4 text-white bg-gradient-to-tr from-primary-800 via-primary-400-600 to-secondary-500 hover:scale-105 animate-pulse"
            >
              Hire Me!
            </button>
            <a href="/images/cv.pdf" target="_blank" download>
              <button
                href="#about"
                className="px-1 py-1  w-full sm:w-fit rounded-full mr-4 text-white bg-gradient-to-tr from-primary-800 via-primary-400-600 to-secondary-500 animate-pulse"
              >
                <span className=" block bg-[#121212] px-5 py-2 w-full sm:w-fit rounded-full hover:bg-slate-800">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width="300"
              height="300"
            />
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {!!popup && <EmailPopUp setPopup={setPopup} />}
      </AnimatePresence>
    </section>
  );
}
