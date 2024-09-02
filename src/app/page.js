"use client";

import Image from "next/image";
import IntroCenter from "./components/IntroCenter";
import IntroLeft from "./components/IntroLeft";
import IntroRight from "./components/IntroRight";
import Ttile from "./components/Ttile";
import MYPuggy from "./components/MYPuggy";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <main className="flex flex-col w-full h-full  ">
        <div
          style={{
            background: "linear-gradient(180deg, #FFE072 0%, #EBFC72 100%)",
          }}
          className="relative w-full  flex flex-col items-center justify-center"
        >
          <div className="flex items-center flex-col max-w-7xl w-full">
            <Image src="/assets/Puggy_Logo.svg" alt="Logo" width={300} height={100} className="mt-10 w-28 md:w-80 " />
            <Ttile str="PUGGY STAKING" />
            <div className=" flex px-4 pb-8 md:pb-20  w-full   md:space-x-8  justify-center ">
              <IntroLeft />
              <IntroCenter />
              <IntroRight />
            </div>
          </div>
          <div className="w-full relative max-w-7xl bg-red-500">
            <Image src="/assets/Puggy_1.png" alt="Puggy_2" width={300} height={100} className="absolute -bottom-20 md:-bottom-40  right-0 md:right-10 z-10 " />
          </div>
        </div>
        <div className="relative w-full px-4 flex flex-col items-center  bg-[#814C12]  py-8">
          <MYPuggy />
          <HowItWorks />
        </div>
        <div className="relative w-full px-4 flex flex-col items-center  bg-[#3B4D3B]  py-8">
          <FAQ />
        </div>
      </main>
    </RecoilRoot>
  );
}
