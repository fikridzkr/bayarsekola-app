import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Badge, Button } from "react-bootstrap";
import ModalImage from "react-modal-image";
import moment from "moment";
import numberWithCommas from "../../utils/NumberWithCommas";
import PrintPayment from "./PrintPayment";
const Bills = ({ user_id }) => {
  const [dataSppSiswa, setDataSppSiswa] = useState([]);
  const [printSubmitted, setPrintSubmitted] = useState(false);
  const [index, setIndex] = useState();
  const handlePrint = () => {
    setPrintSubmitted(true);
  };
  const print = () => {
    Axios.post("htpp://localhost:3001/print");
  };
  useEffect(() => {
    Axios.post("http://localhost:3001/bills/user", { user_id: user_id })
      .then((res) => {
        console.log(res.data.sppSiswa);
        setDataSppSiswa(res.data.sppSiswa);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user_id]);
  return (
    <>
      {!printSubmitted ? (
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
                <th>Bukti Pembayaran</th>
                <th>Keterangan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataSppSiswa.map((values, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      {values.bulan} {values.tahun}
                    </td>
                    <td>
                      {values.tanggal_bayar
                        ? moment(values.tanggal_bayar).format("LL")
                        : `-`}
                    </td>
                    <td>Rp. {numberWithCommas(values.jumlah)}</td>
                    <td>
                      {values.bukti_pembayaran ? (
                        <div style={{ width: "50px" }}>
                          <ModalImage
                            small={`/cache/${values.bukti_pembayaran}`}
                            large={`/cache/${values.bukti_pembayaran}`}
                            alt={`Bukti Pembayaran bulan ${values.bulan}`}
                          />
                        </div>
                      ) : (
                        "-"
                      )}
                    </td>
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
                      {values.keterangan === "Belum Bayar" ||
                      values.keterangan === "Sedang Diproses" ? (
                        " - "
                      ) : (
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => {
                            setIndex(index);
                            handlePrint();
                          }}
                        >
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
      ) : (
        <PrintPayment
          userId={user_id}
          index={index}
          dataSppSiswa={dataSppSiswa}
        />
      )}
    </>
  );
};

export default Bills;
