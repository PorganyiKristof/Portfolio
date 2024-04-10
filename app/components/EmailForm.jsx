"use client";
import React, { useState } from "react";

export default function EmailForm() {
  const [msgSend, setMsgSend] = useState(false);
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    /* const resData = await response.json(); */

    if (response.status === 200) {
      setMsgSend(true);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleEmailSubmit}
        className="form flex flex-col text-black"
      >
        {!!msgSend && (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="something@smthg.com"
            className="mt-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-2.5"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="text-white">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder="Hi!"
            className="mt-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-2.5"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Let`s grab a Coffee! ... "
            className="mt-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-2.5"
          />
        </div>
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
