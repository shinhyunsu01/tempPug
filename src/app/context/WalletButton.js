"use client";

import { useWeb3Modal, useWalletInfo } from "@web3modal/wagmi/react";
import { useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { shortenAddress } from "../lib";

export default function WalletButton() {
  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  const label = isConnected ? shortenAddress(address) : "ConnectWallet";

  const connect = async () => {
    await open();
  };

  return (
    <button className=" relative w-full h-14  rounded-full font-termina-test" style={{ backgroundColor: "rgba(235, 252, 114, 1)" }} onClick={connect}>
      <div className="absolute inset-1 border-2 border-black rounded-full flex items-center justify-center">
        <div className="">{label} </div>
      </div>
    </button>
  );
}
