import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Card, Form } from "react-bootstrap";
import Axios from "axios";

const ConfirmPayment = ({ ...props }) => {
  const [nis, setNis] = useState();
  const [nama, setNama] = useState();
  const [kelas, setKelas] = useState();
  const [jurusan, setJurusan] = useState();

  const handleSubmit = () => {
    const data = new FormData();
    data.append("user_id", props.userId);
    data.append("bulan", props.bulanBayar);
    data.append("bukti", props.bukti);
    Axios.put("http://localhost:3001/sppsiswa", data)
      .then(() => {
        props.completeFormStep();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.post("http://localhost:3001/student", {
      user_id: props.userId,
    })
      .then((res) => {
        setNis(res.data.dataUser[0].nis);
        setNama(res.data.dataUser[0].nama);
        setKelas(res.data.dataUser[0].kelas);
        setJurusan(res.data.dataUser[0].jurusan);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              <Form>
                <Row>
                  <Col>
                    <h6>Nis </h6>
                    <h6>Nama </h6>
                    <h6>kelas</h6>
                    <h6>jurusan</h6>
                    <h6>Pembayaran Bulan</h6>
                    <h6>Total Bayar</h6>
                  </Col>
                  <Col>
                    <h6>{nis}</h6>
                    <h6>{nama}</h6>
                    <h6>{kelas}</h6>
                    <h6>{jurusan}</h6>
                    <h6>{props.bulanBayar}</h6>
                    <h6>Rp. 300.000,-</h6>
                    <Button
                      variant="primary"
                      className="float-right mr-5 my-4"
                      onClick={handleSubmit}
                    >
                      Bayar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmPayment;
