"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState, useTransition } from "react";
import TabButton from "./TabButton";
import { AnimatePresence, motion, useInView } from "framer-motion";

const OnClickListItem = ({ children, link }) => {
  const handleClick = () => {
    window.open(link);
  };
  return (
    <li
      onClick={handleClick}
      className="relative hover:bg-slate-200 hover:bg-opacity-15 cursor-pointer"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute top-1 right-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </li>
  );
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="content grid grid-flow-row grid-cols-2 gap-4">
        <li>React</li>
        <li>React Native</li>
        <li>Next 13</li>
        <li>Node.js</li>
        <li>Tailwind CSS</li>
        <li>Symfony</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="text-xs [&>*]:border [&>*]:mt-2 [&>*]:rounded-md [&>*]:p-2">
        <OnClickListItem link={"https://www.csany-zeg.hu"}>
          <p>09. 2015 – 05. 2019</p>
          <p>Csány László Közgazdasági Szakközépiskola Zalaegerszeg</p>
          <p>Information technology and telecommunications</p>
        </OnClickListItem>
        <OnClickListItem link={"https://www.ttk.pte.hu"}>
          <p>09. 2019. - Currently</p>
          <p>PTE Természettudományi Kar</p>
          <p>Programtervező informatikus BSc</p>
        </OnClickListItem>
      </ul>
    ),
  },
  {
    title: "Experimence",
    id: "experimence",
    content: (
      <ul className="text-xs [&>*]:border [&>*]:mt-2 [&>*]:rounded-md [&>*]:p-2">
        <OnClickListItem link={"https://innoteq.hu"}>
          <p>03. 2021. - Currently</p>
          <p>
            Perform system administration, software development and testing
            tasks.
          </p>
          <p>InnoTeq Kft. Pécs 7626 Király Street 66</p>
        </OnClickListItem>
        <OnClickListItem /*  link={"https://www.seaslipps.com"} */>
          <p>01. 11. 2023. - Currently</p>
          <p>
            Mail order, Internet retail. Administration, marketing, parcel
            handling
          </p>
          <p>Porgányi Kristóf Sole trader</p>
        </OnClickListItem>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [reload, setReload] = useState(false);
  const [isPending, startTransition] = useTransition();
  const inView = useRef();
  const isInView = useInView(inView, { once: true });

  useEffect(() => {
    setReload((prev) => !prev);
  }, [tab]);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="about-section text-white lg:mt-24" id="about">
      <motion.div
        ref={inView}
        initial={{
          transform: "translateX(-50px)",
          opacity: 0,
        }}
        animate={
          isInView && {
            transform: "translateX(0px)",
            left: 0,
            opacity: 1,
          }
        }
        transition={{ duration: 1, delay: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px16"
      >
        <Image
          src={"/images/about-image.png"}
          width={500}
          height={500}
          className="rounded-full"
          alt="about-image"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold text-white mb-4 mt-4">About Me</h1>
          <p className="text-base md:text-lg">
            I&apos;m a 23-year-old. Currently I work at InnoTeq Kft. 8 hours a
            day for almost 3 and a half years. Most of my projects I work alone,
            so I would like to try myself in a reliable team. I consider myself
            a helpful and empathetic person, which allows me to work effectively
            with others. I like challenges and I am constantly improving myself.
            I always set myself new goals and strive for the best in everything
            I do.
          </p>
          <div className="flex flex-row mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experimence")}
              active={tab === "experimence"}
            >
              Experimence
            </TabButton>
          </div>
          <div className="relative h-32">
            <motion.div
              key={"tab"}
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-left absolute"
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
