import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">QuoKKa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline" className="flex-grow-1 justify-content-end">
            <Nav.Link className="mx-4" href="#products-container">
              Products
            </Nav.Link>
            <Nav.Link className="mx-4" href="#services-container">
              Services
            </Nav.Link>
            <Nav.Link className="mx-4" href="#about-us">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
