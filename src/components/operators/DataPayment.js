import Axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Table, Badge } from "react-bootstrap";
import numberWithCommas from "../../utils/NumberWithCommas";
import ModalImage from "react-modal-image";
const DataPayment = () => {
  const [sppSiswa, setSppSiswa] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/operators/sppsiswa")
      .then((res) => {
        console.log(res.data.sppSiswa);
        setSppSiswa(res.data.sppSiswa);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container className="mt-5">
        <h2>Data Pembayaran Masuk</h2>
        <hr />
        <Table bordered hover responsive>
          <thead className="bg-success text-white">
            <tr>
              <th>No</th>
              <th>Nis</th>
              <th>Nama Siswa</th>
              <th>Kelas</th>
              <th>Bulan</th>
              <th>Tanggal Bayar</th>
              <th>Jumlah</th>
              <th>Bukti Pembayaran</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sppSiswa.map((values, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>dummy123</td>
                  <td>Dummyy</td>
                  <td>Dummy</td>
                  <td>
                    {values.bulan} {values.tahun}
                  </td>
                  <td>{moment(values.tanggal_bayar).format("LL")}</td>
                  <td>Rp. {numberWithCommas(values.jumlah)}</td>
                  <td>
                    <div style={{ width: "50px" }}>
                      <ModalImage
                        small={`/cache/${values.bukti_pembayaran}`}
                        large={`/cache/${values.bukti_pembayaran}`}
                        alt={`Bukti Pembayaran bulan ${values.bulan}`}
                      />
                    </div>
                  </td>
                  <td>
                    <Badge variant="success">Terima Pembayaran</Badge>
                    <br />
                    <Badge variant="danger">Tolak Pembayaran</Badge>
                    <Badge variant="primary">Sudah bayaran</Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default DataPayment;
