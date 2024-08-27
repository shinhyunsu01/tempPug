import Ttile from "./Ttile";

export default function HowItWorks() {
  return (
    <div className="max-w-7xl text-xs  rounded-2xl flex items-center flex-col  bg-[#F9A03ECC] bg-opacity-80 shadow-xl py-4 ">
      <Ttile str="HOW IT WORKS" />
      <div className="w-full h-full grid grid-cols-4 space-x-4 px-4 md:px-20  md:pb-10 text-sm">
        <div className="bg-black rounded-3xl  h-56 flex items-center flex-col px-4 ">
          <div className="bg-black rounded-3xl h-8 w-1/2 -mt-3 flex  justify-center  text-white ">
            <div className="mt-2">1</div>
          </div>
          <div className=" bg-[#F9A03E] w-full rounded-full py-2 text-center my-2">Connect Wallet</div>
          <div className="text-white flex items-center h-full justify-center my-4 font-pretendard text-xs">Connect Metamask to the PUGGY Staking Platfrom.</div>
        </div>
        <div className="bg-black rounded-3xl  h-56 flex items-center flex-col px-4 mt-20">
          <div className="bg-black rounded-3xl h-8 w-1/2 -mt-3 flex  justify-center  text-white ">
            <div className="mt-2">2</div>
          </div>
          <div className=" bg-[#F9A03E] w-full rounded-full py-2 text-center my-2">Staking</div>
          <div className="text-white flex items-center h-full justify-center my-4 font-pretendard text-xs">
            Enter the specific number of Puggy tokens and confirm the transaction.
          </div>
        </div>
        <div className="bg-black rounded-3xl  h-56 flex items-center flex-col px-4 ">
          <div className="bg-black rounded-3xl h-8 w-1/2 -mt-3 flex  justify-center  text-white ">
            <div className="mt-2">3</div>
          </div>
          <div className=" bg-[#F9A03E] w-full rounded-full py-2 text-center my-2">Receive Rewards</div>
          <div className="text-white flex items-center h-full justify-center my-4 font-pretendard text-xs">
            After 14 days after staking transaction, Rewards are claimable.
          </div>
        </div>
        <div className="bg-black rounded-3xl  h-56 flex items-center flex-col px-4 mt-20 ">
          <div className="bg-black rounded-3xl h-8 w-1/2 -mt-3 flex  justify-center  text-white ">
            <div className="mt-2">4</div>
          </div>
          <div className=" bg-[#F9A03E] w-full rounded-full py-2 text-center my-2">Unstake</div>
          <div className="text-white flex items-center h-full justify-center my-4 font-pretendard text-xs">
            After 14 days users can withdraw the staked funds.
          </div>
        </div>
      </div>
    </div>
  );
}
