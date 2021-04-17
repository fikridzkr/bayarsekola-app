import React from "react";
import { Container } from "react-bootstrap";
import { Table, Badge } from "react-bootstrap";

const DataPayment = () => {
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
            <tr>
              <td>1</td>
              <td>123456</td>
              <td>Ronaldo</td>
              <td>12 rpl 1</td>
              <td>Agustus</td>
              <td>12 April 2021</td>
              <td>300000</td>
              <td>foto</td>
              <td>
                <Badge variant="success">Terima Pembayaran</Badge>
                <br />
                <Badge variant="danger">Tolak Pembayaran</Badge>
                <Badge variant="primary">Sudah bayaran</Badge>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default DataPayment;
