import Link from "next/link";
import React from "react";

export default function NavLink({ href, title }) {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-slate-300 sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}
