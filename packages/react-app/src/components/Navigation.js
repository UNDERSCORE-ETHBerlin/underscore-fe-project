import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"
import WalletButton from "./WalletButton";
import logo from "../assets/images/logo.png"

const Navigation = () => {
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
						<Nav.Link as={Link} to="/create" className="navlink-theme">
							Create
						</Nav.Link>
						
						<Nav.Link as={Link} to="/profile" className="navlink-theme">
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