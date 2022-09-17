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

function App() {
	// Read more about useDapp on https://usedapp.io/
	const { error: contractCallError, value: tokenBalance } =
		useCall({
			contract: new Contract(addresses.ceaErc20, abis.erc20),
			method: "balanceOf",
			args: ["0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C"],
		}) ?? {};
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
