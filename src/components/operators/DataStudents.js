import React from "react";
import { Container, Table, Pagination } from "react-bootstrap";

const DataStudents = () => {
  const pagination = () => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 3; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }

    return items;
  };
  return (
    <Container className="mt-5">
      <h2>Data Siswa</h2>
      <hr />
      <Table bordered hover responsive>
        <thead className="bg-success text-white">
          <tr>
            <th>No</th>
            <th>Nis</th>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Jurusan</th>
            <th>Pembayaran Terakhir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1223455</td>
            <td>Fikri Dzakir</td>
            <td>12 RPL 1</td>
            <td>RPL</td>
            <td>JULI</td>
          </tr>
        </tbody>
      </Table>
      <Pagination className="justify-content-center">
        <Pagination.First />
        {pagination()}
        <Pagination.Last />
      </Pagination>
    </Container>
  );
};

export default DataStudents;
