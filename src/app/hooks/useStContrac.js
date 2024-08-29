"use client";

import token from "@/app/abi/StakingCoin.json";
import { useState, useEffect } from "react";
import { publicClient, useSignedContract } from "@/app/hooks/useConnector";
import { parseUnits, formatUnits } from "viem";
import { useRecoilState, useRecoilValue } from "recoil";
import { totalStakedRecoil, userAccountAddress, userClaimRecoil, userRewardRecoil, userTotalStakedRecoil } from "../state/Account";

const COIN_DECIMALS = 18;
const COIN_ADDRESS = process.env.NEXT_PUBLIC_ST_TOKEN_ADDRESS;

const useStContract = () => {
  const userAddress = useRecoilValue(userAccountAddress);
  const [userTotalStaked, setUserTotalStaked] = useRecoilState(userTotalStakedRecoil);
  const [totalState, setTotalState] = useRecoilState(totalStakedRecoil);
  const [userReward, setUserReward] = useRecoilState(userRewardRecoil);
  const [userClaim, setUserClaim] = useRecoilState(userClaimRecoil);

  const [stateUserAddress, setStateUserAddress] = useState(null);

  const tokenAddress = COIN_ADDRESS;
  const tokenABI = token.abi;
  const tokenContract = useSignedContract(tokenAddress, tokenABI);

  const staking = async (amount) => {
    return new Promise(async (resolve, reject) => {
      try {
        const hash = await tokenContract.write.staking([parseUnits(amount.toString(), COIN_DECIMALS)]);
        const transaction = await publicClient.waitForTransactionReceipt({
          hash,
        });

        if (transaction.status === "success") {
          const resRead = await userReadData();
          if (resRead)
            resolve({
              res: true,
              hash,
            });
        }
      } catch (error) {
        const errorMessage = error.message || error.toString();
        const firstLine = errorMessage.split("\n")[0];
        resolve({
          res: false,
          error: firstLine,
        });
      }
    });
  };

  const unstaking = async (amount) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("amount", amount);
        const hash = await tokenContract.write.unStaking([parseUnits(amount.toString(), COIN_DECIMALS)]);
        const transaction = await publicClient.waitForTransactionReceipt({
          hash,
        });

        if (transaction.status === "success") {
          const resRead = await userReadData();
          if (resRead)
            resolve({
              res: true,
              hash,
            });
        }
      } catch (error) {
        const errorMessage = error.message || error.toString();
        const firstLine = errorMessage.split("\n")[0];
        resolve({
          res: false,
          error: firstLine,
        });
      }
    });
  };

  const claim = async (amount) => {
    return new Promise(async (resolve, reject) => {
      try {
        const hash = await tokenContract.write.rewardClaim();
        const transaction = await publicClient.waitForTransactionReceipt({
          hash,
        });

        if (transaction.status === "success") {
          const resRead = await userReadData();
          if (resRead)
            resolve({
              res: true,
              hash,
            });
        }
      } catch (error) {
        const errorMessage = error.message || error.toString();
        const firstLine = errorMessage.split("\n")[0];
        resolve({
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

  const getUserReward = async (address) => {
    try {
      let token = parseFloat(formatUnits(await tokenContract.read.getUserClaimedReward([address]), 18)).toFixed(1);

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

  const userReadData = async () => {
    const resGetUserStakingAmount = await getUserStakingAmount(userAddress);
    setUserTotalStaked(resGetUserStakingAmount.token);

    const userReward = await getUserReward(userAddress);
    setUserReward(userReward.token);

    const userClaim = await getUserClaim(userAddress);
    setUserClaim(userClaim.token);

    if (resGetUserStakingAmount && userReward) {
      return true;
    }
  };
  const publicData = async () => {
    const resGetTotalStaking = await getTotalStaking();
    setTotalState(resGetTotalStaking.token);
  };

  useEffect(() => {
    if (userAddress != null) {
      setStateUserAddress(userAddress);
      userReadData();
    }
    publicData();
  }, [userAddress]);

  return {
    getTotalStaking,
    staking,
    unstaking,
    getUserStakingAmount,
    getUserReward,
    getUserClaim,
    claim,
    userReadData,
  };
};

export default useStContract;
