import { ethers } from "ethers";

export const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
};

export const getETHPrice = (price) => {
  const balanceInEth = ethers.utils.formatEther(price);
  const rounded_balanceInEth = Math.round(balanceInEth * 10000) / 10000;
  return rounded_balanceInEth;
};
