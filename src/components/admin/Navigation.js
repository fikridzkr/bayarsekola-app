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
          <Nav.Link href="/dashboard">Home</Nav.Link>
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
          </NavDropdown>
          <Link to="/dashboard/payment">
            <Nav.Link href="/dashboard/payment">Data Pembayaran</Nav.Link>
          </Link>
          {/* <NavDropdown title="Data Pembayaran" id="basic-nav-dropdown">
            <NavDropdown.Item href="/dashboard/payment">
              Cek Pembayaran Siswa
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/operators">
              Laporan Pembayaran Siswa
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              History Pembayaran Siswa
            </NavDropdown.Item>
          </NavDropdown> */}
          <NavDropdown title="Hai Admin" id="basic-nav-dropdown">
            <Link to="/dashboard/profile">
              <NavDropdown.Item href="/dashboard/profile">
                Profile Settings
              </NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
            <Link to="/">
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
