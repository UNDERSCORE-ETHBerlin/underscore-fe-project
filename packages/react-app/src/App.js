import React from "react";
import Navigation from "./components/Navbar";
import { Body, Container, Header } from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Profile from "./pages/Profile";

function App() {
	// Read more about useDapp on https://usedapp.io/

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
