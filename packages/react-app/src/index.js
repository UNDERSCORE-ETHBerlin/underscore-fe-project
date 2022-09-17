import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DAppProvider, Goerli } from "@usedapp/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

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
