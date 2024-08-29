"use client";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { totalStakedRecoil } from "../state/Account";

export default function PubLicData() {
  const [tvlVal, setTvlVal] = useState("0");
  const tvl = useRecoilValue(totalStakedRecoil);

  const read = async () => {
    setTvlVal(tvl);
  };

  useEffect(() => {
    async function fetchData() {
      // 외부 API 호출
      const res = await fetch("https://info.puggy.world/usd");
      const result = await res.json();
      console.log("resul", result);
      //setData(result);
      //setLoading(false);
    }

    fetchData();
    read();
  }, [tvl]);

  return (
    <div className=" w-full grid grid-cols-3 grid-rows-2 font-termina-test text-xs text-white">
      <div className="flex  justify-center">
        <div>TVL</div>
      </div>
      <div className="flex flex-col  justify-center items-center">
        <div>Total Reward</div>
        <div className="font-pretendard  font-medium">(Fixed for 2 Weeks)</div>
      </div>
      <div className="flex flex-col  justify-center items-center">
        <div>Reward Per</div>
        <div className="font-pretendard font-medium ">$PUGGY</div>
      </div>
      <div className="flex  justify-center">{tvlVal}</div>
      <div className="flex  justify-center">4M $PUGGY</div>
      <div className="flex  justify-center">0</div>
    </div>
  );
}
