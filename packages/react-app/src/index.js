import "./index.css";

import { DAppProvider, Goerli } from "@usedapp/core";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

// IMPORTANT, PLEASE READ
// To avoid disruptions in your app, change this to your own Infura project id.
// https://infura.io/register
const INFURA_PROJECT_ID = "8b60443ba0a642fd90aa5f5799b0321c";
const config = {
	readOnlyChainId: Goerli.chainId,
	readOnlyUrls: {
		[Goerli.chainId]: "https://goerli.infura.io/v3/" + INFURA_PROJECT_ID,
	},
};

ReactDOM.render(
	<React.StrictMode>
		<DAppProvider config={config}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</DAppProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
