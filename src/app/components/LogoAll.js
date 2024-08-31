"use client";

import Image from "next/image";

export default function LogoAll() {
  const logos = ["./assets/gate-io-logo.svg", "./assets/mexc-logo.svg", "./assets/dex-screener-seeklogo.svg", "./assets/Dextools_Logo.svg"];
  const hrefSrc = [
    "https://www.gate.io/trade/PUGGY_USDT",
    "https://www.mexc.com/exchange/PUGGY_USDT?_from=market",
    "https://dexscreener.com/polygon/0x420253cab257fb9c8042df669c410c4b06778469",
    "https://www.dextools.io/app/en/polygon/pair-explorer/0x420253cab257fb9c8042df669c410c4b06778469?t=1724900508592",
  ];
  return (
    <div className="w-full  grid grid-cols-2 grid-rows-2 gap-y-4 -mt-4">
      {logos.map((imgSrc, index) => (
        <div className="flex items-center justify-center" key={imgSrc}>
          <a target="_blank" href={hrefSrc[index]} className="rounded-full bg-[#3B4D3B] w-20 h-20 flex items-center justify-center">
            <Image src={imgSrc} alt="gate-io" layout="responsive" width={0} height={0} className="px-4 py-4" />
          </a>
        </div>
      ))}
    </div>
  );
}
