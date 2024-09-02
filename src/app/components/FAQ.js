"use client";
import Image from "next/image";
import { useState } from "react";
import FAQBtn from "./FAQBtn";
import Ttile from "./Ttile";

export default function FAQ() {
  return (
    <div
      className="relative md:max-w-7xl w-full h-full rounded-2xl flex items-center flex-col   pb-10 px-2 md:px-10 my-8"
      style={{
        background: "#C9D5B3CC",
        boxShadow: "7px 7px 25px 0px #0000004D",
      }}
    >
      <Image src="/assets/Puggy_3.png" alt="Puggy_3" width={300} height={100} className="hidden md:block absolute top-2  left-0 z-10 w-40 md:w-80" />
      <Image src="/assets/Puggy_2.png" alt="Puggy_3" width={300} height={100} className="hidden md:block absolute bottom-0  right-0 z-10 w-40 md:w-80" />
      <Ttile str="FAQ" />
      <div className="  flex items-center justify-center w-full">
        <div className="relative w-full max-w-xl ">
          <FAQBtn str="What is the contract address of PUGGY token?" substr="0x762b56F3E36A4BE65763056d6464668B4C7B2f49 (Polygon)" />
          <FAQBtn str="How long does it take to unstake $PUGGY?" substr="2 Weeks" />
          <FAQBtn
            str="How long does it take to claim the Rewards?"
            substr="PUGGY aims to become an ultimate DEFI MEME platform. Starting with Staking, we will launch DEX and leveraged lending for other MEME coins."
          />
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
