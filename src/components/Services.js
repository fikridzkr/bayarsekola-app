import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <h2 className="mb-5">Services</h2>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <img
              src="/images/payment.svg"
              alt="payment"
              width="150px"
              className="mb-3"
            />
            <h4>Easy to payment</h4>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, vitae?
            </p>
          </Col>
          <Col sm={12} md={4}>
            <img
              src="/images/design.svg"
              alt="design"
              width="150px"
              className="mb-3"
            />
            <h4>Simple Display Design</h4>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, vitae?
            </p>
          </Col>
          <Col sm={12} md={4}>
            <img
              src="/images/many.svg"
              alt="methods"
              width="150px"
              className="mb-3"
            />
            <h4>Can Pay at Home</h4>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, vitae?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
