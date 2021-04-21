import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  Pagination,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";

const DataStudents = () => {
  const [dataSiswa, setDataSiswa] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const pagination = () => {
    let active = 1;
    let items = [];
    for (
      let number = 1;
      number <= Math.ceil(dataSiswa.length / postsPerPage);
      number++
    ) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return items;
  };

  // Get Current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataSiswa.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (number) => setCurrentPage(number);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  useEffect(() => {
    setLoading(true);
    Axios.get("http://localhost:3001/operators/datasiswa")
      .then((res) => {
        setDataSiswa(res.data.siswa);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="mt-5">
      {loading && (
        <Spinner
          className="d-flex align-items-center"
          animation="border"
          variant="success"
        />
      )}
      <h2>Data Siswa</h2>
      <hr />
      <Form className="form-inline my-3 justify-content-end">
        <Form.Group>
          <Form.Control
            size="sm"
            type="search"
            placeholder="Search"
            className="mr-3"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button
            variant="outline-success"
            size="sm"
            type="submit"
            className="float-right mt-3"
          >
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
            <th>Jenis Kelamin</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts
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
                  <td>{values.jenis_kelamin}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Pagination className="justify-content-center" variant="success">
        <Pagination.First onClick={() => prevPage()} />
        {pagination()}
        <Pagination.Last onClick={() => nextPage()} />
      </Pagination>
    </Container>
  );
};

export default DataStudents;
