import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from "../../auth/Logout";

const Navigation = ({ user }) => {
  return (
    <Navbar bg="success" expand="lg" variant="dark">
      <Navbar.Brand href="">Operators@BayarSekola</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/dashboard">
            <Nav.Link href="/dashboard">Home</Nav.Link>
          </Link>
          <Link to="/dashboard/students">
            <Nav.Link href="/dashboard/students">Data Siswa</Nav.Link>
          </Link>
          <Link to="/dashboard/payment">
            <Nav.Link href="/dashboard/payment">Data Pembayaran Masuk</Nav.Link>
          </Link>
          <Link to="/dashboard/report">
            <Nav.Link href="/dashboard/report">Laporan</Nav.Link>
          </Link>
          {/* <NavDropdown title="Data Pembayaran" id="basic-nav-dropdown">
            <NavDropdown.Item href="/dashboard/payment">
              Data Pembayaran Masuk
            </NavDropdown.Item>
            <NavDropdown.Item href="/dashboard/operators">
              Data yang Sudah Bayar
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Data yang Belum Bayar
            </NavDropdown.Item>
          </NavDropdown> */}
          <NavDropdown title={`Hai ${user}`} id="basic-nav-dropdown">
            <Link to="/dashboard/profile">
              <NavDropdown.Item href="/dashboard/profile">
                Profile Settings
              </NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
            <button className="dropdown-item" onClick={Logout}>
              Logout
            </button>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
