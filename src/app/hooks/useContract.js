"use client";

import token from "@/app/abi/PuggyCoin.json";
import { useState, useEffect } from "react";
import { useSignedContract, publicClient } from "@/app/hooks/useConnector";
import { parseUnits, formatUnits } from "viem";

const COIN_DECIMALS = 18;
const COIN_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_ADDRESS;

const useContract = (address) => {
  //const [userTotalStaked, setUserTotalStaked] = useRecoilState(totalStaked);

  const tokenAddress = COIN_ADDRESS;
  const tokenABI = token.abi;
  const tokenContract = useSignedContract(tokenAddress, tokenABI);

  const getBalance = async () => {
    try {
      let token = await tokenContract.read.balanceOf([address]);
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

  const handletransfer = async ({ toAddress, amount }) =>
    new Promise(async (resolve, reject) => {
      try {
        const hash = await tokenContract.write.staking([parseUnits(amount, COIN_DECIMALS)]);
        const transaction = await publicClient.waitForTransactionReceipt({
          hash,
        });

        if (transaction.status === "success") {
          resolve();
        } else {
          throw new Error(transaction);
        }
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });

  const allowance = async (spendAddress) => {
    try {
      let token = await tokenContract.read.allowance([address, spendAddress]);
      if (Number(token) === 0) {
        return {
          res: false,
          error: "Fail",
        };
      }
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

  const approve = async (spendAddress, amount) => {
    try {
      let token = await tokenContract.write.approve([spendAddress, parseUnits(amount.toString(), COIN_DECIMALS)]);
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

  useEffect(() => {
    if (address) {
    }
  }, [address]);

  return {
    getBalance,
    transfer: handletransfer,
    allowance,
    approve,
  };
};

export default useContract;
