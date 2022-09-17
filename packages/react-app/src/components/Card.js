import { useCall } from "@usedapp/core";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { utils } from "ethers";
import { abis } from "@my-app/contracts";
import { Contract } from "@ethersproject/contracts";

const listingInterface = new utils.Interface(abis.listing);
const CardComp = ({ item }) => {
	const listingContract = new Contract(item, listingInterface);

	const { value: imageUrl } =
		useCall({
			contract: listingContract,
			method: "getImageURL",
			args: [],
		}) ?? {};
	const { value: itemDesc } =
		useCall({
			contract: listingContract,
			method: "getItemDesc",
			args: [],
		}) ?? {};
	const { value: itemName } =
		useCall({
			contract: listingContract,
			method: "getItemName",
			args: [],
		}) ?? {};
	console.log("imageUrl", imageUrl);
	console.log("itemDesc", itemDesc);
	console.log("itemName", itemName);
	const handleBuy = () => {
		console.log("buy clicked");
	};
	return imageUrl && itemName && itemDesc ? (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={imageUrl[0]} height="215px" style={{ objectFit: "contain" }} />
			<Card.Body>
				<Card.Title style={{ color: "black" }}>Name: {itemName[0]}</Card.Title>
				{<Card.Text style={{ color: "black" }}>Desc: {itemDesc[0]}</Card.Text>}{" "}
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
