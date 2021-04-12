import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = ({ user }) => {
  return (
    <>
      <Navbar bg="white" expand="lg" variant="light" className="shadow">
        <Container fluid>
          <Navbar.Brand>
            <img src="/images/logo.svg" alt="bayarsekola" width="150vw" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-right text-lg">
              <Link to="/dashboard">
                <Nav.Link href="/dashboard" className="px-3">
                  HOME
                </Nav.Link>
              </Link>
              <Link to="/dashboard/bills">
                <Nav.Link href="/dashboard/bills" className="px-3">
                  TAGIHAN SPP
                </Nav.Link>
              </Link>
              <Link to="/dashboard/payment">
                <Nav.Link href="/dashboard/payment" className="px-3">
                  BAYAR SPP
                </Nav.Link>
              </Link>
            </Nav>
            <Dropdown className="ml-4 mr-5">
              <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                {`Hai ${user}`}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to="/dashboard/profile">
                  <Dropdown.Item href="/dashboard/profile">
                    Profile Settings
                  </Dropdown.Item>
                </Link>
                <Dropdown.Item href="/">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
