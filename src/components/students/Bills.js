import React from "react";
import { Container, Table, Button, ButtonGroup } from "react-bootstrap";
import Navigation from "./Navigation";

const Bills = () => {
  return (
    <div>
      <Container className="mt-5">
        <h3>Tagihan SPP Anda</h3>
        <hr className="my-3" />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>No Bayar</th>
              <th>Bulan</th>
              <th>Jatuh Tempo</th>
              <th>Tanggal Bayar</th>
              <th>Jumlah</th>
              <th>Keterangan</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <ButtonGroup size="sm">
                  <Button className="btn-success">Cetak Bukti</Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Bills;
