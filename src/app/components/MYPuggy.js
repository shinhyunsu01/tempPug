"use client";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { totalStaked } from "../state/Account";
import Ttile from "./Ttile";

export default function MYPuggy() {
  const titleArr = ["Total Staked", "Available $PUGGY", "Staking Amount", "Reward Received", "Reward Claimable"];
  const userTotalStaked = useRecoilValue(totalStaked);

  const [userData, setUserData] = useState({
    totalStaked: 0,
  });

  useEffect(() => {
    setUserData({ totalStaked: String(userTotalStaked) });
  }, [userTotalStaked]);

  return (
    <div className=" max-w-7xl w-full h-full rounded-2xl flex items-center flex-col  bg-[#F9A03ECC] bg-opacity-80 shadow-xl pb-10 px-10 my-8">
      <Ttile str="MY PUGGY" />
      <div className="w-full">
        <div className="font-pretendard w-full grid grid-cols-5 pb-6 text-xs md:text-sm">
          {titleArr.map((title) => (
            <div className="text-center" key={title}>
              {title}
            </div>
          ))}
        </div>
        <hr className="w-full border-black border-3px " />
        <div className="font-pretendard w-full grid grid-cols-5  py-4 text-xs">
          <div className="text-center">{userData.totalStaked}</div>
          <div className="text-center">0</div>
          <div className="text-center">0</div>
          <div className="text-center">0</div>
          <div className="text-center">0</div>
        </div>
        <hr className="w-full border-black border-3px " />
      </div>
    </div>
  );
}
