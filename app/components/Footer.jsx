import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className=" footer border borde-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent mt-24">
      <div className="container p-4 flex justify-between">
        <span>
          <Image src="/images/logo.png" alt="logo" width="80" height="80" />
        </span>
        <p className="text-slate-700">All rights reserved.</p>
      </div>
    </footer>
  );
}
