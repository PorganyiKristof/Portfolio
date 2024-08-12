"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import LangSelector from "./LangSelector";

const NavLinks = [
  { title: "Home", href: "/", navigateTo: "/" },
  { title: "About", href: "#about", navigateTo: "/" },
  { title: "Projects", href: "#projects", navigateTo: "/" },
  { title: "Contact", href: "#contact", navigateTo: "/" },
  { title: "Services", href: "#", navigateTo: "/services" },
];

export default function Navbar() {
  const [navbarOpen, setnavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 z-50">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} className="text-2xl text-white font-semibold sm:ml-24">
          <Image src="/images/logo.png" alt="logo" width="70" height="70" />
        </Link>
        <div className="mobile-menu block lg:hidden z-50">
          {!navbarOpen ? (
            <button
              onClick={() => setnavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-2300 text-slate-200 hover:text-white z-20"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setnavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-2300 text-slate-200 hover:text-white z-20"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden lg:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mr-24">
            {NavLinks.map((link, index) => (
              <li key={index}>
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
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {navbarOpen ? <MenuOverlay key={"navlinks"} links={NavLinks} /> : <></>}
      </AnimatePresence>
    </nav>
  );
}
