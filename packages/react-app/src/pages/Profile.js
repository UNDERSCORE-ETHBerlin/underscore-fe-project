import { useEffect, useState } from "react"
import { Tab, Tabs, Container, Row, Col } from "react-bootstrap"
import ItemsGrid from "../components/ItemsGrid"
import CardComp from "../components/CardComp"

const Profile = () => {

	const [items, setItems] = useState([])

	const dummyItems = [
		{	
			itemUrl: "jsdnfjkd",
			itemName: "djkfnsdj",
			itemDesc: "jksdnffnsd"
		},
		{	
			itemUrl: "jsdnfjkd",
			itemName: "djkfnsdj",
			itemDesc: "jksdnffnsd"
		},
		{	
			itemUrl: "jsdnfjkd",
			itemName: "djkfnsdj",
			itemDesc: "jksdnffnsd"
		},
		{	
			itemUrl: "jsdnfjkd",
			itemName: "djkfnsdj",
			itemDesc: "jksdnffnsd"
		},
		{	
			itemUrl: "jsdnfjkd",
			itemName: "djkfnsdj",
			itemDesc: "jksdnffnsd"
		},
		{	
			itemUrl: "jsdnfjkd",
			itemName: "djkfnsdj",
			itemDesc: "jksdnffnsd"
		},
		{	
			itemUrl: "jsdnfjkd",
			itemName: "djkfnsdj",
			itemDesc: "jksdnffnsd"
		},
		{	
			itemUrl: "jsdnfjkd",
			itemName: "djkfnsdj",
			itemDesc: "jksdnffnsd"
		},
	]

	return (
		<>
			<Tabs
				defaultActiveKey="profile"
				id="fill-tab-example"
				className="mb-3"
				fill
		    >
		    	<Tab eventKey="listings" title="Listings">
			    	<Container fluid>
						<Row>
							{ dummyItems?.map((item) => {
								return(<Col>
									<br/>
									<CardComp 
										key={item} 
										item={item} 
									/>
									<br/>
								</Col>)
							})}
						</Row>
					</Container>
		    	</Tab>

		    	<Tab eventKey="sold" title="Sold">
		    		dsjfnjkn
		    	</Tab>
		    </Tabs>
		</>
	)
}

export default Profile;