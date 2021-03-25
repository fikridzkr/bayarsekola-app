import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
const Navigation = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" variant="light" className="shadow">
        <Container fluid>
          <Navbar.Brand href="#home">BayarSekola</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-right text-lg">
              <Nav.Link href="#home" className="px-3 ">
                HOME
              </Nav.Link>
              <Nav.Link href="#link" className="px-3">
                SERVICES
              </Nav.Link>
              <Nav.Link href="#link" className="px-3">
                ABOUT US
              </Nav.Link>
            </Nav>
            <a href="/login" className="btn btn-outline-success ml-4">
              Login
            </a>
            <a href="/login" className="btn btn-success ml-4">
              Register
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
