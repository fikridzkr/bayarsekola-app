import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

const Home = ({ user }) => {
  const [admin, setAdmin] = useState();
  const [operators, setOperators] = useState();
  const [students, setStudents] = useState();
  const countAdmin = () => {
    Axios.get("http://localhost:3001/admin/countadmin")
      .then((res) => {
        setAdmin(res.data.admin[0].AdminCount);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const countOperators = () => {
    Axios.get("http://localhost:3001/admin/countoperators")
      .then((res) => {
        setOperators(res.data.operators[0].OperatorsCount);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const countStudents = () => {
    Axios.get("http://localhost:3001/admin/countstudents")
      .then((res) => {
        setStudents(res.data.students[0].StudentsCount);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    countAdmin();
    countOperators();
    countStudents();
  }, []);
  return (
    <div>
      <Container>
        <h2 className="mt-3">Selamat Datang {user}</h2>
        <hr />
        <Row className="mt-5">
          <Col>
            <Card bg="primary" text="white" style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title> Total Admin </Card.Title>
                <Card.Text>{admin} Admin</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="warning" text="white" style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title> Total Operator </Card.Title>
                <Card.Text>{operators} Operators</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="danger" text="white" style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title> Total Siswa </Card.Title>
                <Card.Text>{students} Siswa</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
