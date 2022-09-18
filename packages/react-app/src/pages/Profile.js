import { Tab, Tabs, Container, Row, Col, Stack } from "react-bootstrap";
import { useCall, useEthers } from "@usedapp/core";
import { factoryContract } from "../constants";
import CardComp from "../components/CardComp";
import Avatar from "boring-avatars";

const Profile = () => {
	const { account } = useEthers();

	const { value: listedItems } =
		useCall({
			contract: factoryContract,
			method: "getSingleUserListings",
			args: [account],
		}) ?? {};
	const { value: purchasedItems } =
		useCall({
			contract: factoryContract,
			method: "getSingleUserPurchases",
			args: [account],
		}) ?? {};
	return (
		<Stack
			direction="vertical"
			gap={2}
			style={{
				margin: "auto",
				width: "80%",
				padding: "20px",
			}}
		>
			<Stack direction="vertical" gap={2}>
				<Avatar
					size={240}
					name={account}
					variant="pixel"
					colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
					style={{ textAlign: "center" }}
				/>

				<h2>{account}</h2>
			</Stack>
			<Tabs defaultActiveKey="listings" id="fill-tab-example" className="mb-3" fill>
				<Tab eventKey="listings" title="Your Listings">
					<Container fluid>
						<Row>
							{listedItems && listedItems[0]?.length > 0
								? listedItems[0].map((item) => {
										return (
											<Col key={item}>
												<br />
												<CardComp itemAddress={item} isListing />
												<br />
											</Col>
										);
								  })
								: "No Items Found"}
						</Row>
					</Container>
				</Tab>
				<Tab eventKey="sold" title="Sold">
					No Sold Items
				</Tab>
				<Tab eventKey="purchased" title="Purchased">
					{purchasedItems && purchasedItems[0]?.length > 0
						? purchasedItems[0].map((item) => {
								return (
									<Col key={item}>
										<br />
										<CardComp itemAddress={item} purchased />
										<br />
									</Col>
								);
						  })
						: "No Items Found"}
				</Tab>
			</Tabs>
		</Stack>
	);
};

export default Profile;
