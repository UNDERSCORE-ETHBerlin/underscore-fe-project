import { useCall } from "@usedapp/core";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { utils } from "ethers";
import { abis } from "@my-app/contracts";
import { Contract } from "@ethersproject/contracts";

const listingInterface = new utils.Interface(abis.listing.abi);
const CardComp = ({ item }) => {
	const listingContract = new Contract(item, listingInterface);

	const { value: data } =
		useCall({
			contract: listingContract,
			method: "getFrontEndData",
			args: [],
		}) ?? {};

	const handleBuy = () => {
		console.log("buy clicked");
	};
	return data[0] ? (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={data[0]?.imageURL_} height="215px" style={{ objectFit: "contain" }} />
			<Card.Body>
				<Card.Title style={{ color: "black" }}>Name: {data[0]?.itemName_}</Card.Title>
				{<Card.Text style={{ color: "black" }}>Desc: {data[0]?.itemDesc_}</Card.Text>}{" "}
				<Button variant="primary" onClick={handleBuy}>
					Buy Item
				</Button>
			</Card.Body>
		</Card>
	) : (
		<></>
	);
};

export default CardComp;
