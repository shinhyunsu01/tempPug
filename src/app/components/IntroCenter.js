import WalletButton from "../context/WalletButton";

export default function IntroCenter() {
  return (
    <div
      className="w-full md:w-2/4 shadow-[7px_7px_25px_rgba(0,0,0,0.25)] rounded-2xl px-6 py-10 flex flex-col items-center justify-center"
      style={{ backgroundColor: "rgba(54, 63, 41, 0.8)" }}
    >
      <div className="flex justify-center items-center w-full">
        <WalletButton />
      </div>

      <div className="text-left w-full py-4 mt-2 text-white font-termina-test text-xs md:text-sm">Enter Tokens Amount</div>
      <div className=" w-full grid grid-cols-3 grid-rows-2 font-termina-test text-xs text-white">
        <div className="flex  justify-center">
          <div>TVL</div>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <div>Total Reward</div>
          <div className="font-pretendard  font-medium">(Fixed)</div>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <div>Reward Per</div>
          <div className="font-pretendard font-medium ">$PUGGY</div>
        </div>
        <div className="flex  justify-center">0</div>
        <div className="flex  justify-center">0</div>
        <div className="flex  justify-center">0</div>
      </div>

      <button className=" relative w-full h-14  rounded-full" style={{ backgroundColor: "rgba(249, 160, 62, 1)" }}>
        <div className="absolute inset-1 border-2 border-black rounded-full flex items-center justify-center">
          <div className="">STAKE</div>
        </div>
      </button>

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
