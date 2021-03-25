import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
const Header = () => {
  return (
    <div className="bg-success text-white pt-lg ">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <h2 className="my-4">
              Bayar Sekolah Gak Pake Ribet ?<br></br>BayarSekola Aja !
            </h2>
            <span className="btn-services btn-lg mx-auto">Our Services</span>
          </Col>
          <Col md={6} sm={12}>
            <img
              src="/images/wallet.svg"
              className="mt-5"
              alt="wallet"
              width="300vw"
            />
          </Col>
        </Row>
      </Container>
      <img src="/images/wave-up.svg" alt="wave" />
    </div>
  );
};

export default Header;
