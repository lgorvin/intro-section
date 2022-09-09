import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar
      className="almostWhiteBg"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Container>
        <Navbar.Brand
          className="almostBlack xl:ml-[-70px] font-bold text-6xl"
          href="#home"
        >
          snap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-8">
            <NavDropdown
              className="mr-8 text-md"
              title="Features"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="mr-8 text-md"
              title="Company"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="almostBlack mr-8 text-md" href="#careers">
              Careers
            </Nav.Link>
            <Nav.Link className="almostBlack text-md" href="#about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="mr-8 text-md" href="#deets">
              Login
            </Nav.Link>
            <Nav.Link
              href="#deets"
              className="text-md lg:border-2 border-gray-800 lg:px-4 rounded-2xl"
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
