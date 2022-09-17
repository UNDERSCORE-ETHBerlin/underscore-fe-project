import { Contract } from "@ethersproject/contracts";
import { useCall } from "@usedapp/core";
import React from "react";
import Navigation from "./components/Navbar";
import { Body, Container, Header } from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import { addresses, abis } from "@my-app/contracts";
import { utils } from "ethers";

const factoryInferface = new utils.Interface(abis.factory);

function App() {
	// Read more about useDapp on https://usedapp.io/
	console.log("factoryInferface :>> ", factoryInferface);
	const { value } =
		useCall({
			contract: new Contract(addresses.factory, factoryInferface),
			method: "getActiveListings",
			args: [],
		}) ?? {};
	console.log("value", value);
	return (
		<Container>
			<Header>
				<Navigation />
			</Header>
			<Body>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</Body>
		</Container>
	);
}

export default App;
