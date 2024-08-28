import { atom } from "recoil";

export const userAccountAddress = atom({
  key: "UserAccountAddress",
  default: null,
});

export const userTotalStakedRecoil = atom({
  key: "UserTotalStaked",
  default: null,
});

export const totalStakedRecoil = atom({
  key: "TotalStaked",
  default: null,
});
