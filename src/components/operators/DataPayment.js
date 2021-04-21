import Axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Table, Button, Spinner } from "react-bootstrap";
import numberWithCommas from "../../utils/NumberWithCommas";
import ModalImage from "react-modal-image";
const DataPayment = () => {
  const [sppSiswa, setSppSiswa] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSuccess = (id, userId, bulanId) => {
    Axios.put("http://localhost:3001/operators/receivepayment", {
      userId: userId,
      bulanId: bulanId,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleFailure = (id, userId, bulanId) => {
    Axios.put("http://localhost:3001/operators/declinepayment", {
      userId: userId,
      bulanId: bulanId,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dataSppSiswa = () => {
    Axios.get("http://localhost:3001/operators/sppsiswa")
      .then((res) => {
        setSppSiswa(res.data.sppSiswa);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    dataSppSiswa();
  }, []);
  return (
    <>
      <Container className="mt-5">
        {loading && (
          <Spinner
            className="d-flex align-items-center"
            animation="border"
            variant="success"
          />
        )}
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
                    <Button
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
      </Container>
    </>
  );
};

export default DataPayment;
