import Image from "next/image";
import LogoAll from "./LogoAll";

export default function IntroRight() {
  return (
    <div
      className="hidden md:flex  flex-col w-1/4 shadow-[7px_7px_25px_rgba(0,0,0,0.25)] rounded-2xl px-4"
      style={{ backgroundColor: "rgba(54, 63, 41, 0.8)" }}
    >
      {/* 세번째 블럭 */}
      <div className="relative w-full ">
        <Image src="/assets/cloud_square.png" alt="cloud_square" layout="responsive" width={0} height={0} />
        <div className="absolute top-0 left-0 w-full h-full items-center flex justify-center flex-col">
          <div className="font-tusker text-xl">WHERE TO BUY?</div>
        </div>
      </div>
      <LogoAll />
    </div>
  );
}
