import React, { useRef, useState, useEffect } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import moment from 'moment';
import numberWithCommas from '../../../utils/NumberWithCommas';

const TotalReport = () => {
  const ref = useRef();

  return (
    <>
      <div class="print" ref={ref} documentTitle="bayar">
        <Container className="mt-5">
          <Row>
            <Col>
              <img src="/images/bayarsekola.svg" alt="" width="250px" />
            </Col>
            <Col>
              <h2 className="mt-5">Laporan Pembayaran</h2>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p>Tanggal : {moment().format('LLLL')} - 12112 jan 1221</p>
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
              <tr></tr>
            </tbody>
          </Table>
          <span>
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </span>
        </Container>
      </div>
      <Container className="text-center">
        <ReactToPrint
          documentTitle={`Kwitansi Pembayaran Bulan `}
          trigger={() => (
            <Button variant="success">Print Bukti Pembayaran</Button>
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

export default TotalReport;
