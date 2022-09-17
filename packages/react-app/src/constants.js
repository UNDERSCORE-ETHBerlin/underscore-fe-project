import { utils } from "ethers";
import { addresses, abis } from "@my-app/contracts";
import { Contract } from "@ethersproject/contracts";

const factoryInferface = new utils.Interface(abis.factory);
export const factoryContract = new Contract(addresses.factory, factoryInferface);
