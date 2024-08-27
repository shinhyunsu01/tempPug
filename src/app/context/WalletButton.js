"use client";

import { useWeb3Modal, useWalletInfo } from "@web3modal/wagmi/react";
import { useEffect, useState } from "react";
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

  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function fetchBalance() {
      const contractAddress = address; // 스마트 컨트랙트 주소
      const walletAddress = process.env.NEXT_PUBLIC_TOKEN_ADDRESS; // 조회하려는 지갑 주소

      // 불러온 ABI와 컨트랙트 주소를 사용하여 컨트랙트 인스턴스 생성
      const contract = client.createContract({
        address: contractAddress,
        abi: myContractABI,
      });

      // 'balanceOf' 함수 호출 예제 (필요에 따라 함수 이름 변경)
      const balance = await contract.balanceOf(walletAddress);
      setBalance(balance);
    }

    fetchBalance();
  }, [address]);

  return (
    <button className=" relative w-full h-14  rounded-full font-termina-test" style={{ backgroundColor: "rgba(235, 252, 114, 1)" }} onClick={connect}>
      <div className="absolute inset-1 border-2 border-black rounded-full flex items-center justify-center">
        <div className="">{label} </div>
      </div>
    </button>
  );
}
