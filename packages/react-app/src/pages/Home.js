import CardComp from "../components/CardComp";
import { factoryContract } from "../constants";
import { useCall } from "@usedapp/core";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {

	const [items, setItems] = useState([])
	const { value } = useCall(
		{
			contract: factoryContract,
			method: "getActiveListings",
			args: []
		}
	) ?? {}

	useEffect(() => {
		setItems(value);
	}, [value]);
	if (!items?.length) return <Spinner animation="border" variant="light" />;
	const cards = (
		<Container fluid>
			<Row>
				{items[0].map((item) => {
					return (
						<Col key={item}>
							<br />
							<CardComp item={item} />
							<br />
						</Col>
					);
				})}
			</Row>
		</Container>
	);

	return <div>{items.length > 0 && cards}</div>;
}

export default Home;
