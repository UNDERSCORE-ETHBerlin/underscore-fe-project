import { Tab, Tabs, Container, Row, Col } from "react-bootstrap";
import { useCall, useEthers } from "@usedapp/core";
import { factoryContract } from "../constants";
import CardComp from "../components/CardComp";
const Profile = () => {
	const { account } = useEthers();

	const props =
		useCall({
			contract: factoryContract,
			method: "getSingleUserListings",
			args: [account],
		}) ?? {};
	console.log("props", props);
	const { value: listedItems } = props;
	const { value: purchasedItems } =
		useCall({
			contract: factoryContract,
			method: "getSingleUserPurchases",
			args: [account],
		}) ?? {};
	console.log("purchasedItems :>> ", purchasedItems);
	return (
		<>
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
		</>
	);
};

export default Profile;
