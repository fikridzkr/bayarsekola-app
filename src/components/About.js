import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <h2 className="my-5">About Us</h2>
      <Container className="pb-5">
        <Row>
          <Col md={4}>
            <img src="/images/logo.jpg" alt="bayarsekola" width="150px" />
          </Col>
          <Col md={8}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              vero error. Minus perspiciatis blanditiis fugit, nobis cupiditate
              quam vitae. Nisi obcaecati sint, accusantium quibusdam facilis
              quod nihil laudantium exercitationem hic? Repellendus facilis modi
              magni provident voluptatibus minus, alias nostrum sapiente,
              perspiciatis pariatur labore maiores reiciendis unde? Quidem
              laudantium ea cum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
