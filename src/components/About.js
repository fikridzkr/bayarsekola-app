import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <h2 className="my-5">About Us</h2>
      <Container className="pb-5">
        <Row>
          <Col className="mx-auto">
            <img src="/images/logo.svg" alt="bayarsekola" width="250px" />
          </Col>
          <Col>
            <p>
              BayarSekola merupakan startup baru yang bergerak di bidang
              pendidikan. BayarSekola memudahkan sekolah dan para siswanya dalam
              melakukan pembayaran SPP (Sumbangan Pembinaan Pendidikan) secara
              online.
              <br />
              <br />
              Dengan menggunakan aplikasi ini pembayaran spp dapat dilakukan
              dimanapun dan kapanpun, tunggu apalagi ayo
              <a href="/register"> daftar sekarang</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
