import React from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";

const ConfirmPayment = () => {
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
        <Col md={8}>
          <Card className="mx-auto">
            <Card.Body>
              <Card.Title>
                <h3>Ringkasan Pembayaran</h3>
                <hr />
              </Card.Title>
              <Row>
                <Col xs={6}>
                  <h6>Nis </h6>
                  <h6>Nama </h6>
                  <h6>kelas</h6>
                  <h6>jurusan</h6>
                  <h6>Pembayaran Bulan</h6>
                  <h6>Total Bayar</h6>
                </Col>
                <Col xs={6}>
                  <h6>181910191</h6>
                  <h6>M Fikri Dzakir</h6>
                  <h6>XII RPL 1</h6>
                  <h6>RPL</h6>
                  <h6>JULI</h6>
                  <h6>Rp. 300000</h6>
                  <Button
                    variant="primary"
                    className="float-right mr-5 my-4"
                    size="sm"
                  >
                    Bayar
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmPayment;
