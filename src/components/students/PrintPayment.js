import React, { useRef, useState, useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";
import Axios from "axios";
import moment from "moment";
import numberWithCommas from "../../utils/NumberWithCommas";

const PrintPayment = ({ userId, index, dataSppSiswa }) => {
  const [nis, setNis] = useState();
  const [nama, setNama] = useState();
  const [kelas, setKelas] = useState();
  const [jurusan, setJurusan] = useState();
  const sppSiswa = dataSppSiswa[index];
  const ref = useRef();
  useEffect(() => {
    Axios.post("http://localhost:3001/student", {
      user_id: userId,
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
  }, [userId]);

  return (
    <>
      <div class="print" ref={ref} documentTitle="bayar">
        <Container className="mt-5">
          <Row>
            <Col>
              <img src="/images/bayarsekola.svg" alt="" width="250px" />
            </Col>
            <Col>
              <h2 className="mt-5">Kwitansi Pembayaran</h2>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <h6>Nis : {nis}</h6>
              <h6>Nama : {nama}</h6>
              <h6>Kelas : {kelas}</h6>
              <h6>Jurusan : {jurusan}</h6>
              <h6>Tanggal : {moment(sppSiswa.tanggal_bayar).format("LL")}</h6>
            </Col>
            <Col></Col>
          </Row>

          <Table className="my-3">
            <thead>
              <tr>
                <th>No</th>
                <th>Pembayaran Bulan</th>
                <th>Jumlah</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{sppSiswa.bulan}</td>
                <td>Rp. {numberWithCommas(sppSiswa.jumlah)}</td>
                <td>{sppSiswa.keterangan}</td>
              </tr>
            </tbody>
          </Table>
          <span>
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </span>
        </Container>
      </div>
      <Container className="text-center">
        <ReactToPrint
          documentTitle={`Kwitansi Pembayaran Bulan ${sppSiswa.bulan}`}
          trigger={() => (
            <Button variant="success">Print Bukti Pembayaran</Button>
          )}
          content={() => ref.current}
        />
        <Link to="/dashboard">
          <Button className="ml-5" variant="outline-success">
            Kembali Ke Dashboard
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default PrintPayment;
