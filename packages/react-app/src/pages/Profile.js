import { Tab, Tabs, Container, Row, Col } from "react-bootstrap";
import { useCall, useEthers } from "@usedapp/core";
import { factoryContract } from "../constants";
import CardComp from "../components/CardComp";
const Profile = () => {
	const { account } = useEthers();

	const { value: data } =
		useCall({
			contract: factoryContract,
			method: "getSingleUserListings",
			args: [account],
		}) ?? {};
	return (
		<>
			<Tabs defaultActiveKey="listings" id="fill-tab-example" className="mb-3" fill>
				<Tab eventKey="listings" title="Your Listings">
					<Container fluid>
						<Row>
							{data && data[0]?.length > 0
								? data[0].map((item) => {
										return (
											<Col key={item}>
												<br />
												<CardComp itemAddress={item} />
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
					No Purchased Items
				</Tab>
			</Tabs>
		</>
	);
};

export default Profile;
