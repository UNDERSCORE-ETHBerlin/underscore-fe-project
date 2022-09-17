import { useCall, useContractFunction } from "@usedapp/core";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { utils } from "ethers";
import { abis } from "@my-app/contracts";
import { Contract } from "@ethersproject/contracts";
import { fakeUSDCContract } from "../constants";
const listingInterface = new utils.Interface(abis.listing.abi);
const CardComp = ({ itemAddress, isListing, forSale, purchased }) => {
	const listingContract = new Contract(itemAddress, listingInterface);
	const { state: buyState, send: buy } = useContractFunction(listingContract, "buy");
	const { state: confirmArrivalState, send: confirmArrival } = useContractFunction(listingContract, "confirmArrival");
	const { state: approveAllowanceState, send: approveAllowance } = useContractFunction(fakeUSDCContract, "approve");

	const { value: data } =
		useCall({
			contract: listingContract,
			method: "getFrontEndData",
			args: [],
		}) ?? {};
	const handleBuy = async () => {
		await approveAllowance(itemAddress, data[0]?.amountWanted_);
		await buy();
	};

	const handleClaim = () => {
		console.log("claimed");
	};

	const onConfirmArrival = async () => {
		console.log("onConfirmArrival");
		await confirmArrival();
	};

	// console.log("approveAllowanceState", approveAllowanceState);
	// console.log("buyState", buyState);
	console.log("data", data);
	console.log("confirmArrivalState :>> ", confirmArrivalState);
	return data ? (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={data[0]?.imageURL_} height="215px" style={{ objectFit: "contain" }} />
			<Card.Body>
				<Card.Title style={{ color: "black" }}>Name: {data[0]?.itemName_}</Card.Title>
				<Card.Title style={{ color: "black" }}>Price: {utils.formatEther(data[0]?.amountWanted_)} USDC</Card.Title>
				{<Card.Text style={{ color: "black" }}>Desc: {data[0]?.itemDesc_}</Card.Text>}
				{forSale && (
					<Button variant="primary" onClick={handleBuy}>
						Buy Item
					</Button>
				)}
				{isListing && (
					<Button variant="primary" onClick={handleClaim}>
						Claim Item
					</Button>
				)}
				{purchased && !data[0]?.buyerConfirm_ ? (
					<Button variant="primary" onClick={onConfirmArrival}>
						Confirm Arrival
					</Button>
				) : (
					<Button variant="primary" disabled>
						Arrived and confirmed
					</Button>
				)}
			</Card.Body>
		</Card>
	) : (
		<></>
	);
};

export default CardComp;
