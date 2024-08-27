"use client";

import { useState } from "react";

export default function FAQBtn({ str, substr }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      {/* 첫 번째 박스 */}
      <div className=" bg-[#DEED1F] p-2 rounded-full flex items-center justify-between z-10 relative my-6">
        <div className="font-inter text-xs md:text-sm">{str}</div>
        <button onClick={toggleVisibility} className="ml-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
          {isVisible ? "-" : "+"}
        </button>
      </div>

      {/* 두 번째 박스 */}
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0 hidden"
        } overflow-hidden bg-[#A1AA32] opacity-80 -mt-12 p-4 rounded-b-lg z-0 pt-10`}
      >
        <div className="h-16 font-inter text-xs md:text-sm">{substr}</div>
      </div>
    </>
  );
}
