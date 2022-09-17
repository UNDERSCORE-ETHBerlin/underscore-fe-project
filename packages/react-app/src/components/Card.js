import { useEffect } from "react";
import { listingContract } from "../constants";
import { useCall } from "@usedapp/core";

const Card = ({ item }) => {
	// useEffect(() => {
	// 	items?.map((item) => {

	const { value } =
		useCall({
			contract: listingContract,
			method: "getImageURL",
			args: [],
		}) ?? {};
	console.log(value);
	// 	});
	// }, [items]);
	// if (!items) return <div>Loading</div>;

	return <div>{item}</div>;
};

export default Card;
