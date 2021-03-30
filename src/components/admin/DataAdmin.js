import React from "react";
import { Button, Table, Badge } from "react-bootstrap";

const DataAdmin = () => {
  return (
    <div className="m-5">
      <h2>Data Admin BayarSekola</h2>
      <hr />
      <Button variant="outline-success" className="mb-3 float-right">
        Tambah Data
      </Button>
      <Table striped bordered hover responsive>
        <thead className="bg-success text-white">
          <tr>
            <th>No</th>
            <th>Nip</th>
            <th>Nama Admin</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <Badge variant="warning">Edit</Badge>{" "}
              <Badge variant="danger">Delete</Badge>{" "}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DataAdmin;
