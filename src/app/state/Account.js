import { atom } from "recoil";

export const userAccountAddress = atom({
  key: "UserAccountAddress",
  default: null,
});

export const userTotalStakedRecoil = atom({
  key: "UserTotalStaked",
  default: null,
});

export const userAvailablePuggyRecoil = atom({
  key: "UserAvailablePuggyRecoil",
  default: null,
});

export const userStakingAmountRecoil = atom({
  key: "UserStakingAmountRecoil",
  default: null,
});

export const userReceivedRecoil = atom({
  key: "UserStakingReceivedRecoil",
  default: null,
});

export const userClaimRecoil = atom({
  key: "UserStakingClaimRecoil",
  default: null,
});

export const totalStakedRecoil = atom({
  key: "TotalStaked",
  default: null,
});
