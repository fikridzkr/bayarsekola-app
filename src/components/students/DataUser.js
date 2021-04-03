import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Col, Container, Row, ListGroup } from "react-bootstrap";
const DataUser = ({ user_id }) => {
  const [dataUser, setDataUser] = useState();
  useEffect(() => {
    Axios.post("http://localhost:3001/student", {
      user_id: user_id,
    })
      .then((res) => {
        setDataUser(res.data.dataUser[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(dataUser);
  return (
    <>
      <Container>
        <h1 className="text-center mt-4">Data Pribadi</h1>
        <hr />
        <Row className="mt-4">
          <Col md={4}>
            <Image
              src={`/cache/${dataUser.foto}`} //masi ada bug di path direktori
              rounded
              width="300px"
              className="mx-auto"
            />
          </Col>
          <Col md={8}>
            <ListGroup>
              <ListGroup.Item>{dataUser.nis}</ListGroup.Item>
              <ListGroup.Item>{dataUser.nama}</ListGroup.Item>
              <ListGroup.Item>{dataUser.kelas}</ListGroup.Item>
              <ListGroup.Item>{dataUser.jurusan}</ListGroup.Item>
              <ListGroup.Item>{dataUser.jenis_kelamin}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DataUser;
