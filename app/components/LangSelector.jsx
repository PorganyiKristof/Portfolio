import React from "react";

export default function LangSelector() {
  return (
    <div className="flex py-2 pl-3 pr-4 text-slate-300 sm:text-xl rounded md:p-0 cursor-pointer">
      <div className="hover:text-white">HU</div>
      <div>|</div>
      <div className="hover:text-white">EN</div>
    </div>
  );
}
