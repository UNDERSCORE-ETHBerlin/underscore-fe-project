import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import { Body, Container, Header } from "./components";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import { PageNotFound } from "./pages/PageNotFound";

const App = () => {
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
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Body>
		</Container>
	);
};

export default App;
