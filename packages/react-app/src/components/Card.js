import { useEffect } from "react";
import { listingContract } from "../constants";
import { useCall } from "@usedapp/core";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardComp = ({ item }) => {
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

	return imageUrl && itemName && itemDesc ? (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={imageUrl[0]} />
			<Card.Body>
				<Card.Title style={{ color: "black" }}>{itemName[0]}</Card.Title>
				{<Card.Text style={{ color: "black" }}>{itemDesc[0]}</Card.Text>} <Button variant="primary">Buy Item</Button>
			</Card.Body>
		</Card>
	) : (
		<></>
	);
};

export default CardComp;
