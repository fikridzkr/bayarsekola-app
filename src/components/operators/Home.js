import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  FormControl,
  Button,
  Card,
  Badge,
  Table,
} from "react-bootstrap";
import ModalImage from "react-modal-image";
import moment from "moment";
import numberWithCommas from "../../utils/NumberWithCommas";
import swal from "sweetalert";

const Home = ({ user }) => {
  const [valueNis, setValueNis] = useState();
  const [userId, setUserId] = useState();
  const [dataSiswa, setDataSiswa] = useState();
  const [sppSiswa, setSppSiswa] = useState([]);
  const handleClick = () => {
    Axios.post("http://localhost:3001/searchnis/datasiswa", {
      valueNis: valueNis,
    })
      .then((res) => {
        setDataSiswa(res.data.dataSiswa[0]);
        setUserId(res.data.dataSiswa[0].user_id);
      })
      .catch((err) => console.log(err));

    if (!dataSiswa) {
      return swal({
        title: "Data Not Found",
        text: "Make sure nis is correct!",
        icon: "error",
        button: "Okay",
      });
    }
  };

  useEffect(() => {
    Axios.post("http://localhost:3001/searchnis/sppsiswa", {
      userId: userId,
    })
      .then((res) => {
        setSppSiswa(res.data.sppSiswa);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

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
              <FormControl
                type="number"
                placeholder="Search"
                className="mr-4 "
                onChange={(event) => setValueNis(event.target.value)}
              />
              <Button
                variant="outline-success"
                className="mt-3"
                onClick={handleClick}
              >
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        {dataSiswa ? (
          <div>
            <Card className="mt-5">
              <Card.Header className="bg-success text-white">
                Biodata Siswa
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <h6>Nis : {dataSiswa.nis}</h6>
                  <h6>Nama : {dataSiswa.nama}</h6>
                  <h6>Kelas : {dataSiswa.kelas}</h6>
                  <h6>Jurusan : {dataSiswa.jurusan}</h6>
                  <h6>Jenis Kelamin : {dataSiswa.jenis_kelamin}</h6>
                </Card.Text>
              </Card.Body>
            </Card>

            <h3 className="mt-5">Tagihan SPP Siswa</h3>
            <hr className="my-3" />
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Bulan</th>
                  <th>Tanggal Bayar</th>
                  <th>Jumlah</th>
                  <th>Bukti Pembayaran</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {sppSiswa.map((values, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        {values.bulan} {values.tahun}
                      </td>
                      <td>
                        {values.tanggal_bayar
                          ? moment(values.tanggal_bayar).format("LL")
                          : `-`}
                      </td>
                      <td>Rp. {numberWithCommas(values.jumlah)}</td>
                      <td>
                        {values.bukti_pembayaran ? (
                          <div style={{ width: "50px" }}>
                            <ModalImage
                              small={`/cache/${values.bukti_pembayaran}`}
                              large={`/cache/${values.bukti_pembayaran}`}
                              alt={`Bukti Pembayaran bulan ${values.bulan}`}
                            />
                          </div>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td>
                        {values.keterangan === "Sudah Bayar" && (
                          <Badge variant="success">{values.keterangan}</Badge>
                        )}
                        {values.keterangan === "Sedang Diproses" && (
                          <Badge variant="warning">{values.keterangan}</Badge>
                        )}
                        {values.keterangan === "Belum Bayar" && (
                          <Badge variant="danger">{values.keterangan}</Badge>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default Home;
