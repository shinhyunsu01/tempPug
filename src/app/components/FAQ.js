"use client";
import { useState } from "react";
import FAQBtn from "./FAQBtn";
import Ttile from "./Ttile";

export default function FAQ() {
  return (
    <div className=" max-w-7xl w-full h-full rounded-2xl flex items-center flex-col  bg-[#C9D5B3] bg-opacity-30 shadow-xl pb-10 px-10 my-8">
      <Ttile str="FAQ" />
      <div className="flex items-center justify-center w-full">
        <div className="relative w-full max-w-4xl">
          <FAQBtn str="What is the contract address of PUGGY token?" substr="0x762b56F3E36A4BE65763056d6464668B4C7B2f49 (Polygon)" />
          <FAQBtn str="How long does it take to unstake $PUGGY?" substr="2 Weeks" />
          <FAQBtn str="Where can I purchase $PUGGY?" substr="Now, GATE.io, MEXC, Uniswap. STAY Tuned for More Listing!" />
          <FAQBtn
            str="What kind of service does PUGGY provide?"
            substr="PUGGY aims to become an ultimate DEFI MEME platform.  Starting with Staking, we will launch DEX and leveraged lending for other MEME coins."
          />
        </div>
      </div>
    </div>
  );
}
