"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useAccount, useDisconnect } from "wagmi";
import useStContract from "../hooks/useStContrac";
import { shortenAddress } from "../lib";
import { userAccountAddress } from "../state/Account";

export default function WalletButton() {
  const [userAddress, setUserAddress] = useRecoilState(userAccountAddress);
  //const [userTotalStaked, setUserTotalStaked] = useRecoilState(totalStakedRecoil);

  const { getUserStakingAmount } = useStContract();
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  const label = isConnected ? shortenAddress(address) : "ConnectWallet";

  const connect = async () => {
    await open();
  };
  const readUserData = async () => {
    const { token } = await getUserStakingAmount(address);

    //setUserTotalStaked(token);
  };

  useEffect(() => {
    if (address != undefined) {
      setUserAddress(address);
      readUserData();
    }
  }, [address]);

  return (
    <button className=" relative w-full h-14  rounded-full font-termina-test" style={{ backgroundColor: "rgba(235, 252, 114, 1)" }} onClick={connect}>
      <div className="absolute inset-1 border-2 border-black rounded-full flex items-center justify-center">
        <div className="">{label} </div>
      </div>
    </button>
  );
}
