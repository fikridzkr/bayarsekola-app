import React from "react";
import { Image, Col, Container, Row, ListGroup } from "react-bootstrap";
const DataUser = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mt-4">Data Pribadi</h1>
        <hr />
        <Row className="mt-4">
          <Col md={4}>
            <Image
              src="images/icon.png"
              roundedCircle
              width="350px"
              className="mx-auto"
            />
          </Col>
          <Col md={8}>
            <ListGroup>
              <ListGroup.Item>181910191</ListGroup.Item>
              <ListGroup.Item>M Fikri Dzakir</ListGroup.Item>
              <ListGroup.Item>12 RPL 1</ListGroup.Item>
              <ListGroup.Item>Rekayasa Perangkat Lunak</ListGroup.Item>
              <ListGroup.Item>Laki-Laki</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DataUser;
