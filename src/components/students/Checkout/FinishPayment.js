import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FinishPayment = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <img
            src="/images/checkout.svg"
            alt=""
            width="250px"
            className="mx-auto d-block"
          />
          <h3 className="text-center my-3 ">
            Pembayaran Anda Sedang Diproses...
          </h3>
          <Link to="/dashboard/bills">
            <Button className="mx-auto d-block" variant="outline-success">
              Kembali Ke dashboard
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default FinishPayment;
