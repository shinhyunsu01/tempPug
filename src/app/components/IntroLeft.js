import Image from "next/image";

export default function IntroLeft() {
  return (
    <div className="hidden md:flex bg-[#212E21] md:flex-col w-1/4 shadow-[7px_7px_25px_rgba(0,0,0,0.25)] rounded-2xl px-4 pb-4 ">
      <div className="relative w-full ">
        <Image className="" src="/assets/cloud_square.png" alt="cloud_square" layout="responsive" width={0} height={0} />
        <div className="absolute top-0 left-0 w-full h-full items-center flex justify-center flex-col font-tusker text-xl">
          <div>WHAT IS</div>
          <div>PUGGY STAKING?</div>
        </div>
      </div>

      <div className="flex flex-col font-pretendard text-white text-sm -mt-4">
        <div>
          Staking involves holding and securing a specific amount of cryptocurrency in a digital wallet. By doing so, you receive additional cryptocurrency as a
          reward.
        </div>
        <br />
        <div>It is a great opportunity to participate in the governance of the network,</div>
        <br />
        <div>and passive income without the need for active trading.</div>
      </div>
    </div>
  );
}
