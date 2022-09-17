import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import WalletButton from "./WalletButton";
const Navigation = () => {
	return (
		<Navbar expand="lg" bg="secondary" variant="dark">
			<Container>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/create">
							Create
						</Nav.Link>
						<Nav.Link as={Link} to="/profile">
							Profile
						</Nav.Link>
					</Nav>
					<Nav>
						<WalletButton />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
