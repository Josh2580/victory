import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../custom.css";
import Logo from "../assets/logo.png";

function NavbarComp() {
  let expand = "md";

  return (
    <>
      <Navbar
        key={expand}
        fixed="top"
        expand={expand}
        // variant="secondary"
        // className="text-white"
        // bg="secondary"
        // className="bg-body-tertiary mb-3 shadow-sm"

        style={{
          boxShadow: "0px 4px 6px rgba(54, 54, 54, 0.1)",
          background: "#101105",
          // color: "white",
        }}
      >
        <Container fluid="lg">
          <Navbar.Brand href="/" className="text-white">
            <img src={Logo} alt="LOGO" />
          </Navbar.Brand>
          <Navbar.Toggle
            className="p-1"
            style={{ borderColor: "none", background: "white", color: "none" }}
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            // className="bg-primary"
            style={{
              background: "#101105d1",
            }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
                className="text-white"
              >
                <img src={Logo} alt="LOGO" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <Nav.Link href="/" className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link href="/services" className="text-white">
                  Our Services
                </Nav.Link>
                <Nav.Link href="/about" className="text-white">
                  About Us
                </Nav.Link>
                <Nav.Link href="/contact" className="text-white">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
