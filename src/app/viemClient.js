// lib/viemClient.js

import { createPublicClient, http } from "viem";
import { polygonAmoy } from "viem/chains";
import { AlchemyProvider } from "@alch/alchemy-web3";

const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY; // .env.local에 API 키를 저장하세요

// Alchemy HTTP Provider 설정
const alchemyProvider = new AlchemyProvider("homestead", ALCHEMY_API_KEY);

export const client = createPublicClient({
  chain: polygonAmoy,
  transport: http(alchemyProvider.connection.url),
});
