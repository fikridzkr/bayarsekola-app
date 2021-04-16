import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Navbar bg="success" expand="lg" variant="dark">
      <Navbar.Brand href="">Admin@BayarSekola</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/dashboard">
            <Nav.Link href="/dashboard">Home</Nav.Link>
          </Link>
          <NavDropdown title="Data Users" id="basic-nav-dropdown">
            <Link to="/dashboard/students">
              <NavDropdown.Item href="/dashboard/students">
                Data Siswa
              </NavDropdown.Item>
            </Link>
            <Link to="/dashboard/admin">
              <NavDropdown.Item href="/dashboard/admin">
                Data Admin
              </NavDropdown.Item>
            </Link>
            <Link to="/dashboard/operators">
              <NavDropdown.Item href="/dashboard/operators">
                Data Operator
              </NavDropdown.Item>
            </Link>
          </NavDropdown>
          <NavDropdown title="Hai Admin" id="basic-nav-dropdown">
            <Link to="/dashboard/profile">
              <NavDropdown.Item href="/dashboard/profile">
                Profile Settings
              </NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
