"use client";

import { createPublicClient, fallback, http, getContract } from "viem";
import { useWalletClient } from "wagmi";
import { polygon, polygonAmoy } from "viem/chains";

const chain = process.env.NEXT_PUBLIC_AMOY_CHAIN === "true" ? polygonAmoy : polygon;

export const useSignedContract = (address, abi) => {
  const { data: walletClient } = useWalletClient();

  const contract = getContract({
    address,
    abi,
    client: {
      public: publicClient,
      wallet: walletClient,
    },
  });

  return contract ? contract : null;
};

const getAlchemyHttp = () => {
  const apiKey = "3x6kroVa1oRS-v66dIe327HUQwHdIdHr";

  return http(`https://polygon-amoy.g.alchemy.com/v2/${apiKey}`);
};

export const publicClient = createPublicClient({
  chain,
  transport: fallback([getAlchemyHttp()]),
});
