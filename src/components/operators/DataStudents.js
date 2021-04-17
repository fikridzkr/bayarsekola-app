import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Pagination, Form, Button } from "react-bootstrap";

const DataStudents = () => {
  const [dataSiswa, setDataSiswa] = useState([]);
  const [search, setSearch] = useState("");
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

  useEffect(() => {
    Axios.get("http://localhost:3001/operators/datasiswa")
      .then((res) => {
        console.log(res.data.siswa);
        setDataSiswa(res.data.siswa);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container className="mt-5">
      <h2>Data Siswa</h2>
      <hr />
      <Form className="form-inline my-4 justify-content-end">
        <Form.Group>
          <Form.Control
            size="sm"
            type="search"
            placeholder="Search"
            className="mr-3"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button variant="outline-success" size="sm" type="submit">
            Search
          </Button>
        </Form.Group>
      </Form>
      <Table bordered hover responsive>
        <thead className="bg-success text-white">
          <tr>
            <th>No</th>
            <th>Nis</th>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Jurusan</th>
          </tr>
        </thead>
        <tbody>
          {dataSiswa
            .filter((values) => {
              if (search === "") {
                return values;
              } else if (
                values.nama.toLowerCase().includes(search.toLowerCase())
              ) {
                return values;
              }
            })
            .map((values, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{values.nis}</td>
                  <td>{values.nama}</td>
                  <td>{values.kelas}</td>
                  <td>{values.jurusan}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Pagination className="justify-content-center" variant="success">
        <Pagination.First />
        {pagination()}
        <Pagination.Last />
      </Pagination>
    </Container>
  );
};

export default DataStudents;
