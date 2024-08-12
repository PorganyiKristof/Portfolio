import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import LangSelector from "./LangSelector";

export default function MenuOverlay({ links }) {
  return (
    <motion.ul
      initial={{ transform: "translateY(-500px)", opacity: 0 }}
      animate={{ transform: "translateY(0px)", opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="flex flex-col py-4 items-center text-3xl justify-center fixed left-0 top-0 right-0 bottom-0 bg-[#121212] bg-opacity-95"
    >
      {links.map((link, index) => (
        <li key={index} className="border-b w-1/2 text-center mb-5">
          <NavLink
            href={link.href}
            title={link.title}
            navigateTo={link.navigateTo}
          />
        </li>
      ))}
      <li>
        <LangSelector />
      </li>
    </motion.ul>
  );
}
