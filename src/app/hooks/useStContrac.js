"use client";

import token from "@/app/abi/StakingCoin.json";
import { useState, useEffect } from "react";
import { publicClient, useSignedContract } from "@/app/hooks/useConnector";
import { parseUnits, formatUnits } from "viem";
import { useRecoilState, useRecoilValue } from "recoil";
import { totalStakedRecoil, userAccountAddress, userClaimRecoil, userTotalStakedRecoil } from "../state/Account";

const COIN_DECIMALS = 18;
const COIN_ADDRESS = process.env.NEXT_PUBLIC_ST_TOKEN_ADDRESS;

const useStContract = () => {
  const userAddress = useRecoilValue(userAccountAddress);
  const [userTotalStaked, setUserTotalStaked] = useRecoilState(userTotalStakedRecoil);
  const [totalState, setTotalState] = useRecoilState(totalStakedRecoil);
  const [userClaim, setUserClaim] = useRecoilState(userClaimRecoil);

  const tokenAddress = COIN_ADDRESS;
  const tokenABI = token.abi;
  const tokenContract = useSignedContract(tokenAddress, tokenABI);

  const staking = (amount) => {
    return new Promise(async (resolve, reject) => {
      try {
        const hash = await tokenContract.write.staking([parseUnits(amount.toString(), COIN_DECIMALS)]);
        const transaction = await publicClient.waitForTransactionReceipt({
          hash,
        });

        if (transaction.status === "success") {
          resolve({
            res: true,
            hash,
          });
        } else {
          throw new Error(transaction);
        }
      } catch (error) {
        const errorMessage = error.message || error.toString();
        const firstLine = errorMessage.split("\n")[0];
        reject({
          res: false,
          error: firstLine,
        });
      }
    });
  };

  const unstaking = async (amount) => {
    return new Promise(async (resolve, reject) => {
      try {
        const hash = await tokenContract.write.unstaking([parseUnits(amount.toString(), COIN_DECIMALS)]);
        const transaction = await publicClient.waitForTransactionReceipt({
          hash,
        });

        if (transaction.status === "success") {
          resolve({
            res: true,
            hash,
          });
        } else {
          throw new Error(transaction);
        }
      } catch (error) {
        const errorMessage = error.message || error.toString();
        const firstLine = errorMessage.split("\n")[0];
        reject({
          res: false,
          error: firstLine,
        });
      }
    });
  };

  const getTotalStaking = async () => {
    try {
      let token = parseFloat(String(formatUnits(await tokenContract.read.getTotalStaking(), 18))).toFixed(1);

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
      let token = parseFloat(String(formatUnits(await tokenContract.read.getUserStakingAmount([address]), 18))).toFixed(1);

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

  const getUserClaim = async (address) => {
    try {
      let token = parseFloat(formatUnits(await tokenContract.read.getUserReward([address]), 18)).toFixed(1);

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
    const userClaim = await getUserClaim(userAddress);
    setUserClaim(userClaim.token);
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
    getUserClaim,
  };
};

export default useStContract;
