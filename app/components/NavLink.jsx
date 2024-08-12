import Link from "next/link";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavLink({ href, title, navigateTo }) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (navigateTo) navigate(navigateTo);
  };
  return (
    <Link
      href={href}
      onClick={handleOnClick}
      className="block py-2 pl-3 pr-4 text-slate-300 sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}
