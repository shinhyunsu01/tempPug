"use client";
import { createWeb3Modal } from "@web3modal/wagmi/react";

import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { polygonAmoy } from "wagmi/chains";
import { cookieStorage, createStorage } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const chains = [polygonAmoy];

const metadata1 = {
  name: "puggyStaking",
  description: "puggyStaking",
  url: "staking.puggy.world",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: metadata1,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: "light",
  themeVariables: {
    "--w3m-color-mix": "#00DCFF",
    "--w3m-color-mix-strength": 20,
  },
});

const Connector = ({ children }) => (
  <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </WagmiProvider>
);

export default Connector;
