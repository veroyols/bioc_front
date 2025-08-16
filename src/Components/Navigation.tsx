import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <Navbar expand="lg" bg="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={"../../public/gene.png"}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />{" "}
                    vitamina
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about">
                        About
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
