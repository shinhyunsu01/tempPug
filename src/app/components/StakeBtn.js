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
  });
  const userTotalStaked = useRecoilValue(userTotalStakedRecoil);
  const [err, setErr] = useState(null);
  const userAddress = useRecoilValue(userAccountAddress);
  const { allowance, approve } = useContract(userAddress);
  const { staking } = useStContract();
  const stakeOnClick = async () => {
    const allowanceRes = await allowance(stTokenAddress);
    console.log("allowanceRes", allowanceRes);
    if (allowanceRes.res) {
      setLoading((prevState) => ({ ...prevState, stake: true }));
      const approveRes = await approve(stTokenAddress, amount);
    } else {
      setErr(allowanceRes.error);
    }
    setLoading((prevState) => ({ ...prevState, stake: false }));
  };

  const unstakeOnClick = async (amount) => {
    const allowanceRes = await allowance(stTokenAddress);
    const userTotalStakedNumber = parseInt(userTotalStaked, 10);

    if (allowanceRes.res) {
      setLoading((prevState) => ({ ...prevState, unStake: true }));

      const approveRes = await approve(userAddress, amount);

      if (approveRes.res) {
        const stakingRes = await staking(amount);
      } else {
        setErr(approveRes.error);
      }
    } else {
      setErr(allowanceRes.error);
    }
    setLoading((prevState) => ({ ...prevState, stake: false }));
  };

  const claimOnClick = async () => {};

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
          className="hover:opacity-80 py-2  rounded-full"
          style={{ background: "rgba(173, 164, 154, 1)" }}
        >
          UNSTAKE
        </button>
        <button
          disabled={userAddress == null}
          onClick={claimOnClick}
          className="hover:opacity-80 py-2 rounded-full "
          style={{ backgroundColor: "rgba(235, 252, 114, 1)" }}
        >
          Reward Claim
        </button>
      </div>
    </>
  );
}
