"use client";

import Image from "next/image";

export default function LogoAll() {
  const logos = ["./assets/gate-io-logo.svg", "./assets/mexc-logo.svg", "./assets/dex-screener-seeklogo.svg", "./assets/Dextools_Logo.svg"];
  return (
    <div className="w-full  grid grid-cols-2 grid-rows-2 gap-y-4 -mt-4">
      {logos.map((imgSrc) => (
        <div className="flex items-center justify-center">
          <div className="rounded-full bg-[#263526] w-20 h-20 flex items-center justify-center">
            <Image src={imgSrc} alt="gate-io" layout="responsive" width={0} height={0} className="px-4 py-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
