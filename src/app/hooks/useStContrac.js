"use client";

import token from "@/app/abi/StakingCoin.json";
import { useState, useEffect } from "react";
import { useSignedContract } from "@/app/hooks/useConnector";
import { parseUnits, formatUnits } from "viem";
import { useRecoilState, useRecoilValue } from "recoil";
import { totalStakedRecoil, userAccountAddress, userTotalStakedRecoil } from "../state/Account";

const COIN_DECIMALS = 18;
const COIN_ADDRESS = process.env.NEXT_PUBLIC_ST_TOKEN_ADDRESS;

const useStContract = () => {
  const userAddress = useRecoilValue(userAccountAddress);
  const [userTotalStaked, setUserTotalStaked] = useRecoilState(userTotalStakedRecoil);
  const [totalState, setTotalState] = useRecoilState(totalStakedRecoil);
  const tokenAddress = COIN_ADDRESS;
  const tokenABI = token.abi;
  const tokenContract = useSignedContract(tokenAddress, tokenABI);

  const staking = async (amount) => {
    try {
      console.log("stakingamount", amount);

      let token = await tokenContract.write.staking([parseUnits(amount.toString(), COIN_DECIMALS)]);

      const transaction = await publicClient.waitForTransactionReceipt({
        token,
      });

      if (transaction.status === "success") {
        return {
          res: true,
          token,
        };
      }
    } catch (error) {
      const errorMessage = error.message || error.toString();
      const firstLine = errorMessage.split("\n")[0];
      return {
        res: false,
        error: firstLine,
      };
    }
  };

  const unstaking = async (amount) => {
    try {
      let token = await tokenContract.write.unStaking([parseUnits(amount.toString(), COIN_DECIMALS)]);
      const transaction = await publicClient.waitForTransactionReceipt({
        token,
      });

      if (transaction.status === "success") {
        return {
          res: true,
          token,
        };
      }
    } catch (error) {
      const errorMessage = error.message || error.toString();
      const firstLine = errorMessage.split("\n")[0];
      return {
        res: false,
        error: firstLine,
      };
    }
  };

  const getTotalStaking = async () => {
    try {
      let token = formatUnits(await tokenContract.read.getTotalStaking(), 18);
      console.log("getTotalStaking", token);
      return {
        res: true,
        token,
      };
    } catch (error) {
      const errorMessage = error.message || error.toString();
      const firstLine = errorMessage.split("\n")[0];
      return {
        res: false,
        error: firstLine,
      };
    }
  };

  const getUserStakingAmount = async (address) => {
    try {
      let token = formatUnits(await tokenContract.read.getUserStakingAmount([address]), 18);
      console.log("getUserStakingAmount", token);
      return {
        res: true,
        token,
      };
    } catch (error) {
      const errorMessage = error.message || error.toString();
      const firstLine = errorMessage.split("\n")[0];
      return {
        res: false,
        error: firstLine,
      };
    }
  };

  const readData = async () => {
    const resGetUserStakingAmount = await getUserStakingAmount(userAddress);
    setUserTotalStaked(resGetUserStakingAmount.token);
    const resGetTotalStaking = await getTotalStaking();
    setTotalState(resGetTotalStaking.token);
  };

  useEffect(() => {
    if (userAddress != null) {
      readData();
    }
  }, [userAddress]);

  return {
    getTotalStaking,
    staking,
    unstaking,
    getUserStakingAmount,
  };
};

export default useStContract;
