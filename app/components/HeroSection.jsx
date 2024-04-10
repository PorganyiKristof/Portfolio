"use client";
import Image from "next/image";
import React from "react";
import TypeAnimationComponent from "./AnimateTypeComponent";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" xl:ml-20 md:ml-4 col-span-8 place-self-center text-center sm:text-left sm:justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-6xl xl:text-8xl font-extrabold lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-800 via-primary-400-600 to-secondary-500 hover:bg-slate-300 ">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimationComponent />
          </h1>
          <p className="text-slate-300 text-base md:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            molestiae rem voluptas omnis. Repellat autem laborum suscipit quas
            libero, corporis repudiandae blanditiis quo neque molestiae?
          </p>
          <div>
            <button
              href="#about"
              className="px-6 py-3  w-full sm:w-fit rounded-full mr-4 text-white bg-gradient-to-tr from-primary-800 via-primary-400-600 to-secondary-500 hover:scale-105 animate-pulse"
            >
              Hire Me!
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white mt-3 bg-gradient-to-tr from-primary-800 via-primary-400-600 to-secondary-500 ">
              <span className=" block bg-[#121212] px-5 py-2 w-full sm:w-fit rounded-full hover:bg-slate-800">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
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
    </section>
  );
}
