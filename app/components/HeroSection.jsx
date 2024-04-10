import Image from "next/image";
import React from "react";
import TypeAnimationComponent from "./AnimateTypeComponent";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-400-600 to-pink-500 hover:bg-slate-300">
              Hello, I`m
            </span>
            <br />
            <TypeAnimationComponent />
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-6"></p>
          <div>
            <button className="px-6 py-3  w-full sm:w-fit rounded-full mr-4 text-white bg-gradient-to-tr from-purple-800 via-purple-400-600 to-pink-500 hover:bg-slate-300">
              Hire Me!
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white mt-3 bg-gradient-to-tr from-purple-800 via-purple-400-600 to-pink-500 ">
              <span className=" block bg-[#121212] px-5 py-2 w-full sm:w-fit rounded-full hover:bg-slate-800">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width="300"
              height="300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
