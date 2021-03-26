import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
const Header = () => {
  return (
    <div className="bg-success text-white pt-lg ">
      <Container>
        <Row>
          <Col md={6} sm={12} className="my-auto">
            <h2 className="my-4">
              Bayar Sekolah Gak Pake Ribet ?<br></br>BayarSekola Aja !
            </h2>
            <ScrollLink to="services" smooth={true}>
              <span className="btn-services btn-lg mx-auto">Our Services</span>
            </ScrollLink>
          </Col>
          <Col md={6} sm={12} className="my-auto">
            <img
              src="/images/wallet.svg"
              className="mt-5"
              alt="wallet"
              width="350vw"
            />
          </Col>
        </Row>
      </Container>
      <img src="/images/wave-up.svg" alt="wave" />
    </div>
  );
};

export default Header;
