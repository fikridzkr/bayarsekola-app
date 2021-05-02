import Axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Table, Button, Form, Pagination } from "react-bootstrap";
import numberWithCommas from "../../utils/NumberWithCommas";
import ModalImage from "react-modal-image";
const DataPayment = () => {
  const [sppSiswa, setSppSiswa] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const pagination = () => {
    let active = 1;
    let items = [];
    for (
      let number = 1;
      number <= Math.ceil(sppSiswa.length / postsPerPage);
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
  useEffect(() => {
    dataSppSiswa();
  }, [sppSiswa]);

  function handleSuccess(id, userId, bulanId) {
    Axios.put("http://localhost:3001/operators/receivepayment", {
      userId: userId,
      bulanId: bulanId,
    }).then(() => {
      setSppSiswa(sppSiswa);
    });
  }
  const handleFailure = (siswaId, userId, bulanId) => {
    Axios.put("http://localhost:3001/operators/declinepayment", {
      userId: userId,
      bulanId: bulanId,
    })
      .then(() => {
        setSppSiswa(sppSiswa);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dataSppSiswa = () => {
    Axios.get("http://localhost:3001/operators/sppsiswa")
      .then((res) => {
        setSppSiswa(res.data.sppSiswa);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get Current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sppSiswa.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (number) => setCurrentPage(number);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);
  return (
    <>
      <Container className="mt-5">
        <h2>Data Pembayaran Masuk</h2>
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
              className="float-right "
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
                      <Button
                        className="mb-2"
                        variant="success"
                        size="sm"
                        onClick={() =>
                          handleSuccess(
                            values.id,
                            values.user_id,
                            values.bulan_id
                          )
                        }
                      >
                        Terima
                      </Button>{" "}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          handleFailure(
                            values.id,
                            values.user_id,
                            values.bulan_id
                          );
                        }}
                      >
                        Tolak
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        {sppSiswa.length === 0 && (
          <h5 className="text-center">Tidak ada pembayaran yang masuk</h5>
        )}

        <Pagination className="justify-content-center" variant="success">
          <Pagination.First onClick={() => prevPage()} />
          {pagination()}
          <Pagination.Last onClick={() => nextPage()} />
        </Pagination>
      </Container>
    </>
  );
};

export default DataPayment;
