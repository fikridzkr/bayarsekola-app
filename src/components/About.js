import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <h2 className="my-5">About Us</h2>
      <Container>
        <Row>
          <Col md={4}>1</Col>
          <Col md={8}>2</Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
