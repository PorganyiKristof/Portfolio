"use client";

import React, { useState } from "react";
import EmailForm from "./EmailForm";

export default function EmailSection() {
  return (
    <section
      id="contact"
      className="text-white w-full py-8 grid md:grid-cols-2 px-4 lg:px-24 mt-4 md:mt-24 gap-4 content-center relative bg-gradient-to-br from-primary-600 to-secondary-950"
    >
      <div className="">
        <h5 className="text-xl font-bold text-wgite my-2">Let`s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I`m currently looking for new opportunities, my inbox always open.
          Whether you have questions or just want to say hi, I`ll try my best to
          get back to you!
        </p>
        <div className="socials flex flex-row gap-6">
          <button
            className="px-6 py-2  w-full sm:w-fit rounded-lg mr-4 border hover:bg-slate-800"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/kristóf-porgányi-5bb245251/"
              )
            }
          >
            LINKEDIN
          </button>
        </div>
      </div>

      <div>
        <EmailForm />
      </div>
    </section>
  );
}
