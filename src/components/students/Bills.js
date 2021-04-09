import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Bills = ({ user_id }) => {
  const [dataSppSiswa, setDataSppSiswa] = useState([]);
  useEffect(() => {
    Axios.post("http://localhost:3001/bills/user", { user_id: user_id })
      .then((res) => {
        console.log(res.data.sppSiswa);
        setDataSppSiswa(res.data.sppSiswa);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Container className="mt-5">
        <h3>Tagihan SPP Anda</h3>
        <hr className="my-3" />
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>No</th>
              <th>Bulan</th>
              <th>Tanggal Bayar</th>
              <th>Jumlah</th>
              <th>Keterangan</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataSppSiswa.map((values, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{values.bulan}</td>
                  <td>{values.tanggal_bayar ? values.tanggal_bayar : `-`}</td>
                  <td>{values.jumlah}</td>
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
                  <td>
                    {values.tanggal_bayar === null ? (
                      <Link to="/dashboard/payment">
                        <Button variant="primary" size="sm">
                          Bayar
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="success" size="sm">
                        Cetak Bukti
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Bills;
