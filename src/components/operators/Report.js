import React, { useState } from 'react';
import { Button, Container, Table, Form } from 'react-bootstrap';
import ReportDaily from './report/ReportDaily';
import TotalReport from './report/TotalReport';

const Report = () => {
  const [currentView, setCurrentView] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const enabled = startDate && endDate;
  return (
    <>
      {currentView === 0 && (
        <Container className="mt-5">
          <h2>Laporan Pembayaran</h2>
          <hr />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nama Laporan</th>
                <th>Cetak</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Laporan Pembayaran Harian</td>
                <Button
                  size="sm"
                  variant="success"
                  className="m-2"
                  onClick={() => setCurrentView(1)}
                >
                  Cetak
                </Button>
              </tr>
              <tr>
                <td>Laporan Pembayaran</td>
                <td>
                  <Form.Group className="mb-3">
                    <Form.Label>Mulai Tanggal</Form.Label>
                    <Form.Control
                      type="date"
                      size="sm"
                      onChange={(event) => setStartDate(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Sampai Tanggal</Form.Label>
                    <Form.Control
                      type="date"
                      size="sm"
                      onChange={(event) => setEndDate(event.target.value)}
                    />
                  </Form.Group>
                  <Button
                    size="sm"
                    variant="success"
                    className="m-2 "
                    onClick={() => setCurrentView(2)}
                    disabled={!enabled}
                  >
                    Cetak
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      )}

      {currentView === 1 && <ReportDaily />}
      {currentView === 2 && (
        <TotalReport startDate={startDate} endDate={endDate} />
      )}
    </>
  );
};

export default Report;
