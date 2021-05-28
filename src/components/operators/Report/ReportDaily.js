import React, { useRef, useState, useEffect } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import moment from 'moment';
import numberWithCommas from '../../../utils/NumberWithCommas';

const ReportDaily = () => {
  const [laporanHarian, setLaporanHarian] = useState([]);
  let total = 0;
  const ref = useRef();

  useEffect(() => {
    Axios.get('http://localhost:3001/operators/reportdaily')
      .then((res) => {
        console.log(res.data.laporanHarian);
        setLaporanHarian(res.data.laporanHarian);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div
        class="print"
        ref={ref}
        documentTitle={`Laporan Pembayaran Harian - Tanggal ${moment().format(
          'DD-MM-YYYY',
        )}`}
      >
        <Container className="mt-5">
          <Row>
            <Col>
              <img src="/images/bayarsekola.svg" alt="" width="250px" />
            </Col>
            <Col>
              <h2 className="mt-5">Laporan Pembayaran Harian</h2>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p>Tanggal : {moment().format('DD-MM-YYYY')}</p>
            </Col>
          </Row>

          <Table className="my-3">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Nis</th>
                <th>Kelas</th>
                <th>Tanggal Bayar</th>
                <th>Pembayaran Bulan</th>
                <th>Jumlah</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {laporanHarian.map((values, index) => {
                total += values.jumlah;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{values.nama}</td>
                    <td>{values.nis}</td>
                    <td>{values.kelas}</td>
                    <td>{moment(values.tanggal_bayar).format('DD-MM-YYYY')}</td>
                    <td>{values.bulan}</td>
                    <td>{`Rp. ${numberWithCommas(values.jumlah)}`}</td>
                    <td>{values.keterangan}</td>
                  </tr>
                );
              })}

              <tr>
                <td colspan="6" align="right">
                  TOTAL
                </td>
                <td align="right">
                  <b>{`Rp. ${numberWithCommas(total)}`}</b>
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>

          <table width="100%">
            <tr>
              <td></td>
              <td width="200px">
                <br />
                <p>
                  Bekasi, {moment().format('DD-MM-YYYY')} <br /> Operator,{' '}
                </p>
                <br />
                <br />
                <br />
                <p>__________________________</p>
              </td>
            </tr>
          </table>
        </Container>
      </div>
      <Container className="text-center my-5">
        <ReactToPrint
          documentTitle={`Laporan Pembayaran Harian - Tanggal ${moment().format(
            'DD-MM-YYYY',
          )}`}
          trigger={() => (
            <Button variant="success">Print Laporan Harian</Button>
          )}
          content={() => ref.current}
        />
        <Link to="/dashboard">
          <Button className="ml-5" variant="outline-success">
            Kembali Ke Dashboard
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default ReportDaily;
