"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
const ProtectedComp = ({ children }) => {
  return (
    <div className="relative h-full w-full">
      {children}
      <br />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-red-600 w-fit m-auto text-center uppercase rounded-lg p-2 px-4 font-bold">
        Protected
      </div>
    </div>
  );
};
const PROJECT_DATA = [
  {
    title: "SeaSlipps",
    xl_image: "/images/projects/shopify_xl.PNG",
    link: "https://seaslipps.com",
    tag: ["web-page"],
    text: (
      <span>
        Shopify , Meta Adsmanager , Meta Business , szamlazz.hu , COD Form ,
        e-commerce
        <br />
      </span>
    ),
  },
  {
    title: "Netflix Clone",
    xl_image: "/images/projects/ntfxclone_xl.PNG",
    link: "https://movies-phi-drab.vercel.app",
    tag: ["web-page"],
    text: (
      <span>
        API , Next Js , TailwindCSS , Framer Motion
        <br />
      </span>
    ),
  },

  {
    title: "Crochet Shop",
    xl_image: "/images/projects/crochet_xl.PNG",
    link: "https://fluffy-fuzzies.vercel.app",
    tag: ["web-page"],
    text: (
      <span>
        Next Js , TailwindCSS, Google Auth , Material UI , Framer Motion ,
        Nodemailer
        <br />
      </span>
    ),
  },
  {
    title: "Barlangasz",
    xl_image: "/images/projects/barlangasz_xl.PNG",
    link: "https://www.jpm.hu/barlangasz/",
    tag: ["web-page"],
    text: <ProtectedComp>11 interactive games</ProtectedComp>,
  },
];
const Card = ({ p, index }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const handletitleClick = () => {
    p?.link && window.open(p.link);
  };
  return (
    <motion.div
      ref={ref}
      className="border-2 border-primary-400 rounded-xl bg-primary-950"
      initial={{
        transform: "translateY(50px)",
        opacity: 0,
      }}
      animate={
        isInView && {
          transform: "translateX(0px)",
          left: 0,
          opacity: 1,
        }
      }
      transition={{ duration: 1, delay: index / 3 }}
    >
      <div className="relative group overflow-hidden">
        <div className=" absolute top-0 left-0 bottom-0 right-0 rounded-t-xl bg-gray-800/[.7] hidden group-hover:flex"></div>
        <div className="absolute overlay w-full h-full gap-10 p-5 text-sm text-left -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hidden group-hover:flex flex-col">
          <div className="sm:text-lg h-full ">{p?.text}</div>
        </div>

        <Image
          src={p.xl_image}
          alt="project-image"
          className="rounded-t-xl w-fit h-fit"
          width="500"
          height="500"
        />
      </div>
      <h5
        className={`border-t-2 border-primary-400 p-4 uppercase text-xl relative hover:bg-primary-800`}
        onClick={handletitleClick}
      >
        {p.title}
        {p.link && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute right-5 top-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        )}
      </h5>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section className=" text-white text-center  " id="projects">
      <h1 className="text-4xl mb-12">Web Projects</h1>
      <div className="flex flex-col md:grid grid-cols-fluid gap-10">
        {PROJECT_DATA.map((p, index) => (
          <Card key={index} p={p} index={index} />
        ))}
      </div>
    </section>
  );
}