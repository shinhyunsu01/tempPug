import { atom } from "recoil";

export const userAccountAddress = atom({
  key: "UserAccountAddress",
  default: null,
});

export const totalStaked = atom({
  key: "TotalStaked",
  default: null,
});
