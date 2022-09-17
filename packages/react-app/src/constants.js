import { utils } from "ethers";
import { addresses, abis } from "@my-app/contracts";
import { Contract } from "@ethersproject/contracts";

const factoryInferface = new utils.Interface(abis.factory);
const listingInterface = new utils.Interface(abis.listing);
export const factoryContract = new Contract(addresses.factory, factoryInferface);
export const listingContract = new Contract(addresses.listing, listingInterface);
