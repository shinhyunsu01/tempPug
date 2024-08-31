"use client";

import { useEffect, useState } from "react";
//import { useRecoilValue } from "recoil";

import WalletButton from "../context/WalletButton";

import PubLicData from "./PublicData";
import StakeBtn from "./StakeBtn";

export default function IntroCenter() {
  const [amount, setAmount] = useState("");

  const onChange = (event) => {
    if (event.target.value >= 0) setAmount(event.target.value);
  };

  return (
    <div className="w-full bg-[#212E21] md:w-2/4 shadow-[7px_7px_25px_rgba(0,0,0,0.25)] rounded-2xl px-6 py-10 flex flex-col items-center justify-center">
      <div className="flex justify-center items-center w-full">
        <WalletButton />
      </div>

      <div className="text-left w-full py-4 mt-2 text-white font-termina-test text-xs md:text-sm">Enter Tokens Amount</div>
      <input
        onChange={onChange}
        value={amount}
        type="number"
        className="my-4 font-termina-test w-full rounded-lg focus:outline-none pl-2 py-2 text-lg"
        placeholder={amount == "" ? "0.00" : ""}
      />

      <PubLicData />

      <StakeBtn amount={amount} setAmount={setAmount} />
    </div>
  );
}
