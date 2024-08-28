"use client";

import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useContract from "../hooks/useContract";
import useStContract from "../hooks/useStContrac";
import { userAccountAddress } from "../state/Account";
import Loading from "./Loading";
export default function StakeBtn() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const userAddress = useRecoilValue(userAccountAddress);
  const { allowance, approve } = useContract(userAddress);
  const { staking } = useStContract();
  const stakeOnClick = async () => {
    setErr(null);
    if (userAddress != null && amount > 0) {
      setLoading(true);
      const allowanceRes = await allowance(stTokenAddress);

      if (allowanceRes.res) {
        const approveRes = await approve(stTokenAddress, amount);

        if (approveRes) {
          const stakingRes = await staking(amount);
        } else {
          setErr(approveRes.error);
        }
      } else {
        setErr(allowanceRes.error);
      }
    } else if (amount == 0) {
      setErr("Amount 0 ");
    }
    setLoading(false);
  };

  return (
    <>
      <button
        disabled={userAddress == null}
        onClick={stakeOnClick}
        className=" relative w-full h-14  rounded-full"
        style={{ backgroundColor: "rgba(249, 160, 62, 1)" }}
      >
        <div className="absolute inset-1 border-2 border-black rounded-full flex items-center justify-center">{loading ? <Loading /> : <div>Stake</div>}</div>
      </button>
      <div className="font-termina-test text-red-500 w-full pt-2">{err}</div>
    </>
  );
}
