import "./index.css";

import { DAppProvider, Mainnet } from "@usedapp/core";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

// IMPORTANT, PLEASE READ
// To avoid disruptions in your app, change this to your own Infura project id.
// https://infura.io/register
const INFURA_PROJECT_ID = "529670718fd74cd2a041466303daecd7";
const config = {
	readOnlyChainId: Mainnet.chainId,
	readOnlyUrls: {
		[Mainnet.chainId]: "https://mainnet.infura.io/v3/" + INFURA_PROJECT_ID,
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
