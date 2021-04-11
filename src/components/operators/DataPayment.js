import React from "react";
import { Container } from "react-bootstrap";
import { Table, Badge } from "react-bootstrap";

const DataPayment = () => {
  return (
    <>
      <Container className="mt-3">
        <h2>Data Pembayaran yang Masuk</h2>
        <hr />
        <h5>Cek Status Pembayaran Siswa</h5>
        <Table striped bordered hover responsive>
          <thead className="bg-success text-white">
            <tr>
              <th>No</th>
              <th>Nis</th>
              <th>Nama Siswa</th>
              <th>Kelas</th>
              <th>Bukti Pembayaran</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <Badge variant="success">Terima Pembayaran</Badge>{" "}
                <Badge variant="danger">Tolak Pembayaran</Badge>{" "}
                <Badge variant="primary">Sudah bayaran</Badge>{" "}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default DataPayment;
