import Main from "../components/Main";
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
	return (
		<div>
			<Main items={items} />
		</div>
	);
}

export default Home;
