"use client";

import { useEffect, useState } from "react";

import WalletButton from "../context/WalletButton";

import PubLicData from "./PublicData";
import StakeBtn from "./StakeBtn";

export default function IntroCenter() {
  const [amount, setAmount] = useState(0.0);

  const onChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value)) setAmount(event.target.value);
  };

  return (
    <div
      className="w-full md:w-2/4 shadow-[7px_7px_25px_rgba(0,0,0,0.25)] rounded-2xl px-6 py-10 flex flex-col items-center justify-center"
      style={{ backgroundColor: "rgba(54, 63, 41, 0.8)" }}
    >
      <div className="flex justify-center items-center w-full">
        <WalletButton />
      </div>

      <div className="text-left w-full py-4 mt-2 text-white font-termina-test text-xs md:text-sm">Enter Tokens Amount</div>
      <input onChange={onChange} type="number" className="my-4 font-termina-test w-full rounded-lg focus:outline-none pl-2 py-2 text-lg" placeholder={amount} />

      <PubLicData />

      <StakeBtn />

      <div className="w-full grid grid-cols-2 mt-8 space-x-2 font-termina-test">
        <button className="py-2  rounded-full" style={{ background: "rgba(173, 164, 154, 1)" }}>
          UNSTAKE
        </button>
        <button className="py-2 rounded-full " style={{ backgroundColor: "rgba(235, 252, 114, 1)" }}>
          Reward Claim
        </button>
      </div>
    </div>
  );
}
