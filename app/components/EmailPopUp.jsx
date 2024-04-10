import React from "react";
import EmailForm from "./EmailForm";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function EmailPopUp({ setPopup }) {
  return (
    <motion.div
      initial={{ transform: "translateY(-500px)", opacity: 0 }}
      animate={{ transform: "translateY(0px)", opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="fixed top-0 left-0 bottom-0 right-0 bg-[#121212] bg-opacity-95 flex justify-center items-center z-50"
    >
      <div className="relative">
        <div className="absolute -top-12 -right-12 text-white border rounded-md p-2">
          <XMarkIcon onClick={() => setPopup(false)} className="h-5 w-5 " />
        </div>
        <EmailForm />
      </div>
    </motion.div>
  );
}
