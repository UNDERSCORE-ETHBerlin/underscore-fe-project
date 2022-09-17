import CardComp from "../components/Card";
import { factoryContract } from "../constants";
import { useCall } from "@usedapp/core";
import { useEffect, useState } from "react";
function Home() {
	const [items, setItems] = useState([]);
	const { value } =
		useCall({
			contract: factoryContract,
			method: "getActiveListings",
			args: [],
		}) ?? {};
	console.log("items", items);
	useEffect(() => {
		setItems(value);
	}, [value]);
	if (!items?.length) return <div>Loading</div>;
	return (
		<div>
			{items?.map((item) => {
				return <CardComp key={item} item={item} />;
			})}
		</div>
	);
}

export default Home;
