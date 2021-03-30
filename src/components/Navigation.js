import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div id="home">
      <Navbar bg="white" expand="lg" variant="light" className="shadow">
        <Container fluid>
          <Navbar.Brand>
            <img src="/images/logo.svg" alt="bayarsekola" width="150vw" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-right text-lg">
              <ScrollLink to="home" smooth={true}>
                <Nav.Link href="/" className="px-3">
                  HOME
                </Nav.Link>
              </ScrollLink>
              <ScrollLink to="services" smooth={true}>
                <Nav.Link href="/" className="px-3">
                  SERVICES
                </Nav.Link>
              </ScrollLink>
              <ScrollLink to="about" smooth={true}>
                <Nav.Link href="/" className="px-3">
                  ABOUT US
                </Nav.Link>
              </ScrollLink>
            </Nav>
            <Link to="/login" exact className="btn btn-outline-success ml-4">
              Login
            </Link>
            <Link to="/register" exact className="btn btn-success ml-4">
              Register
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
