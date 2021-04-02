import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

const Payment = () => {
  return (
    <div>
      <Container className="mt-5">
        <Card style={{ width: "50%" }} className="mx-auto">
          <Card.Body>
            <h3>Bayar SPP</h3>
            <hr />
            <Form>
              <Form.Group>
                <Form.Label>Bayar Hingga</Form.Label>
                <Form.Control as="select" custom>
                  <option>Juli 2021</option>
                  <option>Agustus 2021</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.File label="Upload Bukti Pembayaran" />
              </Form.Group>
              <Button variant="outline-success"> Bayar </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Payment;
