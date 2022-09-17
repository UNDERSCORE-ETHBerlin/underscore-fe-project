import { useNavigate } from "react-router-dom"
import { Navbar, Nav, Container, Stack } from "react-bootstrap"
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import logo from "../assets/images/logo.gif"
import { Button } from "./";
import Avatar from "boring-avatars";
import { useEffect, useState } from "react";

const Navigation = () => {

	const navigate = useNavigate();
	const ens = useLookupAddress();

	const [address, setAddress] = useState("");
	const { account, activateBrowserWallet, deactivate, error } = useEthers();

	useEffect(() => {
		if (ens) {
			setAddress(ens);
		} else if (account) {
			setAddress(shortenAddress(account));
		} else {
			setAddress("");
		}
	}, [account, ens, setAddress]);

	useEffect(() => {
		if (error) {
			console.error("Error while connecting wallet:", error.message);
		}
	}, [error]);

	return (
		<Navbar expand="lg" className="navbar-theme" variant="dark">
			<Container fluid>
				<Navbar.Brand href="/">
					<img src={logo} width="240" height="40" className="" alt="" />
				</Navbar.Brand>

				<Navbar.Collapse id="navbarScroll">
					<Nav 
						className="me-auto my-2 my-lg-0"
            			style={{ maxHeight: '100px' }}
            			navbarScroll
            		>
						<></>
					</Nav>

					<Nav>
						{ address !== "" ?
							<Button 
								onClick={() => {
									navigate("/create")
								}}
							>
								Create
							</Button>
						:
							<></>
						}

						{ address !== "" ?
							<Button
								onClick={() => {
									navigate("/profile")
								}}
							>	
								<Stack
									direction="horizontal" 
									gap={2}
								>
									<Avatar
										size={24}
										name={address}
										variant="pixel"
										colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
									/>
								</Stack>
							</Button>
						:
							<></>
						}

						<Button
							onClick={() => {
								if (!account) {
									activateBrowserWallet();
								} else {
									deactivate();
								}
							}}
							style={{ color: address === "" ? "white" : "red" }}
						>
							{ address === "" ? 
								"Connect Wallet" 
							:
								"Disconnect"
							}
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;