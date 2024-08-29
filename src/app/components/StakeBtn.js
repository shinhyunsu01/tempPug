"use client";

import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useContract from "../hooks/useContract";
import useStContract from "../hooks/useStContrac";
import { userAccountAddress, userTotalStakedRecoil } from "../state/Account";
import Loading from "./Loading";
export default function StakeBtn({ amount, setAmount }) {
  const stTokenAddress = process.env.NEXT_PUBLIC_ST_TOKEN_ADDRESS;
  const [loading, setLoading] = useState({
    stake: false,
    unStake: false,
    claim: false,
  });
  const userTotalStaked = useRecoilValue(userTotalStakedRecoil);
  const [err, setErr] = useState(null);
  const userAddress = useRecoilValue(userAccountAddress);
  const { allowance, approve } = useContract(userAddress);
  const { staking, unstaking, claim } = useStContract();
  const stakeOnClick = async () => {
    setErr(null);
    const allowanceRes = await allowance(stTokenAddress);

    if (allowanceRes.res) {
      setLoading((prevState) => ({ ...prevState, stake: true }));
      if (!(Number(allowanceRes.token) > 0 && Number(allowanceRes.token) >= amount)) {
        const approveRes = await approve(stTokenAddress, amount);
        if (!approveRes.res) setErr(approveRes.error);
      }
      const stakingRes = await staking(amount);
      if (stakingRes.res) {
        setAmount(0);
      } else {
        setErr(approveRes.error);
      }
    } else {
      setErr(allowanceRes.error);
    }
    setLoading((prevState) => ({ ...prevState, stake: false }));
  };

  const unstakeOnClick = async () => {
    setErr(null);
    setLoading((prevState) => ({ ...prevState, unStake: true }));

    const stakingRes = await unstaking(amount);

    if (stakingRes.res) {
      setAmount(0);
    } else {
      setErr(stakingRes.error);
    }
    setLoading((prevState) => ({ ...prevState, unStake: false }));
  };

  const claimOnClick = async () => {
    setErr(null);
    setLoading((prevState) => ({ ...prevState, claim: true }));

    const stakingRes = await claim(amount);
    if (stakingRes.res) {
      setAmount(0);
    } else {
      setErr(stakingRes.error);
    }
    setLoading((prevState) => ({ ...prevState, claim: false }));
  };

  return (
    <>
      <button
        disabled={userAddress == null}
        onClick={stakeOnClick}
        className=" relative w-full h-14  rounded-full hover:opacity-80"
        style={{ backgroundColor: "rgba(249, 160, 62, 1)" }}
      >
        <div className="absolute inset-1 border-2 border-black rounded-full flex items-center justify-center">
          {loading.stake ? <Loading /> : <div>Stake</div>}
        </div>
      </button>
      <div className="font-termina-test text-red-500 w-full pt-2">{err}</div>

      <div className="w-full grid grid-cols-2 mt-8 space-x-2 font-termina-test">
        <button
          disabled={userAddress == null}
          onClick={unstakeOnClick}
          className="hover:opacity-80 py-2  rounded-full relative w-full h-full flex items-center justify-center"
          style={{ background: "rgba(173, 164, 154, 1)" }}
        >
          <div className="relative  rounded-full flex items-center justify-center">{loading.unStake ? <Loading /> : <div>Unstake</div>}</div>
        </button>
        <button
          disabled={userAddress == null}
          onClick={claimOnClick}
          className="hover:opacity-80 py-2 rounded-full relative"
          style={{ backgroundColor: "rgba(235, 252, 114, 1)" }}
        >
          <div className="  rounded-full flex items-center justify-center">{loading.claim ? <Loading /> : <div>Reward Claim</div>}</div>
        </button>
      </div>
    </>
  );
}
