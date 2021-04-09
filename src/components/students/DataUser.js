import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Col, Container, Row, ListGroup } from "react-bootstrap";
const DataUser = ({ user_id }) => {
  const [foto, setFoto] = useState();
  const [nis, setNis] = useState();
  const [nama, setNama] = useState();
  const [kelas, setKelas] = useState();
  const [jurusan, setJurusan] = useState();
  const [jenisKelamin, setJenisKelamin] = useState();

  useEffect(() => {
    Axios.post("http://localhost:3001/student", {
      user_id: user_id,
    })
      .then((res) => {
        setFoto(res.data.dataUser[0].foto);
        setNis(res.data.dataUser[0].nis);
        setNama(res.data.dataUser[0].nama);
        setKelas(res.data.dataUser[0].kelas);
        setJurusan(res.data.dataUser[0].jurusan);
        setJenisKelamin(res.data.dataUser[0].jenis_kelamin);
        console.log(res.data.dataUser[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container>
        <h1 className="text-center mt-4">Data Pribadi</h1>
        <hr />
        <Row className="mt-4">
          <Col md={4} xs={12} sm={12}>
            <Image
              src={`/cache/${foto}`}
              roundedCircle
              width="250px"
              height="250px"
              className="rounded mx-auto d-block mb-3"
            />
          </Col>
          <Col md={8} xs={12} sm={12}>
            <ListGroup>
              <ListGroup.Item>{nis}</ListGroup.Item>
              <ListGroup.Item>{nama}</ListGroup.Item>
              <ListGroup.Item>{kelas}</ListGroup.Item>
              <ListGroup.Item>{jurusan}</ListGroup.Item>
              <ListGroup.Item>{jenisKelamin}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DataUser;
