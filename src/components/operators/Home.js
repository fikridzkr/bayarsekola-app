import React from "react";
import {
  Col,
  Container,
  Row,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Home = ({ user }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2 className="mt-3">Selamat Datang {user}</h2>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={8}>
            <h4 className="my-2">Cari Data Siswa Berdasarkan Nis</h4>
            <Form>
              <FormControl type="text" placeholder="Search" className="mr-4 " />
              <Button variant="outline-success" className="mt-3">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
