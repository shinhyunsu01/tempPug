"use client";

import { useEffect, useState } from "react";
import useStContract from "../hooks/useStContrac";

export default function PubLicData() {
  const [tvlVal, setTvlVal] = useState("0");
  const { getTotalStaking } = useStContract();

  const read = async () => {
    const { res, token } = await getTotalStaking();

    setTvlVal(String(token).slice(0, -1));
  };

  useEffect(() => {
    read();
  }, []);

  return (
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
      <div className="flex  justify-center">{tvlVal}</div>
      <div className="flex  justify-center">0</div>
      <div className="flex  justify-center">0</div>
    </div>
  );
}
