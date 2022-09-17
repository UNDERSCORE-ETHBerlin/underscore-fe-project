import { utils } from "ethers";
import { addresses, abis } from "@my-app/contracts";
import { Contract } from "@ethersproject/contracts";

const factoryInferface = new utils.Interface(abis.factory);
export const factoryContract = new Contract(addresses.factory, factoryInferface);
export const arbitrator = "0x5cF9559C2DC7200255DADE35d2988E6Bf05ABbFc";
export const fakeUSDC = "0x0f8Af786BECF7830b0CA387D2Cd7894959Bb2beB";
