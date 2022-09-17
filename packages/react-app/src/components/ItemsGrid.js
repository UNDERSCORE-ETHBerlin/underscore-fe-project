import { Container, Row, Col } from "react-bootstrap"
import CardComp from "./CardComp"

const ItemsGrid = (items) => {
	return(
		<Container>
			<Row>
				{ items?.map((item) => {
					<Col sm={4}>sm=4>
						<CardComp 
							key={item} 
							item={item} 
						/>
					</Col>
				})}
			</Row>
		</Container>
	)
}

export default ItemsGrid;